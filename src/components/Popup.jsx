import { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../hooks/useResponsive';
import './Popup.css';

export default function Popup({
  id,
  title = 'Window',
  children,
  initialX = 100,
  initialY = 100,
  width = 400,
  height = 300,
  onClose,
  zIndex = 1000,
}) {
  const { isMobile } = useResponsive();
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

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
    setPosition({
      x: e.clientX - dragOffset.x,
      y: e.clientY - dragOffset.y,
    });
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

  return (
    <div
      ref={windowRef}
      className={`popup-window ${isMobile ? 'popup-mobile' : 'popup-desktop'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${width}px`,
        height: `${height}px`,
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
