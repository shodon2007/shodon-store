import { type RouteProps } from 'react-router-dom';

import { Auth } from 'src/pages/Auth';
import { CatalogPage } from 'src/pages/Catalog';
import ProductPage from 'src/pages/Product/Product';
import { ProductsPage } from 'src/pages/Products';

export enum AppRoutes {
	DEVICE = 'device',
	DEVICES = 'devices',
	CATALOG = 'catalog',
	NOT_FOUND = 'not_found',
	AUTH = 'auth',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.DEVICES]: '/:type',
	[AppRoutes.DEVICE]: '/:type/:id',
	[AppRoutes.CATALOG]: '/',
	[AppRoutes.AUTH]: '/auth',
	[AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.DEVICES]: {
		path: RoutePath.devices,
		element: <ProductsPage />,
	},
	[AppRoutes.DEVICE]: {
		path: RoutePath.device,
		element: <ProductPage />,
	},
	[AppRoutes.CATALOG]: {
		path: RoutePath.catalog,
		element: <CatalogPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <div>not found baby</div>,
	},
	[AppRoutes.AUTH]: {
		path: RoutePath.auth,
		element: <Auth />,
	},
};
