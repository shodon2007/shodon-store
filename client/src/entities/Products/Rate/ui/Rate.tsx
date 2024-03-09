import { FC } from 'react';
import starPng from '../model/star.png';

interface RateProps {
	rate: number;
}

const Rate: FC<RateProps> = () => {
	return (
		<div>
			<img src={starPng} alt='оценка' />
		</div>
	);
};

export default Rate;
