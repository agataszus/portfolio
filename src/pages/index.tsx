import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl">
      <Topbar />
      <div className="my-auto tablet:flex tablet:h-screen tablet:items-center">
        <Hero />
      </div>
    </div>
  );
}
