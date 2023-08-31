import { useState } from "react";
import { Text } from "../text/Text";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";
import { Button } from "../button/Button";
import { cn } from "@/styles/helpers/cn";

type ProjectColumnProps = {
  Icon: typeof ArrowRightSFillIcon;
  number: number;
  name: string;
  description: string;
};

export const ProjectColumn = ({ Icon, name, description, number }: ProjectColumnProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const columnClassName = cn("flex h-full w-[356px] shrink-0 flex-col gap-8 border-l-2 border-primary/40 px-11 py-8", {
    ["bg-gradient-to-r from-black/30 via-black/10 via-50% to-black/5"]: isHovered,
  });

  return (
    <div className={columnClassName} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      <Text tag="h4" variant="num-1" className="py-4">
        {`0${number}`}
      </Text>
      <div className="mb-7 h-1 w-[22px] bg-primary" />
      <div className="my-6 flex h-[126px] w-[126px] items-center justify-center rounded-full border-2 border-primary/30">
        <Icon className="h-16 w-16 fill-primary" />
      </div>
      <Text tag="h2" variant="heading-2">
        {name}
      </Text>
      {!isHovered && (
        <>
          <Text tag="p" variant="action-2" className="text-primary">
            See more &#8594;
          </Text>
          <ArrowRightSFillIcon className="mb-12 mt-auto fill-white" />
        </>
      )}
      {isHovered && (
        <>
          <div className="flex flex-col gap-12">
            <Text tag="p" variant="caption-1">
              {description}
            </Text>
            <div className="flex flex-col gap-3">
              <Text tag="p" variant="action-2" className="text-primary">
                Live demo &#8594;
              </Text>
              <Text tag="p" variant="action-2" className="text-primary">
                Code on github &#8594;
              </Text>
            </div>
          </div>
          <Button variant="large" text="learn more" className="mb-12 mt-auto" />
        </>
      )}
    </div>
  );
};
