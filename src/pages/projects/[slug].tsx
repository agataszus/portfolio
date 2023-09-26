import { Button } from "@/components/button/Button";
import { ProjectContent } from "@/components/projectContent/ProjectContent";
import { ProjectTopbar } from "@/components/projectTopbar/ProjectTopbar";
import { getProjects } from "@/services/content/getProjects";
import { Project } from "@/services/content/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MOTION_BUTTON_COMMON_PROPS = {
  initial: ["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"],
  animate: ["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"],
};
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
  const { name, description, subtitle } = project;
  const router = useRouter();

  return (
    <div className="relative mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <ProjectTopbar />
      <div className="my-auto flex h-[512px] w-1/2 flex-col">
        <ProjectContent subtitle={subtitle} name={name} description={description} />
        <div className="mt-auto flex gap-8 desktop-small:gap-5 tablet:mt-10 tablet:justify-between tablet:gap-8 mobile:flex-col mobile:items-center">
          <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
            <Button variant="medium" text="Source code" onClick={() => router.push("/")} additionalDelay={0.5} />
          </motion.div>
          <motion.div {...MOTION_BUTTON_COMMON_PROPS}>
            <Button variant="large" text="Live demo" onClick={() => router.push("/")} additionalDelay={0.7} />
          </motion.div>
        </div>
      </div>
      <motion.svg
        className="absolute right-0 top-0 m-auto translate-x-[45%] translate-y-[-23%] rotate-90"
        width={SVG_SIZE}
        height={SVG_SIZE}
        viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
        // initial="hidden"
        // animate="visible"
      >
        <motion.circle
          cx={CIRCLE_SIZE}
          cy={CIRCLE_SIZE}
          r={CIRCLE_R}
          stroke="#95FAFE"
          strokeOpacity={"30%"}
          strokeWidth="3"
          fill="transparent"
        />
      </motion.svg>
    </div>
  );
}
