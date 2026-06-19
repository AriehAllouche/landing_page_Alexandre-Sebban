'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Scale, Briefcase, Home, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const expertiseAreas = [
  {
    icon: Scale,
    title: 'Contentieux Civil',
    description: 'Accompagnement et représentation devant les juridictions civiles. Défense de vos droits et intérêts dans les litiges de droit commun.',
    features: ['Contrats', 'Responsabilité', 'Indemnisations', 'Dommages'],
    color: 'navy',
  },
  {
    icon: Briefcase,
    title: 'Droit du Travail',
    description: 'Conseil et défense dans les problématiques professionnelles et contentieuses. Accompagnement employeurs et salariés.',
    features: ['Licenciements', 'Harmonisation', 'Salaires', 'Litiges'],
    color: 'gold',
  },
  {
    icon: Home,
    title: 'Litiges Propriétaire / Locataire',
    description: 'Loyers impayés, dépôt de garantie, résiliation de bail, troubles de jouissance et procédures d\'expulsion.',
    features: ['Loyers impayés', 'Expulsion', 'Dépôt de garantie', 'Troubles'],
    color: 'navy',
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="expertise" className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Domaines d&apos;intervention
          </h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full transition-all duration-500 group-hover:bg-white/10 group-hover:border-gold/30 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                  area.color === 'gold' ? 'bg-gold/20' : 'bg-white/10'
                }`}>
                  <area.icon className={`w-8 h-8 transition-colors duration-300 ${
                    area.color === 'gold' ? 'text-gold' : 'text-white'
                  }`} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-white mb-4">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Features tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {area.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn more link */}
                <div className="flex items-center gap-2 text-gold group-hover:text-gold-light transition-colors duration-300">
                  <span className="text-sm font-medium">En savoir plus</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="#rdv"
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold"
          >
            Consulter pour votre dossier
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
