import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { ArrowButton } from "./parts/ArrowButton";

type ArrowButtonsProps = {
  handleClickRight: () => void;
  handleClickLeft: () => void;
  isLeftDisabled: boolean;
  isRightDisabled: boolean;
};

export const ArrowButtons = ({
  handleClickLeft,
  handleClickRight,
  isLeftDisabled,
  isRightDisabled,
}: ArrowButtonsProps) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowButton
        isDisabled={isLeftDisabled}
        onClick={handleClickLeft}
        initialTranslateX={15}
        delay={0.3}
        duration={0.3}
        Icon={ArrowDropLeftLineIcon}
      />
      <ArrowButton
        isDisabled={isRightDisabled}
        onClick={handleClickRight}
        initialTranslateX={-20}
        delay={0.2}
        duration={0.4}
        Icon={ArrowDropRightLineIcon}
      />
    </div>
  );
};
