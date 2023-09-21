import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";

export default function HomePage() {
  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col px-8 py-6">
      <Topbar />
      <div className="my-auto">
        <Hero />
      </div>
    </div>
  );
}
