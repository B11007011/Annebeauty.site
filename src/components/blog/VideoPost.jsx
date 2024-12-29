export default function VideoPost({ videoUrl, thumbnail }) {
  return (
    <div className="video-container aspect-video mb-8">
      <iframe
        src={videoUrl}
        className="w-full h-full rounded-lg"
        title="影片內容"
        allowFullScreen
      />
    </div>
  );
} 