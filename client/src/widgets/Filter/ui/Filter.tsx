import { FC, useState } from "react";
import classNames from "src/shared/lib/classNames";
import cls from "./Filter.module.scss";
import { useGetFilter } from "src/shared/hooks/useGetFilter";
import { useParams } from "react-router-dom";
interface FilterProps { className?: string; }
const Filter: FC<FilterProps> = () => {
    const { type } = useParams();
    // const [filters, setFilters] = useState<Filter>({
    //     type: 'iphone',
    //     filters: [],
    // });
    const { data: attributes, isFetching } = useGetFilter(type);

    if (isFetching) {
        return <div>загрузка</div>
    }

    console.log(attributes);

    return (
        <div className={classNames(cls.Filter, {}, [])}>
            {Object.entries(attributes).map(([title, descriptions]) => {
                return <div>
                    <span>{title}</span>
                    <div>
                        {descriptions.map(item => {
                            return <div>
                                <input type="checkbox" />
                                <span>{item}</span>
                            </div>
                        })}
                    </div>
                </div>
            })}
        </div>
    );
};
export default Filter;