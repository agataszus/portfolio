import { ContactContent } from "@/components/contactContent/ContactContent";
import { Topbar } from "@/components/topbar/Topbar";

export default function ContactPage() {
  return (
    <div className="mx-auto flex h-full max-w-8xl flex-col px-9 py-6 desktop-mid:max-w-7xl tablet:pb-24 mobile:px-8">
      <Topbar />
      <div className="my-auto flex h-auto w-full gap-24">
        <ContactContent />
        <div className="flex h-[500px] w-1/2 shrink-0"></div>
      </div>
    </div>
  );
}
