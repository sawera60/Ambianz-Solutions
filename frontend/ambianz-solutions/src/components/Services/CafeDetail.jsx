import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiWind, FiLayers, FiCoffee, FiArrowRight } from 'react-icons/fi';

// Image Imports
import heroImg from '../../images/cafeA.jpg';
import sensoryImg from '../../images/cafeB.jpg';
import project1 from '../../images/interior1.jpg';
import project2 from '../../images/interior2.jpg';
import project3 from '../../images/interior3.jpg';
import texture1 from '../../images/cabonizedoak.png';
import texture2 from '../../images/handrubbedbrass.png';
import texture3 from '../../images/flutedglass.png';
import texture4 from '../../images/table.jpg';
import ctaBg from '../../images/interior5.jpg';

const CafeDetail = () => {
    return (
        <div className="bg-[#F8F6F1] min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden">
                <img
                    src={heroImg}
                    alt="Luxury Cafe Fit-out"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase mb-4">
                        COMMERCIAL PROJECTS
                    </p>
                    <h1 className="font-cinzel text-white text-[clamp(42px,6vw,84px)] font-bold leading-tight mb-8">
                        Cafe & <br /> Roastery <i>Fit-outs</i>
                    </h1>
                    <p className="font-raleway text-white/80 text-[14px] max-w-lg mb-10 leading-relaxed italic">
                        "Engineering sensory environments where artisanal coffee culture meets architectural precision. The design contributes to the perfect shot."
                    </p>
                    <button className="bg-[#3c5a25] text-white px-12 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                        Request Portfolio
                    </button>
                </div>
            </section>

            {/* 2. SENSORY ARCHITECTURE */}
            <section className="max-w-[1200px] mx-auto py-32 px-8 flex flex-col md:flex-row gap-20 items-center">
                <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                            ATMOSPHERICS
                        </p>
                        <h2 className="font-cinzel text-[42px] font-bold text-[#1A1C19] leading-tight">
                            The Sensory <br /> Architecture
                        </h2>
                    </div>
                    <p className="font-raleway text-gray-500 text-[15px] leading-relaxed">
                        Beyond aesthetics, we manipulate the intangible. Our fit-outs master the atmospheric performances of light, acoustics, and tactile materiality that define the guest's lingering memory.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
                        <div className="space-y-3">
                            <h4 className="font-cinzel text-[13px] font-bold text-[#1A1C19] uppercase tracking-wider">Lighting Control</h4>
                            <p className="font-raleway text-[12px] text-gray-400 leading-relaxed">
                                Dynamic light management that transitions with the sun, enhancing the beans' natural hue.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h4 className="font-cinzel text-[13px] font-bold text-[#1A1C19] uppercase tracking-wider">Acoustic Balance</h4>
                            <p className="font-raleway text-[12px] text-gray-400 leading-relaxed">
                                Intelligent sound dampening for intimate coffee rituals and focused roasting sessions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="h-[550px] w-full overflow-hidden shadow-2xl relative">
                        <img src={sensoryImg} alt="Sensory detail" className="w-full h-full object-cover" />
                        <div className="absolute bottom-6 right-6 bg-white p-6 shadow-xl max-w-[200px] hidden md:block">
                            <p className="font-raleway text-[10px] text-gray-400 italic">"The space should feel like the first sip — concentrated and pure."</p>
                        </div>
                    </div>
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#adb940]/10 -z-10 rounded-full" />
                </div>
            </section>

            {/* 3. CURATED HOSPITALITY */}
            <section className="bg-white py-24 border-y border-[#e0ddd7]">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
                        <h2 className="font-cinzel text-[42px] font-bold text-[#1A1C19]">
                            Curated Hospitality
                        </h2>
                        <Link to="/portfolio" className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold border-b border-[#adb940] pb-1">
                            GLOBAL PORTFOLIO ARCHIVE
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { img: heroImg, title: 'The Obsidian Roastery', location: 'LEEDS, UK', tag: 'BRUTALIST & BOLD' },
                            { img: sensoryImg, title: "L'Aube Boutique", location: 'PARIS, FRANCE', tag: 'MINIMALIST & SOFT' },
                            { img: texture4, title: 'Urban Ritual', location: 'DUBAI, UAE', tag: 'INDUSTRIAL & REFINED' }
                        ].map((project, i) => (
                            <div key={i} className="space-y-6 group cursor-pointer">
                                <div className="h-[450px] overflow-hidden transition-all duration-700">
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="space-y-2">
                                    <p className="font-raleway text-[#adb940] text-[9px] tracking-[2px] uppercase">{project.location}</p>
                                    <h4 className="font-cinzel text-[18px] font-bold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">{project.title}</h4>
                                    <p className="font-raleway text-gray-400 text-[10px] tracking-[3px] uppercase">{project.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. MASTERY OF THE TACTILE DETAILS */}
            <section className="bg-[#1A1C19] py-32 text-white overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 grid grid-cols-2 gap-4 h-[500px]">
                        <div className="space-y-4">
                            <div className="h-1/2 overflow-hidden"><img src={texture1} className="w-full h-full object-cover" alt="" /></div>
                            <div className="h-1/2 overflow-hidden"><img src={texture2} className="w-full h-full object-cover" alt="" /></div>
                        </div>
                        <div className="space-y-4 pt-12">
                            <div className="h-[65%] overflow-hidden"><img src={texture4} className="w-full h-full object-cover" alt="" /></div>
                            <div className="h-[30%] overflow-hidden"><img src={texture3} className="w-full h-full object-cover" alt="" /></div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-12">
                        <div className="space-y-4">
                            <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                                TECHNICAL PRECISION
                            </p>
                            <h2 className="font-cinzel text-[42px] font-bold leading-tight">
                                Mastery of the <br /> <i>Tactile Details</i>
                            </h2>
                        </div>

                        <div className="space-y-10">
                            {[
                                { num: '01', title: 'Artisan Countertops', desc: 'Seamless, heat-resistant surfaces engineered for heavy commercial espresso services.' },
                                { num: '02', title: 'Bespoke Millwork', desc: 'Hand-crafted cabinetry tailored for the ergonomics of specialty brewing.' },
                                { num: '03', title: 'Spatial Rhythm', desc: 'Flow-driven architecture that balances staff work-flow with guest sanctuary.' }
                            ].map((feature, i) => (
                                <div key={i} className="flex gap-6 group border-b border-white/10 pb-8">
                                    <span className="font-cinzel text-[#adb940] text-xl opacity-60">{feature.num}</span>
                                    <div className="space-y-2">
                                        <h4 className="font-cinzel text-[15px] font-bold uppercase tracking-widest">{feature.title}</h4>
                                        <p className="font-raleway text-white/40 text-[12px] leading-relaxed max-w-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. THE BESPOKE JOURNEY */}
            <section className="py-24 max-w-[1200px] mx-auto px-8">
                <div className="text-center mb-20 space-y-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase font-bold">
                        Phase Sequence
                    </p>
                    <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19]">
                        The Bespoke Journey
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { title: 'Discovery', desc: 'Understanding your coffee brand identity and target guest demographic.' },
                        { title: 'Blueprint', desc: 'Conceptualizing the workflow and aesthetic choreography of the space.' },
                        { title: 'Craft', desc: 'On-site execution using artisanal materials and precision industrial engineering.' },
                        { title: 'Handover', desc: 'The final tuning of acoustics and lighting for opening-day perfection.' }
                    ].map((step, i) => (
                        <div key={i} className="bg-gray-50 p-10 space-y-4 border border-transparent hover:border-[#adb940] transition-colors">
                            <span className="font-cinzel text-[32px] font-bold text-[#adb940]/20 block">0{i + 1}</span>
                            <h4 className="font-cinzel text-[16px] font-bold text-[#1A1C19] uppercase tracking-wider">{step.title}</h4>
                            <p className="font-raleway text-gray-400 text-[11px] leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 6. FINAL CTA BANNER */}
            <section className="bg-[#1A1C19] py-32 text-center space-y-12 px-4 shadow-2xl relative overflow-hidden">
                <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                <div className="relative space-y-10">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase">ADJACENT</p>
                    <h2 className="font-cinzel text-white text-[38px] md:text-[54px] font-bold leading-tight max-w-4xl mx-auto">
                        Defining your commercial legacy <br /> <i>begins here.</i>
                    </h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-[#3c5a25] text-white px-10 py-5 font-raleway text-[11px] font-bold tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300 shadow-2xl">
                            Request a Prospectus
                        </button>
                        <button className="bg-transparent border border-white/20 text-white px-10 py-5 font-raleway text-[11px] font-bold tracking-[3px] uppercase hover:bg-white/10 transition-all">
                            Book a Consultant
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default CafeDetail;
