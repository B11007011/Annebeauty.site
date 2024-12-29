import BreadCrumb from "../components/BreadCrumb";
import { contactInfo } from "../data";
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
   <HelmetProvider>
    <Helmet>
      <title>指甲設計 Anne-美甲美睫 | 聯絡我們</title>
      <meta name="description" content="無論您對我們的服務有任何疑問或想預約您的下一次服務，我們都在這裡為您提供幫助。"/>
      <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 聯絡我們" />
      <meta property="og:description" content="無論您對我們的服務有任何疑問或想預約您的下一次服務，我們都在這裡為您提供幫助。"/>
      <meta property="og:url" content="https://naildesign-ljiljanamedovic.com/kontakt" />
      </Helmet>
      <Navbar/>
      <main>
      <BreadCrumb page="聯絡我們"/>
      <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper">
          <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
          <h2 className="mb-6">聯絡我們</h2>
          <p>無論您對我們的服務有任何疑問，想了解更多關於我們的沙龍，或想預約您的下一次服務，我們都在這裡為您提供幫助。</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactInfo.map((item, index) => (
            <a href={item.info} className="h-[200px] flex items-center justify-center flex-col gap-2 border border-gray-300 cursor-pointer" key={index}>
              <img className="w-[40px] h-[40px]" src={item.icon} alt={item.altIcon} />
              <h3>{item.type}</h3>
              <p>{item.name}</p>
            </a>
          ))}
          <div className="md:col-span-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57816.71423402807!2d121.50117663124996!3d25.08341850000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad980875c73b%3A0xbda9d834a537fdb9!2z5YWn5rmW5Y2AIEFubmUg57KJ6Zyn55yJIOe-juedqyDnvo7nlLI!5e0!3m2!1szh-TW!2stw!4v1735326396767!5m2!1szh-TW!2stw"
            width="1120"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
        </div>
        </div>
      </section>
      </main>
      <Cta/>
      <Footer/>
      </HelmetProvider>
  );
}
