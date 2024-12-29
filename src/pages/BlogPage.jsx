import React from 'react';
import BlogList from '../components/BlogList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>美甲保養技巧與設計靈感 | Anne美甲美睫</title>
        <meta name="description" content="探索專業美甲師分享的美甲保養秘訣、最新設計趨勢和實用技巧。從基礎護理到時尚設計，讓您的指尖展現完美風采。" />
        <meta name="keywords" content="美甲教學,指甲護理,美甲設計,台北美甲,美甲保養,指甲彩繪" />
        <meta property="og:title" content="美甲保養技巧與設計靈感 | Anne美甲美睫" />
        <meta property="og:description" content="探索專業美甲師分享的美甲保養秘訣、最新設計趨勢和實用技巧。從基礎護理到時尚設計，讓您的指尖展現完美風采。" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="zh_TW" />
        <link rel="canonical" href="https://yourdomain.com/blog" />
        
        {/* Schema.org markup for Blog */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Anne美甲美睫部落格",
            "description": "專業美甲保養技巧與設計靈感分享",
            "publisher": {
              "@type": "Organization",
              "name": "Anne美甲美睫",
              "logo": {
                "@type": "ImageObject",
                "url": "https://yourdomain.com/logo.png"
              }
            }
          })}
        </script>
      </Helmet>

      <Navbar />
      <div className="min-h-screen bg-offWhite">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm mb-8">
            <Link to="/" className="text-gray-600 hover:text-accent">首頁</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">部落格</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-center mb-12">美甲保養與設計靈感</h1>
          <BlogList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage; 