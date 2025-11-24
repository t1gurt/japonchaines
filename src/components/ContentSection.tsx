import React from 'react';

interface ContentSectionProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray';
    id?: string;
}

export default function ContentSection({
    title,
    subtitle,
    children,
    className = '',
    background = 'white',
    id
}: ContentSectionProps) {
    const bgClass = background === 'white' ? 'bg-white' : 'bg-gray-50';

    return (
        <section id={id} className={`py-16 ${bgClass} ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {(title || subtitle) && (
                    <div className="text-center mb-12">
                        {title && (
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}
