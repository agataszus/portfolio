import { PageDescription } from "../pageDescription/PageDescription";
import { PageTitle } from "../pageTitle/PageTitle";
import { Email } from "./parts/Email";
import { SocialIcons } from "./parts/SocialIcons";

export const ContactContent = () => {
  return (
    <div className="flex w-full flex-col gap-8 tablet:gap-7 mobile:items-center">
      <PageTitle subtitle="Contact" title="Get in touch" />
      <PageDescription
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto iste sint hic exercitationem, itaque
          dignissimos illum atque cupiditate voluptate quos harum dolor aliquid quibusdam iure doloribus vitae unde
          dolorem deserunt."
      />
      <Email />
      <SocialIcons />
    </div>
  );
};
