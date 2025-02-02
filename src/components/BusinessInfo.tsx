import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaSubway, FaClock, FaInstagram, FaFacebookF, FaLine, FaEnvelope } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface BusinessHour {
  day: string;
  hours: string;
  isClosed?: boolean;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: IconType;
}

const businessHours: BusinessHour[] = [
  { day: '星期一', hours: '08:00–19:00' },
  { day: '星期二', hours: '08:00–19:00' },
  { day: '星期三', hours: '08:00–19:00' },
  { day: '星期四', hours: '08:00–19:00' },
  { day: '星期五', hours: '08:00–19:00' },
  { day: '星期六', hours: '08:00–17:00' },
  { day: '星期日', hours: '休息', isClosed: true },
];

const socialLinks: SocialLink[] = [
  { platform: 'instagram', url: 'https://www.instagram.com/a0081606455/', icon: FaInstagram },
  { platform: 'facebook', url: 'https://www.facebook.com/profile.php?id=100054297440256', icon: FaFacebookF },
  { platform: 'line', url: 'https://line.me/R/ti/p/@mxn8805y', icon: FaLine },
  { platform: 'email', url: 'mailto:a0081606455@gmail.com', icon: FaEnvelope },
];

const BusinessInfo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 text-pink-500 hover:text-pink-600"
                onClick={() => {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'social_click', {
                      'event_category': 'engagement',
                      'event_label': link.platform
                    });
                  }
                }}
              >
                <Icon className="text-xl" />
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Business Hours Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <FaClock className="text-2xl text-pink-500" />
              <h2 className="text-2xl font-semibold">營業時間</h2>
            </div>
            <div className="space-y-3">
              {businessHours.map((schedule, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-gray-700">{schedule.day}</span>
                  <span className={schedule.isClosed ? 'text-red-500 font-medium' : 'text-gray-900'}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
            <a
              href="https://line.me/R/ti/p/@mxn8805y"
              className="mt-8 block w-full bg-pink-500 text-white text-center py-3 px-4 rounded-xl hover:bg-pink-600 transition duration-300 font-medium"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window.gtag !== 'undefined') {
                  window.gtag('event', 'service_booking_click', {
                    'event_category': 'engagement',
                    'event_label': 'booking_initiated'
                  });
                }
              }}
            >
              立即預約
            </a>
          </div>

          {/* Contact Info Card with Map */}
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            <div className="p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <FaMapMarkerAlt className="text-2xl text-pink-500" />
                <h2 className="text-2xl font-semibold">店家資訊</h2>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-lg text-pink-500 mt-1" />
                  <p className="text-gray-700">日式威廉髮廊, No. 4號內湖路一段285巷27弄內湖區台北市114</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="text-lg text-pink-500 mt-1" />
                  <p className="text-gray-700">0981-606-455</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaSubway className="text-lg text-pink-500 mt-1" />
                  <p className="text-gray-700">捷運西湖站步行5分鐘</p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=Anne+美睫+美甲+紋繡+內湖區"
                className="block w-full bg-gray-800 text-white text-center py-3 px-4 rounded-xl hover:bg-gray-900 transition duration-300 font-medium mb-6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  if (typeof window.gtag !== 'undefined') {
                    window.gtag('event', 'contact_interaction', {
                      'event_category': 'engagement',
                      'event_label': 'directions_click'
                    });
                  }
                }}
              >
                規劃路線
              </a>
            </div>
            {/* Embedded Map */}
            <div className="w-full h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5446402825833!2d121.56451967537807!3d25.083418477784395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ad980875c73b%3A0xbda9d834a537fdb9!2zQW5uZSDnvo7nnasg576O55SyIOe0i-e5oS0g5YWn5rmW5Y2AKOe-jueUsuaOqOiWpi_nvo7nnavmjqjolqYv57SL57aJ5o6o6JamKSDlhafmuZYo576O55SyL-e-juedqy_ntIvntokv57KJ6Zyn55yJ5o6o6JamKQ!5e0!3m2!1szh-TW!2stw!4v1738495911575!5m2!1szh-TW!2stw"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Anne Beauty Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add TypeScript declaration for gtag
declare global {
  interface Window {
    gtag: (command: string, action: string, params: any) => void;
  }
}

export default BusinessInfo; 