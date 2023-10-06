import { PropsWithChildren } from "react";
import { cn } from "@/styles/helpers/cn";

type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

type Variant =
  | "action-1"
  | "action-2"
  | "action-3"
  | "action-4"
  | "action-5"
  | "subtitle-1"
  | "subtitle-2"
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "num-1"
  | "caption-1";

type TextProps = {
  tag: Tag;
  variant: Variant;
  className?: string;
} & PropsWithChildren;

export const Text = ({ children, tag, variant, className }: TextProps) => {
  const extraClass = cn(
    {
      ["text-base font-medium text-white"]: variant === "action-1",
      ["text-sm font-semibold text-white"]: variant === "action-2",
      ["text-sm font-semibold text-primary tracking-widest uppercase"]: variant === "action-3",
      ["text-xs font-semibold text-white uppercase"]: variant === "action-4",
      ["text-xs font-light text-white leading-4"]: variant === "action-5",
      ["text-base mobile:text-sm uppercase font-bold"]: variant === "subtitle-1",
      ["text-sm uppercase text-primary font-medium tracking-3"]: variant === "subtitle-2",
      ["text-5xl mobile:text-4xl font-bold text-white leading-tighter"]: variant === "heading-1",
      ["text-[42px] mobile:text-4xl font-bold text-white"]: variant === "heading-2",
      ["text-3xl mobile:text-2xl font-bold text-white"]: variant === "heading-3",
      ["text-sm font-bold text-white"]: variant === "num-1",
      ["text-sm font-normal text-white leading-tight"]: variant === "caption-1",
    },
    className
  );

  switch (tag) {
    case "h1": {
      return <h1 className={extraClass}>{children}</h1>;
    }
    case "h2": {
      return <h2 className={extraClass}>{children}</h2>;
    }
    case "h3": {
      return <h3 className={extraClass}>{children}</h3>;
    }
    case "h4": {
      return <h4 className={extraClass}>{children}</h4>;
    }
    case "h5": {
      return <h5 className={extraClass}>{children}</h5>;
    }
    case "h6": {
      return <h6 className={extraClass}>{children}</h6>;
    }
    case "p": {
      return <p className={extraClass}>{children}</p>;
    }
    case "span": {
      return <span className={extraClass}>{children}</span>;
    }
    case "div": {
      return <div className={extraClass}>{children}</div>;
    }
    default: {
      return <span className={extraClass}>{children}</span>;
    }
  }
};
