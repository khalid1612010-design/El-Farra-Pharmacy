import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Truck, Activity, Stethoscope, Pill } from 'lucide-react';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: t.services.delivery.title,
      desc: t.services.delivery.desc,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t.services.tests.title,
      desc: t.services.tests.desc,
      color: "text-rose-500",
      bg: "bg-rose-500/10"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: t.services.consult.title,
      desc: t.services.consult.desc,
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: <Pill className="w-8 h-8" />,
      title: t.services.supplies.title,
      desc: t.services.supplies.desc,
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground text-lg">{t.services.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
