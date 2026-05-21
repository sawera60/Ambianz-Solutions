import { Link } from "react-router-dom";
import { useQuoteModal } from "../../../context/QuoteModalContext";

export default function CTAStrip() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <section className="bg-white pt-16 md:pt-24 pb-12 md:pb-16 px-6 md:px-12 text-center relative overflow-hidden">
      <div className="relative z-[1] max-w-4xl mx-auto">
        <div className="font-raleway text-[9px] md:text-[10px] tracking-[4px] text-[#3c5a25] uppercase mb-4">
          start your project
        </div>

        <div className="w-12 h-[1px] bg-[#3c5a25] mx-auto mb-6 md:mb-8" />

        <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-normal mb-6 md:mb-8 leading-tight">
          Ready to Transform
          <br className="hidden sm:block" /> Your Space?
        </h2>

        <p className="font-raleway text-sm text-[#1A1C19]/70 mb-10 md:mb-12 leading-relaxed max-w-lg mx-auto">
          Tell us about your project and our design team will respond within 24
          hours
        </p>

        <button
          onClick={openQuoteModal}
          className="bg-[#3c5a25] text-[#F8F6F1] text-[10px] md:text-[11px] tracking-[3px] px-10 md:px-12 py-2 md:py-5 font-raleway font-bold uppercase transition-all duration-300 hover:bg-[#2a3f1a] hover:scale-105 shadow-xl shadow-[#3c5a25]/10 border-none cursor-pointer"
        >
          Request a Quote
        </button>
      </div>
    </section>
  );
}
