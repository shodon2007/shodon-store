import { FC } from 'react';
import StarSvg from '../model/star.svg';
import cls from './Rate.module.scss';

interface RateProps {
	rate: number;
}

const Rate: FC<RateProps> = ({ rate }) => {
	const stars = [];

	for (let i = 0; i < 5; i++) {
		stars.push(<StarSvg key={i} className={cls.star} />);
	}

	return (
		<div className={cls.rate}>
			<div className={cls.container}>
				<div
					className={cls.stars}
					style={{ width: `${20 * (rate === 0 ? 1 : rate)}%` }}
				>
					{stars.map(el => el)}
				</div>
			</div>
			{stars.map(el => el)}
		</div>
	);
};

export default Rate;
