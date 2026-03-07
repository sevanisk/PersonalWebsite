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
  const { isMobile, viewportWidth, viewportHeight } = useResponsive();

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

        const fallbackXFraction = isMobile
          ? 0.03
          : clamp((50 + index * 30) / Math.max(1, viewportWidth), 0, 1);
        const fallbackYFraction = isMobile
          ? 0.05
          : clamp((50 + index * 30) / Math.max(1, viewportHeight), 0, 1);

        const xFraction = toFraction(
          popup.xPercent,
          fallbackXFraction,
        );
        const yFraction = toFraction(
          popup.yPercent,
          fallbackYFraction,
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
