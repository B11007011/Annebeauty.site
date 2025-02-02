import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import heroImg from '../assets/hero-img.webp';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section>
      <div className="wrapper py-[50px] md:py-[100px] flex flex-col sm:items-center sm:flex-row-reverse justify-between gap-4 relative">
        <div className="sm:w-1/2 border-r-[16px] -mr-4 border-t-[16px] border-b-[16px] sm:border-l-[16px] lg:border-l-[24px] lg:border-t-[24px] lg:border-b-[24px] lg:border-r-0 lg:-mr-0 lg:h-[600px] border-offWhite ">
          <img 
            className="w-full h-full object-cover" 
            src={heroImg} 
            alt={language === 'zh' 
              ? "一位女士的手握著指甲油瓶，展示她色彩豐富和時尚的美甲藝術。" 
              : "A woman's hands gripping a nail polish bottle, highlighting her colorful and trendy nail art."
            } 
          />
        </div>
        <div className="flex flex-col items-start gap-6 sm:w-1/2">
          <h1>{t('hero.mainTitle')}</h1>
          <p className="text-xl">{t('hero.subtitle')}</p>
          <Link to="/services/manikir" className="btn btn-outline">
            <span>{t('hero.learnMore')}</span>
            <GoArrowRight/>
          </Link>
        </div>
        <div className="bg-accent absolute top-0 left-[250px] right-0 lg:left-[300px] h-full sm:right-[100px] z-[-2]"></div>
      </div>
    </section>
  );
}