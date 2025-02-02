import Accordion from '../components/Accordion';
import { useParams } from 'react-router-dom'
import Gallery from '../components/Gallery';
import BreadCrumb from "../components/BreadCrumb";
import { services } from '../data.jsx';
import Footer from "../components/Footer";
import Cta from "../sections/Cta";
import Navbar from "../components/Navbar";
import { HelmetProvider, Helmet } from 'react-helmet-async';

export default function ServicesPageDetails() {
  
  const { title } = useParams();
  const service = services.find((service) => service.pageUrl === title);

  if (!service) {
    return <div className="text-center py-16">服務未找到</div>;
  }
  return (
    <HelmetProvider>
      <Helmet>
      <title>指甲設計 Anne-美甲美睫 | {service.servicesTitle}</title>
      <meta name="description" content={service.servicesDesc}/>
      <link rel="canonical" href={`https://Annebeauty.site/services/${service.pageUrl}`} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={`指甲設計 Anne-美甲美睫 | ${service.servicesTitle}`} />
      <meta property="og:description" content={service.servicesDesc} />
      <meta property="og:url" content={`https://Annebeauty.site/services/${service.pageUrl}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="zh_TW" />
      <meta property="og:image" content={service.servicesImg} />
      <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    <Navbar/>
    <main>
    <BreadCrumb page="服務"/>
    <section className='my-[50px] lg:my-[100px]'>
        <div className="wrapper">
            <div className='flex flex-col items-center gap-8 sm:flex-row lg:gap-16'>
            <div className='h-[400px] lg:h-[500px] w-full sm:w-1/2'>
                <img src={service.servicesImg} alt="" />
            </div>
           <div className='sm:w-1/2'>
           <h2 className="mb-8">{service.servicesTitle}</h2>
           <p>{service.servicesDesc}</p>
           </div>
            </div>
        </div>
    </section>
    <Accordion servicesList={service.servicesList} />
    <Gallery servicesGallery={service.servicesGallery}/>
    </main>
    <Cta/>
    <Footer/>
    </HelmetProvider>
  )
}