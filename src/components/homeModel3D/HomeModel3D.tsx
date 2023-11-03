import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Picture } from "./parts/Picture";

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

  return (
    <motion.div key={"3d-model"} className="relative h-full w-full">
      {!isLoaded && <Picture />}
      {isReady && (
        <>
          {[DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery) && <Model3D onLoad={() => setIsLoaded(true)} />}
          {mediaQuery === TABLET && <Model3DMobile />}
        </>
      )}
    </motion.div>
  );
};
