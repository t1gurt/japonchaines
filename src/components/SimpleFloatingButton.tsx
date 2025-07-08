'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { MapPin } from 'lucide-react';

const SimpleFloatingButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // サーバーサイドレンダリング中は何も表示しない
  if (!mounted) {
    return null;
  }

  // チェーン店ページかどうかチェック
  const isChainPage = pathname.startsWith('/chaines/');

  if (!isChainPage) {
    return null;
  }

  return (
    <div className="fixed bottom-36 right-6 z-[9999]">
      <div 
        className="w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors"
        onClick={() => alert(`Path: ${pathname}\nChain page detected!`)}
      >
        <MapPin className="w-8 h-8 text-white" />
      </div>
    </div>
  );
};

export default SimpleFloatingButton;
