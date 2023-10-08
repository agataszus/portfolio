import { Button } from "@/components/button/Button";
import { getProjectPath } from "@/components/desktopHomeNavigation/desktopHomeNavigation.constants";
import { Text } from "@/components/text/Text";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";

type ArrowToButtonProps = {
  index: number;
  slug: string;
  isButtonVisible: boolean;
};

export const ArrowToButton = ({ index, slug, isButtonVisible }: ArrowToButtonProps) => {
  return (
    <div className="relative mt-auto tablet:absolute tablet:left-[40%] tablet:top-48 tablet:translate-x-[--tablet-translate-x] tablet:opacity-[--hover-opacity] mobile:relative mobile:left-0 mobile:top-0 mobile:opacity-100">
      <motion.div
        key={`column-arrow-${index}`}
        className={cn(
          "relative z-20 mb-8 flex h-[70px] w-[20px] items-center",
          !isButtonVisible && "opacity-[--default-opacity]"
        )}
        initial={{ translateY: 48, translateX: "var(--translate-x)" }}
        animate={{ translateY: [48, 0], translateX: "var(--translate-x)" }}
        transition={{ duration: 0.5 }}
      >
        <ArrowRightSFillIcon className="h-[20px] w-full fill-white" />
      </motion.div>
      <motion.div initial={{ opacity: "var(--hover-opacity)" }} animate={{ opacity: "var(--hover-opacity)" }}>
        {isButtonVisible ? (
          <Button
            variant="large"
            text="learn more"
            className="absolute bottom-8 left-0"
            linkTo={getProjectPath(slug)}
            isExternal={false}
          />
        ) : (
          <Text tag="div" variant="subtitle-1" className="absolute bottom-14 left-0 font-medium text-white/80">
            Coming Soon!
          </Text>
        )}
      </motion.div>
    </div>
  );
};
