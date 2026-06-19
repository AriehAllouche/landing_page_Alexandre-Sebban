'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scale, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Avis Clients', href: '#avis' },
  { name: 'Honoraires', href: '#honoraires' },
  { name: 'Cabinet', href: '#cabinet' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="#accueil"
            className="flex items-center gap-3 group"
            aria-label="Alexandre Sebban - Avocat"
          >
            <div className="relative w-10 h-10 rounded-sm bg-navy flex items-center justify-center group-hover:bg-navy-light transition-colors duration-300">
              <Scale className="w-5 h-5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg font-semibold transition-colors duration-300 ${
                  isScrolled ? 'text-navy' : 'text-navy'
                }`}
              >
                Alexandre Sebban
              </span>
              <span className={`text-xs tracking-wide uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold' : 'text-gold'
              }`}>
                Avocat
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-navy' : 'text-navy'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              className="bg-gold text-navy hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-medium"
              onClick={() => document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Réserver une consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-navy hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav className="max-w-7xl mx-auto px-4 py-6" aria-label="Navigation mobile">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-navy font-medium py-2 hover:text-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button
                    className="w-full bg-gold text-navy hover:shadow-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById('rdv')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Réserver une consultation
                  </Button>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
