import { FC, useState } from "react";
// import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
// import productService from "../../services/product.service";
import { useParams } from "react-router";
import cls from "./Devices.module.scss";
import Device from "./Device";
import { useGetDevices } from "src/shared/hooks/useGetDevices";
import { useSearchParams } from "react-router-dom";
import { useGetFilter } from "src/shared/hooks/useGetFilter";
import { FilterType } from "src/shared/api/filterApi";
import { Filter } from "src/widgets/Filter";

// import ProductList from "../../components/ProductList/ProductList";
// import Filter from "../../components/Filter/Filter";
// import { TFilter } from "../../types/product";

type Params = {
    type: string;
};

const Devices: FC = () => {
    // const [searchParams, setSearchParams] = useSearchParams();

    const { type } = useParams<Params>();
    const [filter, setFilter] = useState<FilterType>({});
    //
    // if (!type) {
    //     return "кароче ашибка";
    // }
    // const [filter, setFilter] = useState<TFilter>({ type, filter: [] });
    const { data, isLoading, isError, error } = useGetDevices(filter, type);

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
