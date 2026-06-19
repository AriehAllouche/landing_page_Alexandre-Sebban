'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Video, Check, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const consultationTypes = [
  {
    type: 'cabinet',
    icon: MapPin,
    title: 'Consultation au cabinet',
    description: 'Rendez-vous en personne à notre cabinet parisien.',
    features: ['Discussion en face à face', 'Analyse documentaire', 'Conseil personnalisé'],
  },
  {
    type: 'phone',
    icon: Phone,
    title: 'Consultation téléphonique',
    description: 'Échange à distance pour une première approche.',
    features: ['Prise de contact', 'Présentation du dossier', 'Évaluation des options'],
  },
  {
    type: 'video',
    icon: Video,
    title: 'Visioconférence',
    description: 'Rendez-vous vidéo depuis votre domicile.',
    features: ['Communication à distance', 'Partage d\'écran', 'Flexibilité horaire'],
  },
];

const availableSlots = [
  { day: 'Lundi 23 juin', slots: ['9h00', '10h30', '15h00', '17h30'] },
  { day: 'Mardi 24 juin', slots: ['9h00', '11h00', '14h00', '16h30'] },
  { day: 'Mercredi 25 juin', slots: ['10h00', '14h30', '17h00'] },
];

export default function Consultation() {
  const [selectedType, setSelectedType] = useState<string>('cabinet');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleBooking = () => {
    if (selectedSlot) {
      alert(`Rendez-vous confirmé: ${selectedSlot} (${consultationTypes.find(t => t.type === selectedType)?.title})`);
    }
  };

  return (
    <section id="rdv" className="section-padding bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="section-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Réservez votre consultation.
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Choisissez le format qui vous convient et prenez rendez-vous directement.
          </p>
        </motion.div>

        {/* Consultation Type Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {consultationTypes.map((type, index) => (
              <motion.button
                key={type.type}
                onClick={() => setSelectedType(type.type)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border transition-all duration-300 ${
                  selectedType === type.type
                    ? 'bg-gold text-navy border-gold shadow-lg'
                    : 'bg-white/5 text-white border-white/10 hover:border-gold/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <type.icon className={`w-5 h-5 ${
                  selectedType === type.type ? 'text-navy' : 'text-gold'
                }`} />
                <span className="font-medium">{type.title}</span>
                {selectedType === type.type && (
                  <Check className="w-4 h-4" />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Booking Interface */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="bg-white shadow-2xl border-0">
            <CardContent className="p-6 sm:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Selected type details */}
                <div>
                  <div className="mb-8">
                    {consultationTypes.filter(t => t.type === selectedType).map((type) => (
                      <div key={type.type}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                            <type.icon className="w-6 h-6 text-gold" />
                          </div>
                          <div>
                            <h3 className="font-serif text-xl text-navy">{type.title}</h3>
                            <p className="text-sm text-gray-500">{type.description}</p>
                          </div>
                        </div>
                        <ul className="space-y-2 ml-2">
                          {type.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-4 h-4 text-gold" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Duration and price */}
                  <div className="flex gap-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-xs text-gray-500">Durée</p>
                        <p className="font-medium text-navy">30 min</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 text-gold text-center font-semibold">€</div>
                      <div>
                        <p className="text-xs text-gray-500">Honoraires</p>
                        <p className="font-medium text-navy">Sur devis</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h4 className="font-medium text-navy mb-4">Créneaux disponibles</h4>
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    {availableSlots.map((day) => (
                      <div key={day.day}>
                        <p className="text-sm text-gray-500 mb-2">{day.day}</p>
                        <div className="flex flex-wrap gap-2">
                          {day.slots.map((slot) => (
                            <button
                              key={slot}
                              onClick={() => setSelectedSlot(`${day.day} - ${slot}`)}
                              className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                                selectedSlot === `${day.day} - ${slot}`
                                  ? 'bg-navy text-white'
                                  : 'bg-gray-100 text-navy hover:bg-gold/10 hover:text-gold'
                              }`}
                            >
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Booking button */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Button
                      onClick={handleBooking}
                      disabled={!selectedSlot}
                      className={`w-full py-6 font-semibold transition-all duration-300 ${
                        selectedSlot
                          ? 'bg-gold text-navy hover:shadow-lg'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {selectedSlot ? (
                        <>
                          Confirmer le rendez-vous
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        'Sélectionnez un créneau'
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Confirmation par email et SMS
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Phone number */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-white/70">
            Ou contactez-nous directement au{' '}
            <a
              href="tel:+33660243299"
              className="text-gold hover:text-gold-light font-medium transition-colors"
            >
              06 60 24 32 99
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
