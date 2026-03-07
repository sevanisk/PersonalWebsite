import { createContext, useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import PopupContainer from '../components/PopupContainer';
import { usePopupManager } from '../hooks/usePopupManager';

const PopupContext = createContext(null);

export function PopupProvider({ children }) {
  const popupManager = usePopupManager();
  const location = useLocation();
  const hasMountedRef = useRef(false);

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    popupManager.closeAll();
  }, [location.pathname]);

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
