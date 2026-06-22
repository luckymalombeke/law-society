export default function AnnivSection() {
  return (
    <div className="flex items-center justify-center gap-4">
      <img src="/Celebrating.png" alt="Celebrating" className="h-16 object-contain" />
      
      {/* 60 + TH dalam satu wrapper */}
      <div className="relative flex items-end">
        <img src="/60.png" alt="60" className="h-40 object-contain" />
        <img src="/th.png" alt="th" className="h-10 object-contain absolute top-0 right-0 translate-x-full" />
      </div>

      <img src="/anniversary.png" alt="Anniversary" className="h-16 object-contain" />
     <div className="relative top-50 right-127 flex-shrink-0 flex flex-col items-center gap-1">
  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#927642' }}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon points="4,2 14,8 4,14" fill="white" />
    </svg>
  </div>
  <span className="text-white text-xs tracking-widest uppercase">Play Video</span>
</div>
    
    </div>
  );
}