import Image from "next/image";

export default function RoadTo() {
  return (
    <section className="w-full px-16 py-12 bg-white">
      {/* Label: Road to 2027 */}
      <a
        href="#"
        className="text-[#AA0433] uppercase underline"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textDecorationStyle: "solid",
        }}
      >
        Road to 2027
      </a>

      {/* Title */}
      <h2
        className="mt-3 text-gray-900 uppercase"
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 400,
          fontSize: "54px",
          lineHeight: "100%",
          letterSpacing: "0%",
        }}
      >
        Celebrating a Legacy,
        <br />
        Journeying to the Future
      </h2>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Content */}
      <div className="flex items-start gap-12">
        {/* Left: Image */}
        <div className="flex-shrink-0 w-[420px]">
          <img
            src="/rectangle 6.png"
            alt="Law Society"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right: Year tabs + text */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Year Tabs */}
          <div className="flex items-center gap-4 justify-end">
  <div className="relative h-16 w-20">
    <Image src="/2025.png" alt="2025" fill className="object-contain" sizes="80px" />
  </div>
  <span className="text-gray-400 text-2xl font-bold">·</span>
  <div className="relative h-16 w-20">
    <Image src="/2026.png" alt="2026" fill className="object-contain" sizes="80px" />
  </div>
  <span className="text-gray-400 text-2xl font-bold">·</span>
  <div className="relative h-16 w-20">
    <Image src="/2027.png" alt="2027" fill className="object-contain" sizes="80px" />
  </div>
</div>

          {/* Description */}
          <div>
            <div className="mb-2">
              <div className="relative h-[70px] w-full max-w-[560px]">
                <Image
                  src="/A new beginning - Laying the groundwork for our future.png"
                  alt="A new beginning - Laying the groundwork for our future"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 760px"
                />
              </div>
            </div>
            <p
              className="mt-0"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "30px",
                letterSpacing: "0%",
              }}
            >
              As we embark on our journey towards LawSoc’s 60th anniversary, 2025 marks the beginning of our refreshed digital presence. This year, we’re reimagining how we connect with members — through new digital tools, enhanced services, and stories from the legal community.
            </p>
            
          </div>
        </div>
      </div>
    </section>
  );
}