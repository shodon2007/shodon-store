import { FC } from 'react';

import { Product } from 'src/shared/api/productApi';
import Title from 'src/shared/ui/Title/Title';
import Button from 'src/shared/ui/Button/Button';
import { serverUrl } from 'src/shared/api/generalApi';

import cls from './Device.module.scss';
import { Attributes } from 'src/entities/Products/Attributes';
import { Reviews } from 'src/entities/Products/Reviews';
import Rate from 'src/entities/Products/Rate';

interface DeviceProps {
	product: Product;
}

const Device: FC<DeviceProps> = ({ product }) => {
	const { img, name, price, attributes, reviews, rate } = product;

	return (
		<div className={cls.device} data-testid='device-item'>
			<div className={cls.left}>
				<img className={cls.image} src={`${serverUrl}/img${img}`} />
			</div>
			<div className={cls.center}>
				<Title>{name}</Title>
				<Attributes attributes={attributes} />
				<Reviews reviews={+reviews} />
				<Rate rate={+rate} />
			</div>
			<div className={cls.right}>
				<Title>{price}₽</Title>
				<Button>В корзину</Button>
			</div>
		</div>
	);
};

export default Device;
