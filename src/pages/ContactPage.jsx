import BreadCrumb from "../components/BreadCrumb";
import { contactInfo } from "../data.jsx";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import BusinessInfo from '../components/BusinessInfo';

export default function ContactPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>指甲設計 Anne-美甲美睫 | 聯絡我們</title>
        <meta name="description" content="聯絡我們預約美甲、美睫或諮詢服務。我們提供專業的建議和客製化的服務。"/>
        <link rel="canonical" href="https://Annebeauty.site/contact" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 聯絡我們" />
        <meta property="og:description" content="聯絡我們預約美甲、美睫或諮詢服務。我們提供專業的建議和客製化的服務。" />
        <meta property="og:url" content="https://Annebeauty.site/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar/>
      <main>
        <BreadCrumb page="聯絡我們"/>
        <section className="wrapper my-[50px] lg:my-[100px]">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mb-6">聯絡我們</h2>
            <p className="mb-12">如果您有任何問題或需要預約服務，請隨時與我們聯繫。我們很樂意為您提供協助。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-accent">
                  <img src={info.icon} alt="" className="w-8 h-8"/>
                </div>
                <h3 className="text-xl font-semibold mb-4">{info.title}</h3>
                <p className="text-gray-600">{info.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Cta/>
      <BusinessInfo />
      <Footer/>
    </HelmetProvider>
  );
}
