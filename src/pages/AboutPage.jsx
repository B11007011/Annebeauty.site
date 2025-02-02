import BreadCrumb from "../components/BreadCrumb"
import { aboutSection } from "../data.jsx"
import Footer from "../components/Footer"
import Cta from "../sections/Cta"
import { Helmet, HelmetProvider } from "react-helmet-async"
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>指甲設計 Anne-美甲美睫 | 關於我們</title>
        <meta name="description" content="了解更多關於我們以及我們對指甲護理和美麗的承諾。"/>
        <link rel="canonical" href="https://Annebeauty.site/about" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="指甲設計 Anne-美甲美睫 | 關於我們" />
        <meta property="og:description" content="了解更多關於我們以及我們對指甲護理和美麗的承諾。" />
        <meta property="og:url" content="https://Annebeauty.site/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar/>
      <main>
        <BreadCrumb page="關於我們" />
        <section className="wrapper my-[50px] lg:my-[100px]">
          <div>
            {aboutSection.map((section, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:even:flex-row-reverse items-center gap-8 lg:gap-20 mb-[50px] lg:mb-[100px]"
              >
                <div className="w-full sm:w-1/2 h-[500px]">
                  <img src={section.aboutImg} alt={section.altImg} className="object-cover w-full h-full rounded-lg shadow-lg" />
                </div>
                <div className="sm:w-1/2">
                  <h2 className="mb-6 text-3xl font-bold">{section.aboutTItle}</h2>
                  <p className="text-lg text-gray-700">{section.aboutDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Cta/>
      <Footer/>
    </HelmetProvider>
  );
}
