import { FC } from "react";
import classes from "./Catalog.module.scss";
import { useQuery } from "@tanstack/react-query";
import catalogService from "../../services/catalog.service";
import { URL } from "../../global";
import { Link } from "react-router-dom";

const Catalog: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["catalog"],
        queryFn: () => catalogService.getCatalog(),
    });

    if (isLoading) {
        return <div>Загрузка</div>;
    }

    if (!data) {
        return <div>ошибка</div>;
    }

    return (
        <div className={classes.catalog}>
            {data.map((catalog, i) => {
                return (
                    <Link to={catalog.name} key={i} className={classes.item}>
                        <div className={classes.img}>
                            <img src={`//${URL}${catalog.img}`} alt="img" />
                        </div>
                        <span>{catalog.name_ru}</span>
                    </Link>
                );
            })}
        </div>
    );
};

export default Catalog;
