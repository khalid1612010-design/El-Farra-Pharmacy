import { useLanguage } from '@/context/LanguageContext';
import { Cross } from 'lucide-react';

export function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-white">
            <Cross className="w-8 h-8 text-primary" />
            <span className={`text-xl font-bold ${isRtl ? 'font-ar' : 'font-en'}`}>
              {t.hero.title}
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#home" className="hover:text-primary transition-colors">{t.nav.home}</a>
            <a href="#about" className="hover:text-primary transition-colors">{t.nav.about}</a>
            <a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a>
            <a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact}</a>
          </div>

        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {t.hero.title}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
