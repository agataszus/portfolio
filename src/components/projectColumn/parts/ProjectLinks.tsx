import { Text } from "@/components/text/Text";
import { motion } from "framer-motion";
import Link from "next/link";

const LINK_SLIDE_OFFSET = 20;

type ProjectLinksProps = {
  extraDelay: number;
  description: string;
  demoLink: string;
  sourceCodeLink: string;
};

export const ProjectLinks = ({ extraDelay, description, demoLink, sourceCodeLink }: ProjectLinksProps) => {
  return (
    <div className="relative w-full tablet:h-8 mobile:h-auto">
      <div className="overflow-hidden tablet:absolute tablet:left-[--tablet-left-to-left] tablet:top-60 tablet:translate-x-[--tablet-translate-x] mobile:relative mobile:left-0 mobile:top-0">
        <motion.div
          className="flex opacity-[--default-opacity] tablet:justify-center mobile:justify-start"
          initial={{ translateY: LINK_SLIDE_OFFSET }}
          animate={{ translateY: [LINK_SLIDE_OFFSET, 0] }}
          transition={{ delay: 0.3 + extraDelay, duration: 0.5 }}
        >
          <Text tag="p" variant="action-4" className="text-primary">
            See more &#8594;
          </Text>
        </motion.div>
      </div>

      <div className="absolute inset-0 z-10 flex translate-y-[--hover-translate-y] flex-col gap-12 opacity-[--hover-opacity] tablet:left-[40%] tablet:gap-9 mobile:left-0">
        <Text tag="p" variant="caption-1">
          {description}
        </Text>
        <div className="flex flex-col gap-3">
          <Link href={demoLink} rel="noreferrer" target="_blank">
            <Text tag="p" variant="action-4" className="cursor-pointer text-primary">
              Live demo &#8594;
            </Text>
          </Link>
          <Link href={sourceCodeLink} rel="noreferrer" target="_blank">
            <Text tag="p" variant="action-4" className="cursor-pointer text-primary">
              Code on github &#8594;
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
