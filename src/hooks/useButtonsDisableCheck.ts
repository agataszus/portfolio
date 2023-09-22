import { RefObject, useLayoutEffect, useState } from "react";

export const useButtonsDisableCheck = (ref: RefObject<HTMLDivElement>) => {
  const [isLeftDisabled, setIsLeftDisabled] = useState(true);
  const [isRightDisabled, setIsRightDisabled] = useState(false);

  const getClientWidth = () => ref.current?.clientWidth ?? 0;
  const getScrollLeft = () => ref.current?.scrollLeft ?? 0;
  const getScrollWidth = () => ref.current?.scrollWidth ?? 0;

  useLayoutEffect(() => {
    const checkButtonsDisable = () => {
      const isLeftDisabled = getScrollLeft() === 0;
      setIsLeftDisabled(isLeftDisabled);

      const isRightDisabled = getScrollLeft() + getClientWidth() === getScrollWidth();
      setIsRightDisabled(isRightDisabled);
    };
    const refCurrent = ref.current;

    refCurrent?.addEventListener("scroll", checkButtonsDisable);

    return () => refCurrent?.removeEventListener("scroll", checkButtonsDisable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return { isLeftDisabled, isRightDisabled };
};
