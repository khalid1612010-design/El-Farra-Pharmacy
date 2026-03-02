import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      {/* Decorative background blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 text-center lg:text-start"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm w-fit mx-auto lg:mx-0">
              24/7 Pharmacy
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground">
              {t.hero.title}
              <br />
              <span className="text-gradient block mt-2">
                {t.hero.subtitle}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
              <a 
                href="tel:+201031737610"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 hover:bg-primary/90 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                {t.hero.callNow}
              </a>
              
              <a 
                href="https://wa.me/201031737610"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:-translate-y-1 hover:bg-[#20bd5a] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.whatsapp}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* beautiful modern pharmacy aesthetic stock image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=1000&fit=crop" 
                alt="Pharmacy interior" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Trusted Care</p>
                <p className="text-sm text-gray-500">Matareya Community</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
