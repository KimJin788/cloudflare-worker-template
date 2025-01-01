'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import NavigationBar from '@/app/components/NavigationBar';

export default function TermsOfService() {
  const t = useTranslations('Terms');

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <NavigationBar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-800 to-teal-800 px-6 py-8 text-white">
              <h1 className="text-3xl font-bold">{t('title')}</h1>
              <p className="mt-2 text-emerald-100">{t('lastUpdated')}: December 31, 2023</p>
            </div>
            
            <div className="p-6 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('acceptance.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('acceptance.content')}</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('gameAccess.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('gameAccess.content')}</p>
                  <ul className="list-disc pl-6 mt-4 space-y-2">
                    <li>{t('gameAccess.requirements.age')}</li>
                    <li>{t('gameAccess.requirements.account')}</li>
                    <li>{t('gameAccess.requirements.rules')}</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('userConduct.title')}</h2>
                <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                  <p className="text-emerald-800 mb-4">{t('userConduct.intro')}</p>
                  <ul className="space-y-3">
                    {['cheating', 'harassment', 'illegal', 'security', 'commercial'].map((key) => (
                      <li key={key} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-800">{t(`userConduct.prohibited.${key}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('intellectualProperty.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('intellectualProperty.content')}</p>
                  <div className="mt-4 bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                    <h3 className="font-bold text-emerald-900 mb-2">{t('intellectualProperty.protected.title')}</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>{t('intellectualProperty.protected.graphics')}</li>
                      <li>{t('intellectualProperty.protected.code')}</li>
                      <li>{t('intellectualProperty.protected.content')}</li>
                      <li>{t('intellectualProperty.protected.trademarks')}</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('termination.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p>{t('termination.content')}</p>
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                    <p className="text-yellow-800 font-medium">{t('termination.warning')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-emerald-900 mb-4">{t('disclaimer.title')}</h2>
                <div className="prose max-w-none text-emerald-800">
                  <p className="uppercase font-bold">{t('disclaimer.caps')}</p>
                  <p className="mt-4">{t('disclaimer.content')}</p>
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
