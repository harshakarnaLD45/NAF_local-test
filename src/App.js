import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import './i18n';
import MachinesPage from './Pages/MachinesPage/MachinesPage';
import Insights from './Pages/Insights/Insights';
import Menu from './Pages/Company/Menu/Menu';
import SoftwarePage from './Pages/SoftwarePage/SoftwarePage';
import AboutPage from './Pages/Company/AboutPage/AboutPage';
import CustomCursor from './Componenets/NoiseEffect/CustomCursor';
import ContactPage from './Pages/ContactPage/ContactPage';
import MantaincePage from './Pages/MachinesPage/MantaincePage/MantaincePage';
import BlogContainer from './Pages/Insights/BlogContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      <CustomCursor />
        <Header />
        <NoiseEffect />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='machine' Component={MachinesPage} />
          <Route path='maintaince' Component={MantaincePage} />
          <Route path='software' Component={SoftwarePage} />
          <Route path='Insights' Component={Insights} />
          <Route path='Insights/blog' Component={BlogContainer} />
          <Route path="company/about" Component={AboutPage} />
          <Route path="company/menu" Component={Menu} />
          <Route path="contact" Component={ContactPage} />
          <Route path='*' Component={HomePage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
