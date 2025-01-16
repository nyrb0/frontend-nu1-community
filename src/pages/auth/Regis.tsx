import AuthInput from "./ui/input";
import styles from "./auth.module.scss";
import PrimeryButton from "../../shared/UI/Buttons/PrimeryButton";
import { COLORS } from "@/shared/constants/colors";

const Regis = () => {
  return (
    <div className={`${styles.auth}`}>
      <div className={`${styles.right} df jcc`}>
        <div>
          <h1>Регистрация</h1>

          <div className={styles.input}>
            <AuthInput label={"Имя"} />
          </div>
          <div className={styles.input}>
            <AuthInput label={"Имя пользователя"} />
          </div>
          <div className={styles.input}>
            <AuthInput label={"email"} />
          </div>
          <div className={styles.input}>
            <AuthInput label={"пароль"} />
          </div>
          <div className={styles.input}>
            <AuthInput label={"повторите пароль"} />
          </div>

          <div className={`${styles.forgetPassword} df jce`}>
            Забыли пароль?
          </div>

          <div className={styles.button}>
            <PrimeryButton color={COLORS.WHITE} background={COLORS.BLUE}>
              Войти
            </PrimeryButton>
          </div>

          <div className={styles.isHaveAcc}>
            У вас уже есть аккаунт? <span>войти</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regis;
