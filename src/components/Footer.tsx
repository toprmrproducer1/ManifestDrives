export default function Footer() {
  return (
    <footer className="bg-[#040404] bg-[linear-gradient(180deg,rgba(232,0,13,0.03)_0%,transparent_60px)] pt-16 pb-10 px-6 md:px-[8vw]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <div className="col-span-1 md:col-span-2">
          <div className="group inline-flex flex-col items-start hover-target cursor-pointer mb-2">
            <div className="font-bebas text-[28px] tracking-[8px] text-white font-normal uppercase leading-none">MANIFEST</div>
            <div className="w-full h-[1px] bg-[#E8000D] my-[2px] transition-transform duration-300 group-hover:scale-x-110 origin-left" />
            <div className="font-bebas text-[28px] tracking-[8px] text-[#E8000D] font-normal uppercase leading-none">DRIVES</div>
          </div>
          <div className="font-inter text-[13px] text-[#4A4A4A] italic">
            &quot;It starts in your hand.&quot;
          </div>
        </div>

        <div className="col-span-1 hidden md:block" />

        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <a href="#the-cars" className="font-inter text-[11px] text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.7)] transition-colors duration-300 uppercase tracking-[2px] hover-target">THE CARS</a>
            <a href="#support" className="font-inter text-[11px] text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.7)] transition-colors duration-300 uppercase tracking-[2px] hover-target">SUPPORT</a>
            <a href="#legal" className="font-inter text-[11px] text-[rgba(255,255,255,0.25)] hover:text-[rgba(255,255,255,0.7)] transition-colors duration-300 uppercase tracking-[2px] hover-target">LEGAL</a>
          </div>
        </div>

      </div>

      <div className="mt-16 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-inter text-[12px] text-[rgba(255,255,255,0.12)]">
          © 2026 Manifest Drives. All rights reserved.
        </div>
        <div className="font-inter text-[12px] text-[rgba(255,255,255,0.12)]">
          🇮🇳 Made in India. Ships to the world.
        </div>
      </div>
    </footer>
  );
}
