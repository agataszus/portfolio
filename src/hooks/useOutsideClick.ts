import { useEffect, useLayoutEffect, useRef } from "react";

export const useOutsideClick = (callback: (event: MouseEvent | TouchEvent) => void) => {
  const ref = useRef<HTMLDivElement>(null);
  const refCallback = useRef(callback);

  useLayoutEffect(() => {
    refCallback.current = callback;
  });

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      const element = ref.current;
      if (element && !element.contains(event.target as Node)) {
        refCallback.current(event);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return ref;
};
