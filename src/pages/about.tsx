import { AboutMeContent } from "@/components/aboutMeContent/AboutMeContent";
import { Topbar } from "@/components/topbar/Topbar";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
          className="flex h-[540px] w-[420px] shrink-0 bg-white"
        />
        <AboutMeContent />
      </div>
    </div>
  );
}
