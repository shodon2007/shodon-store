import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { useGetDevices } from 'src/shared/lib/useGetDevices/useGetDevices';
import { Sidebar } from 'src/widgets/Sidebar';
import { Device } from 'src/widgets/Products/DeviceCard';

import cls from './Products.module.scss';
import Spinner from 'src/shared/ui/Spinner/Spinner';
import { useAppSelector } from 'src/shared/lib/state/stateHooks';

type Params = {
	type: string;
};

const ProductsPage: FC = () => {
	const [, setSearchParams] = useSearchParams();
	const { type } = useParams<Params>();

	const filters = useAppSelector(state => state.filter.values);
	const [isInitRender, setIsInitRender] = useState(true);

	const { data, isFetching, isError, error, refetch } = useGetDevices(
		filters,
		type,
	);

	useEffect(() => {
		if (!isInitRender) {
			setSearchParams(filters);
			refetch();
		} else {
			setIsInitRender(false);
		}
	}, [filters]);

	if (isError) {
		return error.message;
	}

	return (
		<div className={cls.devicesPage} data-testid='devices-page'>
			<Sidebar />
			{isFetching ? (
				<Spinner />
			) : (
				<div className={cls.devices}>
					{data.map(device => {
						return <Device product={device} key={device.id} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ProductsPage;
