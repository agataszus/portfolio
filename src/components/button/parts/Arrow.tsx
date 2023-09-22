import { arrowContainerDraw, arrowDraw } from "@/components/projectColumn/projectColumn.constants";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";

type ArrowProps = {
  isActive: boolean;
  additionalDelay: number | undefined;
};

export const Arrow = ({ isActive, additionalDelay }: ArrowProps) => {
  const arrowContainerClassName = cn(
    "h-full w-full shrink-0 bg-button-color-light transition-colors duration-500 overflow-hidden z-0",
    {
      ["bg-primary"]: isActive,
    }
  );

  const arrowClassName = cn("my-auto h-5 w-full justify-center fill-white transition-colors duration-500", {
    ["fill-background-color-dark"]: isActive,
  });

  return (
    <div className={"h-full w-[70px] shrink-0 justify-end overflow-hidden"}>
      <motion.div className={arrowContainerClassName} variants={arrowContainerDraw} custom={additionalDelay}>
        <motion.div className="flex h-full w-full justify-center" variants={arrowDraw} custom={additionalDelay}>
          <ArrowRightSFillIcon className={arrowClassName} />
        </motion.div>
      </motion.div>
    </div>
  );
};
