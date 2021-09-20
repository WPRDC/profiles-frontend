import '../styles/globals.css';

import Layout from '../components/Layout';
import { Provider } from '@wprdc/test-components';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MAPBOX_KEY =
  'pk.eyJ1Ijoic3RldmVuZHNheWxvciIsImEiOiJja295ZmxndGEwbGxvMm5xdTc3M2MwZ2xkIn0' +
  '.WDBLMZYfh-ZGFjmwO82xvw';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <Provider usingSSR mapboxAPIToken={MAPBOX_KEY}>
      {getLayout(<Component {...pageProps} />)}
    </Provider>
  );
}

export default MyApp;
