import Header from '../components/Header';
import Footer from '../components/Footer';
import TransactionList from '../components/TransactionList';
import Body from '../components/Body';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <TransactionList />
        <Body />
      </main>
      <Footer />
    </div>
  );
}