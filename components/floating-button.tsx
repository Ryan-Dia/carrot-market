import Link from 'next/link';
import React from 'react';

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link
      className='fixed flex items-center justify-center max-w-xl text-white transition-colors \n
       bg-orange-400 border-0 border-transparent rounded-full shadow-xl cursor-pointer \n 
       hover:bg-orange-500 aspect-square w-14 bottom-24'
      href={href}
    >
      {children}
    </Link>
  );
}
