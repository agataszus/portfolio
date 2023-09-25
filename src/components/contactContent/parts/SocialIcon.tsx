import { motion } from "framer-motion";
import { RemixiconReactIconComponentType } from "remixicon-react";

type SocialIconProps = {
  Icon: RemixiconReactIconComponentType;
  index: number;
};

export const SocialIcon = ({ Icon, index }: SocialIconProps) => {
  const iconClassName = "w-9 h-9 fill-white";

  return (
    <motion.div
      initial={{ rotate: "90deg", opacity: 0 }}
      animate={{ rotate: ["-110deg", "0deg"], opacity: [0, 1] }}
      transition={{ delay: 0.7 + index / 10, duration: 0.4 }}
    >
      <Icon className={iconClassName} />
    </motion.div>
  );
};
