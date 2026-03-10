import Popup from './Popup';
import { useResponsive } from '../hooks/useResponsive';

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function toFraction(percentValue, fallbackFraction) {
  if (typeof percentValue !== 'number' || Number.isNaN(percentValue)) {
    return fallbackFraction;
  }

  const normalized = percentValue > 1 ? percentValue / 100 : percentValue;
  return clamp(normalized, 0.1, 1);
}

export default function PopupContainer({ popups, onClosePopup }) {
  const { isMobile } = useResponsive();


  return (
    <>
      {popups.map((popup, index) => {
        const widthFraction = toFraction(
          popup.widthPercent,
          isMobile ? 0.94 : 0.38,
        );
        const heightFraction = toFraction(
          popup.heightPercent,
          isMobile ? 0.6 : 0.45,
        );

        const xFraction = toFraction(
          popup.xPercent,
          0.03,
        );
        const yFraction = toFraction(
          popup.yPercent,
          0.03,
        );

        return (
          <Popup
            key={popup.id}
            id={popup.id}
            title={popup.title}
            xPercent={xFraction}
            yPercent={yFraction}
            widthPercent={widthFraction}
            heightPercent={heightFraction}
            onClose={onClosePopup}
            zIndex={1000 + index}
          >
            {popup.children}
          </Popup>
        );
      })}
    </>
  );
}
