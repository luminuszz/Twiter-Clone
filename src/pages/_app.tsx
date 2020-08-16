import { ThemeProvider } from 'hooks/ThemeContext';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
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
          <GlobalStyle />
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </ThemeProvider>
      )}
    </>
  );
};

export default MyApp;
