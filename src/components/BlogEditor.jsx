import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { getCachedCategories } from '../data/blogPosts';

function BlogEditor() {
  const editorRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [post, setPost] = useState({
    title: '',
    category: '',
    content: '',
    tags: '',
    image: null
  });

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const wpCategories = await getCachedCategories();
        setCategories(wpCategories);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    loadCategories();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPost(prev => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get content from TinyMCE editor
    const content = editorRef.current.getContent();
    
    const newPost = {
      ...post,
      id: blogPosts.length + 1,
      slug: post.title.toLowerCase().replace(/ /g, '-'),
      tags: post.tags.split(',').map(tag => tag.trim()),
      fullContent: content,
      type: 'standard'
    };

    console.log('New post to be saved:', newPost);
    alert('Post created! (Check console for details)');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Create New Blog Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">標題</label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => setPost(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">分類</label>
          <select
            value={post.category}
            onChange={(e) => setPost(prev => ({ ...prev, category: e.target.value }))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">選擇分類</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">內容</label>
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar: 'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              language: 'zh_TW', // 設定為繁體中文
              branding: false,
              language_url: '/tinymce/langs/zh_TW.js' // 需要下載語言包
            }}
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">標籤 (用逗號分隔)</label>
          <input
            type="text"
            value={post.tags}
            onChange={(e) => setPost(prev => ({ ...prev, tags: e.target.value }))}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
            placeholder="例如: 美甲, 保養, 指甲油"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">封面圖片</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
          />
          {post.image && (
            <img 
              src={post.image} 
              alt="Preview" 
              className="mt-2 h-40 object-cover rounded"
            />
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          發布文章
        </button>
      </form>
    </div>
  );
}

export default BlogEditor; 