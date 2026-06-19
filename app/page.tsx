'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientReviews from '@/components/ClientReviews';
import About from '@/components/About';
import Values from '@/components/Values';
import Expertise from '@/components/Expertise';
import Cases from '@/components/Cases';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Consultation from '@/components/Consultation';
import Fees from '@/components/Fees';
import LocalSEO from '@/components/LocalSEO';
import Location from '@/components/Location';
import Hours from '@/components/Hours';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <ClientReviews googleReviewsUrl="https://www.google.com/maps" />
        <About />
        <Values />
        <Expertise />
        <Cases />
        <WhyChooseUs />
        <Process />
        <Consultation />
        <Fees />
        <LocalSEO />
        <Location />
        <Hours />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
