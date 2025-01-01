'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer')
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('contact.title')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="maislto:support@blumgislime.online" className="text-gray-700 hover:text-black">
                  {t('contact.emailUs')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('privacy.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-700 hover:text-black">
                  {t('privacy.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-700 hover:text-black">
                  {t('privacy.cookiePolicy')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">{t('terms.title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-black">
                  {t('terms.termsOfService')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-800">
          <p> {t('copyright')} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
