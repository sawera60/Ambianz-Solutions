import React from 'react';
import { Link } from 'react-router-dom';
import { FiMaximize2, FiCpu, FiShield, FiArrowRight } from 'react-icons/fi';

// Image Imports
import heroImg from '../../images/bespokedoor.png';
import texture1 from '../../images/cabonizedoak.png';
import texture2 from '../../images/handrubbedbrass.png';
import texture3 from '../../images/flutedglass.png';
import typo1 from '../../images/grandpivotentrance.png';
import typo2 from '../../images/minimalsliding.png';
import typo3 from '../../images/industrial bifold.png';
import typo4 from '../../images/lacquered.png';
import techImg from '../../images/hiddenhinges.png';
import precisionImg from '../../images/invisibleprecision.png';
import ctaBg from '../../images/interior3.jpg';

const DoorDetail = () => {
    return (
        <div className="bg-[#F8F6F1] min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden">
                <img
                    src={heroImg}
                    alt="Bespoke Entrance Door"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase mb-4">
                        Statement Collection
                    </p>
                    <h1 className="font-cinzel text-white text-[clamp(42px,6vw,84px)] font-bold leading-tight mb-8">
                        The Architecture <br /> <i>of Entry</i>
                    </h1>
                    <p className="font-raleway text-white/80 text-[14px] max-w-lg mb-10 leading-relaxed">
                        A threshold is more than a transition. It is the definitive first note of your sanctuary's architectural symphony.
                    </p>
                    <button className="bg-[#3c5a25] text-white px-12 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                        Design Your Entrance
                    </button>
                </div>
            </section>

            {/* 2. MATERIALITY & SENSES */}
            <section className="max-w-[1200px] mx-auto py-24 px-8 text-center space-y-12">
                <div className="space-y-4 max-w-2xl mx-auto">
                    <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                        Materiality & Senses
                    </h2>
                    <p className="font-raleway text-gray-500 text-[14px] leading-relaxed">
                        The tactile dialogue between form and function. We select materials that age with grace and respond to the human touch.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { img: texture1, title: 'Carbonized Oak', desc: 'Deep-charred textures for a raw yet sophisticated architectural edge.' },
                        { img: texture2, title: 'Hand-Rubbed Brass', desc: 'A living finish that evolves alongside the character of the home.' },
                        { img: texture3, title: 'Fluted Glass', desc: 'The interplay of light and privacy through precision-milled silhouettes.' }
                    ].map((item, i) => (
                        <div key={i} className="space-y-6 group">
                            <div className="aspect-[4/5] overflow-hidden shadow-lg">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-cinzel text-[14px] font-bold text-[#1A1C19] uppercase tracking-widest">{item.title}</h4>
                                <p className="font-raleway text-[11px] text-gray-400 leading-relaxed max-w-[250px] mx-auto">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. BESPOKE TYPOLOGIES */}
            <section className="bg-white py-24 border-y border-[#e0ddd7]">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <div className="space-y-4">
                            <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                                THE CURATED ARCHIVE
                            </p>
                            <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                                Bespoke Typologies
                            </h2>
                        </div>
                        <p className="font-raleway text-gray-400 text-[12px] leading-relaxed max-w-sm">
                            From oversized pivot entrances to industrial bi-folds, we engineer movement that complements architectural intent.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* The Grand Pivot */}
                        <div className="md:col-span-8 relative group overflow-hidden h-[500px]">
                            <img src={typo1} alt="Grand Pivot Door" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                                <p className="font-raleway text-white/60 text-[9px] tracking-[3px] uppercase mb-1">Oversize Composition</p>
                                <h3 className="font-cinzel text-white text-2xl font-bold">The Grand Pivot</h3>
                            </div>
                        </div>

                        {/* Minimalist Glass */}
                        <div className="md:col-span-4 h-[500px] relative group overflow-hidden">
                            <img src={typo2} alt="Glass Door" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <p className="font-raleway text-white/60 text-[9px] tracking-[3px] uppercase mb-1">Light & Transparency</p>
                                <h3 className="font-cinzel text-white text-xl font-bold font-raleway uppercase">Minimalist Glass</h3>
                            </div>
                        </div>

                        {/* Industrial Bifold */}
                        <div className="md:col-span-4 h-[500px] relative group overflow-hidden">
                            <img src={typo3} alt="Industrial Door" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <p className="font-raleway text-white/60 text-[9px] tracking-[3px] uppercase mb-1">Precision & Utility</p>
                                <h3 className="font-cinzel text-white text-xl font-bold font-raleway uppercase font-bold">Industrial Bifold</h3>
                            </div>
                        </div>

                        {/* Lacquered Indigo */}
                        <div className="md:col-span-8 h-[500px] relative group overflow-hidden">
                            <img src={typo4} alt="Lacquered Door" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                                <p className="font-raleway text-white/60 text-[9px] tracking-[3px] uppercase mb-1">Artful & Statement</p>
                                <h3 className="font-cinzel text-white text-2xl font-bold">Lacquered Indigo</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. INVISIBLE PRECISION */}
            <section className="bg-white py-32 border-y border-[#e0ddd7] overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 space-y-12">
                        <div className="space-y-6">
                            <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                                THE SCIENCE OF SILENCE
                            </p>
                            <h2 className="font-cinzel text-[48px] font-bold text-[#1A1C19] leading-tight">
                                Invisible <br /> Precision
                            </h2>
                            <p className="font-raleway text-gray-500 text-[15px] leading-relaxed max-w-sm">
                                Engineering perfectly fluid movement requires precision you can't see, but sense every time.
                            </p>
                        </div>

                        <div className="space-y-10">
                            {[
                                { title: 'Acoustic Sealing', desc: 'Multi-layered, hermetic systems that transform your room into a vacuum-still sanctuary.', Icon: FiShield },
                                { title: 'Hidden Hinges', desc: 'Stainless, engineered adjustable hinges that frame the door with surgical alignment.', Icon: FiMaximize2 },
                                { title: 'Smart Integration', desc: 'Biometric and remote-access systems seamlessly integrated into the hardware essence.', Icon: FiCpu }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <feature.Icon className="text-[#3c5a25] text-3xl shrink-0 mt-1 opacity-60 group-hover:opacity-100 transition-opacity" />
                                    <div className="space-y-2">
                                        <h4 className="font-cinzel text-[16px] font-bold text-[#1A1C19] uppercase tracking-widest">{feature.title}</h4>
                                        <p className="font-raleway text-gray-400 text-[12px] leading-relaxed max-w-xs">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        {/* Overlapping images as per detailed services style */}
                        <div className="h-[600px] w-full relative">
                            <img src={precisionImg} alt="Invisible Precision Engineering" className="w-full h-full object-cover shadow-2xl" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 border-4 border-[#3c5a25] -z-10 hidden md:block" />
                    </div>
                </div>
            </section>

            {/* 5. THE CREATIVE JOURNEY */}
            <section className="py-24 max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-20 space-y-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                        The Process
                    </p>
                    <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19]">
                        The Creative Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {[
                        { num: '01', title: 'Architectural Consultation', desc: 'We align with your designers to understand the spatial flow and requirements.' },
                        { num: '02', title: 'Material Curation', desc: 'Choosing woods, metals, and glass that harmonize with your interior vision.' },
                        { num: '03', title: 'Bespoke Engineering', desc: 'Our craftmen build each unit to exact tolerance using premium hardware.' },
                        { num: '04', title: 'Installation Perfection', desc: 'The final alignment by our specialized team to ensure a flawless threshold.' }
                    ].map((step, i) => (
                        <div key={i} className="space-y-6 relative">
                            <span className="font-cinzel text-[42px] font-bold text-[#adb940] opacity-20 block">{step.num}</span>
                            <div className="space-y-3">
                                <h4 className="font-cinzel text-[14px] font-bold text-[#1A1C19] uppercase tracking-wider">{step.title}</h4>
                                <p className="font-raleway text-gray-400 text-[11px] leading-relaxed">{step.desc}</p>
                            </div>
                            {i < 3 && <div className="hidden md:block absolute top-[40px] -right-6 w-12 h-[1px] bg-[#e0ddd7]" />}
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. FINAL CTA BANNER */}
            <section className="relative py-32 overflow-hidden mx-8 mb-24 flex items-center justify-center">
                <img src={ctaBg} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#3c5a25]/90" />
                <div className="relative text-center text-white space-y-10 px-4">
                    <h2 className="font-cinzel text-[42px] md:text-[54px] font-bold leading-tight max-w-4xl mx-auto">
                        Secure your legacy with a threshold that <i>speaks volumes</i>.
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-white text-[#3c5a25] px-12 py-5 font-raleway text-[11px] font-bold tracking-[3px] uppercase hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-2xl">
                            Book a Private Showing
                        </button>
                    </div>
                    <button className="font-raleway text-[11px] tracking-[4px] uppercase border-b border-white/40 pb-1 hover:border-white transition-all">
                        Experience the collection
                    </button>
                </div>
            </section>

        </div>
    );
};

export default DoorDetail;
