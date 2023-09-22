import { useViewportSize } from "@mantine/hooks";

export const DESKTOP = "desktop";
export const DESKTOP_MID = "desktop-mid";
export const DESKTOP_SMALL = "desktop-small";
export const TABLET = "tablet";
export const MOBILE = "mobile";

export const useMediaQueries = () => {
  const { width } = useViewportSize();

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
