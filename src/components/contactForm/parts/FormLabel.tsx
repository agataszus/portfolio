import { Text } from "@/components/text/Text";
import { cn } from "@/styles/helpers/cn";
import { motion } from "framer-motion";

const LABEL_SLIDE_OFFSET = 20;
export const NAME = "name";
export const EMAIL = "email";
export const MESSAGE = "message";

type FormLabelProps = {
  labelText: string;
  name: typeof NAME | typeof EMAIL | typeof MESSAGE;
  index: number;
  variant: "input" | "textarea";
};

export const FormLabel = ({ labelText, index, name, variant }: FormLabelProps) => {
  const commonClassName = "w-full bg-background-color-light/70 p-2 text-sm font-normal text-white";
  const inputClassName = cn(commonClassName, "h-12");
  const textareaClassName = cn(commonClassName, "h-32 resize-none");

  const commonProps = {
    name: { name } as unknown as string,
    initial: { opacity: 0 },
    animate: { opacity: [0, 1] },
    transition: { delay: 0.5 + index / 10, duration: 0.5, ease: "easeIn" },
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: LABEL_SLIDE_OFFSET }}
          animate={{ y: [LABEL_SLIDE_OFFSET, 0] }}
          transition={{ delay: 0.5 + index / 10, duration: 0.3, ease: "easeOut" }}
        >
          <label>
            <Text tag="span" variant="action-2" className="uppercase">
              {labelText}
            </Text>
          </label>
        </motion.div>
      </div>
      {variant === "input" && <motion.input type="text" className={inputClassName} {...commonProps} />}
      {variant === "textarea" && <motion.textarea className={textareaClassName} {...commonProps} />}
    </div>
  );
};
