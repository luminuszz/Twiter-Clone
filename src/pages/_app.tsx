import { ThemeProvider } from 'hooks/ThemeContext';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';

import seo from '../config/seo';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMonted, setIsMonted] = useState(false);

  useEffect(() => {
    setIsMonted(true);
  }, []);

  return (
    <>
      {isMonted && (
        <ThemeProvider>
          <Head>
            <link
              rel="shortcut icon"
              href="static/favicon.ico"
              type="image/x-icon"
            />
          </Head>
          <GlobalStyle />
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
};

export default MyApp;
