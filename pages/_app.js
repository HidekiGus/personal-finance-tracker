import '../styles/globals.css';
import { TransactionsProvider } from '../context/TransactionsContext';

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Component {...pageProps} />
    </TransactionsProvider>
  );
}

export default MyApp;
