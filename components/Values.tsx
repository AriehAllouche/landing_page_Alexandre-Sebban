'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Clock, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Rigueur',
    description: 'Chaque dossier est étudié avec précision. Une analyse méthodique pour une défense solide.',
    color: 'navy',
  },
  {
    icon: Clock,
    title: 'Disponibilité',
    description: 'Un interlocuteur impliqué à chaque étape. Votre préoccupation reste notre priorité.',
    color: 'gold',
  },
  {
    icon: Shield,
    title: 'Détermination',
    description: 'Une défense construite autour de vos intérêts, avec engagement et persévérance.',
    color: 'navy',
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="valeurs" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Une approche fondée
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold">
            sur trois principes
          </h2>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-gold/20 group-hover:-translate-y-1">
                {/* Accent corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute -top-1 -right-1 w-6 h-6 bg-${value.color === 'gold' ? 'gold' : 'navy/10'} rotate-45 translate-x-1/2 -translate-y-1/2`} />
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  value.color === 'gold' ? 'bg-gold/10' : 'bg-navy/5'
                }`}>
                  <value.icon className={`w-8 h-8 transition-colors duration-300 ${
                    value.color === 'gold' ? 'text-gold' : 'text-navy'
                  }`} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl text-navy mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative line */}
                <div className={`mt-6 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20 ${
                  value.color === 'gold' ? 'bg-gold/50 group-hover:bg-gold' : 'bg-navy/20 group-hover:bg-navy/40'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
