'use client';

import { useEffect } from 'react';

interface AdSenseUnitProps {
  dataAdClient?: string;
  dataAdSlot?: string;
  slot?: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export function AdSenseUnit({
  dataAdClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-6564351127136787",
  dataAdSlot,
  slot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  style = { display: 'block' },
  className = ""
}: AdSenseUnitProps) {
  // Use slot if provided, otherwise use dataAdSlot
  const adSlot = slot || dataAdSlot;
  
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
        data-ad-slot={adSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive}
      />
    </div>
  );
}

export default AdSenseUnit;
