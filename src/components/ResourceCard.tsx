import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface ResourceCardProps {
    title: string;
    subtitle?: string;
    description: string;
    href: string;
    image?: string;
    icon?: React.ReactNode;
    tags?: string[];
    price?: string;
    badges?: React.ReactNode[];
    color?: string; // e.g., 'red', 'blue' for border/accent
}

export default function ResourceCard({
    title,
    subtitle,
    description,
    href,
    image,
    icon,
    tags,
    price,
    badges,
    color = 'gray'
}: ResourceCardProps) {
    const hasImage = !!image;

    // Helper to get color classes based on the color prop
    const getColorClasses = (c: string) => {
        const map: Record<string, string> = {
            red: 'border-red-200 hover:border-red-300 hover:shadow-red-100',
            blue: 'border-blue-200 hover:border-blue-300 hover:shadow-blue-100',
            green: 'border-green-200 hover:border-green-300 hover:shadow-green-100',
            orange: 'border-orange-200 hover:border-orange-300 hover:shadow-orange-100',
            purple: 'border-purple-200 hover:border-purple-300 hover:shadow-purple-100',
            gray: 'border-gray-200 hover:border-gray-300 hover:shadow-gray-100'
        };
        return map[c] || map.gray;
    };

    return (
        <Link
            href={href}
            className={`group flex flex-col bg-white rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${getColorClasses(color)} h-full`}
        >
            {/* Image Section */}
            {hasImage && (
                <div className="relative h-48 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-4 w-full">
                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                                {subtitle && <p className="text-sm text-gray-200">{subtitle}</p>}
                            </div>
                            {icon && <div className="text-white bg-white/20 p-2 rounded-full backdrop-blur-sm">{icon}</div>}
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section (if no image, header is here) */}
            <div className={`flex-1 p-6 flex flex-col ${!hasImage ? 'pt-6' : ''}`}>
                {!hasImage && (
                    <div className="flex items-start justify-between mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                                {title}
                            </h3>
                            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                        </div>
                        {icon && (
                            <div className={`p-3 rounded-full bg-${color}-50 text-${color}-600`}>
                                {icon}
                            </div>
                        )}
                    </div>
                )}

                {/* Badges */}
                {badges && badges.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {badges.map((badge, index) => (
                            <div key={index}>{badge}</div>
                        ))}
                    </div>
                )}

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                    {description}
                </p>

                {/* Tags */}
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                {tag}
                            </span>
                        ))}
                        {tags.length > 3 && (
                            <span className="text-xs text-gray-400">+{tags.length - 3}</span>
                        )}
                    </div>
                )}

                {/* Footer Info (Price, etc.) */}
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    {price ? (
                        <span className="text-sm font-semibold text-gray-900">
                            {price}
                        </span>
                    ) : (
                        <span className="text-sm text-gray-400">
                            Voir détails
                        </span>
                    )}

                    <span className={`text-${color}-600 group-hover:translate-x-1 transition-transform`}>
                        <ArrowRight className="w-5 h-5" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
