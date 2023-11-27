import { FC } from "react";
import { Link } from "react-router-dom";

import MyTitle from "../UI/title/MyTitle";
import { TAttribute, TAttributes, TProduct } from "../../types/product";
import MyButton from "../UI/button/MyButton";
import { URL } from "../../global";
import Price from "../UI/price/Price";
import Star from "../../static/star.svg";

import classes from "./styles.module.scss";

type TList = {
    list: TProduct[];
};

const ProductList: FC<TList> = ({ list }) => {
    console.log(list[0]);
    return (
        <div className={classes.list}>
            {list.map((product) => {
                return (
                    <Link
                        to={`${product.id}`}
                        key={product.id}
                        className={classes.product}
                    >
                        <img src={`${URL}${product.img}`} alt="image" />
                        <div className={classes.center}>
                            <MyTitle>{product.name}</MyTitle>
                            <Attributes
                                attributes={product.attributes}
                                reviews={product.reviews}
                            />
                            <Rate rate={product.rate} />
                        </div>
                        <div className={classes.right}>
                            <Price>{product.price}</Price>
                            <MyButton>Купить</MyButton>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

const Attributes = ({ attributes, reviews }: TAttributes) => {
    return (
        <div className={classes.attributes}>
            {attributes.map((i) => (
                <span className={classes.attribute} key={i.id}>
                    {`${i.title}: ${i.description}`}
                </span>
            ))}
            <span className={classes.attribute} key={"reviews"}>
                отзывы: {reviews}
            </span>
        </div>
    );
};

const Rate = ({ rate }: { rate: string }) => {
    const rates = [];
    for (let i = 0; i < +Math.floor(+rate); i++) {
        rates.push(<img src={Star} key={i} />);
    }
    return <div>{rates.map((item) => item)}</div>;
};

export default ProductList;
