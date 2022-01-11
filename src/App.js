import { Fragment } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Fragment>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Footer />
    </Fragment>
  );
}

export default App;
