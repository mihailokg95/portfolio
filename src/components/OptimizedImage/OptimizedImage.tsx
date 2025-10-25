import { useState, useEffect, useRef, type CSSProperties } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
  loading = 'lazy',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || loading === 'eager') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before the image is in view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority, loading]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        ...style,
      }}
    >
      {isInView && (
        <>
          {/* Placeholder blur effect */}
          {!isLoaded && (
            <div
              className="absolute inset-0 bg-gray-200 animate-pulse"
              style={{ filter: 'blur(10px)' }}
            />
          )}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default OptimizedImage;

