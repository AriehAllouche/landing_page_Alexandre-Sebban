'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Phone } from 'lucide-react';

const hours = [
  { day: 'Lundi', hours: '09h00 - 20h00', isToday: false },
  { day: 'Mardi', hours: '09h00 - 20h00', isToday: false },
  { day: 'Mercredi', hours: '09h00 - 20h00', isToday: false },
  { day: 'Jeudi', hours: '09h00 - 20h00', isToday: false },
  { day: 'Vendredi', hours: '09h00 - 20h00', isToday: false },
  { day: 'Samedi', hours: 'Fermé', isClosed: true },
  { day: 'Dimanche', hours: 'Fermé', isClosed: true },
];

export default function Hours() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="horaires" className="section-padding bg-white">
      <div className="section-max" ref={ref}>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
              Horaires d&apos;ouverture
            </h2>
            <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
          </div>

          <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 shadow-xl">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                <Clock className="w-8 h-8 text-gold" />
              </div>
            </div>

            {/* Hours list */}
            <div className="space-y-4">
              {hours.map((item, index) => (
                <motion.div
                  key={item.day}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg ${
                    item.isClosed
                      ? 'bg-white/5'
                      : 'bg-white/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <span className="text-white/90 font-medium">{item.day}</span>
                  <span className={item.isClosed ? 'text-white/50' : 'text-gold'}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-white/70 mb-4">
                Pour une consultation en dehors des horaires d&apos;ouverture
              </p>
              <a
                href="tel:+33660243299"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors font-medium"
              >
                <Phone className="w-5 h-5" />
                06 60 24 32 99
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
