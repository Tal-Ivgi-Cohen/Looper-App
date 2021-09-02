import {HashRouter as Router} from 'react-router-dom';
import './styles/styles.scss';
import { Header } from './cmps/Header.jsx';
import { Footer } from './cmps/Footer.jsx';
import { Looper } from './pages/Looper.jsx';

export const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Looper />
        </main>
        <Footer />
      </div>
    </Router>
  );
}