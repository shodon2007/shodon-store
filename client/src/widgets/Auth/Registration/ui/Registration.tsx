import { ChangeEvent, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from 'src/app/providers/redux';
import authApi from 'src/shared/api/authApi';
import Button from 'src/shared/ui/Button/Button';
import Input from 'src/shared/ui/Input/Input';

import cls from './Registration.module.scss';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

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
				}),
			);
			alert(res.data.message);
			navigate('/');
		}
	}

	return (
		<>
			<div className={cls.inputs} data-testid='registration-page'>
				<Input
					type='text'
					placeholder='login'
					value={username}
					data-testid='registration-input'
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUsername(e.target.value)
					}
				/>
				<Input
					type='password'
					minLength={8}
					placeholder='password'
					required
					data-testid='registration-input'
					value={password}
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setPassword(e.target.value);
					}}
				/>
			</div>
			<Button
				className={cls.button}
				onClick={e => registrationClick(e)}
				data-testid='registration-button'
			>
				Зарегестрироваться
			</Button>
		</>
	);
};

export default Registration;
