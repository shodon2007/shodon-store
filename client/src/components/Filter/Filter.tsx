import { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import { TFilter } from "../../types/product";
import classes from "./filter.module.scss";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import filterService from "../../services/filter.service";

type types = {
    filter: TFilter;
    setFilter: Dispatch<SetStateAction<TFilter>>;
};

const Filter = ({ filter, setFilter }: types) => {
    const { type } = useParams();
    if (!type) {
        return false;
    }
    const { data, isFetching } = useQuery({
        queryKey: ["filter", type],
        queryFn: () => filterService.getFilter(type),
    });

    if (isFetching) {
        return <div>загрузка</div>;
    }

    console.log(data);

    return (
        <div className={classes.filter}>
            {data.map(([key, value]) => {
                const options = value.map((item: string) => {
                    return {
                        value: item,
                        label: item,
                    };
                });
                return (
                    <Select
                        options={options}
                        placeholder={key}
                        isSearchable={false}
                        isMulti={true}
                        onChange={(value) => {}}
                    />
                );
            })}
        </div>
    );
};

export default Filter;
