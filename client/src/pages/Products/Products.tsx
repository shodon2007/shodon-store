import { useQuery } from "@tanstack/react-query";
import productService from "../../services/product.service";
import { useParams } from "react-router";
import classes from "./Products.module.scss";
import { URL } from "../../global";
import MyButton from "../../components/UI/button/MyButton";

type TParams = {
    type: string;
};

const Products = () => {
    const { type } = useParams<TParams>();
    if (!type) {
        return "кароче ашибка";
    }

    const { data, isLoading } = useQuery({
        queryKey: ["products", type],
        queryFn: () => productService.getProducts(type),
    });

    if (isLoading) {
        return "ЭЭ ЭТА ЗАГРУЗКАА";
    }

    if (!data) {
        return "ашибка";
    }

    console.log(data);

    return (
        <div className={classes.products}>
            <div className={classes.filter}>filter</div>
            <div className={classes.list}>
                {data.map((product) => {
                    return (
                        <div key={product.id} className={classes.product}>
                            <img src={`http://${URL}${product.img}`} alt="" />
                            <div className={classes.center}>
                                <span className={classes.title}>
                                    {product.name}
                                </span>
                                <br />
                                <span className={classes.attributes}>
                                    {product.attributes.map((i) => (
                                        <span className={classes.attribute}>
                                            {`${i.title}: ${i.description}`}
                                        </span>
                                    ))}
                                </span>
                            </div>
                            <div className={classes.right}>
                                <span className={classes.price}>
                                    {updatePrice(product.price)}
                                </span>
                                <MyButton>в корзину</MyButton>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

function updatePrice(oldPrice: number): string {
    let newPrice: string = String(oldPrice)
        .split("")
        .reverse()
        .map((i, index, arr) =>
            (index + 1) % 3 === 0 && index !== arr.length - 1 ? `.${i}` : i
        )
        .reverse()
        .join("");
    return newPrice + "₽";
}

export default Products;
