import { Outlet } from "react-router-dom";
import style from "./auth.module.scss";
import Nu1 from "@/shared/logo-type/Nu1";

const AuthPage = () => {
  return (
    <div className={`df aic`}>
      <div className={`${style.left} df jcc aic`}>
        <Nu1 />
      </div>
      <Outlet />
    </div>
  );
};

export default AuthPage;
