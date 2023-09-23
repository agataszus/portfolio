import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import MailFillIcon from "remixicon-react/MailFillIcon";

export const SocialIcons = () => {
  const iconClassName = "w-9 h-9 fill-white";

  return (
    <div className="mt-auto flex gap-4">
      <LinkedinBoxFillIcon className={iconClassName} />
      <GithubFillIcon className={iconClassName} />
      <MailFillIcon className={iconClassName} />
    </div>
  );
};
