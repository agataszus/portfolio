import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";

export default function ProjectsPage() {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-[240px] shrink-0 items-center justify-center">
        <div className="mb-16 flex items-center gap-2">
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-primary/50">
            <ArrowDropLeftLineIcon className="h-[24px] w-auto fill-white" />
          </button>
          <button className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-primary">
            <ArrowDropRightLineIcon className="h-[24px] w-auto fill-white" />
          </button>
        </div>
      </div>
      <ProjectColumn />
      <ProjectColumn />
      <ProjectColumn />
      <ProjectColumn />
    </div>
  );
}
