import React from 'react';
import { Clock, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface FreemiumModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const FreemiumModal: React.FC<FreemiumModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-8 shadow-2xl transition-all animate-in fade-in zoom-in duration-300">
        
        {/* Kapatma Butonu */}
        <button 
          onClick={onClose}
          className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Başlık ve İkon */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
            <Clock size={28} />
          </div>
          <h3 className="text-2xl font-bold text-white leading-tight">
            30 Günlük Deneme Süresi
          </h3>
          <p className="mt-2 text-zinc-400">
            Freemium hesabınızın detaylarını aşağıda görebilirsiniz.
          </p>
        </div>

        {/* Bilgilendirme Listesi */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 border border-white/5">
            <CheckCircle2 size={18} className="mt-1 text-emerald-500 shrink-0" />
            <span className="text-sm text-zinc-300">Tüm modüllere 30 gün boyunca sınırsız erişim.</span>
          </div>
          <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4 border border-white/5">
            <AlertCircle size={18} className="mt-1 text-amber-500 shrink-0" />
            <span className="text-sm text-zinc-300">Süre sonunda verileriniz korunur ancak panel dondurulur.</span>
          </div>
          <p className="text-[12px] text-zinc-500 text-center italic">
            * Süreyi uzatmak için dilediğiniz zaman bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        {/* Aksiyon Butonları */}
        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full py-4 rounded-full bg-white text-black font-bold text-sm hover:bg-zinc-200 transition-all active:scale-95 shadow-lg shadow-white/5"
          >
            Anladım, Başlat
          </button>
          <button
            onClick={onClose}
            className="w-full py-4 rounded-full bg-transparent text-zinc-400 font-medium text-sm hover:text-white transition-colors"
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreemiumModal;