import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/appLayout';

// todo: add error element
export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <>Error</>,
    children: [
      {
        index: true,
        async lazy() {
          const HomePage = await import('./pages/home');
          return { Component: HomePage.default };
        },
      },
      {
        path: 'boost',
        async lazy() {
          const BoostPage = await import('./pages/boost');
          return { Component: BoostPage.default };
        },
      },
      {
        path: 'earn',
        async lazy() {
          const EarnPage = await import('./pages/earn');
          return { Component: EarnPage.default };
        },
      },
    ],
  },
];
