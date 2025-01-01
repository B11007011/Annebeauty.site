import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';

function BlogPost() {
  const [post, setPost] = useState(null);
  const [recommendedPosts, setRecommendedPosts] = useState([]);
  const { slug } = useParams();
  const WORDPRESS_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/annenails1.wordpress.com';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch post with embedded data
        const response = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
        const posts = await response.json();
        if (posts.length > 0) {
          const post = posts[0];
          console.log('Raw WordPress post:', post); // Log the raw post data
          console.log('Featured media data:', post._embedded?.['wp:featuredmedia']?.[0]); // Log featured media data
          
          // Try different ways to get the media URL
          const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
          const mediaUrl = featuredMedia?.source_url || 
                          featuredMedia?.media_details?.sizes?.full?.source_url ||
                          featuredMedia?.media_details?.sizes?.large?.source_url ||
                          featuredMedia?.guid?.rendered;
          
          console.log('Selected media URL:', mediaUrl); // Log the selected media URL

          setPost({
            ...post,
            title: post.title.rendered,
            content: post.content.rendered,
            excerpt: post.excerpt.rendered,
            featured_media: mediaUrl
          });
          
          // If post has categories, fetch recommended posts
          if (post.categories?.length > 0) {
            fetchRecommendedPosts(post.categories[0], post.id);
          }
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    const fetchRecommendedPosts = async (categoryId, currentPostId) => {
      try {
        const response = await fetch(
          `${WORDPRESS_API_URL}/posts?categories=${categoryId}&per_page=6&exclude=${currentPostId}&_embed`
        );
        const posts = await response.json();
        if (posts) {
          const shuffled = posts
            .filter(p => p.id !== currentPostId)
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
            .map(post => {
              const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
              const mediaUrl = featuredMedia?.source_url || 
                             featuredMedia?.media_details?.sizes?.full?.source_url ||
                             featuredMedia?.media_details?.sizes?.large?.source_url ||
                             featuredMedia?.guid?.rendered;
              
              console.log('Recommended post media URL:', mediaUrl); // Log recommended post media URL
              
              return {
                ...post,
                title: post.title.rendered,
                excerpt: post.excerpt.rendered,
                featured_media: mediaUrl
              };
            });
          setRecommendedPosts(shuffled);
        }
      } catch (error) {
        console.error('Error fetching recommended posts:', error);
      }
    };

    fetchPost();
  }, [slug]);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = post?.title || '';
    
    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`);
        break;
      case 'line':
        window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`);
        break;
    }
  };

  if (!post) return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#C4A86D]"></div>
    </div>
  );

  return (
    <div className="bg-[#FDF8F7]">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <nav className="mb-12 flex items-center space-x-2 text-sm">
          {[
            { key: 'home', to: '/', text: '首頁' },
            { key: 'separator1', text: '/', isSpan: true },
            { key: 'blog', to: '/blog', text: '部落格' },
            { key: 'separator2', text: '/', isSpan: true },
            { key: 'current', text: post?.title, isSpan: true }
          ].map(item => (
            item.isSpan ? (
              <span key={item.key} className={item.key.includes('separator') ? 'text-gray-400' : 'text-[#C4A86D]'}>
                {item.text}
              </span>
            ) : (
              <Link key={item.key} to={item.to} className="text-gray-500 hover:text-[#C4A86D]">
                {item.text}
              </Link>
            )
          ))}
        </nav>

        <article className="max-w-3xl mx-auto">
          <header className="text-center mb-16">
            {post?.featured_media && (
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={post.featured_media}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}
            <div className="mb-4">
              <time 
                className="text-sm text-gray-500 bg-[#FCF2EF] px-4 py-1 rounded-full" 
                dateTime={post?.date}
              >
                {post?.date && new Date(post.date).toLocaleDateString('zh-TW')}
              </time>
            </div>
            <h1 
              className="text-3xl md:text-4xl font-normal mb-6 text-gray-800"
              dangerouslySetInnerHTML={{ __html: post?.title }} 
            />
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div key="author" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FCF2EF] flex items-center justify-center mr-2">
                  <span className="text-[#C4A86D]">AN</span>
                </div>
                <span>Anne Nails</span>
              </div>
              <span key="dot" className="text-gray-400">•</span>
              <span key="readTime">閱讀時間 {post?.content ? Math.ceil(post.content.length / 500) : 0} 分鐘</span>
            </div>
            <div className="w-24 h-[1px] bg-[#C4A86D] mx-auto mt-8"></div>
          </header>

          <div className="prose prose-lg max-w-none mb-12">
            <div 
              dangerouslySetInnerHTML={{ __html: post?.content }}
              className="text-gray-700 leading-relaxed" 
            />
          </div>

          <div className="border-t border-gray-200 pt-8 mb-12">
            <h3 className="text-lg mb-4">分享此文：</h3>
            <div className="flex space-x-4">
              <button 
                key="facebook"
                onClick={() => handleShare('facebook')}
                className="flex items-center px-4 py-2 bg-[#1877F2] text-white rounded hover:bg-opacity-90"
              >
                <span>Facebook</span>
              </button>
              <button 
                key="twitter"
                onClick={() => handleShare('twitter')}
                className="flex items-center px-4 py-2 bg-[#1DA1F2] text-white rounded hover:bg-opacity-90"
              >
                <span>Twitter</span>
              </button>
              <button 
                key="line"
                onClick={() => handleShare('line')}
                className="flex items-center px-4 py-2 bg-[#00B900] text-white rounded hover:bg-opacity-90"
              >
                <span>LINE</span>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="flex justify-between">
              {[
                post.previous && {
                  key: 'prev',
                  to: `/blog/${post.previous.slug}`,
                  content: (
                    <>
                      <span className="mr-2">←</span>
                      <span>上一篇</span>
                    </>
                  )
                },
                post.next && {
                  key: 'next',
                  to: `/blog/${post.next.slug}`,
                  content: (
                    <>
                      <span>下一篇</span>
                      <span className="ml-2">→</span>
                    </>
                  )
                }
              ].filter(Boolean).map(nav => (
                <Link
                  key={nav.key}
                  to={nav.to}
                  className="text-[#C4A86D] hover:underline inline-flex items-center"
                >
                  {nav.content}
                </Link>
              ))}
            </div>
          </div>

          {recommendedPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h2 className="text-2xl text-center mb-8">推薦閱讀</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {recommendedPosts.map(post => {
                  const postId = `recommended-${post.id}`;
                  return (
                    <Link 
                      key={postId}
                      to={`/blog/${post.slug}`}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <article>
                        {(post.featured_image || post.featured_media) && (
                          <div className="relative h-48 overflow-hidden rounded-t-lg">
                            <img 
                              src={post.featured_image || post.featured_media}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                          </div>
                        )}
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 rounded-full bg-[#FCF2EF] flex items-center justify-center mr-2">
                              <span className="text-[#C4A86D] text-sm">AN</span>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                {new Date(post.date).toLocaleDateString('zh-TW')}
                              </span>
                            </div>
                          </div>
                          <h3 
                            className="text-lg font-medium mb-2 group-hover:text-[#C4A86D] transition-colors"
                            dangerouslySetInnerHTML={{ __html: post.title }}
                          />
                          <div 
                            className="text-sm text-gray-600 mb-4 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                          />
                          <div className="mt-auto">
                            <span className="text-[#C4A86D] text-sm group-hover:underline">
                              閱讀更多 →
                            </span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default BlogPost; 