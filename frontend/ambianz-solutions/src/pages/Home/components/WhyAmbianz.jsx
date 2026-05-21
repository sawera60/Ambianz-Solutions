import {
  FaLeaf,
  FaPencilRuler,
  FaTools,
  FaRulerCombined,
} from "react-icons/fa";

const pillars = [
  {
    number: "01",
    title: "Eco Materials",
    description:
      "Sustainably sourced, responsibly crafted — built to endure for generations.",
    icon: <FaLeaf size={18} color="#F8F6F1" />,
  },
  {
    number: "02",
    title: "Unique Designs",
    description:
      "Every piece is conceived exclusively for you. Nothing is off the shelf.",
    icon: <FaPencilRuler size={18} color="#F8F6F1" />,
  },
  {
    number: "03",
    title: "Expert Craft",
    description:
      "Decades of skilled craftsmanship behind every joint, finish, and detail.",
    icon: <FaTools size={18} color="#F8F6F1" />,
  },
  {
    number: "04",
    title: "Perfect Fit",
    description:
      "Precision measured, precision made. Fitted exactly to your space.",
    icon: <FaRulerCombined size={18} color="#F8F6F1" />,
  },
];

export default function WhyAmbianz() {
  return (
    <section className="bg-white pt-10 md:pt-14 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="font-raleway text-[9px] md:text-[10px] tracking-[4px] text-[#3c5a25] uppercase mb-4">
            our difference
          </div>
          <div className="w-12 h-[1px] bg-[#adb940] mx-auto mb-6" />
          <h2 className="font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-normal">
            Why Ambianz
          </h2>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#e0ddd5] border border-[#e0ddd5]">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.number}
              className={`p-10 md:p-12 text-center transition-colors duration-300 ${
                i % 2 === 0 ? "bg-white" : "bg-[#F8F6F1]"
              } hover:bg-[#F0EEE6]`}
            >
              {/* Number */}
              <div className="font-cinzel text-3xl md:text-4xl text-[#3c5a25]/40 font-bold leading-none mb-6">
                {pillar.number}
              </div>

              {/* Icon block */}
              <div className="w-14 h-14 bg-[#3c5a25] rounded-sm mx-auto mb-6 flex items-center justify-center shadow-lg shadow-[#3c5a25]/20">
                {pillar.icon}
              </div>

              {/* Title */}
              <div className="font-cinzel text-xs md:text-[13px] text-[#3c5a25] tracking-[2px] font-bold mb-4 uppercase">
                {pillar.title}
              </div>

              {/* Description */}
              <p className="font-raleway text-xs text-[#1A1C19]/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
