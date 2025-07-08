'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSelfReporting } from '@/hooks/tutorial/useSelfReporting';
import { restaurantChains } from '@/data/site-data';
import { Clock, MapPin } from 'lucide-react';

const FloatingVisitButton: React.FC = () => {
  const pathname = usePathname();
  const { submitReport } = useSelfReporting();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentChain, setCurrentChain] = useState<{ id: string; name: string } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // 現在のページがチェーン店ページかどうかを判定
  useEffect(() => {
    console.log('FloatingVisitButton: pathname changed', pathname);
    
    // パスを解析してチェーン店ページかどうか判定
    const chainMatch = pathname.match(/^\/chaines\/([^\/]+)\/?$/);
    console.log('FloatingVisitButton: chainMatch', chainMatch);
    
    if (chainMatch) {
      const chainSlug = chainMatch[1];
      console.log('FloatingVisitButton: looking for chain slug', chainSlug);
      
      const chain = restaurantChains.find(c => c.slug === chainSlug);
      console.log('FloatingVisitButton: found chain', chain);
      
      if (chain) {
        const chainData = { id: chain.slug, name: chain.name };
        setCurrentChain(chainData);
        console.log('FloatingVisitButton: setting currentChain', chainData);
        
        // チェーン店ページに入ったら少し展開
        setIsExpanded(true);
        setTimeout(() => setIsExpanded(false), 3000);
      } else {
        console.log('FloatingVisitButton: chain not found in data');
        setCurrentChain(null);
      }
    } else {
      console.log('FloatingVisitButton: not a chain page');
      setCurrentChain(null);
    }
  }, [pathname]);

  const handleClick = async () => {
    if (!currentChain || isSubmitting) {
      console.log('FloatingVisitButton: cannot submit', { currentChain, isSubmitting });
      return;
    }

    console.log('FloatingVisitButton: submitting report for', currentChain);
    setIsSubmitting(true);
    const toastId = toast.loading(`"${currentChain.name}"への訪問を記録中...`);

    try {
      await submitReport({
        chainId: currentChain.id,
        visitDate: new Date().toISOString().split('T')[0],
      });
      toast.success(`"${currentChain.name}"への訪問を記録しました！`, { id: toastId });
      console.log('FloatingVisitButton: report submitted successfully');
    } catch (error) {
      console.error('FloatingVisitButton: submit error:', error);
      toast.error('エラーが発生しました。後ほど再トライしてください。', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  // チェーン店ページでない場合は表示しない
  if (!currentChain) {
    console.log('FloatingVisitButton: not rendering, no currentChain');
    return null;
  }

  console.log('FloatingVisitButton: rendering with chain', currentChain);

  return (
    <div className="fixed bottom-6 right-6 z-[99999]" style={{ pointerEvents: 'auto' }}>
      {/* メインボタン */}
      <div 
        className={`
          flex items-center
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-auto' : 'w-14 md:w-16'}
          h-14 md:h-16
          bg-blue-500 hover:bg-blue-600
          rounded-full shadow-lg
          border-2 border-white
          ${isSubmitting ? 'cursor-not-allowed opacity-75' : 'hover:scale-105 cursor-pointer'}
        `}
        onClick={handleClick}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        style={{ 
          willChange: 'transform, width',
          minWidth: '56px',
          minHeight: '56px'
        }}
      >
        {/* アイコン */}
        <div className="flex items-center justify-center w-14 md:w-16 h-14 md:h-16">
          {isSubmitting ? (
            <Clock className="w-7 h-7 md:w-8 md:h-8 text-white animate-spin" />
          ) : (
            <MapPin className="w-7 h-7 md:w-8 md:h-8 text-white" />
          )}
        </div>
        
        {/* テキスト（展開時） */}
        <div className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isExpanded ? 'w-auto pr-3' : 'w-0'}
        `}>
          <span className="text-white font-medium text-xs md:text-sm whitespace-nowrap">
            {isSubmitting ? '記録中...' : '訪問を記録'}
          </span>
        </div>
      </div>

      {/* ツールチップ */}
      <div className={`
        absolute bottom-full right-0 mb-2
        transition-all duration-200
        ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}
      `}>
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          {currentChain.name}への訪問を記録
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </div>
    </div>
  );
};

export default FloatingVisitButton;
