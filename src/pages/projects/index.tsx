import { ProjectColumn } from "@/components/projectColumn/ProjectColumn";
import { ArrowButtons } from "@/components/arrowButtons/ArrowButtons";
import { IconNames } from "@/components/projectIcon/ProjectIcon";
import { Text } from "@/components/text/Text";
import Link from "next/link";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    name: "EventHive",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus iusto.",
    iconName: IconNames.SPARKLES_ICON,
  },
  {
    name: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.PORTFOLIO_ICON,
  },
  {
    name: "WeatherApp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.WEATHER_ICON,
  },
  {
    name: "EFDance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi.",
    iconName: IconNames.MUSIC_ICON,
  },
  {
    name: "Algorithms",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, consequuntur sunt. Nemo soluta omnis, tenetur aperiam nihil, saepe commodi possimus.",
    iconName: IconNames.SORT_ICON,
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex h-full w-full overflow-x-scroll">
      <div className="flex h-full w-[270px] shrink-0 flex-col items-center justify-start gap-80 pt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="ml-8 self-start"
        >
          <Link href="/">
            <Text tag="p" variant="action-2" className=" text-primary/80 duration-150 hover:text-primary">
              &#8592; back
            </Text>
          </Link>
        </motion.div>
        <ArrowButtons />
      </div>
      <div className="flex overflow-x-scroll">
        {PROJECTS.map(({ name, description, iconName }, index) => (
          <ProjectColumn name={name} description={description} iconName={iconName} index={index + 1} key={name} />
        ))}
      </div>
    </div>
  );
}
