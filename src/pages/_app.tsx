import '../styles/global.css';

import type { AppProps } from 'next/app';

// import { wrapper } from '../redux';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default MyApp;

// export default wrapper.withRedux(MyApp);
