import { FC } from 'react';

interface ReviewsProps {
	reviews: number;
}

const Reviews: FC<ReviewsProps> = ({ reviews }) => {
	return <div>{reviews} отзыва</div>;
};

export default Reviews;
