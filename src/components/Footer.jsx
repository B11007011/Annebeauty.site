import { Link } from "react-router-dom";
import { navLinks, services, contactInfo, socialLinks } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-center py-10">
      <div className="wrapper">
        <div className="flex justify-between flex-col sm:flex-row sm:flex-wrap gap-6 py-[50px] lg:py-[100px] border-b border-gray-300">
          
          {/* Logo and Description Section */}
          <div className="max-w-[335px]">
            <Link className="logo" to="/" aria-label="Nail Design Ljiljana Medović Home">
              <img  src="/logo.svg" alt="Nail Design Ljiljana Medović logo" />
            </Link>
            <div className="mt-4 mb-5">
              歡迎來到我們位於尼什市中心的美麗與優雅角落，您的滿意和護理是我們的首要任務。
            </div>
            <ul className="flex gap-4">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="group h-[50px] w-[50px] flex justify-center items-center rounded-full border border-black hover:bg-black duration-200"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <link.icon className="text-xl group-hover:text-white duration-200"/>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links Section */}
          <nav aria-label="快速連結">
            <h2 className="mb-4 text-xl font-serif">快速連結</h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link className="hover:underline capitalize" to={link.url} aria-label={link.name}>
                  {link.name}
                </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services Section */}
          <nav aria-label="服務">
            <h2 className="mb-4 text-xl font-serif">服務</h2>
            <ul className="flex flex-wrap gap-2 sm:flex-col">
              {services.map((service, index) => (
                <li key={index}>
                  <Link className="capitalize hover:underline" to={`/usluge/${service.pageUrl}`} aria-label={`查看${service.servicesTitle}`}>
                  {service.servicesTitle}
                </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="mb-4 text-xl font-serif">
              聯絡資訊
            </h2>
            <ul className="flex flex-col space-y-2">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a className="hover:underline" href={contact.info} aria-label={`通過${contact.name}聯絡我們`}>
                  {contact.name}
                </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="py-10 sm:text-center">
          &copy; {currentYear} Nails Design Anne-美甲美睫. 設計者&nbsp;
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Brian Nguyen
          </a>
        </div>
      </div>
    </footer>
  );
}
