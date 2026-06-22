
export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#e8e4dc]">
      

      {/* Background Singapore */}
      <div
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center"
        style={{ backgroundImage: 'url(/singapore_grayscale.png)' }}
      />

      {/* ===================== MOBILE ===================== */}
      <div className="relative z-10 flex flex-col md:hidden min-h-screen">

        {/* Logo mobile */}
        <div className="flex items-center px-5 pt-4 pb-2">
          <img
            src="/image 6.png"
            alt="Logo"
            className="w-[110px] h-auto"
          />
        </div>

        {/* Teks */}
<div className="px-5 pt-3 pb-4 pr-[64px]">
  <div className="mb-3">
    <div 
      className="uppercase"
      style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 500,
        fontSize: "36px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#252527"
      }}
    >
      Become An
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <div 
        className="uppercase"
        style={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#AA0433"
        }}
      >
        Affiliate
      </div>
      <div 
        className="uppercase"
        style={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 500,
          fontSize: "36px",
          lineHeight: "100%",
          letterSpacing: "0%",
          color: "#252527"
        }}
      >
        Of The
      </div>
    </div>
    <div 
      className="uppercase"
      style={{
        fontFamily: "Oswald, sans-serif",
        fontWeight: 500,
        fontSize: "36px",
        lineHeight: "100%",
        letterSpacing: "0%",
        color: "#252527"
      }}
    >
      Law Society
    </div>
  </div>
  <p className="mb-4 pr-4" style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "30px",
    letterSpacing: "1%",
    color: "#555555"
  }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Etiam eu turpis molestie, dict...
  </p>
  <a href="#" className="inline-flex items-center gap-2 text-[#927642] font-semibold uppercase tracking-[0.15em] text-[11px] no-underline">
    FIND LAWYER ——→
  </a>
</div>

{/* Patung + Vector */}
<div className="relative flex-1 flex items-end justify-center min-h-[450px]">
  <img
    src="/Vector 2.png"
    alt=""
    className="absolute top-[110px] left-0 w-[160px] z-[1] pointer-events-none"
  />
  <img
    src="/Vector 1.png"
    alt=""
    className="absolute bottom-[0px] left-0 w-[160px] z-[1] pointer-events-none"
  />
  <img
    src="/statue_justice.png"
    alt="Statue of Justice"
    className="relative z-[2] w-[95%] max-w-[380px] object-contain"
  />
        </div>
      </div>
      {/* ===================== DESKTOP ===================== */}
      <div className="hidden md:block relative" style={{ height: '900px' }}>

        {/* Vector 2 - strip atas */}
        <img
          src="/Vector 2.png"
          alt=""
          className="absolute top-[40px] left-0 z-[1] pointer-events-none w-[200px] h-[600px]"
        />

        {/* Vector 1 - strip bawah */}
        <img
          src="/Vector 1.png"
          alt=""
          className="absolute bottom-[-40px] left-0 z-[1] pointer-events-none w-[200px] h-[500px]"
        />

        {/* Statue */}
        <img
          src="/statue_justice.png"
          alt="Statue of Justice"
          className="absolute z-[2] pointer-events-none opacity-[0.96]"
          style={{
            top: '-60px',
            left: '50px',
            width: '480px',
            height: '1000px'
          }}
        />

        {/* Logo */}
        <img
          src="/image 6.png"
          alt="Logo"
          className="absolute z-[4]"
          style={{
            top: '60px',
            left: '60px',
            width: '152px',
            height: '62px'
          }}
        />

        {/* Text content */}
        <div
          className="absolute z-[3] right-[5%] top-[25%]"
          style={{ maxWidth: '460px' }}
        >
          <div className="uppercase font-extrabold leading-[1.05] text-[3.4rem] tracking-[0.22em] mb-6">
  <div className="text-[#111111]" style={{ position: "relative", top: "10px", right: "30px" }}>BECOME AN</div>
  <div className="text-[#EB2517]" style={{ position: "relative", top: "5px", left: "30px" }}>AFFILIATE </div>
  <div className="text-[#111111]" style={{ position: "relative", top: "0px", left: "15px" }}> OF THE</div>
  <div className="text-[#111111]" style={{ position: "relative", top: "0px", left: "15px" }}> LAW SOCIETY</div>
</div>
          <p
            className="mb-6"
            style={{
              maxWidth: '420px',
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "30px",
              letterSpacing: "1%",
              color: "#555555"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla
            accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Sed dignissim, metus.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#927642] font-semibold uppercase tracking-[0.15em] text-[13px] no-underline"
          >
            FIND LAWYER ——→
          </a>
        </div>
      </div>

    </section>
  );
}