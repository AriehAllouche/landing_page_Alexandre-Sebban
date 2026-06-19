'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Scale, Users, FileCheck, Search } from 'lucide-react';
import Image from 'next/image';

const timelineSteps = [
  {
    icon: Search,
    title: 'Analyse du dossier',
    description: 'Étude approfondie de votre situation et des documents',
  },
  {
    icon: GraduationCap,
    title: 'Stratégie juridique',
    description: 'Élaboration d\'une stratégie adaptée à vos objectifs',
  },
  {
    icon: Users,
    title: 'Accompagnement',
    description: 'Suivi personnalisé et communication régulière',
  },
  {
    icon: Scale,
    title: 'Défense des intérêts',
    description: 'Représentation et défense devant les juridictions',
  },
  {
    icon: FileCheck,
    title: 'Résolution du litige',
    description: 'Accompagnement jusqu\'au règlement définitif',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="apropos" className="section-padding bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />

      <div className="section-max relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInLeft}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Decorative border */}
              <div className="absolute -inset-4 border-2 border-gold/30 rounded-2xl" />
              <div className="absolute -inset-8 border border-navy/10 rounded-3xl" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <Image
                  src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
                  alt="Maître Alexandre Sebban - Avocat"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Info card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-navy text-white px-6 py-4 rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gold font-serif text-lg">Prestation de serment</p>
                <p className="text-white/80 text-sm">13 février 2017</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            variants={fadeInRight}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-6">
              Votre avocat
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Maître Alexandre Sebban accompagne ses clients depuis son inscription
                au Barreau de Paris en 2017.
              </p>
              <p>
                Titulaire d&apos;un <span className="text-navy font-medium">Master 2 Recherche en Droit des Obligations Civiles et Commerciales</span>, il développe une approche pragmatique, stratégique et personnalisée pour chaque dossier.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <h3 className="font-serif text-xl text-navy mb-8">
                Notre méthodologie
              </h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30" />

                <div className="space-y-6">
                  {timelineSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      className="relative flex items-start gap-4 pl-12"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {/* Icon */}
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-gold" />
                      </div>

                      {/* Content */}
                      <div className="bg-gray-50/50 rounded-lg p-4 flex-1">
                        <h4 className="font-semibold text-navy mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
