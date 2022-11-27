import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { Sun, Moon } from 'react-feather';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectColorTheme, toggleColorTheme } from './layoutSlice';

function Layout() {
  // dispatch
  const dispatch = useAppDispatch();

  // selector
  const colorTheme = useAppSelector(selectColorTheme);

  useEffect(() => {
    document.body.classList.add('dark:bg-gray-900');
    document.body.classList.add('bg-gray-100');

    if (colorTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorTheme]);

  return (
    <div className="site">
      <Navbar>
        <div className="flex w-full justify-between md:w-auto md:order-2">
          <Navbar.Toggle />
          <button
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => dispatch(toggleColorTheme())}
          >
            {colorTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Intorduction
          </Navbar.Link>
          <Navbar.Link href="/skills">Skills</Navbar.Link>
          <Navbar.Link href="/work-experience">Work Experience</Navbar.Link>
          <Navbar.Link href="/portfolio">Portfolio</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <div className="mx-auto container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
