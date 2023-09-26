import { ContactContent } from "@/components/contactContent/ContactContent";
import { ContactForm } from "@/components/contactForm/ContactForm";
import { Topbar } from "@/components/topbar/Topbar";

export default function ContactPage() {
  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24 desktop-small:gap-16 tablet:min-h-screen tablet:flex-col tablet:items-center tablet:gap-24 tablet:pt-[88px] mobile:gap-12">
        <ContactContent />
        <ContactForm />
      </div>
    </div>
  );
}
