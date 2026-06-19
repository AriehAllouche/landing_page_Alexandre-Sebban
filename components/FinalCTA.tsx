'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="section-max relative" ref={ref}>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="text-gold text-lg uppercase tracking-[0.25em] font-light">
              Contact
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Besoin d&apos;une défense efficace
            <br />
            <span className="text-gold">de vos intérêts ?</span>
          </h2>

          <p className="text-white/70 max-w-2xl mx-auto text-lg mb-12">
            Prenez rendez-vous avec le cabinet dès aujourd&apos;hui et
            bénéficiez d&apos;un accompagnement juridique personnalisé.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              className="btn-gold text-navy px-10 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver une consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-gold/30 text-gold hover:bg-gold/10 px-10 py-6 text-lg"
              onClick={() => document.getElementById('cabinet')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Phone className="w-5 h-5 mr-2" />
              Nous contacter
            </Button>
          </motion.div>

          {/* Direct contact */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center sm:text-left">
              <p className="text-white/50 text-sm">appelez-nous</p>
              <a href="tel:+33660243299" className="text-gold text-xl font-medium hover:text-gold-light transition-colors">
                06 60 24 32 99
              </a>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="text-center sm:text-left">
              <p className="text-white/50 text-sm">consultation sous</p>
              <p className="text-white text-xl font-medium">48 heures</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
    </section>
  );
}
