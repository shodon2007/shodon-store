import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { FilterType } from 'src/shared/api/filterApi';
import { useGetDevices } from 'src/shared/lib/useGetDevices/useGetDevices';
import { Sidebar } from 'src/widgets/Sidebar';
import { Device } from 'src/widgets/Products/DeviceCard';

import cls from './Products.module.scss';

type Params = {
	type: string;
};

function getAllFilterSettings(searchParams: URLSearchParams): FilterType {
	const res: FilterType = {};
	searchParams.forEach((value, key) => {
		if (res[key]) {
			res[key].push(value);
		} else {
			res[key] = [value];
		}
	});
	return res;
}

const ProductsPage: FC = () => {
	const [searchParams] = useSearchParams();
	const { type } = useParams<Params>();

	const filtersSettings = getAllFilterSettings(searchParams);

	const [filters, setFilters] = useState<FilterType>(filtersSettings);
	const { data, isLoading, isError, error, refetch } = useGetDevices(
		filters,
		type,
	);

	useEffect(() => {
		refetch();
	}, [filters]);

	if (isLoading) {
		return 'загрузка...';
	}

	if (isError) {
		return error.message;
	}

	return (
		<div className={cls.devicesPage} data-testid='devices-page'>
			<Sidebar filters={filters} setFilters={setFilters} />
			<div className={cls.devices}>
				{data.map(device => {
					return <Device product={device} key={device.id} />;
				})}
			</div>
		</div>
	);
};

export default ProductsPage;