import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";
import StarsFillIcon from "remixicon-react/StarSFillIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import HazeFillIcon from "remixicon-react/HazeFillIcon";
import DiscLineIcon from "remixicon-react/DiscLineIcon";
import { ArrowButtons } from "@/components/arrowButtons/ArrowButtons";

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
        <ArrowButtons />
      </div>
      {Projects.map(({ name, description, Icon }, index) => (
        <ProjectColumn name={name} description={description} Icon={Icon} number={index + 1} key={name} />
      ))}
    </div>
  );
}
