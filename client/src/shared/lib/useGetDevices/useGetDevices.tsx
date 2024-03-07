import { useQuery } from "@tanstack/react-query"
import productApi from "src/shared/api/productApi";
import { FilterType } from "../../api/filterApi";

const useGetDevices = (filters: FilterType, type: string) => {
    const query = useQuery({
        queryKey: ["products", type],
        queryFn: async () => {
            const res = await productApi.getAllProducts(filters, type);
            return res.data;
        }
    });

    return query;
}

export {
    useGetDevices
}