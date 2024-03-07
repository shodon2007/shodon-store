import { useQuery } from "@tanstack/react-query"
import catalogApi from "src/shared/api/catalogApi";

const useGetCatalog = () => {
    const query = useQuery({
        queryKey: ['catalog'],
        queryFn: () => {
            return catalogApi.getCatalog().then(res => res.data);
        },
    });

    return query;
}

export {
    useGetCatalog
}