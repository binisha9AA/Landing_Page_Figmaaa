import './App.css';
import Faq from './components/Main/Faq';
import Header from './components/Header/Header';
import Services from './components/Main/Services';
import Feedback from './components/Main/Feedback';
import Sample from './components/Main/Sample';
import Price from './components/Main/Price';
import Reasons from './components/Main/Reasons';
import TestominialOne from './components/Main/TestominialOne';
import TestomonialTwo from './components/Main/TestomonialTwo';
import Footer from './components/Footer/Footer';
import Copyright from './components/Footer/Copyright';
import Process from './components/Main/Process';
import Status from './components/Main/Status';
import Packages from './components/Main/Packages';
function App() {
  return (
    <>
      <Header />
      <Services />
      <Price />
      <TestominialOne />
      <Reasons />
      <Status />
      <Process />
      <TestomonialTwo />
      <Packages />
      <Feedback />
      <Sample />
      <Faq />
      <Footer />
      <Copyright />
    </>
  );
}

export default App;
