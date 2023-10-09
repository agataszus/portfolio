import { Text } from "@/components/text/Text";
import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, MOBILE, useMediaQueries } from "@/hooks/useMediaQueries";
import { WebsiteScreen } from "@/services/content/getProject";
import { cn } from "@/styles/helpers/cn";
import { useMouse } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import PlayLineIcon from "remixicon-react/PlayLineIcon";

const IMAGE_SCALE = 0.8;
const TOOLTIP_WIDTH = 220;
const IMAGE_BUTTON_WIDTH = 400;

type ImageButtonProps = {
  image: WebsiteScreen;
  handleClick: () => void;
};

export const ImageButton = ({ image, handleClick }: ImageButtonProps) => {
  const mediaQuery = useMediaQueries();
  const [isTooltip, setIsTooltip] = useState(false);
  const { ref, x, y } = useMouse();
  const [isTooltipOnRight, setIsTooltipOnRight] = useState(true);

  useEffect(() => {
    const pageContentWidth = innerWidth > 1280 ? 1208 : innerWidth - 72;
    const extraPadding = mediaQuery === DESKTOP_SMALL ? 20 : 0;
    const buttonOffset = (window.innerWidth - pageContentWidth) / 2 + extraPadding + (IMAGE_BUTTON_WIDTH - x) - 20;
    console.log(window.innerWidth);

    if (buttonOffset > TOOLTIP_WIDTH !== isTooltipOnRight) setIsTooltipOnRight(buttonOffset > TOOLTIP_WIDTH);
  }, [isTooltipOnRight, x, mediaQuery]);

  return (
    <motion.button
      ref={ref}
      className="relative h-[220px] w-[400px] bg-black shadow-xl mobile:h-[150px] mobile:w-[280px]"
      initial={{ opacity: 0, scale: IMAGE_SCALE }}
      animate={{ opacity: [0, 1], scale: [IMAGE_SCALE, 1] }}
      transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 80 }}
      onClick={handleClick}
      onMouseOver={() => setIsTooltip(true)}
      onMouseLeave={() => setIsTooltip(false)}
    >
      <Image
        alt={image.alt}
        src={image.url}
        width={mediaQuery === MOBILE ? 280 : 400}
        height={mediaQuery === MOBILE ? 150 : 220}
        priority
      />
      <PlayLineIcon className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 fill-gray-100/50 mobile:h-20 mobile:w-20" />
      {isTooltip && [DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery) && (
        <div
          className={cn(
            "absolute z-40 flex min-w-[220px] justify-center bg-background-color-dark p-2",
            !isTooltipOnRight && "-translate-x-full"
          )}
          style={{
            left: isTooltipOnRight ? x + 20 : x - 20,
            top: y + 20,
          }}
        >
          <Text tag="span" variant="action-2">
            Click to watch demo video
          </Text>
        </div>
      )}
    </motion.button>
  );
};
