import { Route, Routes } from "react-router-dom";
import { PAGES } from "./router.const";
import HomePage from "../../pages/HomePage";
import LogIn from "../../pages/auth/LogIn";
import Regis from "../../pages/auth/Regis";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={PAGES.HOME} element={<HomePage />} />

      {/* Auth */}
      <Route path={PAGES.LOGIN} element={<LogIn />} />
      <Route path={PAGES.REGIS} element={<Regis />} />
    </Routes>
  );
};

export default AppRouter;
