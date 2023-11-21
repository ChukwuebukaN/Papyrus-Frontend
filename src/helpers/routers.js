import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
import { ReactComponent as PapyrusIconAnimated } from "../assets/svg/papyrus-icon.svg";

const LandingPage = React.lazy(
  () => import("../pages/landing-page/landing-page"),
);

function Routers() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <PapyrusIconAnimated className="spinning" />
        </div>
      }
    >
      <Routes>
        <Route
          exact
          path={NonAuthRoutes.landingPage}
          element={<LandingPage />}
        />
      </Routes>
    </Suspense>
  );
}
export default Routers;
