import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/components";

import { StateContext } from 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/context/StateContext';

import 'D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/styles/globals.css';
import "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/styles/styles.css";
import "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/styles/Home.module.css";
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
