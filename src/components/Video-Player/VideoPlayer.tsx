import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
}

const isYouTubeUrl = (url: string): boolean => {
  return /youtu\.be\/|youtube\.com/.test(url);
};

const extractYouTubeId = (url: string): string | null => {
  const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isYouTube = isYouTubeUrl(url);
  const youTubeId = extractYouTubeId(url);

  useEffect(() => {
    setError(false);
    setLoading(true);
    setIsPlaying(false);
    setProgress(0);

    if (!url || url.trim() === '') {
      setError(true);
      setLoading(false);
    }
  }, [url]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      } else {
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setProgress(!isNaN(duration) ? (current / duration) * 100 : 0);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    const duration = videoRef.current.duration;
    if (!isNaN(duration)) {
      videoRef.current.currentTime = (newProgress / 100) * duration;
    }
  };

  const retryLoading = () => {
    if (!videoRef.current) return;
    setError(false);
    setLoading(true);
    videoRef.current.load();
  };

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group">
      {loading && !error && !isYouTube && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-500">
          <div className="text-center p-4">
            <p>Unable to load video</p>
            <p className="text-sm mt-2 text-gray-400 break-all">URL: {url || 'No URL provided'}</p>
            <button
              onClick={retryLoading}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      ) : isYouTube && youTubeId ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youTubeId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
          onLoad={() => setLoading(false)}
        />
      ) : (
        <>
          <video
            key={url}
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            src={url}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleVideoEnded}
            onLoadedData={() => setLoading(false)}
            onLoadedMetadata={() => setLoading(false)}
            onCanPlay={() => setLoading(false)}
            onError={() => {
              setError(true);
              setLoading(false);
            }}
            muted={isMuted}
            poster="/api/placeholder/640/360"
            preload="auto"
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col space-y-2">
              <input
                type="range"
                value={progress}
                onChange={handleProgressChange}
                min="0"
                max="100"
                step="0.1"
                className="w-full h-1 appearance-none bg-gray-600/50 rounded-full overflow-hidden cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #60A5FA 0%, #60A5FA ${progress}%, rgba(75, 85, 99, 0.3) ${progress}%, rgba(75, 85, 99, 0.3) 100%)`,
                }}
              />

              <div className="flex items-center justify-between">
                <button
                  onClick={togglePlay}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 transition-colors duration-200"
                  type="button"
                >
                  {isPlaying ? (
                    <Pause size={18} className="text-white" />
                  ) : (
                    <Play size={18} className="text-white ml-1" />
                  )}
                </button>

                <button
                  onClick={toggleMute}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700 transition-colors duration-200"
                  type="button"
                >
                  {isMuted ? (
                    <VolumeX size={18} className="text-white" />
                  ) : (
                    <Volume2 size={18} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
