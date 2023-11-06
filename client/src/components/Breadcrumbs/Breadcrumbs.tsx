import { useLocation, useParams } from "react-router";
import classes from "./Breadcrumbs.module.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import catalogService from "../../services/catalog.service";
import { TCatalog } from "../../types/catalog";

const Breadcrumbs = () => {
    const params = useParams();
    const path = useLocation().pathname;

    const { data: Catalog, isLoading } = useQuery({
        queryKey: ["catalog"],
        queryFn: () => catalogService.getCatalog(),
    });

    const pathList: any = {
        "/auth": "Аутентификация",
        "/admin": "Админ зона",
        else: "Хз где мы",
    };

    if (isLoading) {
        return "loading";
    }

    if (!Catalog) {
        return "ашибка";
    }

    return (
        <div className={classes.breadcrumbs}>
            {"type" in params || !path.slice(1) ? (
                <Link to={"/"}>
                    <span>Каталог</span>
                </Link>
            ) : (
                <Link to={path.slice(1)}>{pathList[path]}</Link>
            )}
            {">"}
            {"type" in params ? GenerateProducts(Catalog, params.type) : ""}
        </div>
    );
};

function GenerateProducts(catalog: TCatalog[], type: string | undefined) {
    const item = catalog.filter((i) => i.name === type)[0];
    return <Link to={`/${type}`}>{item.name_ru}</Link>;
}

export default Breadcrumbs;
