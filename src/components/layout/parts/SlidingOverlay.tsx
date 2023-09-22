import { motion } from "framer-motion";

type SlidingOverlayProps = {
  pathname: string;
};

export const SlidingOverlay = ({ pathname }: SlidingOverlayProps) => {
  return (
    <>
      <motion.div
        key={`overlay-animation-${pathname}-1`}
        className="fixed inset-0 z-[1000] bg-primary/20"
        initial={{ y: "100%" }}
        animate={{
          y: ["100%", "0%", "-100%"],
          transition: { delay: 0.5, duration: 0.8, ease: [0.17, 0.67, 0.53, 0.89] },
        }}
      />
      <motion.div
        key={`overlay-animation-${pathname}-2`}
        className="fixed inset-0 z-[1000] overflow-hidden bg-primary"
        initial={{ y: "100%" }}
        animate={{
          y: ["100%", "0%", "-100%"],
          transition: { delay: 0.65, duration: 0.65, ease: [0.37, 0.59, 0.68, 0.83] },
        }}
      >
        {/* <motion.div
      className="absolute inset-0 flex -translate-y-1/2 items-center justify-center text-7xl font-extrabold uppercase text-sky-800/70"
      initial={{ y: "-100%" }}
      animate={{
        y: ["-100%", "0%", "100%"],
        transition: { delay: 0.65, duration: 0.65, ease: [0.38, 0.57, 0.69, 0.81] },
      }}
    >
      Agata.dev
    </motion.div> */}
        {/* <div className="fixed inset-0 -translate-y-full">
      <div className="absolute inset-0 flex translate-y-full items-center justify-center text-7xl font-extrabold uppercase text-sky-800/70 ">
        Agata.dev
      </div>
    </div> */}
      </motion.div>
    </>
  );
};
