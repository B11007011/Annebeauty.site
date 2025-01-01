import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import ServicesPageDetails from "./pages/ServicesPageDetails";
import { AnimatePresence } from 'framer-motion';
import PageAnimation from "./components/PageAnimations";
import BlogPage from "./pages/BlogPage";
import { Helmet, HelmetProvider } from "react-helmet-async";  
import { LanguageProvider } from './context/LanguageContext';
import { ConfigProvider } from './context/ConfigContext';
import Search from './components/Search';
import BlogPost from './components/BlogPost';
import ConfigEditor from './components/ConfigEditor';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation(); 

  return (
    <HelmetProvider>
      <ConfigProvider>
        <LanguageProvider>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageAnimation><HomePage /></PageAnimation>} />
              <Route path="/usluge" element={<PageAnimation><ServicesPage /></PageAnimation>} />
              <Route path="/o-nama" element={<PageAnimation><AboutPage /></PageAnimation>} />
              <Route path="/kontakt" element={<PageAnimation><ContactPage /></PageAnimation>} />
              <Route path="/usluge/:title" element={<PageAnimation><ServicesPageDetails /></PageAnimation>} />
              <Route path="/blog" element={<PageAnimation><BlogPage /></PageAnimation>} />
              <Route path="/blog/:slug" element={<PageAnimation><BlogPost /></PageAnimation>} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route 
                path="/admin/config" 
                element={
                  <ProtectedRoute>
                    <ConfigEditor />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </AnimatePresence>
        </LanguageProvider>
      </ConfigProvider>
    </HelmetProvider>
  )
}

export default App
