import { FC } from "react";
import { Product } from "/shared/api/productApi";
import { serverUrl } from "/shared/config/server/server";
import cls from './Device.module.scss';

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
    } = product;


    return <div className={cls.device}>
        <img className={cls.image} src={`${serverUrl}/img${img}`} />
        <span>{name}</span>
    </div>;
};

export default Device;
