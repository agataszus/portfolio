import { TechIconProps } from "./icons.constants";

export const EslintIcon = ({ className }: TechIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 32 32" className={className}>
      <title>file_type_eslint</title>
      <path
        d="M29.832,16.7,23.478,27.417A1.256,1.256,0,0,1,22.36,28H9.647a1.262,1.262,0,0,1-1.118-.59L2.173,16.71a1.256,1.256,0,0,1,0-1.272L8.527,4.676A1.344,1.344,0,0,1,9.647,4H22.356a1.344,1.344,0,0,1,1.118.678l6.354,10.786a1.2,1.2,0,0,1,0,1.238ZM24.57,20.9V11.286L16,6.466l-8.56,4.82V20.9L16,25.719Z"
        style={{ fill: "#a3a3a3" }}
      />
      <polygon
        points="21.802 19.188 16.055 22.423 10.313 19.188 10.313 12.718 16.055 9.482 21.802 12.718 21.802 19.188"
        style={{ fill: "#ffffff" }}
      />
    </svg>
  );
};
