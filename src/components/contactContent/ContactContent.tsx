import { Text } from "../text/Text";
import { ContactDescription } from "./parts/ContactDescription";
import { ContactTitle } from "./parts/ContactTitle";
import { SocialIcons } from "./parts/SocialIcons";

export const ContactContent = () => {
  return (
    <div className="flex w-full flex-col gap-8 ">
      <ContactTitle />
      <ContactDescription />
      <div className="flex flex-col gap-1">
        <Text tag="p" variant="action-1" className="font-bold">
          Email
        </Text>
        <Text tag="p" variant="action-1" className="font-light">
          agataszus@gmail.com
        </Text>
      </div>
      <SocialIcons />
    </div>
  );
};
