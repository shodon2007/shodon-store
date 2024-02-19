import { FC } from "react";
// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import productService from "../../services/product.service";
import { useParams } from "react-router";
import cls from "./Devices.module.scss";
import { useQuery } from "@tanstack/react-query";
import productApi from "/shared/api/productApi";
import Device from "./Device";
import Filter from "/widgets/Filter/ui/Filter";
import { useGetDevices } from "/shared/hooks/useGetCatalog/useGetDevices";

// import ProductList from "../../components/ProductList/ProductList";
// import Filter from "../../components/Filter/Filter";
// import { TFilter } from "../../types/product";

type Params = {
    type: string;
};

const Devices: FC = () => {
    const { type } = useParams<Params>();
    //
    // if (!type) {
    //     return "кароче ашибка";
    // }
    // const [filter, setFilter] = useState<TFilter>({ type, filter: [] });
    const { data, isLoading, isError, error } = useGetDevices(type);

    if (isLoading) {
        return "загрузка...";
    }

    if (isError) {
        return error.message;
    }

    console.log(data);

    return (
        <div className={cls.devices}>
            <Filter />
            <div className={cls.products}>
                {data.map(device => {
                    return <Device product={device} key={device.id} />
                })}
            </div>
        </div>
    );
};

export default Devices;
