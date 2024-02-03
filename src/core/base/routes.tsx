import { createBrowserRouter } from 'react-router-dom';
import { Root, Home, ShipmentElement, ShipmentsLayout } from '@/modules';
import { RouteObject } from 'react-router/dist/lib/context';
import { ReactNode } from 'react';

export enum RoutesPath {
  Home = '/',
  Shipments = '/shipments',
  ShipmentsById = ':shipmentId',
}

interface Route {
  id: number;
  label: string;
  path: string;
  element: ReactNode;
  children?: Route[];
}

export const routes: Route[] = [
  {
    id: 1,
    label: 'Главная',
    path: RoutesPath.Home,
    element: <Home />,
  },
  {
    id: 2,
    label: 'Отправления',
    path: RoutesPath.Shipments,
    element: <ShipmentsLayout />,
    children: [
      {
        id: 3,
        label: 'Выбранное отправление',
        path: RoutesPath.ShipmentsById,
        element: <ShipmentElement />,
      },
    ],
  },
];

export const routesConfig = createBrowserRouter([
  {
    path: RoutesPath.Home,
    element: <Root />,
    children: routes.map((route) => {
      const generateRoutes = (routes: Route[], parentPath = '') => {
        return routes.map((route) => {
          const fullPath = `${parentPath}/${route.path}`.replace(/\/+/g, '/');
          const routeConfig: RouteObject = {
            path: fullPath,
            element: route.element,
          };

          if (route.children && route.children.length > 0) {
            routeConfig.children = generateRoutes(route.children, fullPath);
          }

          return routeConfig;
        });
      };

      return generateRoutes([route], RoutesPath.Home)[0]; // передаем родительский путь для начального вызова
    }),
  },
]);
