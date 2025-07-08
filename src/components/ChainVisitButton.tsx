
'use client';

import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useSelfReporting } from '@/hooks/tutorial/useSelfReporting';

interface ChainVisitButtonProps {
  chainId: string;
  chainName: string;
  className?: string;
}

const ChainVisitButton: React.FC<ChainVisitButtonProps> = ({ chainId, chainName, className = '' }) => {
  const { submitReport } = useSelfReporting();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみレンダリング
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClick = async () => {
    if (isSubmitting || !isClient) return;

    setIsSubmitting(true);
    const toastId = toast.loading(`"${chainName}"への訪問を記録中...`);

    try {
      await submitReport({
        chainId: chainId,
        visitDate: new Date().toISOString().split('T')[0],
      });
      toast.success(`"${chainName}"への訪問を記録しました！`, { id: toastId });
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast.error('エラーが発生しました。後ほど再トライしてください。', { id: toastId });
    } finally {
      setIsSubmitting(false);
    }
  };

  // クライアントサイドでない場合はローディング表示
  if (!isClient) {
    return (
      <button
        disabled
        className={`w-full py-3 px-4 rounded-lg font-medium bg-gray-300 text-gray-500 cursor-not-allowed ${className}`}
      >
        読み込み中...
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={isSubmitting}
      className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
        isSubmitting
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-green-600 text-white hover:bg-green-700'
      } ${className}`}
    >
      {isSubmitting ? '記録中...' : `このチェーンへの訪問を記録する`}
    </button>
  );
};

export default ChainVisitButton;
