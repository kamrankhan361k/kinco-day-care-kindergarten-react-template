import { Fragment, useEffect } from "react";
import { scrollTopFun } from "../utils";

const ScrollTop = () => {
  useEffect(() => {
    scrollTopFun();
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Fragment>
      <a id="scroll-top" onClick={() => onClick()}></a>
    </Fragment>
  );
};
export default ScrollTop;
