'use client';

import React from 'react';

const TestFloatingButton: React.FC = () => {
  return (
    <div 
      className="fixed bottom-24 right-6 z-[9999] w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg cursor-pointer hover:bg-red-600"
      onClick={() => alert('テストボタンがクリックされました！')}
    >
      TEST
    </div>
  );
};

export default TestFloatingButton;
