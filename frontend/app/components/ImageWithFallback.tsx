import React, { useState, useEffect, useCallback, useRef } from 'react';
import ImageErrorBoundary from './ImageErrorBoundary';

interface ImageWithFallbackProps {
  src?: string;
  alt?: string;
  size?: number;
  transaction?: string;
  retryCount?: number;
  retryDelay?: number;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = "Product",
  size = 48,
  transaction,
  retryCount = 2,
  retryDelay = 1000
}) => {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);
  const [retryAttempt, setRetryAttempt] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Retry mechanism
  const retryLoad = useCallback(() => {
    if (retryAttempt < retryCount && src) {
      retryTimeoutRef.current = setTimeout(() => {
        setRetryAttempt(prev => prev + 1);
        setCurrentSrc(src + `?retry=${retryAttempt + 1}`); // Cache bust
        setHasError(false);
      }, retryDelay);
    } else {
      setHasError(true);
    }
  }, [retryAttempt, retryCount, retryDelay, src]);

  // Handle successful load
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
    setHasError(false);
    // Clean up any pending retry timeout
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }

    if (process.env.NODE_ENV !== 'production') {
      console.debug(`Image loaded successfully for order ${transaction}`);
    }
  }, [transaction]);

  // Handle load error with retry logic
  const handleError = useCallback(() => {
    if (retryAttempt < retryCount) {
      // Minimal logging for retry attempts in development
      if (process.env.NODE_ENV !== 'production') {
        console.debug(`Image load failed for order ${transaction}, attempting retry ${retryAttempt + 1}/${retryCount}`);
      }
      retryLoad();
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(`Image load failed permanently for order ${transaction} after ${retryCount} retries`);
      }
      setHasError(true);
    }
  }, [retryAttempt, retryCount, retryLoad, transaction]);

  // Reset state when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setRetryAttempt(0);
    setIsLoaded(false);
    setHasError(false);
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
  }, [src]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current);
      }
    };
  }, []);

  // Show fallback if no source or permanently failed
  if (!currentSrc || hasError) {
    return (
      <div
        className="flex items-center justify-center rounded-md bg-gradient-to-br from-white/20 to-white/10"
        style={{
          width: `${Math.min(size, 48)}px`,
          height: `${Math.min(size, 48)}px`,
          minWidth: `${Math.min(size, 48)}px`,
          minHeight: `${Math.min(size, 48)}px`
        }}
      >
        <span
          role="img"
          aria-label="product"
          style={{ fontSize: `${Math.max(size * 0.6, 16)}px` }}
        >
          📦
        </span>
      </div>
    );
  }

  return (
    <ImageErrorBoundary transaction={transaction}>
      <img
        src={currentSrc}
        alt={alt}
        className="object-cover border rounded-md shadow-sm border-white/10"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`,
          flexShrink: 0,
          opacity: isLoaded ? 1 : 0.7, // Slight opacity until loaded
          transition: 'opacity 0.2s ease-in-out'
        }}
        onLoad={handleLoad}
        onError={handleError}
      />
    </ImageErrorBoundary>
  );
};

export default ImageWithFallback;
