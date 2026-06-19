'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/place/21+Rue+Viète,+75017+Paris', '_blank');
  };

  return (
    <section id="cabinet" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            Le Cabinet
          </h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Google Maps */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 h-[400px] lg:h-auto lg:aspect-square">
              {/* Map placeholder - In production, integrate actual Google Maps embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.1420472143673!2d2.3128!3d48.8862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e0e0e0e0e0e0e0%3A0x0!2zMjjCsDUzJzEwLjMiTiAywrAxOCc0Ni4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
                title="Cabinet d'avocat Alexandre Sebban - 21 Rue Viète, 75017 Paris"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay with button */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                <Button
                  onClick={openGoogleMaps}
                  className="bg-white/95 text-navy hover:bg-white shadow-lg"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Obtenir l&apos;itinéraire
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="p-8">
                {/* Address */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy mb-2">Adresse</h3>
                      <p className="text-gray-600 leading-relaxed">
                        21 Rue Viète<br />
                        75017 Paris
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy mb-2">Téléphone</h3>
                      <a
                        href="tel:+33660243299"
                        className="text-gold hover:text-gold-dark transition-colors font-medium text-lg"
                      >
                        06 60 24 32 99
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Réponse rapide garantie</p>
                    </div>
                  </div>
                </div>

                {/* Hours preview */}
                <div className="mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-navy mb-2">Horaires</h3>
                      <p className="text-gray-600">
                        Lundi - Vendredi : 9h00 - 20h00<br />
                        Samedi - Dimanche : Fermé
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <Button
                    onClick={openGoogleMaps}
                    className="btn-outline w-full hover:border-gold hover:text-gold"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir sur Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
