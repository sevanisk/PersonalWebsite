import { useState, useCallback } from 'react';

export function usePopupManager() {
  const [popups, setPopups] = useState([]);

  const createPopup = useCallback((config) => {
    const id = Date.now();
    setPopups((prev) => [
      ...prev,
      {
        id,
        ...config,
      },
    ]);
    return id;
  }, []);

  const closePopup = useCallback((id) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setPopups([]);
  }, []);

  return { popups, createPopup, closePopup, closeAll };
}
