import React from 'react';

interface ResourceGridProps {
    children: React.ReactNode;
    columns?: 2 | 3 | 4;
}

export default function ResourceGrid({ children, columns = 3 }: ResourceGridProps) {
    const gridCols = {
        2: 'md:grid-cols-2',
        3: 'md:grid-cols-2 lg:grid-cols-3',
        4: 'md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6 md:gap-8`}>
            {children}
        </div>
    );
}
