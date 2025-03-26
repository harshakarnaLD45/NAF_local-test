import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import './i18n'; 
import MachinesPage from './Pages/MachinesPage/MachinesPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NoiseEffect />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='home' Component={HomePage} />
          <Route path='machine' Component={MachinesPage} />
          <Route path='*' Component={HomePage} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
