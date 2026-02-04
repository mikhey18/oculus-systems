'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              {t.footer.links.privacy}
            </h3>
            <p className="text-sm text-slate-400">
              {t.footer.descriptions.privacy}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              {t.footer.links.warranty}
            </h3>
            <p className="text-sm text-slate-400">
              {t.footer.descriptions.warranty}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">
              {t.footer.links.about}
            </h3>
            <p className="text-sm text-slate-400">
              {t.footer.descriptions.about}
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
