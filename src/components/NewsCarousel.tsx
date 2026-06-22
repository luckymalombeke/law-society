"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Article {
  id: string;
  webTitle: string;
  webUrl: string;
  webPublicationDate: string;
  fields?: {
    thumbnail?: string;
    trailText?: string;
    section?: string;
  };
}

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  } catch (e) {
    return dateString;
  }
}

function stripHtml(htmlString?: string): string {
  if (!htmlString) return "";
  return htmlString.replace(/<[^>]*>/g, "");
}

export default function NewsCarousel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      if (data.success) {
        setArticles(data.articles || []);
      } else {
        setError(data.error || "Failed to load articles.");
      }
    } catch (e: any) {
      setError("Unable to connect to the news server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const nextSlide = () => {
    if (currentIndex < articles.length - cardsToShow) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <section className="py-20 bg-gray-200 border-t border-gray-100" id="news">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-[24px] uppercase underline"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 400,
                color: "#AA0433",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Media & Press
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white border border-gray-100 overflow-hidden shadow-sm animate-pulse">
                <div className="h-48 bg-gray-200 w-full" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4" />
                  <div className="h-6 bg-gray-200 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-5/6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-200 border-t border-gray-100 text-center" id="news">
        <div className="max-w-md mx-auto px-4">
          <h3 className="text-lg font-bold text-gray-900 uppercase">Oops! Something went wrong</h3>
          <p className="text-gray-600 mt-2 text-sm">{error}</p>
          <button
            onClick={fetchNews}
            className="mt-6 inline-flex items-center px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: "#AA0433" }}
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-200 border-t border-gray-100 overflow-hidden" id="news">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
          <div className="w-full text-center mb-6 sm:mb-0">
            <h2
              className="uppercase underline"
              style={{
                fontFamily: "Oswald, sans-serif",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#AA0433",
                textDecorationStyle: "solid",
              }}
            >
              Media & Press
            </h2>
          </div>

          {/* Nav Buttons */}
          <div className="flex space-x-3 shrink-0">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
              className={`p-3 border rounded-full transition-all ${
                currentIndex === 0
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:text-[#AA0433] hover:border-[#AA0433] bg-white"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= articles.length - cardsToShow}
              aria-label="Next slide"
              className={`p-3 border rounded-full transition-all ${
                currentIndex >= articles.length - cardsToShow
                  ? "border-gray-200 text-gray-300 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:text-[#AA0433] hover:border-[#AA0433] bg-white"
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={carouselRef}
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
            }}
          >
            {articles.map((article) => (
              <div
                key={article.id}
                className="px-4 flex-shrink-0"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="bg-transparent h-full flex flex-col justify-between border border-gray-200 hover:border-gray-300 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  
                  {/* Thumbnail */}
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={article.fields?.thumbnail || "/justice_bg.png"}
                      alt={article.webTitle}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-gray-900 uppercase tracking-wide leading-snug line-clamp-2 mb-3">
                      <a href={article.webUrl} target="_blank" rel="noopener noreferrer">
                        {article.webTitle}
                      </a>
                    </h3>

                    <span className="block text-sm text-gray-600 mb-3">
                      Media | {formatDate(article.webPublicationDate)}
                    </span>

                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 flex-1">
                      {stripHtml(article.fields?.trailText) ||
                        "No summary description available for this news article."}
                    </p>

                    <div className="mt-6">
                      <a
                        href={article.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          fontSize: "18px",
                          lineHeight: "30px",
                          letterSpacing: "0.01em",
                          textTransform: "uppercase",
                          color: "#927642",
                        }}
                      >
                        More Detail
                        <Image
                          src="/Vector(3).png"
                          alt="arrow"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}