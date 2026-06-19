'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown, FileQuestion } from 'lucide-react';

const faqs = [
  {
    question: 'Quand dois-je consulter un avocat ?',
    answer: 'Dès qu\'un litige naît ou qu\'une procédure est envisagée, il est recommandé de consulter un avocat. Une intervention précoce permet souvent d\'éviter des erreurs et de mettre en place la meilleure stratégie. Pour les procédures devant le Tribunal Judiciaire, la représentation par un avocat est obligatoire.',
  },
  {
    question: 'Comment se déroule une première consultation ?',
    answer: 'Lors du premier rendez-vous, nous analysons ensemble votre situation. Apportez tous les documents utiles (contrats, correspondances, etc.). Je vous expliquerai vos droits, les procédures envisageables, et la stratégie adaptée. Cette consultation dure généralement 30 à 60 minutes.',
  },
  {
    question: 'Quels documents dois-je préparer ?',
    answer: 'Rassemblez tous les documents liés à votre situation : contrats, factures, courriers et emails échangés, documents officiels, photos si pertinent, etc. Une organisation anticipée de vos documents permit une analyse plus efficace de votre dossier.',
  },
  {
    question: 'Quels sont les délais de procédure ?',
    answer: 'Les délais varient selon les juridictions et la nature du litige. Par exemple, une procédure d\'injonction de payer peut être rapide (quelques semaines), alors qu\'un procès civil complet peut prendre plusieurs mois. Je vous informerai des délais prévisionnels lors de notre échange.',
  },
  {
    question: 'Comment sont fixés les honoraires ?',
    answer: 'Les honoraires sont fixés conformément aux usages et à la réglementation applicable. Une convention d\'honoraires est systématiquement proposée, précisant le montant, les modalités de facturation (forfait ou taux horaire) et le montant provisionnel estimé. La transparence est de rigueur.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="section-max" ref={ref}>
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center">
              <FileQuestion className="w-8 h-8 text-gold" />
            </div>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-navy mb-4">
            Questions fréquentes
          </h2>
          <div className="w-24 h-1 bg-gold rounded-full mx-auto" />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-medium transition-colors duration-300 ${
                    openIndex === index ? 'text-gold' : 'text-navy'
                  }`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openIndex === index
                        ? 'rotate-180 text-gold'
                        : 'text-gray-400'
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="w-12 h-0.5 bg-gold/30 mb-4" />
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
