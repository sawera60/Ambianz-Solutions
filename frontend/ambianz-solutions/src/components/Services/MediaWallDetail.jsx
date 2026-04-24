import React from 'react';
import { Link } from 'react-router-dom';
import { FiVolume2, FiCpu, FiMaximize, FiArrowRight } from 'react-icons/fi';

// Image Imports
import heroImg from '../../images/mediawall.jpg';
import sub1 from '../../images/bespokemediawall.png';
import sub2 from '../../images/mediawall1.png';
import invisibleAudio from '../../images/invisibleaudio.png';
import techControl from '../../images/intelligentcontrol.png';
import portfolioMedia2 from '../../images/displaymediawall.png';
import portfolioMedia1 from '../../images/3d-mediawall/mediawall2.jpg';
import portfolioMedia3 from '../../images/bespokemediawall.png';
import portfolioMedia4 from '../../images/mediawall.jpg';
import hiddenStorage from '../../images/hiddenstorage.png';
import ledConsole from '../../images/ledconsole.png';
import cabinetry from '../../images/cabinetry.png';
import pentsuite from '../../images/pentsuite.png';
import modernmanor from '../../images/modernmanor.png';
import brutalistloft from '../../images/brutalistloft.png';
import azurevila from '../../images/azurevila.png';
import ctaBg from '../../images/interior5.jpg';

