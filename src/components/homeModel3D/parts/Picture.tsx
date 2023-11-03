import Image from "next/image";
import { motion } from "framer-motion";

export const Picture = () => {
  return (
    <motion.div
      className="absolute inset-0 h-[200%] w-[200%] translate-x-[-107px] translate-y-[-1px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1], transition: { delay: 0.8, duration: 2.5 } }}
    >
      <Image src={"/icons3D/model-picture.png"} alt="beginning view of the animation" width={848} height={389} />
    </motion.div>
  );
};
