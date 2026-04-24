import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiTag, FiLayers, FiArrowRight, FiMaximize2, FiCpu } from 'react-icons/fi';

// Image Imports
import heroImg from '../../images/wardrobe.png';
import couturierImg from '../../images/closet.jpg';
import sub1 from '../../images/integratedluminescene.png';
import sub2 from '../../images/materialntegrity.png';
import sub3 from '../../images/handle.png';
import detail1 from '../../images/cabinetry.png';
import detail2 from '../../images/hiddenstorage.png';
import style1 from '../../images/grandwalkin.png';
import style2 from '../../images/modernwalltowall.png';
import style3 from '../../images/atliersuite.png';
import style4 from '../../images/3d-wardrobe/wardrobe2.jpg';
import style5 from '../../images/interior4.jpg'; // Using high-end interiors for extra styles
import style6 from '../../images/interior7.jpg';

const WardrobeDetail = () => {
    return (
        <div className="bg-[#F8F6F1] min-h-screen">
            
            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden">
                <img 
                    src={heroImg} 
                    alt="Luxury Bespoke Wardrobe" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase mb-4">
                        Bespoke Collection
                    </p>
                    <h1 className="font-cinzel text-white text-[clamp(32px,6vw,72px)] font-bold leading-tight mb-8">
                        The Personal <br /> Sanctuary
                    </h1>
                    <p className="font-raleway text-white/80 text-[14px] max-w-lg mb-10 leading-relaxed">
                        A master suite is incomplete without a space dedicated to the ritual of dressing. Experience the convergence of architectural precision and tactile luxury.
                    </p>
                    <div className="flex gap-6">
                        <button className="bg-[#3c5a25] text-white px-10 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                            Book Consultant
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. COUTURE MINDSET SECTION */}
            <section className="max-w-[1200px] mx-auto py-24 px-8 flex flex-col md:flex-row gap-20 items-center">
                <div className="flex-1 relative">
                    <div className="h-[600px] w-full overflow-hidden shadow-2xl">
                        <img src={couturierImg} alt="Couture Storage" className="w-full h-full object-cover" />
                    </div>
                    {/* Decorative element from screenshot - smaller box */}
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#e0ddd7]/20 -z-10 hidden md:block" />
                </div>
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                            Curated Stewardship
                        </p>
                        <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                            Tailored for the <br /> <i>Couture Mindset</i>
                        </h2>
                    </div>
                    <p className="font-raleway text-gray-500 text-[14px] leading-relaxed">
                        Beyond simple storage, we design environments that celebrate your collection. Every accessory, timepiece, and garment is given its own stage through intelligent spatial planning.
                    </p>
                    <p className="font-raleway text-gray-500 text-[14px] leading-relaxed">
                        From climate-controlled shoe galleries to biometric secure jewelry vaults, our systems are engineered to protect and present your most valued possessions with surgical precision.
                    </p>
                    <div className="grid grid-cols-2 gap-10 pt-6">
                        <div>
                            <h4 className="font-cinzel text-[13px] font-bold text-[#1A1C19] uppercase tracking-wider mb-2">Watch Suites</h4>
                            <p className="font-raleway text-[11px] text-gray-400 leading-relaxed">
                                Integrated winders and micro-fine lining for horological excellence.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-cinzel text-[13px] font-bold text-[#1A1C19] uppercase tracking-wider mb-2">Couture Rails</h4>
                            <p className="font-raleway text-[11px] text-gray-400 leading-relaxed">
                                Custom heights for evening gowns and bespoke tailoring.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CRAFTED DETAILS GRID */}
            <section className="bg-white py-24 border-y border-[#e0ddd7]">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="text-center mb-20 space-y-4">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                            The Ambianz Standard
                        </p>
                        <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19]">
                            Crafted Details
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto">
                        {/* Integrated Luminescence */}
                        <div className="md:col-span-8 relative group overflow-hidden h-[400px]">
                            <img src={sub1} alt="Bespoke Lighting" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-10">
                                <h3 className="font-cinzel text-white text-2xl font-bold mb-2">Integrated Luminescence</h3>
                                <p className="font-raleway text-white/70 text-[12px] max-w-xs">Shadowless lighting that mimics natural daylight to protect color integrity.</p>
                            </div>
                        </div>

                        {/* Visual sidebar element but not the nav - just a vertical image */}
                        <div className="md:col-span-4 h-[750px] row-span-2 hidden md:block">
                            <div className="h-full w-full overflow-hidden bg-gray-50 border border-[#e0ddd7]">
                                <img src={sub3} alt="Material detail" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Material Integrity */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <div className="h-[220px] overflow-hidden border border-[#e0ddd7]">
                                <img src={sub2} alt="Joinery detail" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-[#adb940]" />
                                    <h4 className="font-cinzel text-[16px] font-bold text-[#1A1C19]">Material Integrity</h4>
                                </div>
                                <p className="font-raleway text-gray-500 text-[12px] leading-relaxed">
                                    We source only the finest sustainable hardwoods and precision-grade hardware to ensure millimeter-perfect movement.
                                </p>
                            </div>
                        </div>

                        {/* Tactile Luxury (Mobile/Tablet view placeholder if needed, otherwise flows) */}
                        <div className="md:col-span-4 flex flex-col justify-end pb-10">
                             <div className="bg-[#F8F6F1] p-8 border border-[#e0ddd7] space-y-4 relative">
                                <span className="absolute -top-4 left-8 bg-[#3c5a25] text-white font-cinzel text-[10px] px-4 py-1 italic">Bespoke</span>
                                <h4 className="font-cinzel text-[16px] font-bold text-[#1A1C19]">Tactile Luxury</h4>
                                <p className="font-raleway text-gray-500 text-[12px] leading-relaxed">
                                    Italian leather-lined drawers and soft-velvet padding for a sensory experience at every touch.
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WARDROBE STYLES SECTION */}
            <section className="max-w-[1200px] mx-auto py-24 px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="space-y-4">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                            THE AESTHETIC DIRECTIONS
                        </p>
                        <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                            Wardrobe Styles
                        </h2>
                    </div>
                    <p className="font-raleway text-gray-400 text-[12px] leading-relaxed max-w-sm">
                        From architectural wall-to-wall systems to expansive dressing suites, we define the lines around your lifestyle.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        { img: style1, title: 'The Grand Walk-In', tag: 'HERITAGE & OPULENCE' },
                        { img: style2, title: 'Modern Wall-To-Wall', tag: 'PRECISION & STEALTH' },
                        { img: style3, title: 'The Atelier Suite', tag: 'DUO-TONED & EDITORIAL' },
                        { img: style4, title: 'Sliding Elegance', tag: 'MINIMAL & EFFICIENT' },
                        { img: style5, title: 'The Mirrored Gallery', tag: 'LIGHT & LUXURY' },
                        { img: style6, title: 'Open Dressing Room', tag: 'EDITORIAL & ACCESSIBLE' }
                    ].map((style, i) => (
                        <div key={i} className="space-y-6 group cursor-pointer">
                            <div className="h-[450px] overflow-hidden relative">
                                <img src={style.img} alt={style.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="font-cinzel text-[18px] font-bold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors uppercase tracking-tight">
                                    {style.title}
                                </h4>
                                <p className="font-raleway text-[9px] tracking-[3px] text-gray-400 font-bold uppercase">
                                    {style.tag}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default WardrobeDetail;
