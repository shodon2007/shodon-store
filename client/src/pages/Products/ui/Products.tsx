import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { useGetDevices } from 'src/shared/lib/useGetDevices/useGetDevices';
import { Sidebar } from 'src/widgets/Sidebar';
import { Device } from 'src/widgets/Products/DeviceCard';

import cls from './Products.module.scss';
import { FilterType } from 'src/app/types/filter';
import { getAllFilterSettings } from '../model/getAllFilterSettings';

type Params = {
	type: string;
};

const ProductsPage: FC = () => {
	const [searchParams] = useSearchParams();
	const { type } = useParams<Params>();

	const defaultSettings = getAllFilterSettings(searchParams);
	const [filters, setFilters] = useState<FilterType>(defaultSettings);

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
