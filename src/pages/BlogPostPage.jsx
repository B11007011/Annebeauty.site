import { useParams, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadCrumb from "../components/BreadCrumb";
import GalleryPost from '../components/blog/GalleryPost';
import VideoPost from '../components/blog/VideoPost';
import NailCareGuide from '../components/NailCareGuide';
import FrenchNailTutorial from '../components/FrenchNailTutorial';
import BlogEditor from '../components/BlogEditor';
import CategorizedBlogList from '../components/CategorizedBlogList';
import { useState, useEffect } from 'react';

export default function BlogPostPage() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // First fetch categories from WordPress.com site
        const categoriesResponse = await fetch('https://public-api.wordpress.com/wp/v2/sites/annenails1.wordpress.com/categories');
        const categoriesData = await categoriesResponse.json();
        console.log('WordPress Categories:', categoriesData);

        // Define categories based on your WordPress setup
        const fixedCategories = [
          { id: 'all', name: '所有類別', slug: 'all' },
          ...categoriesData.map(cat => ({
            id: cat.id,
            name: cat.name,
            slug: cat.slug
          }))
        ];
        console.log('Fixed Categories:', fixedCategories);
        setCategories(fixedCategories);

        // Fetch posts from WordPress.com site
        const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/annenails1.wordpress.com/posts?_embed');
        const data = await response.json();
        console.log('Raw Posts Data:', data);
        
        const transformedPosts = data.map(post => {
          // Get category IDs from post
          const postCategories = post.categories || [];
          // Get category details from embedded data
          const categoryDetails = post._embedded?.['wp:term']?.[0] || [];
          
          const transformedPost = {
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            excerpt: post.excerpt.rendered,
            featuredImage: post.featured_media_url || post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
            categories: postCategories,
            categoryDetails: categoryDetails
          };
          
          console.log(`Transformed Post "${transformedPost.title}":`, {
            categories: postCategories,
            categoryDetails: categoryDetails
          });
          
          return transformedPost;
        });

        console.log('All Transformed Posts:', transformedPosts);
        setPosts(transformedPosts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // If we're on a single post page
  if (slug) {
    const post = posts.find(post => post.slug === slug);
    // ... rest of your single post display logic
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>Blog | 指甲設計 Anne-美甲美睫</title>
      </Helmet>
      <Navbar />
      <main className="py-8 bg-[#1a1a1a]">
        <BreadCrumb page="部落格" />
        <div className="max-w-7xl mx-auto px-4">
          <CategorizedBlogList 
            posts={posts}
            defaultCategories={categories}
          />
        </div>
      </main>
      <Footer />
    </HelmetProvider>
  );
} 