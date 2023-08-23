import { Button } from "../button/Button";
import { Navbar } from "../navbar/Navbar";
import { Text } from "../text/Text";

export const Topbar = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col">
        <Text tag="p" variant="subtitle-1" className="leading-tight tracking-widest text-primary">
          Agata
        </Text>
        <Text tag="p" variant="subtitle-1" className="leading-tight tracking-widest text-white">
          Szustkiewicz
        </Text>
      </div>
      <Navbar />
      <Button variant="small" text="contact" />
    </div>
  );
};
