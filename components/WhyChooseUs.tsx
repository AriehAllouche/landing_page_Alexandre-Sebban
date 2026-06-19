'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, Users, Scale, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Réactivité',
    description: 'Retour rapide sur votre demande, consultation sous 48h.',
  },
  {
    icon: Users,
    title: 'Disponibilité',
    description: 'Un interlocuteur unique et engagé tout au long de votre dossier.',
  },
  {
    icon: Scale,
    title: 'Expertise Juridique',
    description: 'Connaissance approfondie du droit civil et du contentieux.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement Personnalisé',
    description: 'Chaque dossier bénéficie d\'une stratégie sur mesure.',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pourquoi" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Pourquoi faire appel au cabinet ?
          </h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              <div className="text-center">
                {/* Icon container */}
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-navy flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-navy-light">
                    <reason.icon className="w-10 h-10 text-gold" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gold/20 transform scale-100 transition-all duration-500 group-hover:scale-125 group-hover:border-gold/40" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-navy mb-3">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
