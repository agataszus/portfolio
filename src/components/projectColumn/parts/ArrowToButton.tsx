import { Button } from "@/components/button/Button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";

type ArrowToButtonProps = {
  index: number;
  slug: string;
};

export const ArrowToButton = ({ index, slug }: ArrowToButtonProps) => {
  const router = useRouter();

  return (
    <div className="relative mt-auto tablet:absolute tablet:left-[40%] tablet:top-48 tablet:translate-x-[--tablet-translate-x] tablet:opacity-[--hover-opacity] mobile:relative mobile:left-0 mobile:top-0 mobile:opacity-100">
      <motion.div
        key={`column-arrow-${index}`}
        className="relative z-20 mb-8 flex h-[70px] w-[20px] items-center"
        initial={{ translateY: 48, translateX: "var(--translate-x)" }}
        animate={{ translateY: [48, 0], translateX: "var(--translate-x)" }}
        transition={{ duration: 0.5 }}
      >
        <ArrowRightSFillIcon className=" h-[20px] w-full fill-white" />
      </motion.div>
      <motion.div initial={{ opacity: "var(--hover-opacity)" }} animate={{ opacity: "var(--hover-opacity)" }}>
        <Button
          variant="large"
          text="learn more"
          className=" absolute bottom-8 left-0"
          onClick={() => router.push(`/projects/${slug}`)}
        />
      </motion.div>
    </div>
  );
};
