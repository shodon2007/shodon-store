import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import classes from "./Auth.module.scss";
import MyButton from "../../components/UI/button/MyButton";
import MyInput from "../../components/UI/input/MyInput";
import MyTitle from "../../components/UI/title/MyTitle";
import authService from "../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { login } from "../../store/slice/userSlice";
import { useNavigate } from "react-router";

const Auth = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.user.token);

    useEffect(() => {
        if (token) {
            console.log("Пошел нафиг отсюда 🗿");
            navigate("/");
        }
    });

    async function loginClick(e: MouseEvent) {
        e.preventDefault();
        const data = await authService.login(username, password);

        console.log(data);

        if (data.status === 201 && data.token && data.username) {
            dispatch(
                login({
                    token: data.token,
                    username: data.username,
                })
            );
        } else {
            alert(data.message);
        }
    }
    async function registrationClick(e: MouseEvent) {
        e.preventDefault();
        const data = await authService.registration(username, password);

        if (data.status === 201 && data.token && data.username) {
            dispatch(
                login({
                    token: data.token,
                    username: data.username,
                })
            );
        } else {
            alert(data.message);
        }
    }

    return (
        <div className={classes.auth}>
            <form className={classes.form}>
                <div className={classes.inputs}>
                    <MyTitle>Регистрация</MyTitle>
                    <MyInput
                        type="text"
                        placeholder="login"
                        value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setUsername(e.target.value)
                        }
                    />
                    <MyInput
                        type="password"
                        minLength={8}
                        placeholder="password"
                        required
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setPassword(e.target.value);
                        }}
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
