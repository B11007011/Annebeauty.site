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
        <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 服務" />
        <meta property="og:description" content="探索我們沙龍提供的廣泛專業服務，包括美甲、永久化妝等。" />
        <meta property="og:url" content="https://naildesign-ljiljanamedovic.com/usluge" />
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
