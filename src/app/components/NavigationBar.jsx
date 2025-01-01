'use client';

import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 w-full bg-emerald-900 text-white z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/games/icons/blumgi-slime.avif"
              alt="Blumgi Slime Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl font-bold">Blumgi Slime</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
