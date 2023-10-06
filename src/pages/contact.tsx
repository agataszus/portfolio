import { ContactContent } from "@/components/contactContent/ContactContent";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { Topbar } from "@/components/topbar/Topbar";
import { useScrollToTopOnRender } from "@/hooks/useScrollToTopOnRender";
import { ContactContentResponse, getContactContent } from "@/services/content/getContactContent";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps<ContactContentResponse> = async () => {
  const { contactContent } = await getContactContent();

  return {
    props: { contactContent },
  };
};

export default function ContactPage({ contactContent }: ContactContentResponse) {
  useScrollToTopOnRender();

  const { subtitle, title, description, email } = contactContent;

  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24 desktop-small:gap-16 tablet:min-h-screen tablet:flex-col tablet:items-center tablet:gap-24 tablet:pt-[88px] mobile:gap-12">
        <ContactContent subtitle={subtitle} title={title} description={description} email={email} />
        <ContactForm />
      </div>
    </div>
  );
}
