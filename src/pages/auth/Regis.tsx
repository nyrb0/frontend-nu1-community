import AuthInput from "./ui/input";
import styles from "./auth.module.scss";

import { COLORS } from "@/shared/constants/colors";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth } from "@/shared/types/auth.types";
import PrimaryButton from "@/shared/UI/Buttons/PrimeryButton";
import { authService } from "@/shared/services/auth.service";

const Regis = () => {
  const { handleSubmit, control } = useForm<IAuth>();

  const regisHandler: SubmitHandler<IAuth> = async (data) => {
    try {
      await authService.auth("regis", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`${styles.auth}`}>
      <div className={`${styles.right} df jcc`}>
        <div>
          <h1>Регистрация</h1>
          <form onSubmit={handleSubmit(regisHandler)}>
            <div className={styles.input}>
              <AuthInput label={"Имя"} />
            </div>
            <div className={styles.input}>
              <AuthInput label={"Имя пользователя"} />
            </div>
            <div className={styles.input}>
              <AuthInput label={"Email"} />
            </div>
            <div className={styles.input}>
              <AuthInput label={"Пароль"} />
            </div>
            <div className={styles.input}>
              <AuthInput label={"Повторите пароль"} />
            </div>

            <div className={`${styles.forgetPassword} df jce`}>
              Забыли пароль?
            </div>

            <div className={styles.button}>
              <PrimaryButton color={COLORS.WHITE} background={COLORS.BLUE}>
                Войти
              </PrimaryButton>
            </div>
          </form>

          <div className={styles.isHaveAcc}>
            У вас уже есть аккаунт?{" "}
            <span>
              <Link to={"/auth/login"}>Войти</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regis;
