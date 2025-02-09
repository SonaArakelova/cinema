import { useState, useEffect } from "react";

export const useLocalStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const localStorageValue = localStorage.getItem(key);
    return localStorageValue ? JSON.parse(localStorageValue) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};