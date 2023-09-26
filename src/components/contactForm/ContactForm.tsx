import { motion } from "framer-motion";
import { EMAIL, FormLabel, MESSAGE, NAME } from "./parts/FormLabel";
import { ButtonSubmit } from "./parts/ButtonSubmit";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";
import { Text } from "../text/Text";
import { Loader } from "../loader/Loader";

type Status = "loading" | "success" | "error" | "required" | null;

export const ContactForm = () => {
  const [status, setStatus] = useState<Status>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const contactForm = new FormData(event.target as HTMLFormElement);
    const nameValue = contactForm.get(NAME) as string;
    const emailValue = contactForm.get(EMAIL) as string;
    const messageValue = contactForm.get(MESSAGE) as string;

    if (!nameValue || !emailValue || !messageValue) {
      setStatus("required");
      return;
    }

    const contactTarget = { from_name: nameValue, from_email: emailValue, message: messageValue };

    try {
      setStatus("loading");
      const response = await emailjs.send("service_zc20vne", "template_hplfmwi", contactTarget, "1BeFldZU9HN2RnwBu");

      if (response.status === 200) {
        setStatus("success");
        formRef.current?.reset();
      } else throw new Error("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex h-[512px] w-[482px] shrink-0 flex-col justify-between bg-background-color-dark/60 p-10 shadow-lg"
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
      <div className="flex h-16 flex-col items-end justify-center gap-2">
        {status === "required" && (
          <Text tag="p" variant="caption-1" className="text-end text-red-600">
            All inputs are required!
          </Text>
        )}
        {(!status || status == "required") && <ButtonSubmit />}
        {status === "loading" && (
          <div className="flex items-center gap-1">
            <Loader />
            <Text tag="p" variant="caption-1" className="text-end text-primary">
              Loading...
            </Text>
          </div>
        )}
        {status === "success" && (
          <Text tag="p" variant="caption-1" className="text-end text-green-500">
            Message send successfully!
          </Text>
        )}
        {status === "error" && (
          <div className="flex flex-col items-end gap-2">
            <Text tag="p" variant="caption-1" className="mt-5 text-end text-red-600">
              Couldn&apos;t send the message.
            </Text>
            <ButtonSubmit label="Try again" />
          </div>
        )}
      </div>
    </motion.form>
  );
};
