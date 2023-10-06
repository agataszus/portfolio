import Link from "next/link";
import { PropsWithChildren } from "react";

type ButtonWrapperProps = {
  isExternal: boolean;
  linkTo: string;
} & PropsWithChildren;

export const ButtonWrapper = ({ isExternal, linkTo, children }: ButtonWrapperProps) => {
  return isExternal ? (
    <a href={linkTo} target="_blank" rel="noreferrer">
      {children}
    </a>
  ) : (
    <Link href={linkTo} prefetch={true} scroll={false}>
      {children}
    </Link>
  );
};
