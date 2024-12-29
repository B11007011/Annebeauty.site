import React from 'react';

export default function FrenchNailTutorial() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#2d2d2d] rounded-lg shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4 text-white">法式指甲製作教學</h1>
        <p className="text-gray-300 mb-4">
          跟著專業美甲師一步一步學習如何完成漂亮的法式指甲。
        </p>
      </div>

      <div className="bg-[#2d2d2d] rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-white">準備工具</h2>
        <ul className="space-y-2">
          {[
            '指甲刀',
            '銼刀',
            '拋磨砂紙',
            '軟化劑調理',
            '指緣油',
            '指甲修護霜',
            '法式指甲貼（選用）'
          ].map((tool, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <span className="mr-3 text-pink-400">•</span>
              {tool}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#2d2d2d] rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-white">製作步驟</h2>
        <div className="space-y-6">
          {[
            {
              title: '1. 指甲基礎打磨',
              steps: [
                '使用指甲銼刀修整形狀',
                '用軟化劑調理指甲',
                '使用拋磨砂紙磨平表面',
                '清潔並擦乾指甲表面'
              ]
            },
            {
              title: '2. 塗抹基底油',
              steps: [
                '均勻塗抹基底油',
                '等待完全乾燥',
                '確保表面平整光滑',
                '視需要塗抹第二層'
              ]
            },
            {
              title: '3. 法式線條繪製',
              steps: [
                '使用專業指甲貼紙輔助',
                '仔細繪製白色微笑線',
                '注意兩手對稱性',
                '等待顏色完全乾燥'
              ]
            },
            {
              title: '4. 表面處理與保護',
              steps: [
                '塗抹透明保護層',
                '使用快乾油加速乾燥',
                '最後塗抹指緣油滋潤'
              ]
            }
          ].map((section, index) => (
            <div key={index} className="bg-[#363636] p-6 rounded-lg hover:bg-[#404040] transition-colors">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="flex items-center text-gray-300">
                    <span className="mr-3 text-pink-400">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 