import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from "E:/ecommerce/ctrlaltelite/components";

import { StateContext } from 'E:/ecommerce/ctrlaltelite/context/StateContext';

import '/ecommerce/ctrlaltelite/styles/globals.css';
import "/ecommerce/ctrlaltelite/styles/styles.css";
import "/ecommerce/ctrlaltelite/styles/Home.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp
