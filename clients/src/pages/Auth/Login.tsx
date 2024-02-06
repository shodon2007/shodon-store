import { ChangeEvent, MouseEvent, MouseEventHandler, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '/app/providers/redux';
import { ModalContext } from "/widgets/Modal";

import authApi from '/shared/api/authApi';
import Button from '/shared/ui/Button/Button';
import Input from '/shared/ui/Input/Input';

import cls from './Auth.module.scss';


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const closeModal = useContext(ModalContext);

    async function loginClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const data = await authApi.login(username, password);

        if (data.error) {
            return alert(data.message)
        }

        dispatch(
            login({
                token: data.token,
                username: data.username,
            })
        );
        closeModal.closeModal();
    }

    return (
        <form className={cls.form}>
            <div className={cls.inputs}>
                <Input
                    type="text"
                    placeholder="login"
                    value={username}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setUsername(e.target.value)
                    }
                />
                <Input
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
            <Button className={cls.button} onClick={(e) => loginClick(e)}>Войти</Button>
        </form>
    )
};

export default Login