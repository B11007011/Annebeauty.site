import manicureImg from "./assets/manicure-img.webp";
import permanentMakeupImg from "./assets/permanent-makeup-img.webp";
import educationsImg from "./assets/educations-img.webp";

import galleryManicure1 from "./assets/gallery-manicure-1.jpg";
import galleryManicure2 from "./assets/gallery-manicure-2.jpg";
import galleryManicure3 from "./assets/gallery-manicure-3.jpg";
import galleryManicure4 from "./assets/gallery-manicure-4.jpg";
import galleryManicure5 from "./assets/gallery-manicure-5.webp";
import galleryManicure6 from "./assets/gallery-manicure-6.jpg";
import galleryManicure7 from "./assets/gallery-manicure-7.jpg";
import galleryManicure8 from "./assets/gallery-manicure-8.jpg";
import galleryManicure9 from "./assets/gallery-manicure-9.jpg";

import galleryPermanent1 from "./assets/gallery-permanent-1.jpg";
import galleryPermanent2 from "./assets/gallery-permanent-2.jpg";
import galleryPermanent3 from "./assets/gallery-permanent-3.jpg";
import galleryPermanent4 from "./assets/gallery-permanent-4.jpg";
import galleryPermanent5 from "./assets/gallery-permanent-5.jpg";
import galleryPermanent6 from "./assets/gallery-permanent-6.jpg";
import galleryPermanent7 from "./assets/gallery-permanent-7.jpg";
import galleryPermanent8 from "./assets/gallery-permanent-8.jpg";
import galleryPermanent9 from "./assets/gallery-permanent-9.jpg";

import galleryeducation1 from "./assets/gallery-education-1.jpg";
import galleryeducation2 from "./assets/gallery-education-2.jpg";
import galleryeducation3 from "./assets/gallery-education-3.jpg";
import galleryeducation4 from "./assets/gallery-education-4.jpg";
import galleryeducation5 from "./assets/gallery-education-5.jpg";
import galleryeducation6 from "./assets/gallery-education-6.jpg";
import galleryeducation7 from "./assets/gallery-education-7.jpg";
import galleryeducation8 from "./assets/gallery-education-8.jpg";
import galleryeducation9 from "./assets/gallery-education-9.jpg";

import aboutImg1 from "./assets/about-img-1.webp";
import aboutImg2 from "./assets/about-img-2.webp";

import envelopeIcon from "./assets/envelope-icon.svg";
import mapMarkerIcon from "./assets/map-marker-icon.svg";
import phoneIcon from "./assets/phone-icon.svg";

import { FaInstagram, FaFacebookF, FaLine } from "react-icons/fa";

import lineQRCode from "./assets/line-qr-code.jpg";

export const navLinks = [
  { name: "首頁", url: "/" },
  { name: "服務項目", url: "/usluge" },
  { name: "關於我們", url: "/o-nama" },
  { name: "聯絡我們", url: "/kontakt" },
  { name: "部落格", url: "/blog" },
];

