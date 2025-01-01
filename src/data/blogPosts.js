const SITE_ID = 'annenails1.wordpress.com';
const WORDPRESS_API_URL = `https://public-api.wordpress.com/rest/v1.1/sites/${SITE_ID}`;
const DEFAULT_IMAGE_URL = 'https://placehold.co/600x400?text=No+Image+Available';

export async function fetchBlogPosts() {
  try {
    // Fetch posts first
    const response = await fetch(`${WORDPRESS_API_URL}/posts?fields=ID,title,content,excerpt,date,slug,featured_image,categories&number=100`, {
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error(`Posts API error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('WordPress API Response:', data);

    // Then fetch categories
    const categoriesResponse = await fetch(`${WORDPRESS_API_URL}/categories`, {
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!categoriesResponse.ok) {
      throw new Error(`Categories API error: ${categoriesResponse.status}`);
    }

    const categoriesData = await categoriesResponse.json();
    const categoriesMap = {};
    
    if (categoriesData.categories) {
      categoriesData.categories.forEach(cat => {
        categoriesMap[cat.ID] = cat.name;
      });
    }

    // Map the posts data
    return data.posts.map(post => {
      const mediaUrl = post.featured_image || DEFAULT_IMAGE_URL;
      // Ensure categories is always an array of IDs as strings
      const postCategories = post.categories ? 
        Object.keys(post.categories).map(key => post.categories[key].ID.toString()) : 
        [];
      
      return {
        id: post.ID,
        title: { rendered: post.title },
        content: { rendered: post.content },
        excerpt: { rendered: post.excerpt },
        date: post.date,
        slug: post.slug,
        featured_media: mediaUrl,
        categories: postCategories,
        categoryNames: postCategories.map(id => categoriesMap[id] || 'Uncategorized')
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function fetchCategories() {
  try {
    const response = await fetch(`${WORDPRESS_API_URL}/categories`, {
      headers: {
        'Accept': 'application/json',
      }
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    
    if (!data.categories) {
      return [];
    }

    // Ensure category IDs are strings to match the filtering logic
    return data.categories
      .filter(cat => cat.post_count > 0)
      .map(category => ({
        id: category.ID.toString(), // Convert ID to string
        name: category.name,
        slug: category.slug,
        count: category.post_count
      }))
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort categories by name
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