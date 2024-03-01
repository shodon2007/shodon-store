import { Dispatch, FC, SetStateAction, memo, useEffect } from "react";
import classNames from "src/shared/lib/classNames";
import cls from "./Filter.module.scss";
import { useGetFilter } from "src/shared/hooks/useGetFilter";
import { useParams, useSearchParams } from "react-router-dom";
import { FilterType } from "src/shared/api/filterApi";

interface FilterProps {
    className?: string;
    filters: FilterType;
    setFilters: Dispatch<SetStateAction<FilterType>>
}

const Filter: FC<FilterProps> = memo(({ filters, setFilters }) => {
    const [, setSearchParams] = useSearchParams();
    const { type } = useParams();

    const { data: attributes, isLoading } = useGetFilter(type);

    useEffect(() => {
        setSearchParams(filters);
    }, [filters]);

    if (isLoading) {
        return <div>dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</div>
    }


    function addAttributeToFilter(title: string, description: string) {
        setFilters((prev) => {
            const newFilter = { ...prev };

            if (prev[title]) {
                newFilter[title].push(description);
            } else {
                newFilter[title] = [description];
            }

            return newFilter;
        });
    }

    function removeAttributeInFilter(title: string, description: string) {
        setFilters((prev) => {
            const newFilter = { ...prev };

            if (prev[title]) {
                newFilter[title] = newFilter[title].filter(el => el != description);
            }

            return newFilter;
        });
    }

    function toggleAttribute(checked: boolean, title: string, description: string) {
        if (checked) {
            return addAttributeToFilter(title, description);
        } else {
            return removeAttributeInFilter(title, description);
        }
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
                                    onChange={(e) => toggleAttribute(e.target.checked, title, description)}
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
});
export default Filter;