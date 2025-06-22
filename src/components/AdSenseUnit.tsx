'use client';

import { useEffect } from 'react';

interface AdSenseUnitProps {
  dataAdClient?: string;
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSenseUnit({
  dataAdClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-6564351127136787",
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}: AdSenseUnitProps) {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client={dataAdClient}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      />
    </div>
  );
}