const MediaWallDetail = () => {
    return (
        <div className="bg-[#F8F6F1] min-h-screen">
            
            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden">
                <img 
                    src={heroImg} 
                    alt="Luxury Media Wall Design" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase mb-4">
                        Bespoke Entertainment
                    </p>
                    <h1 className="font-cinzel text-white text-[clamp(32px,6vw,72px)] font-bold leading-tight mb-8">
                        Cinematic <br /> Architecture
                    </h1>
                    <div className="flex gap-6">
                        <button className="bg-[#3c5a25] text-white px-10 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                            Start Project
                        </button>
                        <button className="border border-white/30 text-white px-10 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300 backdrop-blur-sm">
                            View Collection
                        </button>
                    </div>
                </div>
            </section>

            {/* 2. HIDDEN TECHNOLOGY SECTION */}
            <section className="max-w-[1200px] mx-auto py-24 px-8">
                <div className="flex flex-col md:flex-row gap-16 items-start mb-20">
                    <div className="flex-1 space-y-6">
                        <div className="space-y-4">
                            <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                                01 — Innovation
                            </p>
                            <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                                Hidden Technology
                            </h2>
                            <div className="w-12 h-[1px] bg-[#adb940]" />
                        </div>
                        <p className="font-raleway text-gray-500 text-[14px] leading-relaxed max-w-sm">
                            The true mark of luxury is discretion. Our media walls feature motorized millwork and acoustic fabrics that allow speakers and screens to remain completely invisible when not in use.
                        </p>
                    </div>
                    <div className="flex-1 grid grid-cols-3 gap-8 items-center pt-10">
                        {[
                            { Icon: FiMaximize, label: 'Seamless Panels' },
                            { Icon: FiVolume2, label: 'Acoustic Integration' },
                            { Icon: FiCpu, label: 'Smart Automation' }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-4">
                                <item.Icon className="text-[#3c5a25] text-2xl" />
                                <span className="font-raleway text-[9px] tracking-[2px] uppercase text-gray-400 font-bold leading-tight">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { img: sub1, title: 'Motorized Panels', desc: 'Custom engineered sliding mechanisms for effortless concealment.' },
                        { img: invisibleAudio, title: 'Invisible Audio', desc: 'Studio-grade sound that emerges through acoustically transparent materials.' },
                        { img: techControl, title: 'Intelligent Control', desc: 'Seamless integration with home automation for ultimate control.' }
                    ].map((card, i) => (
                        <div key={i} className="relative h-[480px] group overflow-hidden border border-[#e0ddd7]">
                            <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <h4 className="font-cinzel text-white text-[18px] font-bold mb-2">
                                    {card.title}
                                </h4>
                                <p className="font-raleway text-white/60 text-[11px] leading-relaxed max-w-[240px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. TAILORED ENVIRONMENTS */}
            <section className="bg-white py-24 border-y border-[#e0ddd7]">
                <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 relative">
                        <div className="h-[500px] w-full overflow-hidden">
                            <img src={sub2} alt="Bespoke Finish" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#3c5a25] p-8 flex flex-col justify-end text-white hidden md:flex">
                            <p className="font-raleway text-[9px] tracking-[3px] uppercase mb-2 opacity-60">Materials</p>
                            <h3 className="font-cinzel text-xl font-bold leading-tight">Where Sound Meets Stone</h3>
                        </div>
                    </div>
                    <div className="flex-1 space-y-10">
                        <div className="space-y-4">
                            <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                                02 — Bespoke
                            </p>
                            <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                                Tailored Environments
                            </h2>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h4 className="font-raleway text-[10px] tracking-[3px] uppercase text-gray-400 font-bold mb-3">Acoustic Textures</h4>
                                <p className="font-raleway text-[13px] text-gray-500 leading-relaxed max-w-sm">
                                    From fabric-wrapped panels to micro-perforated wood, every surface is chosen to enhance the cinematic experience without compromising on aesthetic.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-raleway text-[10px] tracking-[3px] uppercase text-gray-400 font-bold mb-3">Noble Materials</h4>
                                <p className="font-raleway text-[13px] text-gray-500 leading-relaxed max-w-sm">
                                    Selection of the finest marbles, textured leathers, and sustainably sourced hardwoods curated to match your existing architectural language.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center gap-3 group">
                            <span className="font-raleway text-[10px] tracking-[3px] uppercase font-bold text-[#1A1C19]">Explore Collections</span>
                            <FiArrowRight className="text-[#adb940] group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 4. THE PORTFOLIO */}
            <section className="max-w-[1200px] mx-auto py-24 px-8">
                <div className="flex justify-between items-baseline mb-16">
                    <div className="space-y-2">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                            Case Studies
                        </p>
                        <h2 className="font-cinzel text-[32px] font-bold text-[#1A1C19]">
                            The Portfolio
                        </h2>
                    </div>
                    <p className="font-raleway text-[10px] tracking-[2px] text-gray-400 uppercase max-w-[240px] text-right hidden sm:block">
                        A collection of bespoke media installations across London's most prestigious residences.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        { img: portfolioMedia1, title: 'The Kensington Cinema', tag: 'Full Home Theatre / Silk Panels', year: '2023' },
                        { img: portfolioMedia2, title: 'Chelsea Waterfront', tag: 'Double-sided Media Installation / Living & Dining Area', year: '2024' },
                        { img: portfolioMedia3, title: 'Hampstead Residence', tag: 'Limestone feature wall with hidden surround sound', year: '2023' },
                        { img: portfolioMedia4, title: 'Knightbridge Suite', tag: 'Minimalist integrated console with automated lift', year: '2024' }
                    ].map((project, i) => (
                        <div key={i} className="space-y-5">
                            <div className="relative h-[400px] group overflow-hidden">
                                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                    <h4 className="font-cinzel text-[#1A1C19] text-[18px] font-bold">
                                        {project.title}
                                    </h4>
                                    <p className="font-raleway text-gray-400 text-[11px] tracking-wide">
                                        {project.tag}
                                    </p>
                                </div>
                                <span className="font-raleway text-[11px] text-gray-300 font-bold">{project.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CTA BANNER */}
            <section className="relative py-32 overflow-hidden">
                <img src={ctaBg} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#3c5a25]/90" />
                <div className="relative text-center text-white space-y-8 px-4">
                    <h2 className="font-cinzel text-[42px] font-bold">
                        Start Your Cinematic Vision
                    </h2>
                    <p className="font-raleway text-white/70 text-[14px] max-w-xl mx-auto leading-relaxed">
                        Book a private consultation at our showroom and design the creation of your bespoke media wall.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-[#3c5a25] px-12 py-4 font-raleway text-[11px] font-bold tracking-[3px] uppercase hover:bg-[#adb940] hover:text-white transition-all duration-300 shadow-xl">
                            Consult with us
                        </button>
                        <button className="border-2 border-white text-white px-12 py-4 font-raleway text-[11px] font-bold tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                            View Portfolio
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default MediaWallDetail;
