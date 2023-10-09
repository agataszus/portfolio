import { MOBILE, useMediaQueries } from "@/hooks/useMediaQueries";

type ProjectVideoProps = {
  src: string;
  onClose: () => void;
};

export const ProjectVideo = ({ src, onClose }: ProjectVideoProps) => {
  const mediaQuery = useMediaQueries();

  return (
    <>
      <div className="fixed inset-0 z-60 bg-black/80" onClick={onClose} />
      <div
        className="fixed left-1/2 top-1/2 z-[70] -translate-x-1/2 -translate-y-1/2"
        style={{ aspectRatio: 16 / 9, height: "unset", width: mediaQuery === MOBILE ? "90%" : "min(80%, 1600px)" }}
      >
        <iframe
          width="100%"
          height="100%"
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};
