import { Model3D } from "@/components/model3D/Model3D";
import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";
import { DESKTOP, DESKTOP_MID, DESKTOP_SMALL, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { Model3DMobile } from "@/components/model3DMobile/Model3DMobile";

export default function HomePage() {
  useScrollToTopOnRender();
  const mediaQuery = useMediaQueries();

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl">
      <Topbar />
      <div className="my-auto flex tablet:h-screen tablet:items-center">
        <div className="w-1/2">
          <Hero />
        </div>
        <div className="relative w-1/2 tablet:h-[400px]">
          {[DESKTOP, DESKTOP_MID, DESKTOP_SMALL].includes(mediaQuery) && <Model3D />}
          {mediaQuery === TABLET && <Model3DMobile />}
        </div>
      </div>
    </div>
  );
}
