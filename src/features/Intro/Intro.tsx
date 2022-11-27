import React from 'react';
import Layout from '../layout/Layout';

function Intro() {
  return (
    <div className="h-[calc(100vh-3.7rem)] flex items-center">
      <div className="mx-6 sm:mx-0">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
          AIP NURHAYADI
        </h1>
        <p className="mt-6 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          augue purus.
        </p>
        <p className="text-gray-500 dark:text-gray-300">
          Mauris iaculis nibh orci, ac faucibus risus molestie condimentum.
        </p>
      </div>
    </div>
  );
}

export const introRouter = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        exact: true,
        path: '',
        element: <Intro />,
      },
    ],
  },
];

export default Intro;
