import Services from "../sections/Services";
import BreadCrumb from "../components/BreadCrumb";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function ServicesPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>指甲設計 Anne-美甲美睫 | 服務</title>
        <meta name="description" content="探索我們沙龍提供的廣泛專業服務，包括美甲、永久化妝等。"/>
        <link rel="canonical" href="https://Annebeauty.site/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 服務" />
        <meta property="og:description" content="探索我們沙龍提供的廣泛專業服務，包括美甲、永久化妝等。" />
        <meta property="og:url" content="https://Annebeauty.site/services" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar/>
      <main>
        <BreadCrumb page="服務"/>
        <Services showTitle={false}/>
      </main>
      <Cta/>
      <Footer/>
    </HelmetProvider>
  );
}
