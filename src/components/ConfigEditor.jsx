import React, { useState } from 'react';
import { useConfig } from '../context/ConfigContext';

export default function ConfigEditor() {
  const { config, updateConfig } = useConfig();
  const [activeSection, setActiveSection] = useState('services');
  const [saveStatus, setSaveStatus] = useState('');

  // Early return if config is not loaded yet
  if (!config) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p>載入中...</p>
        </div>
      </div>
    );
  }

  const handleChange = (section, field, value) => {
    try {
      if (section === 'services') {
        const newServices = [...(config.services || [])];
        const [index, subField] = field.split('.');
        const serviceIndex = parseInt(index);
        
        if (!isNaN(serviceIndex)) {
          newServices[serviceIndex] = {
            ...newServices[serviceIndex],
            [subField]: value
          };
          updateConfig('services', null, newServices);
        }
      } else if (section === 'socialLinks') {
        const newSocialLinks = [...(config.socialLinks || [])];
        const index = parseInt(field);
        if (!isNaN(index)) {
          newSocialLinks[index] = value;
          updateConfig('socialLinks', null, newSocialLinks);
        }
      } else {
        updateConfig(section, field, value);
      }
      setSaveStatus('已儲存到暫存');
      setTimeout(() => setSaveStatus(''), 2000);
    } catch (error) {
      console.error('Error updating config:', error);
      setSaveStatus('儲存失敗');
    }
  };

  const handleDownload = () => {
    try {
      const configContent = `export const appointmentInfo = ${JSON.stringify(config.appointmentInfo, null, 2)};

export const businessHours = ${JSON.stringify(config.businessHours, null, 2)};

export const contactInfo = ${JSON.stringify(config.contactInfo, null, 2)};

export const images = ${JSON.stringify(config.images, null, 2)};

export const navLinks = ${JSON.stringify(config.navLinks, null, 2)};

export const seoInfo = ${JSON.stringify(config.seoInfo, null, 2)};

export const services = ${JSON.stringify(config.services, null, 2)};

export const siteInfo = ${JSON.stringify(config.siteInfo, null, 2)};

export const socialLinks = ${JSON.stringify(config.socialLinks, null, 2)};

export const counter = ${JSON.stringify(config.counter, null, 2)};

export const aboutSection = ${JSON.stringify(config.aboutSection, null, 2)};`;

      const blob = new Blob([configContent], { type: 'text/javascript' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = 'siteConfig.js';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setSaveStatus('設定檔已下載！請將檔案放到 src/config/ 資料夾中');
      setTimeout(() => setSaveStatus(''), 5000);
    } catch (error) {
      console.error('Error downloading config:', error);
      setSaveStatus('下載失敗');
    }
  };

  const renderServicesEditor = () => {
    return (
      <div>
        {config.services.map((service, index) => (
          <div key={index} className="mb-8 p-6 border rounded-lg bg-gray-50">
            <h4 className="text-xl font-medium mb-6">服務 #{index + 1}</h4>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  服務標題
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={service.servicesTitle}
                  onChange={(e) => handleChange('services', `${index}.servicesTitle`, e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  頁面網址
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={service.pageUrl}
                  onChange={(e) => handleChange('services', `${index}.pageUrl`, e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  服務描述
                </label>
                <textarea
                  className="w-full p-2 border rounded-md min-h-[120px] resize-y"
                  value={service.servicesDesc}
                  onChange={(e) => handleChange('services', `${index}.servicesDesc`, e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  服務圖片路徑
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={service.servicesImg}
                  onChange={(e) => handleChange('services', `${index}.servicesImg`, e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  子服務項目
                </label>
                {service.servicesList?.map((subService, subIndex) => (
                  <div key={subIndex} className="mb-4 p-4 border rounded bg-white">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        子服務標題
                      </label>
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={subService.servicesListTitle}
                        onChange={(e) => {
                          const newServicesList = [...service.servicesList];
                          newServicesList[subIndex] = {
                            ...newServicesList[subIndex],
                            servicesListTitle: e.target.value
                          };
                          handleChange('services', `${index}.servicesList`, newServicesList);
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        子服務描述
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-md min-h-[80px] resize-y"
                        value={subService.servicesListDesc}
                        onChange={(e) => {
                          const newServicesList = [...service.servicesList];
                          newServicesList[subIndex] = {
                            ...newServicesList[subIndex],
                            servicesListDesc: e.target.value
                          };
                          handleChange('services', `${index}.servicesList`, newServicesList);
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSocialLinksEditor = () => {
    return (
      <div>
        {config.socialLinks.map((link, index) => (
          <div key={index} className="mb-6 p-4 border rounded-lg bg-gray-50">
            <h4 className="text-lg font-medium mb-4">社群媒體 #{index + 1}</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  平台
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={link.platform}
                  onChange={(e) => {
                    const newLink = { ...link, platform: e.target.value };
                    handleChange('socialLinks', index, newLink);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  網址
                </label>
                <textarea
                  className="w-full p-2 border rounded-md min-h-[60px] resize-y"
                  value={link.url}
                  onChange={(e) => {
                    const newLink = { ...link, url: e.target.value };
                    handleChange('socialLinks', index, newLink);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  標籤說明
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={link.ariaLabel}
                  onChange={(e) => {
                    const newLink = { ...link, ariaLabel: e.target.value };
                    handleChange('socialLinks', index, newLink);
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCounterEditor = () => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">計數器設定</h2>
      <div className="space-y-4">
        {config.counter.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">數字</label>
              <input
                type="text"
                value={item.counterNumber}
                onChange={(e) => updateConfig('counter', index, { ...item, counterNumber: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">標題</label>
              <input
                type="text"
                value={item.counterTitle}
                onChange={(e) => updateConfig('counter', index, { ...item, counterTitle: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">描述</label>
              <textarea
                value={item.counterDesc}
                onChange={(e) => updateConfig('counter', index, { ...item, counterDesc: e.target.value })}
                className="w-full p-2 border rounded"
                rows="3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAboutEditor = () => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">關於我們設定</h2>
      <div className="space-y-4">
        {config.aboutSection.map((item, index) => (
          <div key={index} className="p-4 border rounded">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">圖片路徑</label>
              <input
                type="text"
                value={item.aboutImg}
                onChange={(e) => updateConfig('aboutSection', index, { ...item, aboutImg: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">標題</label>
              <input
                type="text"
                value={item.aboutTItle}
                onChange={(e) => updateConfig('aboutSection', index, { ...item, aboutTItle: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">描述</label>
              <textarea
                value={item.aboutDesc}
                onChange={(e) => updateConfig('aboutSection', index, { ...item, aboutDesc: e.target.value })}
                className="w-full p-2 border rounded"
                rows="5"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">圖片描述</label>
              <input
                type="text"
                value={item.altImg}
                onChange={(e) => updateConfig('aboutSection', index, { ...item, altImg: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFields = (section, data) => {
    if (section === 'updateConfig') return null;
    if (section === 'services') return renderServicesEditor();
    if (section === 'socialLinks') return renderSocialLinksEditor();
    
    return Object.entries(data).map(([field, value]) => {
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        return (
          <div key={field} className="mt-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">{field}</h3>
            <div className="pl-4">
              {renderFields(section, value)}
            </div>
          </div>
        );
      }

      return (
        <div key={field} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field}
          </label>
          {Array.isArray(value) ? (
            <textarea
              className="w-full p-2 border rounded-md font-mono text-sm"
              value={JSON.stringify(value, null, 2)}
              rows={8}
              onChange={(e) => {
                try {
                  const newValue = JSON.parse(e.target.value);
                  handleChange(section, field, newValue);
                } catch (error) {
                  console.error('Invalid JSON');
                }
              }}
            />
          ) : (
            <textarea
              className="w-full p-2 border rounded-md min-h-[60px] resize-y"
              value={value}
              onChange={(e) => handleChange(section, field, e.target.value)}
            />
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">網站設定編輯器</h1>
          <div className="flex items-center gap-4">
            {saveStatus && (
              <p className={`text-sm ${saveStatus.includes('失敗') ? 'text-red-500' : 'text-green-500'}`}>
                {saveStatus}
              </p>
            )}
            <button
              onClick={handleDownload}
              className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
            >
              下載設定檔
            </button>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            <strong>使用說明：</strong>
            <ol className="list-decimal ml-5 mt-2">
              <li>在此編輯您的網站設定</li>
              <li>編輯完成後，點擊「下載設定檔」按鈕</li>
              <li>將下載的 siteConfig.js 檔案複製到您的專案中的 src/config/ 資料夾</li>
              <li>重新整理網站即可看到更新後的內容</li>
            </ol>
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {Object.keys(config).filter(key => key !== 'updateConfig').map(section => (
            <button
              key={section}
              className={`px-4 py-2 rounded-md ${
                activeSection === section
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{activeSection}</h2>
          {config[activeSection] && renderFields(activeSection, config[activeSection])}
        </div>
      </div>
    </div>
  );
} 