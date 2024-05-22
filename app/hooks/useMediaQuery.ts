import { useEffect, useState } from "react";

const MOBILE_WIDTH = 768;

export const useMediaQuery = (breakpoint = MOBILE_WIDTH) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return { isMobile };
};
