import { motion } from "framer-motion";
import { EMAIL, FormLabel, MESSAGE, NAME } from "./parts/FormLabel";
import { ButtonSubmit } from "./parts/ButtonSubmit";

export const ContactForm = () => {
  return (
    <motion.form
      className="flex h-[492px] w-[482px] shrink-0 flex-col justify-between bg-background-color-dark/60 p-10 shadow-lg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ opacity: [0, 1], scale: [0.8, 1] }}
      transition={{ delay: 0.2, duration: 0.5, type: "spring", stiffness: 80 }}
    >
      {[
        { labelText: "Name", name: NAME, variant: "input" } as const,
        { labelText: "Email", name: EMAIL, variant: "input" } as const,
        { labelText: "Message", name: MESSAGE, variant: "textarea" } as const,
      ].map(({ labelText, name, variant }, index) => (
        <FormLabel
          labelText={labelText}
          name={name}
          index={index}
          variant={variant}
          key={`contact-form-${labelText}`}
        />
      ))}
      <ButtonSubmit />
    </motion.form>
  );
};
