import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum RoutePaths {
  MAIN_PAGE = 'main_page',
  ERROR_PAGE = 'error_page',
}

export const routes: Record<RoutePaths, string> = {
  [RoutePaths.MAIN_PAGE]: '/',
  [RoutePaths.ERROR_PAGE]: '*',
};

export const routeConfig: Record<RoutePaths, RouteProps> = {
  [RoutePaths.MAIN_PAGE]: { path: routes.main_page, element: <MainPage /> },
  [RoutePaths.ERROR_PAGE]: { path: routes.error_page, element: <NotFoundPage /> },
};
