import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { product } from "/app/types/product";

const useGetCatalog = () => {
    const query = useQuery({
        queryKey: ['catalog'],
        queryFn: () => {
            return axios.get<product[]>('http://localhost:3000/api/catalog');
        },
    });


    return query;
}

export {
    useGetCatalog
}