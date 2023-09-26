import { RefObject } from "react";
import emailjs from "@emailjs/browser";

type contactTarget = {
  from_name: string;
  from_email: string;
  message: string;
};

export const sendEmail = async (
  contactTarget: contactTarget,
  onSuccess: () => void,
  ref: RefObject<HTMLFormElement>
) => {
  const response = await emailjs.send("service_zc20vne", "template_hplfmwi", contactTarget, "1BeFldZU9HN2RnwBu");

  if (response.status === 200) {
    onSuccess();
    ref.current?.reset();
  } else throw new Error("error");
};
