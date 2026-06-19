'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Award } from 'lucide-react';

export default function LocalSEO() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="local" className="section-padding bg-white">
      <div className="section-max" ref={ref}>
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 text-gold mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">
                Paris 17e arrondissement
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-6">
              Cabinet d&apos;avocat à Paris 17
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Situé au cœur du 17e arrondissement de Paris, le cabinet de Maître Alexandre Sebban
                accompagne particuliers et professionnels dans leurs problématiques de contentieux civil,
                droit du travail et litiges immobiliers.
              </p>

              <p>
                Le cabinet intervient à Paris et en Île-de-France devant les juridictions compétentes :
                Tribunal Judiciaire de Paris, Tribunal de Commerce, Cour d&apos;Appel de Paris et
                juridictions de proximité.
              </p>

              <p>
                Notre localisation centrale permet une accessibilité optimale pour les rendez-vous
                et les procédures devant les juridictions de la capitale.
              </p>
            </div>

            {/* Service badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {['Contentieux civil', 'Droit du travail', 'Litiges immobiliers', 'Île-de-France'].map((service) => (
                <span key={service} className="px-4 py-2 rounded-full bg-navy/5 text-navy text-sm font-medium">
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <p className="text-4xl font-serif text-white mb-2">2017</p>
              <p className="text-white/70 text-sm">Inscription au Barreau</p>
            </div>

            <div className="bg-gradient-to-br from-gold to-gold-dark rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-navy" />
              </div>
              <p className="text-4xl font-serif text-navy mb-2">17e</p>
              <p className="text-navy/70 text-sm">Arrondissement</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <p className="text-4xl font-serif text-navy mb-2">Île-de-France</p>
              <p className="text-gray-600 text-sm">Zone d&apos;intervention</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100">
              <p className="text-4xl font-serif text-navy mb-2">48h</p>
              <p className="text-gray-600 text-sm">Délai de consultation</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
