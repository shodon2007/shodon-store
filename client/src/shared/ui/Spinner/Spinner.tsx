import classNames from 'src/shared/lib/classNames/classNames';
import cls from './Spinner.module.scss';
import { FC } from 'react';

interface SpinnerProps {
	className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className }) => {
	return (
		<div className={classNames(cls.spinner, {}, [className])}>
			<div className={cls.body}>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
