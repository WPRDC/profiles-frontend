import '../styles/globals.css';

import Layout from '../components/Layout';
import { Provider } from '@wprdc/test-components';

const MAPBOX_KEY =
  'pk.eyJ1Ijoic3RldmVuZHNheWxvciIsImEiOiJja295ZmxndGEwbGxvMm5xdTc3M2MwZ2xkIn0' +
  '.WDBLMZYfh-ZGFjmwO82xvw';

function MyApp({ Component, pageProps }) {
  return (
    <Provider usingSSR mapboxAPIToken={MAPBOX_KEY}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
