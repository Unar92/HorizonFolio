'use client';

interface PreloaderProps {
  isLoading: boolean;
}

export default function Preloader({ isLoading }: PreloaderProps) {
  if (!isLoading) return null;

  return (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  );
}
