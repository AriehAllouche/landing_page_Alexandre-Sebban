'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
  time: string;
}

// Placeholder reviews - In production, these would be fetched from Google Places API
const placeholderReviews: Review[] = [
  {
    author_name: 'Jean-Pierre M.',
    profile_photo_url: 'https://ui-avatars.com/api/?name=Jean-Pierre+M&background=0B1F3A&color=C8A24D&size=120',
    rating: 5,
    text: 'Excellent avocat. Maître Sebban m\'a accompagné avec une grande rigueur professionnelle dans un litige locataire. Son expertise et sa disponibilité ont été déterminantes pour le règlement favorable de mon dossier.',
    time: 'Il y a 2 mois',
  },
  {
    author_name: 'Marie-Claire D.',
    profile_photo_url: 'https://ui-avatars.com/api/?name=Marie-Claire+D&background=0B1F3A&color=C8A24D&size=120',
    rating: 5,
    text: 'Vraiment impressionnée par la qualité du suivi. Maître Sebban a su expliquer chaque étape de la procédure avec clarté et réactivité. Je recommande vivement.',
    time: 'Il y a 1 mois',
  },
  {
    author_name: 'Laurent B.',
    profile_photo_url: 'https://ui-avatars.com/api/?name=Laurent+B&background=0B1F3A&color=C8A24D&size=120',
    rating: 5,
    text: 'Compétence et professionnalisme exemplaires. Le cabinet a su défendre mes intérêts avec détermination. Communication fluide et conseils avisés tout au long de mon dossier.',
    time: 'Il y a 3 mois',
  },
];

interface ClientReviewsProps {
  googleReviewsUrl?: string;
}

export default function ClientReviews({ googleReviewsUrl = 'https://www.google.com/maps' }: ClientReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>(placeholderReviews);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation effect
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="avis" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="section-max">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-navy mb-4">
            La confiance de nos clients
          </h2>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gold mb-6">
            est notre meilleure référence.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez les retours d&apos;expérience des personnes accompagnées par le cabinet.
          </p>
        </motion.div>

        {/* Reviews Carousel */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            {/* Main Review Card */}
            <Card className="border-0 shadow-xl bg-white overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-gold/30" />
                </div>

                {/* Review Content */}
                <div className="min-h-[200px]">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < reviews[currentIndex].rating
                              ? 'fill-gold text-gold'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                      &ldquo;{reviews[currentIndex].text}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={reviews[currentIndex].profile_photo_url}
                        alt={reviews[currentIndex].author_name}
                        className="w-12 h-12 rounded-full border-2 border-gold/20"
                      />
                      <div>
                        <p className="font-semibold text-navy">
                          {reviews[currentIndex].author_name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {reviews[currentIndex].time}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevReview}
                className="rounded-full border-navy/20 text-navy hover:bg-navy hover:text-white"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex
                        ? 'w-6 bg-gold'
                        : 'bg-gray-300 hover:bg-gold/50'
                    }`}
                    aria-label={`Voir l'avis ${i + 1}`}
                    aria-current={i === currentIndex ? 'true' : 'false'}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextReview}
                className="rounded-full border-navy/20 text-navy hover:bg-navy hover:text-white"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Link */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-navy font-medium border-2 border-navy/10 rounded-lg hover:border-gold hover:text-gold transition-all duration-300"
          >
            Voir tous les avis Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
