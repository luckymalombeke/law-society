
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
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-white text-gray-900 font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WhatWeDo />
        <div className="w-full overflow-hidden relative">
          <img
            src="/foto_bersama_dark.png"
            alt="Foto Bersama Dark"
            className="w-full h-auto block"
          />
          {/* Vector + Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ paddingBottom: '11.5%' }}>
            {/* Vector banner */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src="/Vector 9.png"
                alt="Vector Overlay"
                className="w-full h-auto max-h-32 object-fill"
              />
              {/* Teks di atas vector */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnnivSection />
              </div>
            </div>
          </div>
        </div>
        <RoadTo />
        <LegalSection />
        <NewsCarousel />
       
      </main>
      <Footer />

    </div>
  );
}