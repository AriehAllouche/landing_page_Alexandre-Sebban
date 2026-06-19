'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, FileText, Scale, Shield, Check, HelpCircle } from 'lucide-react';

const feeCards = [
  {
    icon: MessageCircle,
    title: 'Consultation',
    description: 'Premier rendez-vous pour analyser votre situation et définir la stratégie.',
    features: [
      'Analyse du dossier',
      'Conseil juridique',
      'Orientation stratégique',
    ],
    pricing: 'Forfait',
  },
  {
    icon: FileText,
    title: 'Accompagnement juridique',
    description: 'Conseil et rédaction de documents juridiques pour votre dossier.',
    features: [
      'Rédaction de courriers',
      'Demandes préalables',
      'Négociation',
    ],
    pricing: 'Forfait ou temps passé',
  },
  {
    icon: Scale,
    title: 'Contentieux',
    description: 'Représentation et défense devant les juridictions compétentes.',
    features: [
      'Préparation du dossier',
      'Plaidoyer',
      'Suivi de procédure',
    ],
    pricing: 'Forfait ou temps passé',
  },
];

export default function Fees() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="honoraires" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Transparence
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold mb-6">
            et confiance.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Le cabinet établit une convention d&apos;honoraires dès le début de son intervention
            afin d&apos;assurer une parfaite visibilité sur les modalités financières du dossier.
          </p>
        </motion.div>

        {/* Fees Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {feeCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="premium-card group h-full p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl mb-6 bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-gold" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-navy mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing tag */}
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-navy text-sm font-medium">
                    {card.pricing}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info box */}
        <motion.div
          className="mt-12 bg-navy rounded-2xl p-8 flex items-start gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
            <Shield className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h4 className="font-serif text-lg text-white mb-2">
              Convention d&apos;honoraires
            </h4>
            <p className="text-white/70 text-sm leading-relaxed">
              Conformément à la déontologie, une convention d&apos;honoraires est systématiquement
              proposée avant toute intervention. Elle précise la tarification, les modalités
              de facturation et le montant provisionnel estimé.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
