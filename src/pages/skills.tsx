import { ExpandableMenuTopbar } from "@/components/expandableMenuTopbar/ExpandableMenuTopbar";
import { SkillsContent } from "@/components/skillsContent/SkillsContent";
import { Topbar } from "@/components/topbar/Topbar";
import { MOBILE, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { SkillsContentResponse, getSkillsContent } from "@/services/content/getSkillsContent";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

const SVG_SIZE = "100vw";
const CIRCLE_SIZE = `calc(${SVG_SIZE}/2)`;
const CIRCLE_R = `calc(${SVG_SIZE}/2 - 2px)`;

export const getStaticProps: GetStaticProps<SkillsContentResponse> = async () => {
  const { skillsContent } = await getSkillsContent();

  return { props: { skillsContent } };
};

export default function SkillsPage({ skillsContent }: SkillsContentResponse) {
  const mediaQuery = useMediaQueries();
  const { subtitle, title, technologies } = skillsContent;

  return (
    <div className="relative mx-auto flex min-h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      {[TABLET, MOBILE].includes(mediaQuery) ? <Topbar /> : <ExpandableMenuTopbar />}
      <SkillsContent subtitle={subtitle} title={title} technologies={technologies} />
      <motion.svg
        className="absolute left-1/2 z-0 -translate-x-1/2 translate-y-[-70%]"
        width={SVG_SIZE}
        height={SVG_SIZE}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
      >
        <motion.circle
          cx={CIRCLE_SIZE}
          cy={CIRCLE_SIZE}
          r={CIRCLE_R}
          stroke="#95FAFE"
          strokeOpacity={"30%"}
          strokeWidth="3"
          fill="rgba(37, 49, 96, 0.5)"
        />
      </motion.svg>
    </div>
  );
}
