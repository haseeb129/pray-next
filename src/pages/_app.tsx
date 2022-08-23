import '../styles/global.css';
import 'antd/dist/antd.css';

import type { AppProps } from 'next/app';

import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);
