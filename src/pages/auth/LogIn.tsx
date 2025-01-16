import AuthInput from "./ui/input";
import styles from "./auth.module.scss";
import PrimeryButton from "../../shared/UI/Buttons/PrimeryButton";

import { COLORS } from "@/shared/constants/colors";

const LogIn = () => {
  return (
    <div className={`${styles.auth}`}>
      <div className={`${styles.right} df jcc`}>
        <div>
          <h1>Войти</h1>
          <div className={styles.input}>
            <AuthInput label={"Почта"} />
          </div>
          <div className={styles.input}>
            <AuthInput label={"Пароль"} />
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

export default LogIn;
