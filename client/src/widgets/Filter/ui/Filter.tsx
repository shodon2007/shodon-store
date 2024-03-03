import { Dispatch, FC, SetStateAction, useEffect } from "react";
import classNames from "src/shared/lib/classNames";
import cls from "./Filter.module.scss";
import { useGetFilter } from "src/shared/hooks/useGetFilter";
import { useParams, useSearchParams } from "react-router-dom";
import { FilterType } from "src/shared/api/filterApi";
import toggleAttribute from "../model/toggleAttribute";
import { Attribute } from "src/shared/api/productApi";

interface FilterProps {
    className?: string;
    filters: FilterType;
    setFilters: Dispatch<SetStateAction<FilterType>>
}

const Filter: FC<FilterProps> = ({ filters, setFilters }) => {
    const [, setSearchParams] = useSearchParams();
    const { type } = useParams();

    const { data: attributes, isLoading } = useGetFilter(type);

    useEffect(() => {
        setSearchParams(filters);
    }, [filters]);

    if (isLoading) {
        return <div>Загрузка данных</div>
    }

    function toggleAttributeHandler(checked: boolean, attribute: Attribute) {
        setFilters((prev) => toggleAttribute(prev, attribute, checked))
    }

    return (
        <div className={classNames(cls.Filter, {}, [])}>
            {Object.entries(attributes).map(([title, descriptions], index) => {
                return <div key={index}>
                    <span>{title}</span>
                    <div>{descriptions.map((description, index) => {
                        const checked = !!filters[title] && filters[title].includes(description);
                        return (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    onChange={(e) => toggleAttributeHandler(e.target.checked, {title, description})}
                                    checked={checked}
                                />
                                <span>{description}</span>
                            </div>
                        )
                    })}
                    </div>
                </div>
            })}
        </div>
    );
};
export default Filter;