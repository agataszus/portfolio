import { Button } from "../button/Button";
import { Navbar } from "../navbar/Navbar";
import { Text } from "../text/Text";
import { motion } from "framer-motion";
import { MobileNavbar } from "../mobileNavbar/MobileNavbar";

export const Topbar = () => {
  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex h-full w-full items-center justify-between"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: [50, 0], opacity: [0, 1] }}
        transition={{
          y: { duration: 0.5, ease: "easeOut" },
          opacity: { duration: 0.7, ease: "easeOut" },
        }}
      >
        <div className="flex flex-col">
          <Text tag="p" variant="subtitle-1" className="leading-tight tracking-widest text-primary">
            Agata
          </Text>
          <Text tag="p" variant="subtitle-1" className="leading-tight tracking-widest text-white">
            Szustkiewicz
          </Text>
        </div>

        <MobileNavbar />
        <Navbar />
        <motion.div
          className="tablet:hidden"
          initial={["buttonHidden", "textHidden"]}
          animate={["buttonVisible", "textVisible"]}
        >
          <Button variant="small" text="contact" additionalDelay={0.4} />
        </motion.div>
      </motion.div>
    </div>
  );
};
