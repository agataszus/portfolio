import { useEffect } from "react";

export const useScrollLock = (isScrollLocked: boolean) => {
  useEffect(() => {
    const unlockScroll = () => {
      document.body.style.overflowY = "scroll";
      document.body.style.touchAction = "unset";
    };

    const lockScroll = () => {
      document.body.style.overflowY = "hidden";
      document.body.style.touchAction = "none";
    };

    if (isScrollLocked) {
      lockScroll();
      return;
    }

    unlockScroll();
    return unlockScroll;
  }, [isScrollLocked]);
};
