import { FC } from 'react';

import Title from 'src/shared/ui/Title/Title';
import Button from 'src/shared/ui/Button/Button';
import { serverUrl } from 'src/shared/api/generalApi';

import cls from './Device.module.scss';
import { Attributes } from 'src/entities/Products/Attributes';
import { Reviews } from 'src/entities/Products/Reviews';
import Rate from 'src/entities/Products/Rate';
import { Product } from 'src/app/types/product';

interface DeviceProps {
	product: Product;
}

const Device: FC<DeviceProps> = ({ product }) => {
	const { img, name, price, attributes, reviews, rate } = product;

	return (
		<div className={cls.device} data-testid='device-item'>
			<img className={cls.image} src={`${serverUrl}/img${img}`} />
			<div className={cls.center}>
				<div className={cls.top}>
					<Title>{name}</Title>
					<Attributes attributes={attributes} />
				</div>
				<div className={cls.bottom}>
					<Reviews reviews={+reviews} />
					<Rate rate={+rate} />
				</div>
			</div>
			<div className={cls.right}>
				<Title>{price}₽</Title>
				<Button>В корзину</Button>
			</div>
		</div>
	);
};

export default Device;
