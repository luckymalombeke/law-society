export default function LegalSection() {
  return (
    <section className="py-16 px-8 bg-[#F0EFEF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-10">
          <a
            href="#"
            className="font-['Oswald'] text-[24px] uppercase text-[#AA0433] underline leading-none tracking-normal"
          >
            Legal Support
          </a>
          <h2 className="font-['Oswald'] text-[32px] uppercase text-[#252527] leading-none tracking-normal text-right">
            Guiding You Through Every Steps
          </h2>
        </div>

    {/* List Items */}
    <div className="flex flex-col gap-3 px-8">
      {/* Item 1 - Lawyer */}
      <div className="flex items-center gap-0">
        <span className="bg-[#404040] text-white font-['Oswald'] text-sm px-4 py-3 min-w-[90px] text-center shrink-0">
          Lawyer
        </span>
        <div className="flex-1 bg-[#E8E8E8] px-6 py-3 text-[#252527] text-sm">
          Feedback on Law Reforms
        </div>
      </div>

      {/* Item 2 - Public (ACTIVE) */}
      <div className="flex items-center gap-0">
        <span className="bg-[#404040] text-white font-['Oswald'] text-sm px-4 py-3 min-w-[90px] text-center shrink-0">
          Public
        </span>
        <div className="flex-1 bg-[#927642] px-6 py-3 text-white text-sm font-semibold flex items-center justify-between">
          <span>Alternative Dispute Resolution Schemes</span>
          <img src="/frame.png" alt="arrow" className="w-6 h-6 object-contain" />
        </div>
      </div>


      {/* Item 3 - Lawyer */}
      <div className="flex items-center gap-0">
        <span className="bg-[#404040] text-white font-['Oswald'] text-sm px-4 py-3 min-w-[90px] text-center shrink-0">
          Lawyer
        </span>
        <div className="flex-1 bg-[#background: #E5E8EB;
] px-6 py-3 text-[#252527] text-sm">
          Members' Support Schemes
        </div>
      </div>

      {/* Item 4 - Lawyer */}
      <div className="flex items-center gap-0">
        <span className="bg-[#404040] text-white font-['Oswald'] text-sm px-4 py-3 min-w-[90px] text-center shrink-0">
          Lawyer
        </span>
        <div className="flex-1 bg-[background: #E5E8EB;
] px-6 py-3 text-[#252527] text-sm">
          Future Lawyering Research Portal
        </div>
      </div>
    </div>

    {/* Explore More */}
    <div className="text-center mt-10">
      <a
        href="#"
        className="font-['Oswald'] text-[#927642] text-sm uppercase tracking-widest inline-flex items-center gap-2"
      >
        Explore More Support <span>——→</span>
      </a>
    </div>
  </div>
</section>
  );
}
