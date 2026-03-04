import Popup from './Popup';
import { useResponsive } from '../hooks/useResponsive';

export default function PopupContainer({ popups, onClosePopup }) {
  const { isMobile } = useResponsive();

  return (
    <>
      {popups.map((popup, index) => {
        // Calculate default dimensions based on device type
        const defaultWidth = isMobile ? Math.min(400, window.innerWidth - 20) : popup.width || 400;
        const defaultHeight = isMobile ? 'auto' : popup.height || 300;
        
        // For mobile, ignore offset positioning; for desktop, stagger windows
        const defaultX = isMobile ? 50 : popup.initialX || 50 + index * 30;
        const defaultY = isMobile ? 50 : popup.initialY || 50 + index * 30;

        return (
          <Popup
            key={popup.id}
            id={popup.id}
            title={popup.title}
            initialX={defaultX}
            initialY={defaultY}
            width={defaultWidth}
            height={defaultHeight}
            zIndex={1000 + index}
            onClose={onClosePopup}
          >
            {popup.children}
          </Popup>
        );
      })}
    </>
  );
}
