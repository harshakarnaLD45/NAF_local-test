import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';
import './i18n';
import MachinesPage from './Pages/MachinesPage/MachinesPage';
import Insights from './Pages/Insights/Insights';
import BlogDetailPage from './Pages/Insights/BlogDetailPage';
import BlogDetailPage1 from './Pages/Insights/BlogDetailPage1';
import BlogDetailPage2 from './Pages/Insights/BlogDetailPage2';
import BlogDetailPage3 from './Pages/Insights/BlogDetailPage3';
import BlogDetailPage4 from './Pages/Insights/BlogDetailPage4';
import BlogDetailPage5 from './Pages/Insights/BlogDetailPage5';
import BlogDetailPage6 from './Pages/Insights/BlogDetailPage6';
import Menu from './Pages/Menu/Menu';
import SoftwarePage from './Pages/SoftwarePage/SoftwarePage';
import AboutPage from './Pages/Company/AboutPage/AboutPage';


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
          <Route path='software' Component={SoftwarePage} />
          <Route path='Insights' Component={Insights} />
          <Route path="company/about" Component={AboutPage} />
          <Route path="company/menu" Component={Menu} />

          <Route path="/blog/ui-ux-design-vending-sales" element={<BlogDetailPage />} />
          <Route path="/blog/choosing-vending-machine-guide" element={<BlogDetailPage1 />} />
          <Route path="/blog/power-ui-ux-vending" element={<BlogDetailPage2 />} />
          <Route path="/blog/cloud-vending-management" element={<BlogDetailPage3 />} />
          <Route path="/blog/vending-marketing-strategies" element={<BlogDetailPage4 />} />
          <Route path="/blog/vending-regulations" element={<BlogDetailPage5 />} />
          <Route path="/blog/contactless-vending" element={<BlogDetailPage6 />} />
        
          <Route path='*' Component={HomePage} />
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
