import { useState } from "react";
import { motion } from 'framer-motion';

export default function Accordion({ servicesList }) {

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper">
           
        <ul className="space-y-3">
          {servicesList.map((item, index) => (
            <li key={index} className="border border-gray-300">
              <button
                onClick={() => toggleAccordion(index)}
                className="px-6 py-5 cursor-pointer w-full flex text-left justify-between items-center gap-4"
              >
                <h3>{item.servicesListTitle}</h3>
                <div className="relative">
                  <div className="w-[18px] h-[0.1rem] bg-darkColor"></div>
                  <div
                    className={`w-[18px] h-[0.1rem] bg-darkColor absolute top-1/2 -translate-y-1/2 transition-transform duration-200 ${
                      activeIndex === index ? 'rotate-0' : 'rotate-90'
                    }`}
                  ></div>
                </div>
              </button>
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: activeIndex === index ? 'auto' : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <p>{item.servicesListDesc}</p>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
          
        </div>
    </section>
  )
}