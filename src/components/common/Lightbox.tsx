import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  title?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onSelectIndex,
  title
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % images.length);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onSelectIndex]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between text-white z-10">
        <div>
          {title && <h3 className="font-display text-lg sm:text-xl font-bold">{title}</h3>}
          <span className="text-xs text-slate-400">
            Image {currentIndex + 1} of {images.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          aria-label="Close image gallery"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main stage with prev/next buttons */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {images.length > 1 && (
          <button
            onClick={() => onSelectIndex((currentIndex - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#F5810D] hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={images[currentIndex]}
          alt={title || `Gallery photograph ${currentIndex + 1}`}
          className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
        />

        {images.length > 1 && (
          <button
            onClick={() => onSelectIndex((currentIndex + 1) % images.length)}
            className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-[#F5810D] hover:text-slate-950 text-white border border-white/20 flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 max-w-4xl mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => onSelectIndex(i)}
              className={`w-16 h-12 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                i === currentIndex ? 'border-[#F5810D] scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
