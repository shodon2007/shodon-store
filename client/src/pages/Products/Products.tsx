import { FC, useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import productService from "../../services/product.service";
import { useParams } from "react-router";
import classes from "./Products.module.scss";

import ProductList from "../../components/ProductList/ProductList";
import Filter from "../../components/Filter/Filter";
import { TFilter } from "../../types/product";

type TParams = {
    type: string;
};

const Products: FC = () => {
    const { type } = useParams<TParams>();

    if (!type) {
        return "кароче ашибка";
    }
    const [filter, setFilter] = useState<TFilter>({ type });
    const { data, isLoading } = useQuery({
        queryKey: ["products", type],
        queryFn: () => productService.getProducts(filter),
    });

    if (isLoading) {
        return "ЭЭ ЭТА ЗАГРУЗКАА";
    }

    if (!data) {
        return "ашибка";
    }
    return (
        <div className={classes.products}>
            <Filter />
            <ProductList list={data} />
        </div>
    );
};

export default Products;
