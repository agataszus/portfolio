import { MOBILE, useMediaQueries } from "@/hooks/useMediaQueries";
import { AnimatePresence, motion } from "framer-motion";

type ProjectVideoProps = {
  src: string;
  onClose: () => void;
  isVisible: boolean;
};

export const ProjectVideo = ({ src, onClose, isVisible }: ProjectVideoProps) => {
  const mediaQuery = useMediaQueries();

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            key={`video-overlay-${src}`}
            className="fixed inset-0 z-60 bg-black/80"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: [1, 0] }}
            transition={{ duration: 0.3, ease: "linear" }}
          />
          <motion.div
            key={`video-${src}`}
            className="fixed left-1/2 top-1/2 z-[70] -translate-x-1/2 -translate-y-1/2"
            style={{ aspectRatio: 16 / 9, height: "unset", width: mediaQuery === MOBILE ? "90%" : "min(70%, 1600px)" }}
            initial={{ scale: 0.7, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{ scale: 1, x: "-50%", y: "-50%", opacity: 1 }}
            exit={{ scale: 0.7, x: "-50%", y: "-50%", opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              width="100%"
              height="100%"
              src={src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
