import { AboutMeContent } from "@/components/aboutMeContent/AboutMeContent";
import { Topbar } from "@/components/topbar/Topbar";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";
import { AboutContentResponse, getAboutContent } from "@/services/content/getAboutContent";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Image from "next/image";

export const getStaticProps: GetStaticProps<AboutContentResponse> = async () => {
  const { aboutContent } = await getAboutContent();

  return {
    props: { aboutContent },
  };
};

export default function AboutPage({ aboutContent }: AboutContentResponse) {
  useScrollToTopOnRender();
  const { description, title, subtitle } = aboutContent;

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24 [--translate-x:0] desktop-small:gap-10 tablet:relative tablet:flex tablet:min-h-screen tablet:flex-col tablet:items-center tablet:pt-[88px] tablet:[--translate-x:-50%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, translateX: "var(--translate-x)" }}
          animate={{ opacity: [0, 1], scale: [0.8, 1], translateX: ["var(--translate-x)", "var(--translate-x)"] }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
          className="flex h-[540px] w-[420px] shrink-0 desktop-small:h-[440px] desktop-small:w-[340px] tablet:absolute tablet:left-1/2 tablet:top-24"
        >
          <Image width={420} height={540} alt="My picture" src="/my-picture.png" />
        </motion.div>
        <AboutMeContent description={description} title={title} subtitle={subtitle} />
      </div>
    </div>
  );
}
