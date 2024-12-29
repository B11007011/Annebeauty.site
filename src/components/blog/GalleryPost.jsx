import { useState } from 'react';

export default function GalleryPost({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="gallery-container">
      {/* 主要圖片 */}
      <div className="aspect-[16/9] mb-4 relative">
        <img 
          src={images[currentImage].image} 
          alt={images[currentImage].caption}
          className="w-full h-full object-cover rounded-lg"
        />
        <p className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded">
          {images[currentImage].caption}
        </p>
      </div>

      {/* 縮圖列表 */}
      <div className="grid grid-cols-6 gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`aspect-square overflow-hidden rounded-lg ${
              currentImage === index ? 'ring-2 ring-primary' : ''
            }`}
          >
            <img 
              src={img.image} 
              alt={`縮圖 ${index + 1}: ${img.caption}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
} 