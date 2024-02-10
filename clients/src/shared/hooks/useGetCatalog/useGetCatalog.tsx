import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { Product } from "/shared/api/productApi";

const useGetCatalog = () => {
    const query = useQuery({
        queryKey: ['catalog'],
        queryFn: () => {
            return axios.get<Product[]>('http://localhost:3000/api/catalog');
        },
    });


    return query;
}

export {
    useGetCatalog
}