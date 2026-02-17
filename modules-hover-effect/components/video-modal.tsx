import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

interface VideoModalProps {
  videoId: string; // videoId'nin bir metin (string) olduğunu belirttik
}

const VideoModal: React.FC<VideoModalProps> = ({ videoId }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tetikleyici Buton (Senin "View Demo" butonun) */}
      <div className="flex flex-col items-center">
        <button
          onClick={() => setIsOpen(true)}
          className="flex h-12 items-center justify-center rounded-full border border-input bg-transparent px-8 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <Play className="mr-2 h-4 w-4 fill-current" />
          View Demo
        </button>
        <span className="mt-1 text-xs text-muted-foreground italic">2 min video</span>
      </div>

      {/* Modal Overlay ve İçerik */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-2xl">
            
            {/* Kapatma Butonu */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/20 p-2 text-white transition-colors hover:bg-black/40"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Video Alanı (Aspect Ratio 16:9) */}
            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
          </div>
          
          {/* Modal dışına tıklayınca kapatma (Arka plan) */}
          <div 
            className="absolute inset-0 -z-10" 
            onClick={() => setIsOpen(false)} 
          />
        </div>
      )}
    </>
  );
};

export default VideoModal;