import { PageDescription } from "../pageDescription/PageDescription";
import { PageTitle } from "../pageTitle/PageTitle";
import { Email } from "./parts/Email";
import { SocialIcons } from "./parts/SocialIcons";

type ContactContentProps = {
  subtitle: string;
  title: string;
  description: string;
  email: string;
};

export const ContactContent = ({ subtitle, title, description, email }: ContactContentProps) => {
  return (
    <div className="flex w-full flex-col gap-8 tablet:gap-7 mobile:items-center">
      <PageTitle subtitle={subtitle} title={title} />
      <PageDescription description={description} />
      <Email email={email} />
      <SocialIcons />
    </div>
  );
};
