import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, MOBILE, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ModelLoader } from "../modelLoader/ModelLoader";

const Model3D = dynamic(() => import("../model3D/Model3D").then((module) => module.Model3D), {
  ssr: false,
});

const Model3DMobile = dynamic(() => import("../model3DMobile/Model3DMobile").then((module) => module.Model3DMobile), {
  ssr: false,
});

export const HomeModel3D = () => {
  const mediaQuery = useMediaQueries();
  const [isReady, setIsReady] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsReady(true), 1100);

    return () => clearTimeout(timeoutId);
  }, []);

  if (mediaQuery === MOBILE) return null;

  return (
    <motion.div key={"3d-model"} className="relative flex h-full w-full items-center justify-center">
      <AnimatePresence mode="sync">
        {!isLoaded && (
          <motion.div
            key="model-loader"
            className="mb-20 flex tablet:mb-16 tablet:ml-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], transition: { delay: 0.5, duration: 0.3 } }}
            exit={{ opacity: [1, 0], transition: { duration: 0.4 } }}
          >
            <ModelLoader />
          </motion.div>
        )}
        {isReady && (
          <motion.div
            key="model-3d"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1], transition: { delay: 0.5, duration: 1 } }}
          >
            {mediaQuery === TABLET ? (
              <Model3DMobile onLoad={() => setIsLoaded(true)} />
            ) : (
              <Model3D onLoad={() => setIsLoaded(true)} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
