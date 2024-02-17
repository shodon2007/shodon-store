import { FC } from "react";
import { Product } from "/shared/api/productApi";
import { serverUrl } from "/shared/config/server/server";
import cls from './Device.module.scss';
import Title from "/shared/ui/Title/Title";
import Button from "/shared/ui/Button/Button";

interface DeviceProps {
    product: Product
}

const Device: FC<DeviceProps> = ({ product }) => {
    const {
        brand_id,
        id,
        img,
        name,
        price,
        rate,
        reviews,
        type_id,
        attributes,
    } = product;


    return <div className={cls.device}>
        <div className={cls.left}>
            <img className={cls.image} src={`${serverUrl}/img${img}`} />
        </div>
        <div className={cls.center}>
            <Title>{name}</Title>
            <div className={cls.attributes}>
                {attributes.map(elem => {
                    return <div key={elem.id}>
                        <span>{elem.title}</span>:
                        <span>{elem.description}</span>
                    </div>
                })}
            </div>
        </div>
        <div className={cls.right}>
            <Title>{price}₽</Title>
            <Button>В корзину</Button>
        </div>
    </div>;
};

export default Device;
