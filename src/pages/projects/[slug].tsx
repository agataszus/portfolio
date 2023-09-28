import { ProjectTopbar } from "@/components/projectTopbar/ProjectTopbar";
import { getProjects } from "@/services/content/getProjects";
import { Project } from "@/services/content/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { ProjectPageTemplate } from "@/components/projectPageTemplate/ProjectPageTemplate";

const SVG_SIZE = 1092;
const CIRCLE_SIZE = 546;
const CIRCLE_R = 545;

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
  return (
    <div className="relative mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <ProjectTopbar />
      <ProjectPageTemplate project={project} />
      <motion.svg
        className="absolute right-0 top-0 z-0 m-auto translate-x-[45%] translate-y-[-23%] rotate-90"
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
