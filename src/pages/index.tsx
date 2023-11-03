import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";
import { HomeModel3D } from "@/components/homeModel3D/HomeModel3D";

export default function HomePage() {
  useScrollToTopOnRender();

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl">
      <Topbar />
      <div className="my-auto flex tablet:h-screen tablet:items-center">
        <div className="w-1/2">
          <Hero />
        </div>
        <div className="w-1/2 tablet:h-[400px]">
          <HomeModel3D />
        </div>
      </div>
    </div>
  );
}
