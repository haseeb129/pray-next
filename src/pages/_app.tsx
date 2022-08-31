import '../styles/global.css';
import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import { wrapper } from '../redux/store';

const MyApp = ({ Component, pageProps }: AppProps) =>
  typeof window !== undefined ? (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  ) : (
    <>Loading</>
  );

export default wrapper.withRedux(MyApp);
