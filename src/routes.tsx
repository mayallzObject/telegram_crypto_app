import { RouteObject } from 'react-router-dom';
import AppLayout from './layouts/appLayout';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <h1>Error</h1>,
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
