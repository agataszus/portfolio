import { RefObject } from "react";
import { DESKTOP, useMediaQueries } from "./useMediaQueries";

export const useProjectsOnArrowsClickScroll = (ref: RefObject<HTMLDivElement>) => {
  const mediaQuery = useMediaQueries();

  return (direction: "left" | "right") => {
    const clientWidth = ref.current?.clientWidth;
    const scrollLeft = ref.current?.scrollLeft;
    const elementWidth = mediaQuery === DESKTOP ? 450 : 368;

    if (clientWidth === undefined || scrollLeft === undefined) return;

    const scrollToLeftOffset =
      direction === "right"
        ? Math.floor(scrollLeft / elementWidth + 1) * elementWidth
        : Math.ceil(scrollLeft / elementWidth - 1) * elementWidth;

    ref.current?.scrollTo({
      behavior: "smooth",
      left: scrollToLeftOffset,
    });
  };
};
