import './App.css';

import { BrowserRouter } from 'react-router-dom';

import Router from './router';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Router />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
