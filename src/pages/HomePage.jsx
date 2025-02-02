import { Helmet, HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
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
//import QuickActions from "../components/QuickActions";
import CookieConsent from "../components/CookieConsent";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Anne Beauty | 美睫 美甲 紋繡</title>
        <meta
          name="description"
          content="Anne Beauty 專業美睫、美甲、紋繡服務，位於台北市內湖區。提供優質的美容服務，包括霧眉、飄眉、美睫、美甲等。預約專線：0981-606-455"
        />
        <meta
          name="keywords"
          content="美睫,美甲,紋繡,霧眉,飄眉,台北,內湖區,美容,美睫店,美甲店,紋繡店"
        />
        <meta property="og:title" content="Anne Beauty | 美睫 美甲 紋繡" />
        <meta
          property="og:description"
          content="Anne Beauty 專業美睫、美甲、紋繡服務，位於台北市內湖區。提供優質的美容服務，包括霧眉、飄眉、美睫、美甲等。"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://annebeauty.tw" />
        <meta property="og:image" content="/og-image.jpg" />
        <link rel="canonical" href="https://annebeauty.tw" />
      </Helmet>

      <LoadingBar isLoading={isLoading} />
      <Navbar/>
      <main className={styles.homeMain}>
        <Hero />
        <Intro />
        <Counter/>
        <Services />
        <Cta/>
        <SocialFeed />
        <BackToTop />
        {/* <QuickActions /> */}
      </main>
      <Footer/>
      <CookieConsent />
    </HelmetProvider>
  );
}
