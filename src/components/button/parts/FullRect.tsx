import { ButtonVariant } from "../button.constants";
import { HalfRect } from "./HalfRect";

type FullRectProps = {
  variant: ButtonVariant;
  additionalDelay: number | undefined;
};

export const FullRect = ({ variant, additionalDelay }: FullRectProps) => {
  return (
    <>
      <HalfRect variant={variant} additionalDelay={additionalDelay} className="right-0" />
      <HalfRect variant={variant} additionalDelay={additionalDelay} className="left-0 rotate-180 -scale-y-100" />
    </>
  );
};
