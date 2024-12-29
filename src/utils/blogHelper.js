import { createBlogPost } from '../templates/blogPostTemplate';

export const quickBlogPost = ({
  title,
  content,
  category,
  tags,
  type = 'standard',
  images = [],
  videoUrl = null
}) => {
  // 自動生成ID (使用目前時間戳)
  const id = Date.now();
  
  return createBlogPost({
    id,
    title,
    content,
    category,
    tags,
    type,
    images,
    videoUrl
  });
};

// 預設分類和標籤
export const CATEGORIES = {
  CARE: "保養技巧",
  DESIGN: "作品展示",
  TUTORIAL: "教學",
  TREND: "流行趨勢",
  WEDDING: "婚禮造型"
};

export const COMMON_TAGS = {
  CARE: ["保養", "護理", "美甲"],
  DESIGN: ["設計", "作品", "靈感"],
  TUTORIAL: ["教學", "技巧", "步驟"],
  TREND: ["潮流", "時尚", "色彩"],
  WEDDING: ["婚禮", "新娘", "設計"]
}; 