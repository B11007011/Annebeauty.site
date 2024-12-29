import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import Navbar from "../components/Navbar";
import Counter from "../sections/Benefits";

export default function HomePage() {
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
      </Helmet>
      <Navbar/>
      <main>
        <Hero />
        <Intro />
        <Counter/>
        <Services />
      </main>
      <Cta/>
      <Footer/>
    </HelmetProvider>
  );
}
