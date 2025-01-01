import { useConfig } from '../context/ConfigContext';

export default function About() {
  const { aboutSection } = useConfig();
  
  return (
    <section className="py-[50px] lg:py-[100px]">
      <div className="wrapper">
        <div className="space-y-16">
          {aboutSection.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="lg:w-1/2">
                <img
                  src={item.aboutImg}
                  alt={item.altImg}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{item.aboutTItle}</h2>
                <p className="text-gray-600 leading-relaxed">{item.aboutDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 