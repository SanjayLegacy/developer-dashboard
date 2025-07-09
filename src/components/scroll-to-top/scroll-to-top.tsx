import { useEffect } from "react";

const ScrollToTop: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return <div></div>;
};

export default ScrollToTop;
