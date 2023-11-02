import { Model3D } from "@/components/Model3D/Model3D";
import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";

export default function HomePage() {
  useScrollToTopOnRender();

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl">
      <Topbar />
      <div className="my-auto flex tablet:flex tablet:h-screen tablet:items-center">
        <div className="w-1/2">
          <Hero />
        </div>
        <div className="relative w-1/2">
          <Model3D />
        </div>
      </div>
    </div>
  );
}
