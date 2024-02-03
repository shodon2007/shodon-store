import { FC } from "react";

import { serverUrl } from "../../shared/config/server/server";
import { useGetCatalog } from "/shared/hooks/useGetCatalog/useGetCatalog";

import cls from "./Catalog.module.scss";

const Catalog: FC = () => {

    const { data: catalog, isLoading } = useGetCatalog();

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    return (
        <div className={cls.catalog}>
            {catalog.data.map(elem => {
                return <div className={cls.item} key={elem.id}>
                    <div className={cls.img}>
                        <img src={`${serverUrl}${elem.img}`} alt={elem.name} />
                    </div>
                    <span className={cls.name}>{elem.name_ru}</span>
                </div>;
            })}
        </div>
    );
};

export default Catalog;
