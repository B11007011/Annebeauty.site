import { Link, useLocation, useParams } from "react-router-dom";
import { VscChevronRight } from "react-icons/vsc";

const services = [
  {
    pageUrl: "manikir",
    servicesTitle: "美甲",
    servicesDesc:
      "精確細心的指甲護理，包括客製化的指甲造型、打磨以達到完美的光滑度、細緻的指甲修護以保持健康整潔的外觀，以及使用高品質指甲油進行上色。我們使用最佳技術和產品，讓您的指甲看起來完美且持久。除了美觀方面，美甲護理還有助於保持指甲和手部皮膚的健康，帶來清新和奢華的感受。",
    servicesImg: "/images/manicure-img.jpg",
    servicesList: [
      {servicesListTitle: '凝膠美甲', servicesListDesc: '這種技術使用凝膠塗抹在天然指甲或延長甲片上。凝膠會在UV或LED燈下固化。凝膠美甲以其持久性、自然外觀和光澤度而聞名。'},
      {servicesListTitle: '水晶指甲', servicesListDesc: '水晶指甲是通過液態單體和聚合物粉末的組合製成，塗抹在指甲上形成堅固、持久的表面。這種技術可以延長指甲並創造各種形狀。'},
      {servicesListTitle: 'Shellac（希拉克）', servicesListDesc: 'Shellac是一種混合型指甲油，結合了普通指甲油和凝膠的特性。像指甲油一樣塗抹，在UV燈下固化。希拉克提供持久、閃亮的效果，不易剝落。'},
      {servicesListTitle: '法式美甲', servicesListDesc: '以自然外觀著稱的經典技術。指甲通常塗上自然色或粉色底色，指尖塗上白色。這種風格優雅且百搭。'},
    ],
    servicesGallery: ['/images/gallery-manicure-1.jpg', '/images/gallery-manicure-2.jpg', '/images/gallery-manicure-3.jpg', '/images/gallery-manicure-4.jpg', '/images/gallery-manicure-5.jpg', '/images/gallery-manicure-6.jpg', '/images/gallery-manicure-7.jpg', '/images/gallery-manicure-8.jpg', '/images/gallery-manicure-9.jpg']
  },
  {
    pageUrl: "trajna-sminka", 
    servicesTitle: "半永久化妝",
    servicesDesc:
      "我們的半永久化妝服務包括精確的色素應用，用於定義眉毛、眼瞼和嘴唇，讓您隨時保持完美妝容，無需每天化妝。我們使用最優質的色素和最先進的技術，以達到持續數月的自然優雅效果。有了我們的半永久化妝，您每天醒來都會感到自信和完美。",
    servicesImg: "/images/permanent-makeup-img.jpg",
    servicesList: [
      {servicesListTitle: '半永久眼妝', servicesListDesc: '這種技術包括在眼部周圍注入色素，以達到眼線或眉毛填充的效果。半永久眼妝可以包括不同的風格，如細線眼線或漸層效果。結果是持久的外觀，無需每日化妝。'},
      {servicesListTitle: '半永久唇妝', servicesListDesc: '這種方法使用色素在嘴唇上創造持久的顏色。可以達到自然唇色效果、強調輪廓或填充唇部。半永久唇妝可以幫助重新定義唇形並添加顏色，無需不斷重新塗抹口紅。'},
      {servicesListTitle: '半永久眉妝', servicesListDesc: '也稱為飄眉或漸層技術，這種方法使用細針將色素注入皮膚表層，以創造自然毛髮效果或填充稀疏的眉毛部分。這種技術可以根據客戶的需求和願望提供持久且精確的眉形。'},
    ],
    servicesGallery: [ '/images/gallery-permanent-1.jpg', '/images/gallery-permanent-2.jpg', '/images/gallery-permanent-3.jpg', '/images/gallery-permanent-4.jpg', '/images/gallery-permanent-5.jpg', '/images/gallery-permanent-6.jpg', '/images/gallery-permanent-7.jpg', '/images/gallery-permanent-8.jpg', '/images/gallery-permanent-9.jpg']
  },
  {
    pageUrl: "edukacije",
    servicesTitle: "培訓課程",
    servicesDesc:
      "通過我們專業設計的培訓課程提升您的技能和知識，適合初學者和有經驗的專業人��。我們的課程涵蓋美容領域的最新技術和趨勢，從美甲和足部護理，到按摩和面部護理，再到高級半永久化妝課程等多種治療。培訓課程旨在通過由經驗豐富的講師帶領的互動工作坊提供實踐知識和經驗。與我們一起，您不僅會獲得理論知識，還會獲得實踐技能，使您能夠在美容行業建立成功的職業生涯。",
    servicesImg: "/images/educations-img.jpg",
    servicesList: [
      {servicesListTitle: '美甲技術課程', servicesListDesc: '本課程涵蓋各種美甲技術，包括凝膠、水晶、希拉克和粉末指甲。學員將學習這些技術的應用、維護和卸除，以及安全措施和衛生知識。'},
      {servicesListTitle: '半永久化妝課程', servicesListDesc: '本培訓專注於半永久化妝的各個方面，包括皮膚準備、色素選擇、應用技術和後續護理。學員將學習如何為眼睛、嘴唇和眉毛創造自然外觀，以及如何管理客戶期望和解決潛在問題。'},
      {servicesListTitle: '美甲藝術課程', servicesListDesc: '本課程涵蓋各種美甲藝術風格和技術，包括繪畫、裝飾、貼紙和特效。學員將獲得創意表達技能，學習如何創造獨特和吸引人的設計。'},
      {servicesListTitle: '現代美容技術課程', servicesListDesc: '本培���涵蓋美容領域的最新趨勢和技術，包括半永久化妝、美甲和美容行業的創新。學員將有機會了解最新的產品和方法，以及如何在實踐中應用它們。'},
    ],
    servicesGallery: [ '/images/gallery-education-1.jpg', '/images/gallery-education-2.jpg', '/images/gallery-education-3.jpg', '/images/gallery-education-4.jpg', '/images/gallery-education-5.jpg', '/images/gallery-education-6.jpg', '/images/gallery-education-7.jpg', '/images/gallery-education-8.jpg', '/images/gallery-education-9.jpg']
  }
]

export default function BreadCrumb({ page }) {
  const { title } = useParams();
  const location = useLocation();

  const isServiceDetailPage = location.pathname.startsWith("/service/");

  const service = services.find((service) => service.pageUrl === title);

  return (
    <header>
      <div className="wrapper">
        <div className="bg-accent p-5 lg:p-8 flex justify-between items-center">
          <ul className="flex items-center flex-wrap gap-1 capitalize">
            {!isServiceDetailPage && service  ? (
              <>
                <li>
                  <Link to="/">首頁</Link>
                </li>
                <li><VscChevronRight className="text-lg text-gray-500"/></li>
                <li>
                  <Link to="/usluge">服務</Link>
                </li>
                <li><VscChevronRight className="text-lg text-gray-500"/></li>
                <li>{service.servicesTitle}</li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">首頁</Link>
                </li>
                <li><VscChevronRight className="text-lg text-gray-500"/></li>
                <li>{page}</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
