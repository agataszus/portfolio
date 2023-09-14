import { useEffect, useState } from "react";

export const DESKTOP = "desktop";
export const DESKTOP_MID = "desktop-mid";
export const DESKTOP_SMALL = "desktop-small";
export const TABLET = "tablet";
export const MOBILE = "mobile";

export const useMediaQueries = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if ("innerWidth" in window) {
        setWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width <= 767) {
    return MOBILE;
  }

  if (width <= 1023) {
    return TABLET;
  }

  if (width <= 1365) {
    return DESKTOP_SMALL;
  }

  if (width <= 1919) {
    return DESKTOP_MID;
  }

  return DESKTOP;
};
