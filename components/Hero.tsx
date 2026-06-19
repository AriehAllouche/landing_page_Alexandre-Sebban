'use client';

import { motion } from 'framer-motion';
import { Award, Clock, MapPin, CheckCircle2, ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const assurances = [
  { icon: Clock, text: 'Réponse rapide' },
  { icon: Award, text: 'Accompagnement personnalisé' },
  { icon: Clock, text: 'Consultation sous 48h' },
  { icon: MapPin, text: 'Cabinet situé à Paris 17' },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Hero() {
  const scrollToRdv = () => {
    document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAvis = () => {
    document.getElementById('avis')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden pt-20"
      aria-label="Accueil"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 hero-pattern opacity-80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            className="order-2 lg:order-1"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div className="mb-6" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 border border-navy/10">
                <Award className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-navy">
                  Avocat au Barreau de Paris
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-navy leading-tight mb-4"
              variants={fadeInUp}
            >
              Alexandre Sebban
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="font-serif text-xl sm:text-2xl text-navy/70 mb-6"
              variants={fadeInUp}
            >
              Une défense stratégique au service de vos intérêts.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg"
              variants={fadeInUp}
            >
              Le cabinet accompagne particuliers, propriétaires, locataires et professionnels
              dans la résolution de leurs litiges civils, immobiliers et en droit du travail.
            </motion.p>

            {/* Assurances */}
            <motion.div className="grid grid-cols-2 gap-3 mb-10" variants={staggerContainer}>
              {assurances.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2"
                  variants={fadeInUp}
                >
                  <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <Button
                className="btn-gold text-navy px-8 py-4 text-base font-semibold"
                onClick={scrollToRdv}
              >
                Réserver une consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="btn-outline px-8 py-4 text-base border-navy/20 hover:border-navy hover:text-navy"
                onClick={scrollToAvis}
              >
                <Star className="w-4 h-4 mr-2 text-gold" />
                Voir les avis clients
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-navy/5 rounded-full blur-3xl" />

              {/* Main image container */}
              <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.pexels.com/photos/5668840/pexels-photo-5668840.jpeg"
                  alt="Maître Alexandre Sebban - Avocat au Barreau de Paris"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -left-10 top-1/2 transform -translate-y-1/2 bg-white px-5 py-3 rounded-lg shadow-xl border border-gray-100"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Dévoué à</p>
                    <p className="text-navy font-semibold text-sm">votre cause</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-5 bottom-10 bg-navy text-white px-5 py-4 rounded-xl shadow-xl"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="text-center">
                  <p className="text-3xl font-serif font-bold text-gold">8+</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wide mt-1">
                    Années d&apos;expérience
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
