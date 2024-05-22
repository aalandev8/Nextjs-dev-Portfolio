type HamburgerSVGProps = {
  height?: number;
  width?: number;
  fill?: string;
};

export const HamburgerSVG = ({
  height = 30,
  width = 30,
  fill = "#000",
}: HamburgerSVGProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 18V15H27.5V18H0.5ZM0.5 10.5V7.5H27.5V10.5H0.5ZM0.5 3V0H27.5V3H0.5Z"
        fill={fill}
      />
    </svg>
  );
};
