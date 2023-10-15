import React from 'react';
import Head from 'next/head';

import Navbar from "E:/ecommerce/ctrlaltelite/components/Navbar.jsx";

const Layout = ({ children,bannerData }) => {
  return (
    <div className="layout">
      <link
        rel="icon"
        href="icons\header-icon.ico"
        type="image/icon type"
      ></link>
      <Head>
        <title>ThriftIt</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
    </div>
  );
}

export default Layout