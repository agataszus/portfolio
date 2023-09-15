import { Text } from "../text/Text";

export const ProjectColumn = () => {
  return (
    <div className="flex h-full w-[356px] shrink-0 flex-col gap-12 border-l-2 border-primary/40 px-11 py-14">
      <Text tag="h4" variant="num-1">
        01
      </Text>
      <div className="h-1 w-[22px] bg-primary" />
      <div className="my-10 flex h-[126px] w-[126px] items-center justify-center rounded-full border-2 border-primary/30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-16 w-16 fill-primary">
          <path d="M17.0007 1.20801 18.3195 3.68083 20.7923 4.99968 18.3195 6.31852 17.0007 8.79134 15.6818 6.31852 13.209 4.99968 15.6818 3.68083 17.0007 1.20801ZM8.00065 4.33301 10.6673 9.33301 15.6673 11.9997 10.6673 14.6663 8.00065 19.6663 5.33398 14.6663.333984 11.9997 5.33398 9.33301 8.00065 4.33301ZM19.6673 16.333 18.0007 13.208 16.334 16.333 13.209 17.9997 16.334 19.6663 18.0007 22.7913 19.6673 19.6663 22.7923 17.9997 19.6673 16.333Z"></path>
        </svg>
      </div>
      <Text tag="h2" variant="heading-2">
        Eventhive
      </Text>
      <Text tag="p" variant="action-2" className="text-primary">
        See more
      </Text>
    </div>
  );
};
