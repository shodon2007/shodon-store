import { FC } from "react";
import { Product } from "/shared/api/productApi";
import { serverUrl } from "/shared/config/server/server";

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


    return <div>
        <img src={`${serverUrl}/img${img}`} />
    </div>;
};

export default Device;