export const services = [
  {
    pageUrl: "manikir",
    servicesTitle: "美甲",
    servicesDesc:
      "精緻且細心的指甲護理，包括按需求塑形、打磨以達到完美光滑、細緻的角質護理以保持健康和整潔的外觀，以及塗抹高品質的顏色指甲油。我們使用最好的技術和產品，讓您的指甲看起來完美無瑕且持久。除了美觀，指甲護理還有助於保持指甲和手部皮膚的健康，帶來清新和奢華的感覺。",
    servicesImg: manicureImg,
    servicesList: [
      {
        servicesListTitle: "凝膠指甲",
        servicesListDesc:
          "這種技術使用凝膠塗抹在自然指甲或延長指甲上。凝膠然後通過UV或LED燈固化。凝膠指甲以其持久性、自然外觀和光澤著稱。",
      },
      {
        servicesListTitle: "壓克力指甲",
        servicesListDesc:
          "壓克力是通過液體單體和粉末聚合物的結合來創造的，塗抹在指甲上以形成堅固、持久的表面。這種技術允許指甲長和創建不���的形狀。",
      },
      {
        servicesListTitle: "法式美甲",
        servicesListDesc:
          "經典技術以自然外觀著稱。指甲通常塗有中性色粉紅色色，而尖塗有白色這種風格優雅且多功能。",
      },
    ],
    servicesGallery: [
      galleryManicure1,
      galleryManicure2,
      galleryManicure3,
      galleryManicure4,
      galleryManicure5,
      galleryManicure6,
      galleryManicure7,
      galleryManicure8,
      galleryManicure9,
    ],
  },
  {
    pageUrl: "trajna-sminka",
    servicesTitle: "半永久紋繡",
    servicesDesc:
      "我們的永久化妝服務包括精確的色素應用，用於定義眉毛、眼瞼和嘴唇，讓您在任何時候都擁有完美的外觀，無需每天化妝。我們使用最高品質的色素和最先進的技術，以達到自然和優雅的外觀，持續數月。通過我們的永久化妝，您每天都能自信滿滿地迎接新的一天，感受完美無瑕。",
    servicesImg: permanentMakeupImg,
    servicesList: [
      // {
      //   servicesListTitle: "眼部永久化妝",
      //   servicesListDesc:
      //     "這種技術包括在眼部周圍塗抹色素，以達到眼線或填充眉毛的效果。眼部永久化妝可以包括不同的風格，如細眼線或陰影。結果是持久的外觀，不需要每天化妝。",
      // },
      {
        servicesListTitle: "唇部半永久紋繡",
        servicesListDesc:
          "這種方法使用色素來創造持久的唇色效果。可以達到自然唇色效果、強調輪廓或填充唇部。唇部永久化妝可以幫助調整唇形，增加顏色而無需不斷重新塗抹口紅。",
      },
      {
        servicesListTitle: "眉毛半永久紋繡",
        servicesListDesc:
          "也稱為微雕或陰影技術，這種方法使用細針將色素塗抹在皮膚的上層，以創造自然毛髮效果或填補稀疏的眉毛部分。這種技術允許持久且精確的眉毛外觀，可以根據客戶的需求和願望進行調整。",
      },
    ],
    servicesGallery: [
      galleryPermanent1,
      galleryPermanent2,
      galleryPermanent3,
      galleryPermanent4,
      galleryPermanent5,
      galleryPermanent6,
      galleryPermanent7,
      galleryPermanent8,
      galleryPermanent9,
    ],
  },
  {
    pageUrl: "edukacije",
    servicesTitle: "美睫嫁接",
    servicesDesc:
      "通過我們專業設計的教育課程提升您的技能和知識，適合初學者和有經驗的專業人士。我們的課程涵蓋美容領域的最新技術和趨勢，從美甲和足部護理，到按摩和部理，再到高級永久化妝課程和其他多種療程。教育課程旨在通過互動式工作坊提供實用知識和經驗，由具有多年經驗的專業講師指導。與我們一起，您將不僅獲得理論知識還將獲得實技能，幫助您美容行業建立成功的職業生涯。",
    servicesImg: educationsImg,
    servicesList: [
      {
        servicesListTitle: "指甲技術課程",
        servicesListDesc:
          "此課程涵蓋各種美甲和足部護理技術，包括凝膠、壓克力和其他相關技術的應用和維護。學員將學習這些技術的應用、維護和去除，以及安全措施和衛生。",
      },
      {
        servicesListTitle: "永久化妝課程",
        servicesListDesc:
          "此教育涵蓋永久化妝的所有方面，包括皮膚準備、色素選擇、應用技術和術後護理。課程提供實踐練習和維持質量的建議，確保達到持久效果。",
      },
    ],
    servicesGallery: [
      galleryeducation1,
      galleryeducation2,
      galleryeducation3,
      galleryeducation4,
      galleryeducation5,
      galleryeducation6,
      galleryeducation7,
      galleryeducation8,
      galleryeducation9,
    ],
  },
];

export const counter = [
  {
    counterNumber: "1000",
    counterTitle: "滿意客戶",
    counterDesc:
      "我們滿意的客戶是我們每天提供高質量服務的承諾和專業的證明。",
  },
  {
    counterNumber: "500",
    counterTitle: "舉辦的培訓",
    counterDesc:
      "我們組織了許多培訓和教育，幫助專業人士提升他們在美容領域的知識和技能。",
  },
  {
    counterNumber: "25",
    counterTitle: "成立年數",
    counterDesc:
      "在美容世界中擁有多年經驗，我們培養了質量和穩定的傳統，提供卓越的服務。",
  },
];

