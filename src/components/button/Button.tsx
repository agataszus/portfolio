import { Text } from "../text/Text";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { cn } from "@/styles/helpers/cn";

type ButtonProps = {
  variant: "small" | "large";
  text: string;
  onClick?: () => void;
  className?: string;
};

export const Button = ({ variant, text, className, onClick }: ButtonProps) => {
  const buttonClassName = cn(
    "border-2 border-primary cursor-pointer",
    { ["h-[52px] w-[140px] bg-transparent"]: variant === "small", ["h-[70px] w-[248px] flex"]: variant === "large" },
    className
  );

  return (
    <button className={buttonClassName} onClick={onClick}>
      <div className="flex h-full w-full items-center justify-center">
        <Text tag="span" variant="action-2">
          {text}
        </Text>
      </div>
      {variant === "large" && (
        <div className="flex h-full w-[70px] shrink-0 justify-end bg-button-color-light">
          <ArrowRightSFillIcon className="my-auto h-[16px] w-full justify-center fill-white" />
        </div>
      )}
    </button>
  );
};
