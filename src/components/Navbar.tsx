"use client";
import { useState } from "react";

const MENU_ITEMS = [
  { label: "ABOUT US", highlight: true },
  { label: "LAWYERS" },
  { label: "PUBLIC" },
  { label: "ADMISSIONS" },
  { label: "MEDIA" },
  { label: "CPD" },
  { label: "MEMBER LOGIN" },
  { label: "MEMBERSHIP" },
  { label: "CAREERS" },
  { label: "ADVERTISE" },
];

const SUB_ITEMS = [
  "What We Do",
  "Council 2025",
  "Executive Committee 2025",
  "Presidents & Honorary Members",
  "Award Recipients",
  "Secretariat 2025",
  "Standing Committees 2025",
  "Practice Areas",
  "Support Schemes",
  "Membership Privileges",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navbar container — fixed overlay for mobile and desktop */}
      <div className="fixed inset-0 z-50 flex flex-row-reverse pointer-events-none">

        {/* Toggle strip */}
        <div className="pointer-events-auto h-full flex flex-col justify-between items-center w-[52px] pt-4 pb-4 bg-[#404040]">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="w-8 h-8 flex flex-col justify-center items-center gap-[5px] p-1 bg-transparent border-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-white"
          >
            {open ? (
              <span className="text-white text-lg leading-none select-none">✕</span>
            ) : (
              <>
                <span className="block w-full h-[1.5px] bg-white" />
                <span className="block w-[65%] h-[1.5px] bg-white self-start" />
                <span className="block w-full h-[1.5px] bg-white" />
              </>
            )}
          </button>
          <div className="flex flex-col items-center gap-1 text-white text-[9px] uppercase tracking-[0.32em]">
            <span>scroll</span>
            <span>down</span>
            <img
              src="/logo bulat.png"
              alt="Logo bulat"
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>

        {/* Overlay menu */}
        {open && (
          <nav
            id="nav-menu"
            aria-label="Main navigation"
            className="pointer-events-auto h-full w-full max-w-[420px] md:w-[900px] bg-[#404040] flex flex-col"
          >
            {/* Top bar */}
            <div className="relative flex justify-end items-center px-6 pt-4 pb-2 gap-3">
              <img
                src="/Socials(1).png"
                alt="Socials"
                className="h-6 w-auto object-contain"
              />
              <span className="text-gray-600 mx-1" aria-hidden="true">|</span>
              <a
                href="/contact"
                className="text-white text-xs border border-white px-3 py-1 tracking-widest hover:bg-white hover:text-[#404040] transition-colors"
              >
                CONTACT US
              </a>
            </div>

            {/* Search */}
            <div className="px-6 py-3">
              <label htmlFor="nav-search" className="sr-only">Search</label>
              <div className="flex items-center border-b border-gray-500 pb-1 gap-2">
                <img
                  src="/circum_search.png"
                  alt="Search icon"
                  className="h-4 w-4 object-contain"
                />
                <input
                  id="nav-search"
                  type="search"
                  placeholder="Search here"
                  className="flex-1 bg-transparent text-white text-sm placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            {/* Menu content */}
            <div className="flex flex-1 px-6 pt-4 gap-8 overflow-y-auto">
              {/* Left: Main menu */}
              <ul className="flex flex-col gap-3 min-w-[160px] list-none p-0 m-0">
                {MENU_ITEMS.map(({ label }) => (
                  <li key={label}>
                    <a
                      href={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="tracking-wide no-underline transition-colors block text-white text-xl font-semibold hover:text-[#b5883a]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Right: Sub items */}
              <ul className="flex flex-col gap-2 pt-1 list-none p-0 m-0">
                {SUB_ITEMS.map((sub) => (
                  <li key={sub}>
                    <a
                      href={`/about/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-gray-300 text-sm no-underline hover:text-white transition-colors block"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
