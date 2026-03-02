import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, Target } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.about.title}</h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.mission}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.missionText}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-3xl p-8 md:p-10 shadow-lg shadow-primary/5 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.vision}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.about.visionText}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
