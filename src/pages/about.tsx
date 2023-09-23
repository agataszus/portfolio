import { Button } from "@/components/button/Button";
import { Text } from "@/components/text/Text";
import { Topbar } from "@/components/topbar/Topbar";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const SUBHEADING_SLIDE_OFFSET = 250;

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24">
        <div className="flex h-[540px] w-[420px] shrink-0 bg-white"></div>
        <div className="flex w-full flex-col gap-8">
          <div className="w-[250px] overflow-hidden">
            <motion.div
              initial={{ x: SUBHEADING_SLIDE_OFFSET }}
              animate={{ x: [SUBHEADING_SLIDE_OFFSET, 0] }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Text tag="p" variant="subtitle-2">
                Agata Szustkiewicz
              </Text>
            </motion.div>
          </div>
          <Text tag="h1" variant="heading-2">
            About me
          </Text>
          <Text tag="p" variant="action-1" className="font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
            dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
            dolorem deserunt. Architecto iste sint hic exercitationem, itaque dignissimos illum atque cupiditate
            voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde dolorem deserunt.
            <br />
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
            dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
            dolorem deserunt.
          </Text>
          <div className="mt-auto flex gap-8">
            <motion.div
              initial={["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"]}
              animate={["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"]}
            >
              <Button
                variant="large"
                text="My projects"
                onClick={() => router.push("/projects")}
                additionalDelay={0.5}
              />
            </motion.div>
            <motion.div
              initial={["buttonHidden", "textHidden", "arrowHidden", "arrowContainerHidden"]}
              animate={["buttonVisible", "textVisible", "arrowVisible", "arrowContainerVisible"]}
            >
              <Button variant="large" text="Contact" onClick={() => router.push("/projects")} additionalDelay={0.5} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
