import { useConfig } from '../context/ConfigContext';

export default function Counter() {
  const { counter } = useConfig();
  
  return (
    <section className="py-[50px] lg:py-[100px] bg-offWhite">
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counter.map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold mb-4">{item.counterNumber}+</h3>
              <h4 className="text-xl font-semibold mb-2">{item.counterTitle}</h4>
              <p className="text-gray-600">{item.counterDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 