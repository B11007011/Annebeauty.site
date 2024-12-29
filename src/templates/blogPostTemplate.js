export const createBlogPost = ({
  id,
  title,
  content,
  author = "Ljiljana",
  category,
  tags = [],
  type = 'standard',
  images = [],
  videoUrl = null
}) => {
  const date = new Date().toISOString().split('T')[0];
  const slug = title.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');

  const template = {
    id,
    type,
    title,
    content,
    fullContent: `
      <div class="max-w-4xl mx-auto">
        <!-- 標題區塊 -->
        <div class="bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg mb-12 text-center">
          <h1 class="text-3xl font-bold mb-4">${title}</h1>
          <p class="text-lg text-gray-600">${content}</p>
        </div>

        <!-- 主圖區塊 -->
        ${images[0] ? `
        <div class="relative rounded-2xl overflow-hidden mb-12">
          <img 
            src="${images[0]}" 
            alt="${title}"
            class="w-full h-[400px] object-cover"
          />
        </div>
        ` : ''}

        <!-- 內容區塊 -->
        <div class="bg-white rounded-2xl shadow-lg p-8 mb-12">
          ${type === 'standard' ? `
            <!-- 標準文章格式 -->
            <div class="prose prose-lg max-w-none">
              在此輸入文章內容...
            </div>
          ` : type === 'gallery' ? `
            <!-- 相簿格式 -->
            <div class="grid md:grid-cols-2 gap-6">
              ${images.map(img => `
                <div class="rounded-lg overflow-hidden">
                  <img src="${img}" alt="" class="w-full h-auto"/>
                </div>
              `).join('')}
            </div>
          ` : `
            <!-- 影片格式 -->
            <div class="aspect-w-16 aspect-h-9">
              <iframe src="${videoUrl}" class="w-full h-full rounded-lg"></iframe>
            </div>
          `}
        </div>

        <!-- 標籤區塊 -->
        <div class="flex flex-wrap gap-2 mb-8">
          ${tags.map(tag => `
            <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              ${tag}
            </span>
          `).join('')}
        </div>
      </div>
    `,
    date,
    author,
    image: images[0] || "/images/blog/default.jpg",
    slug,
    category,
    tags,
    ...(type === 'gallery' && { gallery: images.map(img => ({
      image: img,
      caption: "請輸入說明",
      description: "請輸入描述"
    }))}),
    ...(type === 'video' && { videoUrl, thumbnail: images[0] })
  };

  return template;
}; 