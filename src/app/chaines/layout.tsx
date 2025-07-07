import { Metadata } from 'next';
import React from 'react';

// Define the type for chainInfo
interface ChainInfo {
  name: string;
  nameJp: string;
  category: string;
  description: string;
  specialties: string[];
  founded?: string;
}



export default function ChainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}