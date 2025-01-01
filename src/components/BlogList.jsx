import { useState, useEffect } from 'react';
import { fetchBlogPosts, fetchCategories } from '../data/blogPosts';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function BlogList() {
  const { t } = useLanguage();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const POSTS_PER_PAGE = 6;
  const currentPage = parseInt(searchParams.get('page') || '1');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const [blogPosts, wpCategories] = await Promise.all([
          fetchBlogPosts(),
          fetchCategories()
        ]);

        // Sort categories by name
        const sortedCategories = wpCategories.sort((a, b) => a.name.localeCompare(b.name));
        
        setPosts(blogPosts);
        setCategories(sortedCategories);
      } catch (err) {
        console.error('Error loading posts:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  // Filter posts based on search and category
  const filteredPosts = posts.filter(post => {
    const matchesSearch = (
      post.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Check if post belongs to the selected category
    const matchesCategory = 
      activeCategory === 'all' || 
      post.categories.some(catId => catId.toString() === activeCategory);
    
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return (
    <div className="flex justify-center items-center min-h-[300px]">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#C4A86D]"></div>
    </div>
  );

  return (
    <div className="bg-[#FDF8F7]">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="搜尋文章..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-200 focus:ring-2 focus:ring-[#C4A86D] focus:border-transparent"
              />
              <svg 
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Categories Menu */}
        <div className="flex justify-center flex-wrap gap-4 mb-12 text-sm border-b border-[#E5D1CA] pb-4">
          <button
            onClick={() => setActiveCategory('all')}
            className={`pb-3 px-4 transition-colors rounded-full ${
              activeCategory === 'all'
                ? 'bg-[#C4A86D] text-white'
                : 'text-gray-600 hover:text-[#C4A86D]'
            }`}
          >
            {t('allCategories')}
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id.toString())}
              className={`pb-3 px-4 transition-colors rounded-full ${
                activeCategory === category.id.toString()
                  ? 'bg-[#C4A86D] text-white'
                  : 'text-gray-600 hover:text-[#C4A86D]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8 text-sm text-gray-500">
          找到 {filteredPosts.length} 篇相關文章
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t('noResults')}</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
              className="mt-4 text-[#C4A86D] hover:underline"
            >
              清除搜尋
            </button>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {paginatedPosts.map(post => {
            console.log('Rendering post:', post.id, 'Featured media:', post.featured_media);
            return (
              <Link 
                to={`/blog/${post.slug}`} 
                key={post.id} 
                className="block break-inside-avoid group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <article>
                  <div className="relative overflow-hidden rounded-t-lg">
                    {post.featured_media ? (
                      <img 
                        src={post.featured_media}
                        alt={post.title.rendered}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          console.error('Image failed to load:', post.featured_media);
                          e.target.onerror = null;
                          e.target.src = '/placeholder.jpg';
                        }}
                      />
                    ) : (
                      <div className="w-full h-48 bg-[#FCF2EF] flex items-center justify-center">
                        <span className="text-[#E5D1CA] text-lg">Anne Nails</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-[#FCF2EF] flex items-center justify-center mr-3">
                        <span className="text-[#C4A86D] text-sm">AN</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">Anne Nails</p>
                        <p className="text-gray-500 text-sm">
                          {new Date(post.date).toLocaleDateString('zh-TW')}
                        </p>
                      </div>
                    </div>
                    <h2 className="text-xl font-semibold mb-2" 
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                    />
                    <div className="text-gray-600 mb-4" 
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-4 mt-12 pt-8 border-t border-[#E5D1CA]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#C4A86D] hover:bg-[#FCF2EF]'
              }`}
            >
              上一頁
            </button>
            
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                const isCurrentPage = pageNumber === currentPage;
                const isNearCurrent = Math.abs(pageNumber - currentPage) <= 1;
                const isEndPage = pageNumber === 1 || pageNumber === totalPages;

                if (!isNearCurrent && !isEndPage) {
                  if (pageNumber === 2 || pageNumber === totalPages - 1) {
                    return <span key={pageNumber}>...</span>;
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      isCurrentPage
                        ? 'bg-[#C4A86D] text-white'
                        : 'text-gray-600 hover:bg-[#FCF2EF]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-full ${
                currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#C4A86D] hover:bg-[#FCF2EF]'
              }`}
            >
              下一頁
            </button>
          </div>
        )}

        {/* Results count with page info */}
        <div className="text-center mt-4 text-sm text-gray-500">
          第 {currentPage} 頁，共 {totalPages} 頁
          （顯示第 {(currentPage - 1) * POSTS_PER_PAGE + 1} - {Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length)} 篇，
          共 {filteredPosts.length} 篇文章）
        </div>
      </div>
    </div>
  );
}

export default BlogList; 