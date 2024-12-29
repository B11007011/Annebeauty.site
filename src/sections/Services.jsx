import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { services } from '../data';

export default function Services({ showTitle = true }) {
 
  return (
    <section className="my-[50px] lg:my-[100px]">
      <div className="wrapper">
     <div className="max-w-xl mx-auto mb-[50px] sm:text-center">
     <h2 className="mb-6 sm:mb-12">我們的服務</h2>
     {/* <p>我們相信美麗來自於細心的護理和專業的態度。無論您想要美甲或其他服務，我們都在這裡滿足您的所有期望。</p> */}
     </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-4 xl:gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div className="aspect-square mb-6">
                <img src={service.servicesImg} alt="" />
              </div>
              <h3>{service.servicesTitle}</h3>
              <p className="mt-3 mb-4 line-clamp-3">{service.servicesDesc}</p>
              <div className="inline-block">
                <Link to={`/usluge/${service.pageUrl}`} className="btn-tertiary">
                  <span>閱讀更多</span>
                  <GoArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
