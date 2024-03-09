import { FC, InputHTMLAttributes } from 'react';
import classNames from 'src/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}
const Input: FC<InputProps> = ({ className, ...props }) => {
	return (
		<input
			data-testid='input'
			{...props}
			className={classNames(cls.Input, {}, [className])}
		/>
	);
};
export default Input;
