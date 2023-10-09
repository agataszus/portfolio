import { Text } from "@/components/text/Text";
import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, MOBILE, useMediaQueries } from "@/hooks/useMediaQueries";
import { WebsiteScreen } from "@/services/content/getProject";
import { useMouse } from "@mantine/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PlayLineIcon from "remixicon-react/PlayLineIcon";

const IMAGE_SCALE = 0.8;

type ImageButtonProps = {
  image: WebsiteScreen;
  handleClick: () => void;
};

export const ImageButton = ({ image, handleClick }: ImageButtonProps) => {
  const mediaQuery = useMediaQueries();
  const [isTooltip, setIsTooltip] = useState(false);
  const { ref, x, y } = useMouse();

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
      <PlayLineIcon className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 fill-gray-100/40 mobile:h-20 mobile:w-20" />
      {isTooltip && [DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery) && (
        <div
          className="absolute flex min-w-[220px] justify-center bg-background-color-dark p-2"
          style={{ left: x + 20, top: y + 20 }}
        >
          <Text tag="span" variant="action-2">
            Click to watch demo video
          </Text>
        </div>
      )}
    </motion.button>
  );
};
