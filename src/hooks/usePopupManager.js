import { useState, useCallback, useRef } from 'react';

export function usePopupManager() {
  const [popups, setPopups] = useState([]);
  const nextIdRef = useRef(0);

  const getPopupId = useCallback(() => {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }

    nextIdRef.current += 1;
    return `popup-${Date.now()}-${nextIdRef.current}`;
  }, []);

  const createPopup = useCallback((config) => {
    const id = getPopupId();
    setPopups((prev) => [
      ...prev,
      {
        id,
        ...config,
      },
    ]);
    return id;
  }, [getPopupId]);

  const closePopup = useCallback((id) => {
    setPopups((prev) => prev.filter((popup) => popup.id !== id));
  }, []);

  const closeAll = useCallback(() => {
    setPopups([]);
  }, []);

  return { popups, createPopup, closePopup, closeAll };
}
