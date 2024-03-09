import { FC } from 'react';

import { useGetCatalog } from 'src/shared/lib/useGetCatalog/useGetCatalog';

import cls from './Catalog.module.scss';
import { Link } from 'react-router-dom';
import { serverUrl } from 'src/shared/api/generalApi';

const CatalogPage: FC = () => {
	const { data: catalog, isLoading, error, isError } = useGetCatalog();

	if (isLoading) {
		return (
			<span data-testid='loading-page'>Загрузка каталога, подождите...</span>
		);
	}

	if (isError) {
		return error.message;
	}

	return (
		<div className={cls.catalog} data-testid='catalog-page'>
			{catalog.map(elem => {
				return (
					<Link
						to={`/${elem.name}`}
						className={cls.item}
						key={elem.id}
						data-testid='catalog-link'
					>
						<div className={cls.img}>
							<img src={`${serverUrl}/img${elem.img}`} alt={elem.name} />
						</div>
						<span className={cls.name}>{elem.name_ru}</span>
					</Link>
				);
			})}
		</div>
	);
};

export default CatalogPage;
