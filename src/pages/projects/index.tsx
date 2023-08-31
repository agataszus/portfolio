import ArrowDropRightLineIcon from "remixicon-react/ArrowDropRightLineIcon";
import ArrowDropLeftLineIcon from "remixicon-react/ArrowDropLeftLineIcon";
import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";
import StarsFillIcon from "remixicon-react/StarSFillIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import HazeFillIcon from "remixicon-react/HazeFillIcon";
import DiscLineIcon from "remixicon-react/DiscLineIcon";

const Projects = [
  {
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    Icon: StarsFillIcon,
  },
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    Icon: UserStarLineIcon,
  },
  {
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    Icon: HazeFillIcon,
  },
  {
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    Icon: DiscLineIcon,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex h-full w-full overflow-x-scroll">
      <div className="flex h-full w-[240px] shrink-0 items-center justify-center">
        <div className="mb-28 flex items-center gap-2">
          <button className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-2 border-primary/50">
            <ArrowDropLeftLineIcon className="h-[24px] w-auto fill-white" />
          </button>
          <button className="flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-primary">
            <ArrowDropRightLineIcon className="h-[24px] w-auto fill-white" />
          </button>
        </div>
      </div>
      {Projects.map(({ name, description, Icon }, index) => (
        <ProjectColumn name={name} description={description} Icon={Icon} number={index + 1} key={name} />
      ))}
    </div>
  );
}
