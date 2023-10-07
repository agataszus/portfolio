import { ExpandableMenuTopbar } from "@/components/expandableMenuTopbar/ExpandableMenuTopbar";
import { SkillsContent } from "@/components/skillsContent/SkillsContent";
import { Topbar } from "@/components/topbar/Topbar";
import { DESKTOP_SMALL, MOBILE, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";
import { SkillsContentResponse, getSkillsContent } from "@/services/content/getSkillsContent";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<SkillsContentResponse> = async () => {
  const { skillsContent } = await getSkillsContent();

  return { props: { skillsContent } };
};

export default function SkillsPage({ skillsContent }: SkillsContentResponse) {
  useScrollToTopOnRender();
  const mediaQuery = useMediaQueries();

  const { subtitle, title, technologies } = skillsContent;

  const svgSize = DESKTOP_SMALL === mediaQuery ? "120vw" : "max(100vw, 100vh)";
  const circleSize = `calc(${svgSize}/2)`;
  const circleR = `calc(${svgSize}/2 - 2px)`;

  return (
    <div className="relative mx-auto flex min-h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:min-h-screen tablet:pb-24 tablet:pt-[112px] mobile:px-8">
      {[TABLET, MOBILE].includes(mediaQuery) ? (
        <div className="hidden tablet:block">
          <Topbar />
        </div>
      ) : (
        <ExpandableMenuTopbar />
      )}
      <SkillsContent subtitle={subtitle} title={title} technologies={technologies} />
      <motion.svg
        className="absolute bottom-[47%] left-1/2 z-0 -translate-x-1/2 tablet:bottom-1/2 mobile:-top-80"
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        <motion.circle
          cx={circleSize}
          cy={circleSize}
          r={circleR}
          stroke="#95FAFE"
          strokeOpacity={"30%"}
          strokeWidth="3"
          fill="rgba(37, 49, 96, 0.5)"
        />
      </motion.svg>
    </div>
  );
}
