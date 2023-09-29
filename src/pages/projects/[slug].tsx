import { ProjectTopbar } from "@/components/projectTopbar/ProjectTopbar";
import { getProjects } from "@/services/content/getProjects";
import { Project } from "@/services/content/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { ProjectPageTemplate } from "@/components/projectPageTemplate/ProjectPageTemplate";
import { MOBILE, TABLET, useMediaQueries } from "@/hooks/useMediaQueries";
import { Topbar } from "@/components/topbar/Topbar";

type ProjectPageProps = {
  project: Project;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjects();

  return {
    paths: projects.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (context) => {
  const currentSlug = context.params?.slug;
  const projects = await getProjects();
  const project = projects.find(({ slug }) => slug === currentSlug);

  if (!project) return { notFound: true };

  return {
    props: { project },
  };
};

export default function ProjectPage({ project }: ProjectPageProps) {
  const mediaQuery = useMediaQueries();

  const SVG_SIZE = [TABLET, MOBILE].includes(mediaQuery) ? "1300px" : "max(70vw, 100vh)";
  const CIRCLE_SIZE = `calc(${SVG_SIZE}/2)`;
  const CIRCLE_R = `calc(${SVG_SIZE}/2 - 2px)`;

  return (
    <div className="relative mx-auto flex min-h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      {[TABLET, MOBILE].includes(mediaQuery) ? <Topbar /> : <ProjectTopbar />}
      <ProjectPageTemplate project={project} />
      <motion.svg
        className="absolute right-0 top-0 z-0 m-auto translate-x-[60%] translate-y-[-23%] rotate-90 desktop-mid:translate-x-[45%] desktop-small:translate-x-[30%] desktop-small:translate-y-[-13%] tablet:left-1/2 tablet:top-[-700px] tablet:-translate-x-1/2 tablet:translate-y-0 mobile:top-[-760px]"
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
