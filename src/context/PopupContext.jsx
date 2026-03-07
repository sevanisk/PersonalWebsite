import { createContext, useContext } from 'react';
import PopupContainer from '../components/PopupContainer';
import { usePopupManager } from '../hooks/usePopupManager';

const PopupContext = createContext(null);

export function PopupProvider({ children }) {
  const popupManager = usePopupManager();

  return (
    <PopupContext.Provider value={popupManager}>
      {children}
      <PopupContainer
        popups={popupManager.popups}
        onClosePopup={popupManager.closePopup}
      />
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }

  return context;
}
