import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import StudentHeader from './Component/StudentHeader/StudentHeader';
const Layout = () => {
  const location = useLocation();
  const { state } = location;
  const isStudent = state?.isStudent;

  return (
    <>
      {isStudent ? (
        <StudentHeader name={state.name} />
      ) : (
        <Header />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
