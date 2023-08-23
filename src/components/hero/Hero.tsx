import { Button } from "../button/Button";
import { Text } from "../text/Text";

export const Hero = () => {
  return (
    <div className="flex w-[470px] flex-col">
      <Text tag="p" variant="subtitle-2" className="mb-10">
        Agata Szustkiewicz
      </Text>
      <Text tag="h1" variant="heading-1" className="mb-14">
        Hi! I&apos;m Agata. Frontend Developer & blah blah
      </Text>
      <Button variant="large" text="My projects" />
    </div>
  );
};
