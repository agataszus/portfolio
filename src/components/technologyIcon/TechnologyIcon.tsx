import ArrowRightSFillIcon from "remixicon-react/ArrowRightSFillIcon";

type TechnologyIconProps = {
  Icon: typeof ArrowRightSFillIcon | "next" | "javascript";
};

export const TechnologyIcon = ({ Icon }: TechnologyIconProps) => {
  const iconClassName = "h-auto w-8 fill-primary/70 z-10 relative";

  if (Icon === "next")
    return (
      <svg
        aria-label="Next.js logomark"
        className="[next-mark_root__iLw9v] relative z-10 h-auto w-8"
        height="80"
        role="img"
        viewBox="0 0 180 180"
        width="80"
      >
        <mask
          height="180"
          id=":R0:mask0_408_134"
          maskUnits="userSpaceOnUse"
          // style="mask-type:alpha"
          style={{ maskType: "alpha" }}
          width="180"
          x="0"
          y="0"
        >
          <circle cx="90" cy="90" fill="#95FAFE" r="90"></circle>
        </mask>
        <g mask="url(#:R0:mask0_408_134)">
          <circle cx="90" cy="90" data-circle="true" fill="#95FAFE70" r="90"></circle>
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
            fill="url(#:R0:paint0_linear_408_134)"
          ></path>
          <rect fill="url(#:R0:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id=":R0:paint0_linear_408_134"
            x1="109"
            x2="144.5"
            y1="116.5"
            y2="160.5"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id=":R0:paint1_linear_408_134"
            x1="121"
            x2="120.799"
            y1="54"
            y2="106.875"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="white" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
      </svg>
    );

  if (Icon === "javascript")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={iconClassName}>
        <path d="M13.3344 16.055 12.4764 17.243C13.2904 17.969 14.3024 18.332 15.5124 18.332 16.4364 18.31 17.1404 18.0717 17.6244 17.617 18.1157 17.155 18.3614 16.605 18.3614 15.967 18.3614 15.3437 18.1891 14.8303 17.8444 14.427 17.4997 14.0237 16.9204 13.701 16.1064 13.459 15.4317 13.2537 14.9551 13.0667 14.6764 12.898 14.3977 12.722 14.2584 12.5093 14.2584 12.26 14.2584 12.0327 14.3721 11.8493 14.5994 11.71 14.8267 11.5707 15.1311 11.501 15.5124 11.501 15.7911 11.501 16.1064 11.556 16.4584 11.666 16.8104 11.7613 17.1221 11.9153 17.3934 12.128L18.1634 10.929C17.4887 10.3863 16.5941 10.115 15.4794 10.115 14.6801 10.115 14.0237 10.3203 13.5104 10.731 12.9824 11.1417 12.7184 11.6513 12.7184 12.26 12.7257 12.9053 12.9384 13.4077 13.3564 13.767 13.7817 14.1263 14.3867 14.4197 15.1714 14.647 15.8241 14.8523 16.2677 15.0577 16.5024 15.263 16.7297 15.4683 16.8434 15.7177 16.8434 16.011 16.8434 16.297 16.7297 16.517 16.5024 16.671 16.2677 16.8323 15.9304 16.913 15.4904 16.913 14.7717 16.9203 14.0531 16.6343 13.3344 16.055ZM7.80405 16.693C7.58405 16.561 7.37872 16.3667 7.18805 16.11L6.15405 16.957C6.46205 17.4777 6.84339 17.8407 7.29805 18.046 7.72339 18.2367 8.21105 18.332 8.76105 18.332 9.06172 18.332 9.37339 18.2843 9.69605 18.189 10.0187 18.0937 10.3157 17.9323 10.5871 17.705 11.0637 17.3237 11.3131 16.7003 11.3351 15.835V10.247H9.85005V15.549C9.85005 16.055 9.73639 16.4107 9.50905 16.616 9.28172 16.814 8.99572 16.913 8.65105 16.913 8.32105 16.913 8.03872 16.8397 7.80405 16.693ZM3 6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM6 5C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6Z"></path>
      </svg>
    );

  return <Icon className={iconClassName} />;
};
