import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export function Contact() {
  const { t, isRtl } = useLanguage();

  const phones = [
    "01031737610",
    "01272232239",
    "01515370545",
    "02/22522811"
  ];

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t.contact.address}</h4>
                <p className="text-muted-foreground text-lg">{t.contact.addressText}</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t.contact.phones}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phones.map((phone, i) => (
                    <a 
                      key={i} 
                      href={`tel:${phone.replace(/\D/g,'')}`}
                      className="text-primary font-semibold hover:underline text-lg"
                      dir="ltr"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex-shrink-0 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">{t.contact.workingHours}</h4>
                <p className="text-muted-foreground text-lg">{t.contact.workingHoursText}</p>
              </div>
            </div>

          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50 h-[400px] relative group"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.688220023402!2d31.3129848!3d30.1030462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145815b367117b07%3A0xc3fbfad3911cdd00!2sLotfy%20El-Naggar%2C%20Al%20Matariyah%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            <a 
              href="https://maps.google.com/?q=30.1030462,31.3129848" 
              target="_blank"
              rel="noreferrer"
              className={`absolute bottom-6 ${isRtl ? 'left-6' : 'right-6'} bg-primary text-white px-6 py-3 rounded-full shadow-lg font-semibold flex items-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all`}
            >
              <Navigation className="w-4 h-4" />
              {t.contact.openInMaps}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
