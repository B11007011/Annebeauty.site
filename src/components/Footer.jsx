import { Link, useLocation } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaFacebookF, FaInstagram, FaChevronRight } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { useConfig } from '../context/ConfigContext';

export default function Footer() {
  const { config } = useConfig();
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  if (!config) return null;

  // Define quick links
  const quickLinks = [
    { name: '首頁', url: '/' },
    { name: '服務項目', url: '/usluge' },
    { name: '關於我們', url: '/o-nama' },
    { name: '部落格', url: '/blog' },
    { name: '聯絡我們', url: '/kontakt' }
  ];

  // Define services with correct URLs
  const services = [
    { name: '美甲', url: '/usluge/manikir' },
    { name: '半永久紋繡', url: '/usluge/trajna-sminka' },
    { name: '美睫嫁接', url: '/usluge/edukacije' }
  ];

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <Link to="/" className="block mb-6">
              <img 
                src={config.images?.logo} 
                alt={config.siteInfo?.name} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-600 mb-6">
              {config.siteInfo?.description}
            </p>
            <div className="flex gap-4">
              {config.socialLinks?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#C4A86D] hover:text-white transition-all duration-300"
                >
                  {link.platform === 'facebook' && <FaFacebookF className="text-lg" />}
                  {link.platform === 'instagram' && <FaInstagram className="text-lg" />}
                  {link.platform === 'line' && <SiLine className="text-lg" />}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <nav className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.url}
                  className="flex items-center text-gray-600 hover:text-[#C4A86D] transition-colors"
                >
                  <FaChevronRight className="mr-2 text-xs" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">服務項目</h3>
            <nav className="flex flex-col space-y-3">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.url}
                  className="flex items-center text-gray-600 hover:text-[#C4A86D] transition-colors"
                  onClick={(e) => {
                    if (service.url.includes('#')) {
                      e.preventDefault();
                      const id = service.url.split('#')[1];
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.href = service.url;
                      }
                    }
                  }}
                >
                  <FaChevronRight className="mr-2 text-xs" />
                  <span>{service.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-4">
              <a 
                href={`tel:${config.contactInfo?.phone}`}
                className="flex items-center text-gray-600 hover:text-[#C4A86D] transition-colors"
              >
                <FaPhone className="mr-3" />
                <span>{config.contactInfo?.phone}</span>
              </a>
              
              <a 
                href={`mailto:${config.contactInfo?.email}`}
                className="flex items-center text-gray-600 hover:text-[#C4A86D] transition-colors"
              >
                <FaEnvelope className="mr-3" />
                <span>{config.contactInfo?.email}</span>
              </a>
              
              <a 
                href={config.contactInfo?.googleMapUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-[#C4A86D] transition-colors"
              >
                <FaMapMarkerAlt className="mr-3" />
                <span>{config.contactInfo?.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500">
            &copy; {currentYear} {config.siteInfo?.name}. 設計者{" "}
            <a 
              href="mailto:nguyenvanqui291@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C4A86D] hover:underline"
            >
              Brian Nguyen
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
