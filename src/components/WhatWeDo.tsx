import Image from "next/image";
import Link from "next/link";

interface CardItem {
  id: string;
  number: string;
  title: string;
  description?: string;
  image: string;
  isActive: boolean;
}

export default function WhatWeDo() {
  const cards: CardItem[] = [
    {
      id: "firm-closure",
      number: "01",
      title: "Firm Closure Dates",
      image: "/Rectangle 10.png",
      isActive: true,
    },
    {
      id: "pro-bono",
      number: "02",
      title: "Pro Bono Services",
      description: "Lorem ipsum dolor sit amet Lorem ipsum",
      image: "/Rectangle 9.png",
      isActive: true,
    },
    {
      id: "members-library",
      number: "03",
      title: "Members' Library",
      image: "/Rectangle 12.png",
      isActive: false,
    },
    {
      id: "specialists",
      number: "04",
      title: "Specialists Directory",
      image: "/Rectangle 11.png",
      isActive: false,
    },
  ];

  return (
    <section className="pt-20 pb-0 bg-white">
      <div className="w-full mx-0 px-0">
        {/* Section Header */}
        <div className="text-left md:text-right mb-12">
          <div className="flex flex-col md:flex-row md:justify-end items-start md:items-center gap-3 mb-4">
            <div className="flex items-center gap-2 text-maroon font-bold uppercase tracking-widest">
              <Image
                src="/tanda kutip dua.png"
                alt="Tanda Kutip"
                width={20}
                height={20}
                className="object-contain"
                style={{ width: "auto", height: "20px" }}
              />
              <div className="border-b-2 border-maroon pb-0.5 text-sm">
                <Image
                  src="/What We Do.png"
                  alt="What We Do"
                  width={100}
                  height={28}
                  className="object-contain"
                  style={{ width: "auto", height: "28px" }}
                />
              </div>
            </div>
          </div>

          <h2 className="text-[42px] md:text-[54px] font-normal leading-[1.05] tracking-[0%] uppercase font-sans text-gray-900 md:pr-53 max-w-xl">
            WE CARRY OUT VARIOUS STATUTORY FUNCTIONS
          </h2>

          <div className="mt-4 text-gray-600 max-w-3xl md:ml-auto">
            <Image
              src="/teks what we do.png"
              alt="What We Do Text"
              width={1000}
              height={70}
              className="object-contain"
            />
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded-none overflow-hidden">
          {cards.map((card) => {
            const isStyledCard = card.id !== 'firm-closure';

            if (card.isActive && isStyledCard) {
              return (
                <div
                  key={card.id}
                  className="relative flex flex-col justify-between text-gray-900 min-h-[300px] overflow-hidden group"
                >
                  {/* Background image */}
                  <div className="absolute inset-0 z-0 opacity-100">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Top content */}
                  <div className="relative z-10 p-6 md:p-8">
                    <span className={`block text-xs font-bold tracking-widest uppercase mb-4 ${card.id === 'firm-closure' ? 'text-[#252527]' : 'text-white/80'}`}>
                      {card.number}
                    </span>
                    <h3 className={`text-xl font-bold uppercase tracking-wide leading-tight mb-3 ${card.id === 'firm-closure' ? 'text-[#252527]' : 'text-white'}`} style={{
                      fontFamily: "Oswald, sans-serif",
                      fontWeight: 400,
                      fontSize: "26px",
                      lineHeight: "100%",
                      letterSpacing: "0%"
                    }}>
                      {card.title}
                    </h3>
                    {card.description && (
                      <p className={`max-w-[200px] ${card.id === 'firm-closure' ? 'text-[#252527]' : 'text-white/80'}`} style={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "30px",
                        letterSpacing: "0%"
                      }}>
                        {card.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Golden Action Bar */}
                  <Link
                    href={`#${card.id}`}
                    className={`relative z-10 w-full transition-colors py-4 px-8 flex items-center text-xs font-bold uppercase tracking-wider text-white ${card.id === 'firm-closure' ? 'justify-end' : 'justify-between'}`}
                    style={{ backgroundColor: '#927642' }}
                  >
                    {card.id === 'firm-closure' ? (
                      <img src="/garis putih.png" alt="Arrow" className="h-4 w-auto" />
                    ) : (
                      <>
                        <span>MORE DETAIL</span>
                        <img src="/garis putih.png" alt="Arrow" className="h-4 w-auto" />
                      </>
                    )}
                  </Link>
                </div>
              );
            }

            return (
              <div
                key={card.id}
                className="relative flex flex-col justify-between text-gray-900 min-h-[350px] overflow-hidden group"
              >
                {/* Background image (no white overlay) */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Top content */}
                <div className="relative z-10 p-8">
                  <span className="block text-xs font-bold text-gray-500 tracking-widest uppercase mb-4">
                    {card.number}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wide leading-tight text-gray-800" style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 400,
                    fontSize: "26px",
                    lineHeight: "100%",
                    letterSpacing: "0%"
                  }}>
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Simple Arrow Bar */}
                <Link
                  href={`#${card.id}`}
                  className={`relative z-10 w-full py-4 px-8 flex justify-between items-center transition-colors ${card.id === 'members-library' || card.id === 'specialists' ? 'bg-white text-gray-900 hover:bg-gray-100 border-t border-gray-200' : 'border-t border-gray-100 text-gray-500 hover:text-maroon'}`}
                >
                  <img src="/garis hitam.png" alt="Arrow" className="h-4 w-auto" />
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}