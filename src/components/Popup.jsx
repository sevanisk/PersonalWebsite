////////////////////////////////////////////////////////////////////////////////
// Popup.jsx
// The popup window component.
// Provides a draggable and resizable window with a title bar and close button.
////////////////////////////////////////////////////////////////////////////////

// React objects.
import { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';

// Styles.
import './Popup.css';

////////////////////////////////////////////////////////////////////////////////
// Constants.
////////////////////////////////////////////////////////////////////////////////

const MIN_X_PERCENT = 0.01;
const MIN_Y_PERCENT = 0.01;

////////////////////////////////////////////////////////////////////////////////
// Helper functions for clamping and normalizing percentages.
////////////////////////////////////////////////////////////////////////////////

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

// Normalizes a percentage value, treating values greater than 1 as percentages.
function normalizePercent(value, fallback) {
  // Input is not valid, return fallback.
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fallback;
  }

  // Normalize values greater than 1 by treating them as percentages.
  // (e.g., 5 becomes 0.05).
  const normalized = value > 1 ? value / 100 : value;
  return clamp(normalized, 0, 1);
}

////////////////////////////////////////////////////////////////////////////////
// Component definition.
////////////////////////////////////////////////////////////////////////////////

export default function Popup({
  id,                       // Unique identifier for the popup.
  title         = 'Window', // Name to display in the title bar of the popup.
  children,                 // Any children elements to render inside the popup.
  xPercent      = 30,       // Percent of the view width for x pos.
  yPercent      = 5,        // Percent of the view height for y pos.
  widthPercent  = 38,       // Percent of the view width for popup width.
  heightPercent = 45,       // Percent of the view height for popup height.
  onClose,                  // Callback function to handle closing the popup.
  zIndex        = 1000,     // Z-index for the popup.
}) {

  // Gets responsive information about viewport size.
  // TODO: If this is a mobile device, navbar at top of screen?
  const { isMobile } = useResponsive();

  // Calculate the dimensions of the popup.
  const popupWidth = Math.floor(
    clamp(window.innerWidth * widthPercent, 10, window.innerWidth),
  );
  const popupHeight = Math.floor(
    clamp(window.innerHeight * heightPercent, 10, window.innerHeight),
  );

  // Initialize the position of the popup.
  const normalizedXPercent = normalizePercent(xPercent, 0.03);
  const normalizedYPercent = normalizePercent(yPercent, 0.05);
  const [position, setPosition] = useState(() => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }

    return {
      x: Math.floor(normalizedXPercent * window.innerWidth),
      y: Math.floor(normalizedYPercent * window.innerHeight),
    };
  });

  // `isDragging` is true only while the user is actively holding the mouse
  // and dragging the popup from the title bar.
  //
  // `dragOffset` stores how far the mouse is from the popup's top-left corner
  // at the moment dragging starts, so the popup follows the cursor smoothly
  // without snapping its corner directly under the cursor.
  //
  // `windowRef` points to the popup DOM element so we can read its measured
  // width/height and keep the popup clamped inside the viewport.
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  // Find current dimensions of the popup, using measured values if available.
  const getPopupDimensions = () => {
    const measuredWidth = windowRef.current?.offsetWidth;
    const measuredHeight = windowRef.current?.offsetHeight;

    return {
      popupWidth: measuredWidth ?? popupWidth,
      popupHeight: measuredHeight ?? popupHeight,
    };
  };

  // Clamp the popup position to ensure it stays fully within the viewport.
  const clampToViewport = (x, y) => {
    const { popupWidth, popupHeight } = getPopupDimensions();
    const maxX = Math.max(0, window.innerWidth - popupWidth);
    const maxY = Math.max(0, window.innerHeight - popupHeight);

    return {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  };

  // Handle mouse down event to start dragging the popup.
  const handleMouseDown = (e) => {
    // Disable dragging on mobile.
    if (isMobile) return;

    // Don't drag if clicking the close button.
    if (e.target.closest('.popup-close-btn')) {
      return;
    }

    // Only drag from the title bar.
    if (e.target.closest('.popup-title-bar')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  // Handle mouse move event to update the popup position while dragging.
  const handleMouseMove = (e) => {
    const nextPosition = clampToViewport(
      e.clientX - dragOffset.x,
      e.clientY - dragOffset.y,
    );
    setPosition(nextPosition);
  };

  // Handle mouse up event to stop dragging the popup.
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Set up the event listeners for dragging.
  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // Update the popup position when the viewport size changes; only on desktop.
  useEffect(() => {
    if (isMobile) return;

    setPosition({
      x: Math.floor(normalizedXPercent * window.innerWidth),
      y: Math.floor(normalizedYPercent * window.innerHeight),
    });

    const handleResize = () => {
      setPosition({
        x: Math.floor(normalizedXPercent * window.innerWidth),
        y: Math.floor(normalizedYPercent * window.innerHeight),
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, popupWidth, popupHeight,normalizedXPercent,normalizedYPercent]);

  // Render the popup with inline styles for position and size, and appropriate classes.
  return (
    <div
      ref={windowRef}
      className={`popup-window ${isMobile ? 'popup-mobile' : 'popup-desktop'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${popupWidth}px`,
        height: `${popupHeight}px`,
        maxWidth: 'calc(100vw - 16px)',
        maxHeight: 'calc(100dvh - 16px)',
        zIndex: zIndex,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="popup-title-bar">
        <span className="popup-title">{title}</span>
        <button
          className="popup-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.(id);
          }}
        >
          ×
        </button>
      </div>
      <div className="popup-inner">
        <div className="popup-content">
          {children}
        </div>
      </div>
    </div>
  );
}
