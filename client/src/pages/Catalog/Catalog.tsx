import { FC } from "react";

import { useGetCatalog } from "src/shared/hooks/useGetCatalog";

import cls from "./Catalog.module.scss";
import { Link } from "react-router-dom";
import { serverUrl } from "src/shared/api/generalApi";

const Catalog: FC = () => {

    const { data: catalog, isLoading, error, isError, status } = useGetCatalog();

    if (isLoading) {
        return <span>Загрузка...</span>
    }

    if (isError) {
        return error.message;
    }

    return (
        <div className={cls.catalog}>
            {catalog.data.map(elem => {
                return <Link to={`/${elem.name}`} className={cls.item} key={elem.id}>
                    <div className={cls.img}>
                        <img src={`${serverUrl}/img${elem.img}`} alt={elem.name} />
                    </div>
                    <span className={cls.name}>{elem.name_ru}</span>
                </Link>;
            })}
        </div>
    );
};

export default Catalog;
