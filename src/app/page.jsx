'use client';

import Image from "next/image";
import { useTranslations } from 'next-intl';
import NavigationBar from '@/app/components/NavigationBar';
import games from '@/data/data';
import { useState } from 'react';
import { useParams } from 'next/navigation';

export default function Home() {
  const t = useTranslations('Index');
  const { locale } = useParams();
  const homeGame = games.find(game => game.isHome);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <NavigationBar />
      <main className="pt-16">
{/* Hero Section with Game Iframe */}
<section className="container mx-auto px-4 py-8 pt-16">
        <div className="w-full aspect-[16/9] bg-emerald-900 rounded-lg overflow-hidden relative">
          {homeGame && (
            <>
              {isPlaying ? (
                <iframe 
                  src={homeGame.url}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/95 to-teal-900/95 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-6 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg blur opacity-25"></div>
                        <Image
                          src={homeGame.icon}
                          alt={homeGame.name}
                          width={160}
                          height={160}
                          className="rounded-lg shadow-lg relative"
                        />
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4">{homeGame.name}</h2>
                    <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
                      {homeGame.description[locale]}
                    </p>
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-200 flex items-center justify-center mx-auto space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <span>{t('playNow')}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Game Information Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header with Game Logo and Basic Info */}
          <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6">
            <div className="flex items-center space-x-6">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-lg blur opacity-25"></div>
                  <Image
                    src={homeGame?.icon || '/game-logo.svg'}
                    alt={`${homeGame?.name || 'Game'} Logo`}
                    width={120}
                    height={120}
                    className="rounded-lg relative"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{homeGame?.name || 'Game Title'}</h1>
                <div className="flex items-center space-x-6 text-emerald-100">
                  {homeGame?.publisher && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>{homeGame.publisher}</span>
                    </div>
                  )}
                  {homeGame?.rate && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{homeGame.rate}/10</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description and Details */}
          <div className="p-6">
            <div className="prose max-w-none">
              <p className="text-emerald-900 text-lg leading-relaxed">
                {homeGame?.description[locale] || 'Detailed game description goes here. This exciting game offers players an immersive experience with stunning graphics and engaging gameplay.'}
              </p>
            </div>

            {/* How to Play Section */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                <span className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                  {t('howToPlay')}
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                    {t('controls.title')}
                  </h3>
                  <ul className="space-y-2 text-emerald-800">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {t('controls.description1')}
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {t('controls.description2')}
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t('objectives.title')}
                  </h3>
                  <ul className="space-y-2 text-emerald-800">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 mr-2 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {t('objectives.description1')}
                    </li>
                  </ul>
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
