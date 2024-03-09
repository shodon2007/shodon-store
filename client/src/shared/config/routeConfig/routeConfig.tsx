import { type RouteProps } from 'react-router-dom';
import Catalog from 'src/pages/Catalog/Catalog';
import Devices from 'src/pages/Devices/Devices';
export enum AppRoutes {
  DEVICES = 'devices',
  CATALOG = 'catalog',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.DEVICES]: '/:type',
  [AppRoutes.CATALOG]: '/',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.DEVICES]: {
    path: RoutePath.devices,
    element: <Devices />,
  },
  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <Catalog />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <div>not found baby</div>,
  },
};
