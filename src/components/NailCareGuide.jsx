import React from 'react';

export default function NailCareGuide() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">美甲保養完整指南</h1>
        <p className="text-gray-600">
          保持健康美麗的指甲不僅能提升整體形象，更是健康的重要指標。讓我們一起來了解如何正確護理您的指甲。
        </p>
      </header>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          一、基礎保養準備工具
        </h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>專業指甲刀
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>指甲銼刀
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>溫和清潔劑
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>護手霜
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>指緣油
            </li>
            <li className="flex items-center text-gray-700">
              <span className="mr-3">•</span>基礎護甲油
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
          二、日常護理步驟
        </h2>
        <div className="space-y-6">
          {/* Daily Care Section */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">1. 日常清潔與保養</h3>
            <ul className="space-y-3">
              <li>定期使用溫和清潔劑清洗指甲</li>
              <li>戴手套進行家務清潔</li>
              <li>避免用指甲當工具撬除物品</li>
              <li>每天使用溫水清洗，避免過熱或過冷的水溫</li>
            </ul>
          </div>

          {/* Trimming Section */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">2. 正確的修剪方式</h3>
            <ul className="space-y-3">
              <li>使用專業指甲刀，保持甲形圓弧順修剪</li>
              <li>避免過度修剪指甲邊緣</li>
              <li>建議每週修剪一次，保持適當長度</li>
              <li>修剪後使用指甲銼刀順著同一方向修整</li>
            </ul>
          </div>

          {/* Nourishment Section */}
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">3. 滋養與保濕</h3>
            <ul className="space-y-3">
              <li>選用優質護甲油進行日常保養</li>
              <li>定期使用指緣油滋潤甲床</li>
              <li>注意手部保濕，使用護手霜</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 