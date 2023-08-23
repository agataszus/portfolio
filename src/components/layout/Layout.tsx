import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className="bg-gradient-radial h-screen w-screen">{children}</div>;
};
