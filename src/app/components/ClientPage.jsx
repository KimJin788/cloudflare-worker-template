'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function ClientPage() {
  const t = useTranslations('Navigation');
  
  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900 text-white z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Left side - Logo and Name */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="Gaming Site Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">GamePortal</span>
            </div>
            
            {/* Right side - Navigation Links */}
            <div className="flex items-center space-x-6">
              <a href="/new-games" className="hover:text-gray-300">{t('newGames')}</a>
              <a href="/hot-games" className="hover:text-gray-300">{t('hotGames')}</a>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section with Game Iframe */}
        <section className="container mx-auto px-4 py-8">
          <div className="w-full aspect-[16/9] bg-gray-800 rounded-lg overflow-hidden">
            <iframe 
              src="https://example-game.com" 
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        {/* Game Information Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-start space-x-6">
              {/* Game Logo */}
              <div className="flex-shrink-0">
                <Image
                  src="/game-logo.svg"
                  alt="Game Logo"
                  width={120}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              
              {/* Game Details */}
              <div className="flex-grow">
                <h1 className="text-3xl font-bold mb-2">Game Title</h1>
                <p className="text-gray-600 mb-4">
                  Detailed game description goes here. This exciting game offers players
                  an immersive experience with stunning graphics and engaging gameplay.
                </p>
                
                {/* How to Play Section */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold mb-3">{t('howToPlay')}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">{t('controls')}</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Use WASD or arrow keys to move</li>
                        <li>Space bar to jump</li>
                        <li>Mouse click to interact</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">{t('objectives')}</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>Collect power-ups</li>
                        <li>Defeat enemies</li>
                        <li>Reach the finish line</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
