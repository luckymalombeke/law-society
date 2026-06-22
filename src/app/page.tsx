
"use client";

import { useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Spacer from "@/components/Spacer";
import NewsCarousel from "@/components/NewsCarousel";
import AnnivSection from "@/components/anniv_section";
import RoadTo from "@/components/road_to";
import LegalSection from "@/components/legal_section";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sections = mainRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans">
      <Navbar />
      <main ref={mainRef} className="flex-grow">
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <Hero />
        </section>
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
          <WhatWeDo />
        </section>
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200 w-full overflow-hidden relative">
          <img
            src="/foto_bersama_dark.png"
            alt="Foto Bersama Dark"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingBottom: '11.5%' }}>
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/Vector 9.png"
                alt="Vector Overlay"
                className="w-full h-auto max-h-32 object-fill"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <AnnivSection />
              </div>
            </div>
          </div>
        </section>
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
          <RoadTo />
        </section>
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400">
          <LegalSection />
        </section>
        <section className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-500">
          <NewsCarousel />
        </section>
      </main>
      <Footer />
    </div>
  );
}