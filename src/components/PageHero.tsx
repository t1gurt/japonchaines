import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  badges?: React.ReactNode[];
  breadcrumbs?: React.ReactNode;
  align?: 'center' | 'left';
}

export default function PageHero({
  title,
  subtitle,
  description,
  backgroundImage,
  badges,
  breadcrumbs,
  align = 'center'
}: PageHeroProps) {
  const hasBackground = !!backgroundImage;
  
  return (
    <div className={`relative ${hasBackground ? 'text-white' : 'bg-gradient-to-br from-red-50 via-white to-orange-50 text-gray-900'}`}>
      {/* Background Image with Overlay */}
      {hasBackground && (
        <>
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div className="absolute inset-0 bg-black/50 z-0" />
        </>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {breadcrumbs && (
          <div className={`mb-8 ${align === 'center' ? 'flex justify-center' : ''}`}>
            {breadcrumbs}
          </div>
        )}

        <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
          {badges && badges.length > 0 && (
            <div className={`flex flex-wrap gap-2 mb-6 ${align === 'center' ? 'justify-center' : ''}`}>
              {badges.map((badge, index) => (
                <div key={index}>{badge}</div>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>

          {subtitle && (
            <p className={`text-xl md:text-2xl font-medium mb-6 ${hasBackground ? 'text-gray-200' : 'text-red-600'}`}>
              {subtitle}
            </p>
          )}

          {description && (
            <p className={`text-lg md:text-xl leading-relaxed ${hasBackground ? 'text-gray-100' : 'text-gray-600'}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
