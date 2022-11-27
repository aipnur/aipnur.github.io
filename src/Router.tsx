import React from 'react';
import { useRoutes } from 'react-router-dom';
import { introRouter } from './features/Intro/Intro';
import Layout from './features/layout/Layout';

function Notfound() {
  return (
    <div className="mt-7 text-center text-gray-500 dark:text-gray-300">
      Not found
    </div>
  );
}

function Router() {
  const element = useRoutes([
    ...introRouter,
    {
      path: '*',
      element: <Layout />,
      children: [
        {
          exact: true,
          path: '*',
          element: <Notfound />,
        },
      ],
    },
  ]);

  return element;
}

export default Router;
