import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import { SocialIcon } from "./SocialIcon";

export const SocialIcons = () => {
  return (
    <div className="mt-auto flex gap-4">
      {[
        { Icon: LinkedinBoxFillIcon, linkTo: "https://www.linkedin.com/" },
        { Icon: GithubFillIcon, linkTo: "https://github.com/agataszus" },
        { Icon: MailFillIcon, linkTo: "mailto:agataszus@gmail.com" },
      ].map(({ Icon, linkTo }, index) => (
        <SocialIcon Icon={Icon} linkTo={linkTo} index={index} key={`social-icon-${index}`} />
      ))}
    </div>
  );
};
