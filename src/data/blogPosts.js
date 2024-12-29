const WORDPRESS_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/annenails1.wordpress.com';

export async function fetchBlogPosts() {
  try {
    // First fetch categories to get their IDs
    const categoriesResponse = await fetch(`${WORDPRESS_API_URL}/categories`);
    const categories = await categoriesResponse.json();
    const categoriesMap = {};
    categories.forEach(cat => {
      categoriesMap[cat.id] = cat.name;
    });

    // Then fetch posts with embedded data
    const response = await fetch(`${WORDPRESS_API_URL}/posts?_embed`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const posts = await response.json();
    return posts.map(post => ({
      id: post.id,
      title: { rendered: post.title.rendered },
      content: { rendered: post.content.rendered },
      excerpt: { rendered: post.excerpt.rendered },
      date: post.date,
      slug: post.slug,
      featured_media: post._embedded?.['wp:featuredmedia']?.[0]?.source_url,
      categories: post.categories,
      categoryNames: post.categories.map(id => categoriesMap[id] || 'Uncategorized')
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const categories = await response.json();
    return categories
      .filter(cat => cat.count > 0) // Only show categories that have posts
      .map(category => ({
        id: category.id,
        name: category.name,
        slug: category.slug,
        count: category.count
      }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// Cache categories for 5 minutes
let categoriesCache = null;
let lastCacheTime = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

export async function getCachedCategories() {
  const now = Date.now();
  if (!categoriesCache || !lastCacheTime || (now - lastCacheTime > CACHE_DURATION)) {
    categoriesCache = await fetchCategories();
    lastCacheTime = now;
  }
  return categoriesCache;
} 