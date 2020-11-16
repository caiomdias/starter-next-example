import React from 'react';
import { AppProps } from 'next/app';

// Styles
import GlobalStyles from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <GlobalStyles />
  </>
);
export default MyApp;
