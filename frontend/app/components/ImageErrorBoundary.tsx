import React from 'react';

interface ImageErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  transaction?: string;
}

interface ImageErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ImageErrorBoundary extends React.Component<ImageErrorBoundaryProps, ImageErrorBoundaryState> {
  constructor(props: ImageErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ImageErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Only log if we're not in production, and be minimal
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Image error boundary triggered for order ${this.props.transaction}:`, error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="flex items-center justify-center rounded-md bg-gradient-to-br from-white/20 to-white/10">
          <span role="img" aria-label="product">📦</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ImageErrorBoundary;
