import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from 'react';
import cls from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { login } from '/app/providers/redux';
import authApi from '/shared/api/authApi';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    async function loginClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const data = await authApi.login(username, password);

        if (data.error) {
            alert(data.message)
        }

        dispatch(
            login({
                token: data.token,
                username: data.username,
            })
        );
    }

    return (
        <form className={cls.form}>
            <div className={cls.inputs}>
                <input
                    type="text"
                    placeholder="login"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                />
                <input
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
            <button className={cls.button} onClick={(e) => loginClick(e)}>Войти</button>
        </form>
    )
};

export default Login