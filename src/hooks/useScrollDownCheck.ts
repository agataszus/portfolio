import { useWindowScroll } from "@mantine/hooks";

export const useScrollDownCheck = () => {
  const [scroll] = useWindowScroll();
  const isScrolledDown = scroll.y !== 0;

  return isScrolledDown;
};
