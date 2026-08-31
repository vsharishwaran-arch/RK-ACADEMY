import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoursesAndFees from './components/CoursesAndFees';
import WhyUs from './components/WhyUs';
import ResultsAndToppers from './components/ResultsAndToppers';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactAndLocation from './components/ContactAndLocation';
import EnrollmentModal from './components/EnrollmentModal';
import FloatingActions from './components/FloatingActions';
import Footer from './components/Footer';

export default function App() {
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  const handleOpenEnrollModal = () => {
    setIsEnrollModalOpen(true);
  };

  const handleCloseEnrollModal = () => {
    setIsEnrollModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] text-slate-900 font-sans selection:bg-rose-200 selection:text-navy-900">

      {/* 1. Header / Navbar */}
      <Navbar onOpenEnroll={handleOpenEnrollModal} />

      {/* Main Sections */}
      <main>
        {/* ✅ Home Page / Hero */}
        <Hero onOpenEnroll={handleOpenEnrollModal} />

        {/* ✅ Courses & Fees Details */}
        <CoursesAndFees onOpenEnroll={handleOpenEnrollModal} />

        {/* ✅ Why Choose Us Section */}
        <WhyUs />

        {/* ✅ Results / Toppers Section */}
        <ResultsAndToppers />

        {/* ✅ Student Testimonials & Success Stories */}
        <Testimonials />

        {/* ✅ FAQ Accordion */}
        <FAQSection />

        {/* ✅ Contact & Location (Google Maps) */}
        <ContactAndLocation onOpenEnroll={handleOpenEnrollModal} />
      </main>

      {/* Footer */}
      <Footer onOpenEnroll={handleOpenEnrollModal} />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenEnroll={handleOpenEnrollModal} />

      {/* Quick Enrollment Modal */}
      <EnrollmentModal
        isOpen={isEnrollModalOpen}
        onClose={handleCloseEnrollModal}
      />

    </div>
  );
}
