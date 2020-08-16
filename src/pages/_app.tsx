import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';

import seo from '../config/seo';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isMonted, setIsMonted] = useState(false);

  useEffect(() => {
    setIsMonted(true);
  }, []);

  return (
    <>
      {isMonted && (
        <>
          <DefaultSeo {...seo} />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
};

export default MyApp;
