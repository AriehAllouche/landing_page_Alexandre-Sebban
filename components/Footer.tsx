'use client';

import { motion } from 'framer-motion';
import { Scale, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#avis', label: 'Avis Clients' },
  { href: '#honoraires', label: 'Honoraires' },
  { href: '#faq', label: 'FAQ' },
  { href: '#cabinet', label: 'Contact' },
];

const legalLinks = [
  { href: '/mentions-legales', label: 'Mentions légales' },
  { href: '/politique-confidentialite', label: 'Politique de confidentialité' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-gold/20 flex items-center justify-center">
                  <Scale className="w-5 h-5 text-gold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-lg text-white font-semibold">
                    Alexandre Sebban
                  </span>
                  <span className="text-xs text-gold uppercase tracking-wide">
                    Avocat
                  </span>
                </div>
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Avocat au Barreau de Paris depuis 2017, spécialisé en contentieux civil,
                droit du travail et litiges immobiliers.
              </p>
              <div className="flex gap-4">
                <a
                  href="tel:+33660243299"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Téléphone"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="mailto:contact@alexandre-sebban-avocat.fr"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="https://www.google.com/maps/place/21+Rue+Viète,+75017+Paris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-white font-medium mb-6">Navigation</h3>
              <nav aria-label="Navigation secondaire">
                <ul className="space-y-3">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-white/50 hover:text-gold transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-white font-medium mb-6">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/70 text-sm">
                      21 Rue Viète
                      <br />
                      75017 Paris
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <a
                      href="tel:+33660243299"
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      06 60 24 32 99
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <a
                      href="mailto:contact@alexandre-sebban-avocat.fr"
                      className="text-white/70 hover:text-gold transition-colors text-sm"
                    >
                      contact@alexandre-sebban-avocat.fr
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Alexandre Sebban. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
