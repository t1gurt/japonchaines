'use client';

export default function GoogleSiteVerification() {
  const verificationContent = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'WSc4lTmbOgAvZGsqzxJTO3PmxtWXH-AdYFhZNvXnlxY';
  
  return (
    <meta name="google-site-verification" content={verificationContent} />
  );
}
