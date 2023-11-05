import { MouseEvent } from "react";
import classes from "./Auth.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import MyTitle from "../../components/UI/title/MyTitle";

const Auth = () => {
    function loginClick(e: MouseEvent) {
        e.preventDefault();
    }
    function registrationClick(e: MouseEvent) {
        e.preventDefault();
    }

    return (
        <div className={classes.auth}>
            <form className={classes.form}>
                <div className={classes.inputs}>
                    <MyTitle>Войти</MyTitle>
                    <MyInput type="text" placeholder="login" />
                    <MyInput
                        type="password"
                        minLength={8}
                        placeholder="password"
                        required
                    />
                </div>
                <div className={classes.buttons}>
                    <MyButton onClick={loginClick}>Войти</MyButton>
                    <MyButton onClick={registrationClick} active>
                        Зарегестрироваться
                    </MyButton>
                </div>
            </form>
        </div>
    );
};

export default Auth;
