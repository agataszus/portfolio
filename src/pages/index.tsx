import { Hero } from "@/components/hero/Hero";
import { Topbar } from "@/components/topbar/Topbar";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col px-44 py-6">
      <Topbar />
      <div className="my-auto">
        <Hero />
      </div>
    </div>
  );
}
