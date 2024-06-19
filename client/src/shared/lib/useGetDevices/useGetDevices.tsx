import { useQuery } from '@tanstack/react-query';
import { FilterType } from 'src/app/types/filter';
import productApi from 'src/shared/api/productApi';

const useGetDevices = (filters: FilterType, type: string) => {
	const query = useQuery({
		queryKey: ['products', type],
		queryFn: async () => {
			const res = await productApi.getAllProducts(filters, type);
			return res.data;
		},
		retry: 1,
	});

	return query;
};

export { useGetDevices };
