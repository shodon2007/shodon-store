import { ChangeEvent, MouseEvent, useContext, useState } from 'react';
import cls from './Auth.module.scss';
import { useDispatch } from 'react-redux';
import { login } from 'src/app/providers/redux';
import authApi from 'src/shared/api/authApi';
import Button from 'src/shared/ui/Button/Button';
import Input from 'src/shared/ui/Input/Input';
import { ModalContext } from 'src/widgets/Modal';


const Registration = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const closeModal = useContext(ModalContext);

    async function registrationClick(e: MouseEvent) {
        e.preventDefault();
        const res = await authApi.registration(username, password);

        if (res instanceof Error && res.name === 'AxiosError') {
            return alert(res.response.data.message);
        }

        if ('data' in res) {
            dispatch(
                login({
                    token: res.data.token,
                    username: res.data.username,
                })
            );
        }

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
            <Button className={cls.button} onClick={(e) => registrationClick(e)}>Зарегестрироваться</Button>
        </form>
    )
};

export default Registration