import { type RouteProps } from 'react-router-dom';
import Catalog from '/pages/Catalog/Catalog';
export enum AppRoutes {
    CATALOG = 'catalog',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CATALOG]: '/',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <Catalog />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <div>not found baby</div>,
    },
};
