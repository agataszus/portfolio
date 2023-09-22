import { RefObject, useLayoutEffect, useState } from "react";

export const useButtonsDisableCheck = (ref: RefObject<HTMLDivElement>) => {
  const [isLeftDisable, setIsLeftDisable] = useState(true);
  const [isRightDisable, setIsRightDisable] = useState(false);

  const getClientWidth = () => ref.current?.clientWidth ?? 0;
  const getScrollLeft = () => ref.current?.scrollLeft ?? 0;
  const getScrollWidth = () => ref.current?.scrollWidth ?? 0;

  useLayoutEffect(() => {
    const checkButtonsDisable = () => {
      const isLeftDisable = getScrollLeft() === 0;
      setIsLeftDisable(isLeftDisable);

      const isRightDisable = getScrollLeft() + getClientWidth() === getScrollWidth();
      setIsRightDisable(isRightDisable);
    };
    const refCurrent = ref.current;

    refCurrent?.addEventListener("scroll", checkButtonsDisable);

    return () => refCurrent?.removeEventListener("scroll", checkButtonsDisable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return { isLeftDisable, isRightDisable };
};
