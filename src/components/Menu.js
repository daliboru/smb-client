import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/auth';

const MenuBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isFlyout, setIsFlyout] = useState(false);
  const [flyout, setFlyout] = useState('opacity-0 translate-y-1 ');
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState('opacity-0 scale-95');
  const [activePath, setActivePath] = useState('');
  const [userSubmenu, setUserSubmenu] = useState('opacity-0 translate-y-1');
  const [isUserSubmenu, setIsUserSubmenu] = useState(false);

  useEffect(() => {
    setActivePath(window.location.pathname);
    if (isFlyout) {
      setFlyout('transition ease-out duration-200 opacity-100 translate-y-0');
    } else {
      setFlyout(
        'transition ease-in duration-150 opacity-0 translate-y-1 hidden'
      );
    }
    if (isUserSubmenu) {
      setUserSubmenu(
        'transition ease-out duration-200 opacity-100 translate-y-0'
      );
    } else {
      setUserSubmenu(
        'transition ease-in duration-150 opacity-0 translate-y-1 hidden'
      );
    }
    if (isMobileMenu) {
      setMobileMenu('transition ease-out duration-200 opacity-100 scale-100');
    } else {
      setMobileMenu('transition ease-in duration-100 opacity-0 scale-95');
    }
  }, [isFlyout, isMobileMenu, isUserSubmenu, activePath]);

  const menuBar = user ? (
    <div className='relative bg-white z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1 '>
            <Link
              to='/'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('/');
              }}
            >
              <span className='sr-only'>Workflow</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt
              />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              onClick={() => setIsMobileMenu(true)}
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link
              to='/startups'
              className={
                activePath === '/startups'
                  ? 'text-base font-medium text-gray-900'
                  : 'text-base font-medium text-gray-500 hover:text-gray-900'
              }
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Startupi
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Ljudi
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Investitori
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              O nama
            </Link>
            {/* <div className='relative '>
            
              <button
                type='button'
                onClick={() => setIsFlyout(!isFlyout)}
                className={
                  !isFlyout
                    ? 'text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
                    : 'text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
                }
                aria-expanded='false'
              >
                <span>Više</span>
                <svg
                  className={
                    !isFlyout
                      ? 'text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      : 'text-gray-600 ml-2 h-5 w-5 group-hover:text-gray-500'
                  }
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
              <div
                className={`${flyout} absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
              >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Analytics
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Engagement
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Security
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Your customers' data will be safe and secure.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Integrations
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Automations
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Build strategic funnels that will drive your customers
                          to convert
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='ml-3'>Watch Demo</span>
                      </a>
                    </div>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                          />
                        </svg>
                        <span className='ml-3'>Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </nav>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link
              to='/newpost'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 newpost'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Postavi oglas
            </Link>
            <div className='relative'>
              {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
              <button
                type='button'
                onClick={() => {
                  setIsUserSubmenu(!isUserSubmenu);
                  setIsFlyout(false);
                }}
                aria-expanded='false'
                className='focus:outline-none'
              >
                <img
                  className='h-10 w-10 ml-8 cursor-pointer rounded-full border-indigo-600 border-solid border-2 object-cover object-center'
                  src={user.imageUrl}
                  alt
                />
              </button>
              <div
                className={`${userSubmenu} absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
              >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <Link
                      to='#'
                      onClick={() => {
                        setIsUserSubmenu(false);
                      }}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                      <span className='ml-4 text-base font-medium text-gray-900'>
                        Podešavanja
                      </span>
                    </Link>
                    <Link
                      to=''
                      onClick={() => {
                        setIsUserSubmenu(false);
                        logout();
                      }}
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
                        />
                      </svg>
                      <span className='ml-4 text-base font-medium text-gray-900'>
                        Odjavite se
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*
  Mobile menu, show/hide based on mobile menu state.

  Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
*/}
      {isMobileMenu && (
        <div
          className={`${mobileMenu} z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div as={Link} to='/'>
                  <img
                    as={Link}
                    to='/'
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    onClick={() => setIsMobileMenu(false)}
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link
                    to='/startups'
                    onClick={() => setIsMobileMenu(false)}
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Startupi
                    </span>
                  </Link>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Ljudi
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Investitori
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      O nama
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <Link
                to=''
                onClick={logout}
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Odjavite se
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <div className='relative bg-white z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link
              to='/'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              <span className='sr-only'>Workflow</span>
              <img
                className='h-8 w-auto sm:h-10'
                src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                alt
              />
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <button
              onClick={() => setIsMobileMenu(true)}
              type='button'
              className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              aria-expanded='false'
            >
              <span className='sr-only'>Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
          <nav className='hidden md:flex space-x-10'>
            <Link
              to='/startups'
              className={
                activePath === '/startups'
                  ? 'text-base font-medium text-gray-900'
                  : 'text-base font-medium text-gray-500 hover:text-gray-900'
              }
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Startupi
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Ljudi
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Investitori
            </Link>
            <Link
              to='#'
              className='text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              O nama
            </Link>
            {/* <div className='relative '>
              <button
                type='button'
                onClick={() => setIsFlyout(!isFlyout)}
                className={
                  !isFlyout
                    ? 'text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
                    : 'text-gray-900 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 '
                }
                aria-expanded='false'
              >
                <span>Više</span>
                <svg
                  className={
                    !isFlyout
                      ? 'text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500'
                      : 'text-gray-600 ml-2 h-5 w-5 group-hover:text-gray-500'
                  }
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
             
              <div
                className={`${flyout} absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}
              >
                <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Analytics
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Get a better understanding of where your traffic is
                          coming from.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Engagement
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Speak directly to your customers in a more meaningful
                          way.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Security
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Your customers' data will be safe and secure.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Integrations
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Connect with third-party tools that you're already
                          using.
                        </p>
                      </div>
                    </a>
                    <a
                      href='#'
                      className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50'
                    >
                      <svg
                        className='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                        />
                      </svg>
                      <div className='ml-4'>
                        <p className='text-base font-medium text-gray-900'>
                          Automations
                        </p>
                        <p className='mt-1 text-sm text-gray-500'>
                          Build strategic funnels that will drive your customers
                          to convert
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                        <span className='ml-3'>Watch Demo</span>
                      </a>
                    </div>
                    <div className='flow-root'>
                      <a
                        href='#'
                        className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                      >
                        <svg
                          className='flex-shrink-0 h-6 w-6 text-gray-400'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                          />
                        </svg>
                        <span className='ml-3'>Contact Sales</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </nav>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link
              to='/login'
              className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Prijava
            </Link>
            <Link
              to='/register'
              className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              onClick={() => {
                setIsFlyout(false);
                setIsUserSubmenu(false);
                setActivePath('.');
              }}
            >
              Registracija
            </Link>
          </div>
        </div>
      </div>
      {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
  */}
      {isMobileMenu && (
        <div
          className={`${mobileMenu} z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div as={Link} to='/'>
                  <img
                    as={Link}
                    to='/'
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                </div>
                <div className='-mr-2'>
                  <button
                    onClick={() => setIsMobileMenu(false)}
                    type='button'
                    className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <span className='sr-only'>Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid gap-y-8'>
                  <Link
                    to='/startups'
                    onClick={() => setIsMobileMenu(false)}
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/chart-bar */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Startupi
                    </span>
                  </Link>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/cursor-click */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Ljudi
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/shield-check */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Investitori
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/view-grid */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      O nama
                    </span>
                  </a>
                  <a
                    href='#'
                    className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                  >
                    {/* Heroicon name: outline/refresh */}
                    <svg
                      className='flex-shrink-0 h-6 w-6 text-indigo-600'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                      />
                    </svg>
                    <span className='ml-3 text-base font-medium text-gray-900'>
                      Automations
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <Link
                onClick={() => setIsMobileMenu(false)}
                to='/login'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'
              >
                Prijava
              </Link>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Niste registrovani?{' '}
                <Link
                  onClick={() => setIsMobileMenu(false)}
                  to='/register'
                  className='text-indigo-600 hover:text-indigo-500'
                >
                  Registracija
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return menuBar;
};
export default MenuBar;
