import { useQuery } from "@tanstack/react-query"
import productApi from "/shared/api/productApi";

const useGetDevices = (type: string) => {
    const query = useQuery({
        queryKey: ["products", type],
        queryFn: async () => {
            const res = await productApi.getAllProducts(type);
            return res.data;
        }
    });

    return query;
}

export {
    useGetDevices
}