import { Link } from "react-router-dom";
import kitchen1 from "../../../images/3d-kitchen/kitchen1.png";

export default function FeaturedProject({
  location = "Islamabad",
  year = "2024",
  title = "Full Kitchen Fit-out — DHA Phase 2",
  description = "Custom cabinetry, stone countertops, appliance integration, and 3D-designed from concept to installation in 6 weeks.",
  caseStudyLink = "/projects/dha-phase-2",
}) {
  return (
    <section className="bg-[#F8F6F1] pt-16 md:pt-24 pb-0 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#d8d4c8] overflow-hidden min-h-[500px] md:min-h-[580px]">
          {/* Left — Image Panel */}
          <div className="relative overflow-hidden flex flex-col justify-between h-[300px] lg:h-auto">
            {/* Background Image */}
            <img
              src={kitchen1}
              alt="Featured Project"
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[2s] hover:scale-110"
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 z-[1]" />

            {/* Top label */}
            <div className="relative z-[2] font-raleway text-[9px] tracking-[3px] uppercase text-white/90 p-8 md:p-10">
              Project Photo
            </div>

            {/* Location badge */}
            <div className="relative z-[2] inline-flex items-center gap-2 bg-[#adb940] px-6 py-3 self-start m-8 md:m-10">
              <span className="font-raleway text-[10px] tracking-[2.5px] text-[#1A1C19] uppercase font-bold">
                {location} · {year}
              </span>
            </div>
          </div>

          {/* Right — Content Panel */}
          <div className="bg-[#F8F6F1] p-10 md:p-16 lg:p-20 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-[#d8d4c8]">
            {/* Label */}
            <div className="font-raleway text-[9px] md:text-[10px] tracking-[4px] uppercase text-[#adb940] mb-6 md:mb-8 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-[#adb940]" />
              Featured Project
            </div>

            {/* Title */}
            <h2 className="font-cinzel text-2xl md:text-3xl lg:text-4xl text-[#1A1C19] font-normal mb-6 md:mb-8 leading-tight">
              {title}
            </h2>

            {/* Description */}
            <p className="font-raleway text-sm text-[#666] leading-relaxed mb-10 md:mb-12 max-w-[400px]">
              {description}
            </p>

            {/* CTA */}
            <Link
              to={caseStudyLink}
              className="inline-flex items-center gap-3 text-[#3c5a25] hover:text-[#adb940] transition-colors group border-b border-[#d8d4c8] pb-3 self-start"
            >
              <span className="font-raleway text-[10px] md:text-[11px] tracking-[3px] uppercase font-bold">
                View Case Study
              </span>
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
