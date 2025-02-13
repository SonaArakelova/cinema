import { useEffect } from "react";

export const useKey = (key, callback) => {
  const handleKeyDown = (event) => {
    if (event.key.toLowerCase() === key.toLowerCase()) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};