import { useEffect, useState } from "react";

export const useScrollDownCheck = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY !== 0) {
        setIsScrolledDown(true);
        return;
      }

      setIsScrolledDown(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolledDown;
};
