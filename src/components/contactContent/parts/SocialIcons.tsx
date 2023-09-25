import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";
import { SocialIcon } from "./SocialIcon";

export const SocialIcons = () => {
  return (
    <div className="mt-auto flex gap-4">
      {[LinkedinBoxFillIcon, GithubFillIcon, MailFillIcon].map((Icon, index) => (
        <SocialIcon Icon={Icon} index={index} key={`social-icon-${index}`} />
      ))}
    </div>
  );
};
