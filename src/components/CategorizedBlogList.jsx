import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategorizedBlogList = ({ posts, defaultCategories }) => {
  const [activeCategory, setActiveCategory] = useState('所有類別');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    console.log('Current State:', {
      activeCategory,
      allCategories: defaultCategories,
      allPosts: posts,
      postsWithCategories: posts.map(post => ({
        title: post.title,
        categories: post.categories,
        categoryDetails: post.categoryDetails
      }))
    });

    if (activeCategory === '所有類別') {
      setFilteredPosts(posts);
    } else {
      const categoryToFilter = defaultCategories.find(cat => cat.name === activeCategory);
      console.log('Filtering by category:', categoryToFilter);

      if (categoryToFilter) {
        const filtered = posts.filter(post => {
          const hasCategory = post.categories.includes(categoryToFilter.id);
          console.log(`Checking post "${post.title}":`, {
            postCategories: post.categories,
            lookingFor: categoryToFilter.id,
            matches: hasCategory
          });
          return hasCategory;
        });

        console.log('Filtered results:', {
          categoryName: activeCategory,
          categoryId: categoryToFilter.id,
          matchingPosts: filtered.map(p => p.title)
        });

        setFilteredPosts(filtered);
      }
    }
  }, [activeCategory, posts, defaultCategories]);

  return (
    <div className="w-full">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {defaultCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.name)}
            className={`px-4 py-2 rounded-full text-sm ${
              activeCategory === category.name
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Show number of posts found */}
      <div className="mb-4 text-gray-600">
        找到 {filteredPosts.length} 篇相關文章
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map(post => (
          <Link 
            key={post.id} 
            to={`/blog/${post.slug}`}
            className="group hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            {post.featuredImage && (
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {post.categoryDetails.map(cat => (
                  <span 
                    key={cat.id} 
                    className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Debug Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h3 className="font-bold mb-2">Debug Info:</h3>
        <p>Active Category: {activeCategory}</p>
        <p>Total Posts: {posts.length}</p>
        <p>Filtered Posts: {filteredPosts.length}</p>
        <div className="mt-2">
          <p className="font-bold">Categories and their IDs:</p>
          {defaultCategories.map(cat => (
            <div key={cat.id}>
              {cat.name}: {cat.id}
            </div>
          ))}
        </div>
        <div className="mt-2">
          <p className="font-bold">Posts and their categories:</p>
          {posts.map(post => (
            <div key={post.id} className="text-sm">
              <strong>{post.title}</strong>
              <br />
              Category IDs: {post.categories.join(', ')}
              <br />
              Category Names: {post.categoryDetails.map(c => c.name).join(', ')}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorizedBlogList; 