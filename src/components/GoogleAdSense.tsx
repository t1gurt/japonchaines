'use client';

import Script from 'next/script';

export default function GoogleAdSense() {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-6564351127136787';
  
  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
