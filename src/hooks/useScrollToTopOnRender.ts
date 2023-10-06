import { useWindowScroll } from "@mantine/hooks";
import { useCallback, useEffect } from "react";

export const useScrollToTopOnRender = () => {
  const [, scrollTo] = useWindowScroll();

  const scrollToTop = useCallback(() => scrollTo({ y: 0 }), [scrollTo]);

  useEffect(() => scrollToTop(), [scrollToTop]);
};
