import React from 'react';

import { Header } from '../components/Header';
import { Footer } from './Footer';

import { Outlet, Link } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
