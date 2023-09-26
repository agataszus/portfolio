import { ContactDescription } from "./parts/ContactDescription";
import { ContactTitle } from "./parts/ContactTitle";
import { Email } from "./parts/Email";
import { SocialIcons } from "./parts/SocialIcons";

export const ContactContent = () => {
  return (
    <div className="flex w-full flex-col gap-8 tablet:gap-7 mobile:items-center">
      <ContactTitle />
      <ContactDescription />
      <Email />
      <SocialIcons />
    </div>
  );
};
