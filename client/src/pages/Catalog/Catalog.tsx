import { FC } from "react";
import classes from "./Catalog.module.scss";
import { useQuery } from "@tanstack/react-query";
import catalogService from "../../services/catalog.service";
import { URL } from "../../global";
import { Link } from "react-router-dom";
import Loading from "../../static/loading.webp";

const Catalog: FC = () => {
    const { data, isLoading } = useQuery({
        queryKey: ["catalog"],
        queryFn: () => catalogService.getCatalog(),
    });

    if (isLoading) {
        return <Sceleton />;
    }

    if (!data) {
        return <div>ашибка, ну вообще врятли эта будет</div>;
    }

    return (
        <div className={classes.catalog}>
            {data.map((catalog, i) => {
                return (
                    <Link to={catalog.name} key={i} className={classes.item}>
                        <div className={classes.img}>
                            <img src={`${URL}/${catalog.img}`} alt="img" />
                        </div>
                        <span>{catalog.name_ru}</span>
                    </Link>
                );
            })}
        </div>
    );
};

const Sceleton = () => {
    const sceletons = [];

    for (let i = 0; i < 6; i++) {
        sceletons.push(
            <div className={classes.loading} key={i}>
                <img src={Loading} alt="loading" />
            </div>
        );
    }
    return <div className={classes.catalog}>{sceletons.map((i) => i)}</div>;
};

export default Catalog;
