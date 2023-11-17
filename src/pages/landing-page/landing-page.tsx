import React from "react";
import { useWindowResize } from "../../helpers/useWindowResize";

function LandingPage() {
  const { width } = useWindowResize();

  /** Displays Desktop */
  const desktop = () => {
    return (
      <div className="">
        <div className="absolute">
          <p>Hiiii</p>
        </div>
        <div className="h-[250px] bg-[#dde2ea] top-0 -z-10 sticky" />
      </div>
    );
  };

  /** Displays Mobile */
  const mobile = () => {
    return (
      <div className="w-full h-screen">
        <p>Hiiii</p>
      </div>
    );
  };

  return <div>{width > 1060 ? <>{desktop()}</> : <>{mobile()}</>}</div>;
}

export default LandingPage;
