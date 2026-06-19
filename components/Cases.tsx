'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileWarning, Home, Scale, ArrowRight } from 'lucide-react';

const cases = [
  {
    icon: Home,
    title: 'Litiges Locatifs',
    description: 'Accompagnement des propriétaires et locataires dans les conflits liés à l\'exécution du bail.',
    details: [
      'Non-paiement de loyers',
      'Mauvaise utilisation des locaux',
      'Résiliation anticipée',
    ],
  },
  {
    icon: FileWarning,
    title: 'Procédures d\'Expulsion',
    description: 'Assistance stratégique dans les démarches d\'expulsion et procédures associées.',
    details: [
      'Commandement de quitter les lieux',
      'Assignation au tribunal',
      'Exécution de la décision',
    ],
  },
  {
    icon: Scale,
    title: 'Contentieux Civil',
    description: 'Défense des intérêts de particuliers et professionnels devant les juridictions compétentes.',
    details: [
      'Litiges contractuels',
      'Responsabilité civile',
      'Indemnisation',
    ],
  },
];

export default function Cases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="cas" className="section-padding bg-white">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Des situations concrètes.
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold mb-6">
            Des solutions adaptées.
          </h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((case_item, index) => (
            <motion.div
              key={case_item.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-500 group-hover:shadow-xl group-hover:border-gold/30 group-hover:-translate-y-1">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl mb-6 bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors duration-300">
                  <case_item.icon className="w-7 h-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-navy mb-4">
                  {case_item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {case_item.description}
                </p>

                {/* Details list */}
                <ul className="space-y-2">
                  {case_item.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Accent line */}
                <div className="absolute bottom-0 left-8 h-1 w-0 group-hover:w-12 bg-gold rounded-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <button
            onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-navy font-medium hover:text-gold transition-colors duration-300"
          >
            <span>Discuter de votre situation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
