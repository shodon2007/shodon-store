import classes from "./styles.module.scss";

const Price = ({ children }: { children: number }) => {
    let newPrice: string = String(children)
        .split("")
        .reverse()
        .map((i, index, arr) =>
            (index + 1) % 3 === 0 && index !== arr.length - 1 ? `.${i}` : i
        )
        .reverse()
        .join("");
    return <div className={classes.price}>{newPrice}₽</div>;
};

export default Price;