export const aboutSection = [
  {
    aboutImg: aboutImg1,
    aboutTItle: "我們的故事",
    aboutDesc:
      "一切始於超過25年前，當時Ljiljana Medović受到對美的熱情和為客戶創造獨特時刻的願望的啟發，開設了她的第一家沙龍。從那時起，我們每天都努力為每位客戶提供讓他們感到被關愛和滿意的體驗。多年來，我們成為質量和專業的代名詞。我們的沙龍以特別關注指甲護理和美化而聞名，包括製作沙龍指甲以及為指甲設計師和競賽者組織培訓。通過不斷的改進和跟隨美容行業的最新趨勢，我們能夠提供滿足最高標準的服務。",
    altImg:
      "Ljiljana Medovic展示她的風格和專業精神的擺拍照片。",
  },
  {
    aboutImg: aboutImg2,
    aboutTItle: "我們的願景",
    aboutDesc:
      "我們希望成為不僅僅是普通美容沙龍的地方——一個讓每���人都感到被珍視、受到啟發並在其美麗和獨特性中得到支持的地方我們相美來自內心，但心護理的外在形象也能增強自信和內心的平靜。因此，我們致力於不斷提升我們的技能，跟隨最新的趨勢並使用最高質量的產品。我們將繼續通過專業、奉獻和溫暖的氛圍建立信任，讓每個人都感覺像在家一樣。",
    altImg:
      "特寫鏡頭展示長而精心設計的壓克力指甲的手放在證書上。",
  },
];

export const contactInfo = [
  {
    type: "電話",
    name: "+886-981-606-455",
    info: "tel:+886981606455",
    icon: phoneIcon,
    altIcon: "電話圖標",
  },
  {
    type: "電子郵件",
    name: "a0081606455@gmail.com",
    info: "mailto:a0081606455@gmail.com",
    icon: envelopeIcon,
    altIcon: "信封圖標",
  },
  {
    type: "地址",
    name: "內湖區 Anne 粉霧眉 美睫 美甲",
    info: "https://g.co/kgs/tSjy49U",
    icon: mapMarkerIcon,
    altIcon: "地圖標記圖標",
  },
];

export const socialLinks = [
  {
    url: "https://www.facebook.com/profile.php?id=100054297440256",
    icon: FaFacebookF,
    ariaLabel: "訪問Facebook頁面",
    alt: "Facebook圖標",
  },
  {
    url: "https://www.instagram.com/a0081606455/",
    icon: FaInstagram,
    ariaLabel: "訪問Instagram頁面",
    alt: "Instagram圖標",
  },
  {
    url: "https://line.me/ti/p/YOUR_LINE_ID",
    icon: FaLine,
    ariaLabel: "加入Line好友",
    alt: "Line圖標",
  },
];

export const blogPosts = [
  { 
    title: "指甲設計的未來趨勢", 
    url: "/blog/nail-design-future-trends",
    image: "https://picsum.photos/300/200?random=1",
    alt: "指甲設計的未來趨勢圖片"
  },
  { 
    title: "如何在家中保持指甲健康", 
    url: "/blog/how-to-maintain-nail-health-at-home",
    image: "https://picsum.photos/300/200?random=2",
    alt: "如何在家中保持指甲健康圖片"
  },
  { 
    title: "指甲設計的創新技術", 
    url: "/blog/innovative-nail-design-techniques",
    image: "https://picsum.photos/300/200?random=3",
    alt: "指甲設計的創新技術圖片"
  },
];

export const lineQRCodeData = {
  image: lineQRCode,
  alt: "掃描加入Line好友",
  lineId: "@0981606455",
};

export const translations = {
  sr: {
    // Navigation
    home: 'Početna',
    services: 'Usluge',
    about: 'O nama',
    contact: 'Kontakt',
    blog: 'Blog',

    // Common buttons
    readMore: 'Pročitaj više',
    sendMessage: 'Pošalji poruku',
    
    // Home page
    welcomeTitle: 'Dobrodošli',
    
    // Services page
    ourServices: 'Naše usluge',
    
    // About page
    aboutUs: 'O nama',
    
    // Contact page
    contactUs: 'Kontaktirajte nas',
    
    // Form labels
    name: 'Ime',
    email: 'Email',
    message: 'Poruka',
  },
  
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',

    // Common buttons
    readMore: 'Read More',
    sendMessage: 'Send Message',
    
    // Home page
    welcomeTitle: 'Welcome',
    
    // Services page
    ourServices: 'Our Services',
    
    // About page
    aboutUs: 'About Us',
    
    // Contact page
    contactUs: 'Contact Us',
    
    // Form labels
    name: 'Name',
    email: 'Email',
    message: 'Message',
  }
};

export const getTranslation = (language, key) => {
  return translations[language]?.[key] || key;
};