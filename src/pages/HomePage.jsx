import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import Navbar from "../components/Navbar";
import Counter from "../sections/Benefits";
import SocialFeed from "../components/SocialFeed";
import BackToTop from "../components/BackToTop";
import LoadingBar from "../components/LoadingBar";
import QuickActions from "../components/QuickActions";
import CookieConsent from "../components/CookieConsent";
import WelcomeModal from "../components/WelcomeModal";

export default function HomePage() {
  useEffect(() => {
    // Enable smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>指甲設計 Anne-美甲美睫 | 首頁</title>
        <meta 
          name="description" 
          content="歡迎來到我們位於尼什市中心的美麗與優雅角落。在我們的沙龍中，您的美麗是我們的首要任務。"
        />
        <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 首頁" />
        <meta 
          property="og:description" 
          content="歡迎來到我們位於尼什市中心的美麗與優雅角落。在我們的沙龍中，您的美麗是我們的首要任務。"
        />
        <meta property="og:url" content="https://naildesign-ljiljanamedovic.com/pocetna" />
        <meta name="theme-color" content="#ff69b4" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>
      <LoadingBar />
      <Navbar/>
      <main className="home-main">
        <Hero />
        <Intro />
        <Counter/>
        <Services />
        <Cta/>
        <SocialFeed />
        <BackToTop />
        <QuickActions />
      </main>
      <Footer/>
      <CookieConsent />
      <WelcomeModal />

      <style jsx>{`
        .home-main {
          overflow: hidden;
        }

        .home-main > * {
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .home-main > *:nth-child(1) { animation-delay: 0.1s; }
        .home-main > *:nth-child(2) { animation-delay: 0.2s; }
        .home-main > *:nth-child(3) { animation-delay: 0.3s; }
        .home-main > *:nth-child(4) { animation-delay: 0.4s; }
        .home-main > *:nth-child(5) { animation-delay: 0.5s; }
        .home-main > *:nth-child(6) { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-main > * {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </HelmetProvider>
  );
}
