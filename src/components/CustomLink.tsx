import NextLink from 'next/link';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  [key: string]: unknown;
}

export default function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <NextLink href={href} className={className} {...props}>
      {children}
    </NextLink>
  );
}
