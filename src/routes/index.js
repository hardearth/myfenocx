import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

// project import
import CommonLayout from 'layout/CommonLayout';
import Loadable from 'components/Loadable';
import LoginRoutes from './LoginRoutes';
import MainRoutes from './MainRoutes';

// render - landing page
const PagesLanding = Loadable(lazy(() => import('pages/landing/landing')));
const PagesBuy = Loadable(lazy(() => import('pages/landing/buy')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([
    {
      path: '/',
      element: <CommonLayout layout="landing" />,
      children: [
        {
          path: '/',
          element: <PagesLanding />
        },
        {
          path: '/buy',
          element: <PagesBuy />
        }
      ]
    },
    LoginRoutes,
    MainRoutes
  ]);
}