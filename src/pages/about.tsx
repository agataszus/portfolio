import { AboutMeContent } from "@/components/aboutMeContent/AboutMeContent";
import { Topbar } from "@/components/topbar/Topbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 tablet:pb-24 mobile:px-8">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24 [--translate-x:0] desktop-small:gap-10 tablet:relative tablet:flex tablet:min-h-screen tablet:flex-col tablet:items-center tablet:pt-[88px] tablet:[--translate-x:-50%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, translateX: "var(--translate-x)" }}
          animate={{ opacity: [0, 1], scale: [0.8, 1], translateX: ["var(--translate-x)", "var(--translate-x)"] }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
          className="flex h-[540px] w-[420px] shrink-0 bg-white desktop-small:h-[480px] desktop-small:w-[340px] tablet:absolute tablet:left-1/2 tablet:top-72 mobile:top-52 mobile:h-[460px] mobile:w-[300px]"
        />
        <AboutMeContent />
      </div>
    </div>
  );
}
