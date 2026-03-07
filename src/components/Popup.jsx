import { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import './Popup.css';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function normalizePercent(value, fallback) {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    return fallback;
  }

  const normalized = value > 1 ? value / 100 : value;
  return clamp(normalized, 0, 1);
}

export default function Popup({
  id,
  title = 'Window',
  children,
  xPercent = 0.03,
  yPercent = 0.05,
  widthPercent = 0.38,
  heightPercent = 0.45,
  onClose,
  zIndex = 1000,
}) {
  const { isMobile, viewportWidth, viewportHeight } = useResponsive();
  const normalizedXPercent = normalizePercent(xPercent, 0.03);
  const normalizedYPercent = normalizePercent(yPercent, 0.05);
  const maxWidth = Math.max(10, viewportWidth - (isMobile ? 16 : 32));
  const maxHeight = Math.max(10, viewportHeight - (isMobile ? 16 : 32));
  const popupWidth = Math.floor(
    clamp(viewportWidth * widthPercent, 10, maxWidth),
  );
  const popupHeight = Math.floor(
    clamp(viewportHeight * heightPercent, 10, maxHeight),
  );

  const [position, setPosition] = useState(() => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }

    return {
      x: Math.floor(normalizedXPercent * window.innerWidth),
      y: Math.floor(normalizedYPercent * window.innerHeight),
    };
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const getPopupDimensions = () => {
    const measuredWidth = windowRef.current?.offsetWidth;
    const measuredHeight = windowRef.current?.offsetHeight;
    const fallbackWidth = popupWidth;
    const fallbackHeight = popupHeight;

    return {
      popupWidth: measuredWidth ?? fallbackWidth,
      popupHeight: measuredHeight ?? fallbackHeight,
    };
  };

  const clampToViewport = (x, y) => {
    const { popupWidth, popupHeight } = getPopupDimensions();
    const maxX = Math.max(0, window.innerWidth - popupWidth);
    const maxY = Math.max(0, window.innerHeight - popupHeight);

    return {
      x: clamp(x, 0, maxX),
      y: clamp(y, 0, maxY),
    };
  };

  const handleMouseDown = (e) => {
    // Disable dragging on mobile
    if (isMobile) return;

    // Don't drag if clicking the close button
    if (e.target.closest('.popup-close-btn')) {
      return;
    }
    // Only drag from the title bar
    if (e.target.closest('.popup-title-bar')) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e) => {
    const nextPosition = clampToViewport(
      e.clientX - dragOffset.x,
      e.clientY - dragOffset.y,
    );
    setPosition(nextPosition);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Set up event listeners for dragging
  useEffect(() => {
    if (!isDragging) return;

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  useEffect(() => {
    if (isMobile) return;

    setPosition({
      x: Math.floor(normalizedXPercent * viewportWidth),
      y: Math.floor(normalizedYPercent * viewportHeight),
    });

    const handleResize = () => {
      setPosition({
        x: Math.floor(normalizedXPercent * window.innerWidth),
        y: Math.floor(normalizedYPercent * window.innerHeight),
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile, popupWidth, popupHeight, normalizedXPercent, normalizedYPercent, viewportWidth, viewportHeight]);

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
          aria-label="Close window"
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
