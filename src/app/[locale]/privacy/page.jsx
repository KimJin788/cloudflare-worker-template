'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NavigationBar from '@/app/components/NavigationBar';
import Image from 'next/image';

export default function Privacy() {
  const t = useTranslations('Privacy');

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <NavigationBar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-800 to-teal-800 px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">{t('title')}</h1>
              <p className="mt-2 text-emerald-100">{t('lastUpdated')}: 2025-01-01</p>
            </div>            
            <div className="p-6 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('whatInfomation.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('whatInfomation.content1')}</p>
                  <p>● {t('whatInfomation.content2')}</p>
                  <p>● {t('whatInfomation.content3')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('copyright.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('copyright.content')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('dmca.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('dmca.content')}</p>
                </div>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('dataCollection.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('dataCollection.content1')}</p>
                  <p>{t('dataCollection.content2')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('dataSecurity.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('dataSecurity.content')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('cookies.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('cookies.content')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('thirdParty.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('thirdParty.content')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('contact.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('contact.content')}</p>
                  <p className="mt-4">
                    <a href="mailto:support@blumgislime.online" className="text-emerald-600 hover:text-emerald-700 font-medium">
                      support@blumgislime.online
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Back to Home Button */}
      <div className="fixed bottom-8 right-8">
        <Link 
          href="/"
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{t('backToHome')}</span>
        </Link>
      </div>
    </div>
  );
}
