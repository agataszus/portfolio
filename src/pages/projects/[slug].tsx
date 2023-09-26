import { getProjects } from "@/services/content/getProjects";
import { Project } from "@/services/content/types";
import { GetStaticPaths, GetStaticProps } from "next";

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
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      {project.name}
    </div>
  );
}
