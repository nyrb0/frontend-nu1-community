import AuthInput from "./ui/input";
import styles from "./auth.module.scss";
import PrimeryButton from "../../shared/UI/Buttons/PrimeryButton";

const LogIn = () => {
  return (
    <div className={styles.auth}>
      <h1>Log In</h1>
      <div className={styles.input}>
        <AuthInput label={"Email"} />
      </div>
      <div className={styles.input}>
        <AuthInput label={"Password"} />
      </div>
      <div className={styles.button}>
        <PrimeryButton>
          Log In
          <div>fv</div>
        </PrimeryButton>
      </div>
    </div>
  );
};

export default LogIn;
