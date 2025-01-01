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
        servicesListTitle: "專業美甲服務",
        servicesListDesc:
          "我們提供多樣化的美甲服務，包括手部基礎保養、足部基礎保養、光療美甲、晶透指甲等。每項服務均由專業技師操作，採用高品質產品，讓您的指尖展現獨特魅力與時尚風采。",
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
    pageUrl: "eyelash-extensions",
    servicesTitle: "美睫嫁接",
    servicesDesc: 
      "我們專注於提供專業的美睫嫁接服務，讓您的雙眸更加迷人。從自然款到濃密款，我們根據您的需求量身設計睫毛造型，使用高品質材料和專業技術，確保舒適、安全和持久的效果。無論您想要日常的自然電眼，還是特別場合的華麗造型，我們都能滿足您的期待，帶給您自信和美麗。",
    servicesImg: educationsImg,
    servicesList: [
      {
        servicesListTitle: "自然型睫毛嫁接",
        servicesListDesc:
          "以細緻手法打造輕盈自然的效果，適合日常妝容或偏愛低調美感的客人。",
      },
      {
        servicesListTitle: "濃密型睫毛嫁接",
        servicesListDesc:
          "提升睫毛濃密度，營造深邃迷人的眼神，適合需要加強眼妝效果的客人。",
      },
      {
        servicesListTitle: "特殊造型睫毛嫁接",
        servicesListDesc:
          "針對特別場合設計獨特造型，讓您的眼妝更具戲劇性和個人特色。",
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
    counterTitle: "完成的設計",
    counterDesc:
      "我們為數百位顧客提供了專屬的美甲、美睫和紋繡設計，展現每一位顧客的獨特魅力。",
  },
  {
    counterNumber: "10",
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
      "一切始於超過10年前，Anne 憑藉對美的熱情和為顧客創造獨特造型的願望，開設了第一家專業美甲美睫紋繡沙龍。自那時起，我們每天都努力提供讓顧客感到被關愛和滿足的卓越服務。多年來，Anne 已成為品質與專業的代名詞，以專注於美甲設計、美睫造型及精緻紋繡而聞名。我們通過不斷改進技術、引領美容潮流，為顧客提供符合最高標準的個性化服務，打造屬於您的專屬美麗。",
    altImg:
      "Ljiljana Medovic展示她的風格和專業精神的擺拍照片。",
  },
  {
    aboutImg: aboutImg2,
    aboutTitle: "我們的願景",
    aboutDesc:
      "我們的願景是成為不僅僅是普通美容沙龍，而是一個讓每位顧客感到被珍視、啟發，並在美麗與獨特中得到支持的地方。我們相信美麗源自內心，但外在形象的提升能增強自信與內在平和。因此，我們不斷精進技術，緊跟潮流，並使用最高品質的產品。我們致力於以專業、奉獻和溫暖的氛圍贏得信任，讓每位顧客都感覺賓至如歸。",
    altImg:
      "特寫展示一隻手，手上是精緻設計的壓克力美甲，背景放有美容證書。",
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
    url: "https://line.me/R/ti/p/@mxn8805y",
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
  lineId: "@mxn8805y",
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

const someArray = [educationsImg, galleryManicure1];