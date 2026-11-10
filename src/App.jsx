import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustShield from './components/TrustShield';
import LeadCaptureForm from './components/LeadCaptureForm';
import CostCalculator from './components/CostCalculator';
import ServicesGrid from './components/ServicesGrid';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import CallModal from './components/CallModal';

export default function App() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('furnace-out');

  const handleOpenCallModal = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseCallModal = () => {
    setIsCallModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-rescue-500 selection:text-white pb-20 sm:pb-0">
      {/* Sticky Lifeline Header */}
      <Header onOpenCallModal={handleOpenCallModal} />

      {/* Main Content Sections Reorganized for Maximum CRO (Reciprocity Sequence) */}
      <main>
        {/* 1. The 3-Second Hero Hook */}
        <Hero onOpenCallModal={handleOpenCallModal} />

        {/* 2. The Trust Shield */}
        <TrustShield />

        {/* 3. Interactive Cost & Arrival Time Calculator (Section 4 - Reciprocity: Value First) */}
        <CostCalculator
          onOpenCallModal={handleOpenCallModal}
          selectedIssue={selectedIssue}
          onSelectIssue={setSelectedIssue}
        />

        {/* 4. Frictionless Lead Capture Form (Section 5 - Pre-selected with matching service from calculator) */}
        <LeadCaptureForm
          onOpenCallModal={handleOpenCallModal}
          selectedServiceKey={selectedIssue}
        />

        {/* 5. Comprehensive Services Grid (Hick's Law: 4 Top Services initially + toggle for all 11) */}
        <ServicesGrid onOpenCallModal={handleOpenCallModal} />

        {/* 6. About Us & Local Authority */}
        <AboutUs onOpenCallModal={handleOpenCallModal} />

        {/* 7. Customer Testimonials & Reviews */}
        <Testimonials onOpenCallModal={handleOpenCallModal} />

        {/* 8. Core Service Areas Coverage (All 21 cities visible simultaneously) */}
        <ServiceAreas />
      </main>

      {/* SEO & NAP Footer */}
      <Footer onOpenCallModal={handleOpenCallModal} />

      {/* Mobile Sticky Lifeline Bar (Bottom Override) */}
      <MobileStickyCTA />

      {/* Desktop Call Modal (Eliminates desktop tel: prompt friction) */}
      <CallModal isOpen={isCallModalOpen} onClose={handleCloseCallModal} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
