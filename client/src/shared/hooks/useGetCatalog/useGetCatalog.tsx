import { useQuery } from "@tanstack/react-query"
import catalogApi from "/shared/api/catalogApi";

const useGetCatalog = () => {
    const query = useQuery({
        queryKey: ['catalog'],
        queryFn: () => {
            return catalogApi.getCatalog();
        },
    });

    return query;
}

export {
    useGetCatalog
}