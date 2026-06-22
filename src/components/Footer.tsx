import Image from "next/image";
export default function Footer() {
  return (
    <footer className="relative w-full h-[360px] bg-white overflow-visible">
      <img
        src="/foto laptop.png"
        alt="Footer background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/30" />

      {/* footer.png dulu sebelum handphone */}
      <img
        src="/Footer.png"
        alt="Footer overlay"
        className="absolute bottom-0 left-0 w-full h-1/2 object-cover object-top"
      />

      {/* Merah bawah */}
      <img
        src="/merah bawah.png"
        alt="Decorative"
        className="absolute top-0 right-0 w-[50%] object-contain"
      />

      {/* Tulisan career */}
      <div className="absolute left-56 top-20 transform -translate-y-1/2 pr-8">
        <Image
          src="/tulisan career.png"
          alt="Career"
          width={300}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Handphone paling akhir = paling atas */}
      <img
        src="/handphone.png"
        alt="Handphone"
        className="absolute top-[-105px] right-52 w-[23%] object-contain z-10"
      />
    </footer>
  );
}