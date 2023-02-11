import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header/Header';
import Features from './component/Features/Features';
import OurProcess from './component/OurProcess/OurProcess';
import CustomSection from './component/CustomSection/CustomSection';
import ContactUs from './component/ContactUs/ContactUs';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <OurProcess/>
      <CustomSection/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
