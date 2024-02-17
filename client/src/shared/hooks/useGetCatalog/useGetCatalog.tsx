import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Product } from "/shared/api/productApi";
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