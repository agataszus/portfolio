import { cn } from "@/styles/helpers/cn";
import { PropsWithChildren } from "react";

type LayoutProps = {
  className?: string;
} & PropsWithChildren;

export const Layout = ({ children, className }: LayoutProps) => {
  const layoutClassName = cn("bg-gradient-radial h-screen w-screen", className);

  return <div className={layoutClassName}>{children}</div>;
};
