import { Button } from "../button/Button";
import { Text } from "../text/Text";
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="flex w-[510px] flex-col pb-[52px]">
      <Text tag="p" variant="subtitle-2" className="mb-10">
        Agata Szustkiewicz
      </Text>
      <Text tag="h1" variant="heading-1" className="mb-14">
        Hi! I&apos;m Agata. Frontend Developer & blah blah
      </Text>
      <Button variant="large" text="My projects" onClick={() => router.push("/projects")} />
    </div>
  );
};
