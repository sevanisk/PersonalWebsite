import Popup from './Popup';

export default function PopupContainer({ popups, onClosePopup }) {
  return (
    <>
      {popups.map((popup, index) => (
        <Popup
          key={popup.id}
          id={popup.id}
          title={popup.title}
          initialX={popup.initialX || 50 + index * 30}
          initialY={popup.initialY || 50 + index * 30}
          width={popup.width || 400}
          height={popup.height || 300}
          zIndex={1000 + index}
          onClose={onClosePopup}
        >
          {popup.children}
        </Popup>
      ))}
    </>
  );
}
