'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageCircle, FileSearch, Target, Scale, CheckCircle2 } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Premier échange',
    description: 'Prise de contact et première analyse de votre situation lors d\'un rendez-vous.',
  },
  {
    icon: FileSearch,
    step: '02',
    title: 'Analyse juridique',
    description: 'Étude approfondie des faits et documents pour évaluer vos options.',
  },
  {
    icon: Target,
    step: '03',
    title: 'Définition de la stratégie',
    description: 'Élaboration d\'une stratégie adaptée à vos objectifs et contraintes.',
  },
  {
    icon: Scale,
    step: '04',
    title: 'Représentation',
    description: 'Accompagnement dans les démarches et représentation devant les juridictions.',
  },
  {
    icon: CheckCircle2,
    step: '05',
    title: 'Résolution',
    description: 'Accompagnement jusqu\'au résultat et conclusion du dossier.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="processus" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Comment se déroule
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold mb-6">
            votre accompagnement ?
          </h2>
          <div className="w-24 h-1 bg-navy rounded-full mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-navy/20 via-gold/30 to-navy/20" />

          <div className="grid lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              >
                {/* Step card */}
                <div className="text-center lg:text-center">
                  {/* Icon container */}
                  <div className="relative inline-block mb-6">
                    {/* Ring */}
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-gold/30 flex items-center justify-center transition-all duration-500 group-hover:border-gold group-hover:shadow-lg">
                      <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-gold" />
                      </div>
                    </div>

                    {/* Step number - desktop */}
                    <div className="hidden lg:block absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-sm">
                      {step.step}
                    </div>
                  </div>

                  {/* Step number - mobile */}
                  <div className="lg:hidden text-gold font-serif text-sm mb-2">
                    Étape {step.step}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg text-navy mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
