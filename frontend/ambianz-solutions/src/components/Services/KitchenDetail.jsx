import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

// Image Imports
import heroImg from '../../images/kitchendesign.jpg';
import sub1 from '../../images/subkitchen1.png';
import sub2 from '../../images/subkitchen2.png';
import sub3 from '../../images/subkitchen3.png';
import hiddenStorage from '../../images/hiddenstorage.png';
import stove from '../../images/stove.png';
import cabinetry from '../../images/cabinetry.png';
import pentsuite from '../../images/pentsuite.png';
import modernmanor from '../../images/modernmanor.png';
import brutalistloft from '../../images/brutalistloft.png';
import azurevila from '../../images/azurevila.png';
import ctaBg from '../../images/interior3.jpg';

const KitchenDetail = () => {
    return (
        <div className="bg-[#F8F6F1] min-h-screen">
            
            {/* 1. HERO SECTION */}
            <section className="relative h-[85vh] overflow-hidden">
                <img 
                    src={heroImg} 
                    alt="Luxury Kitchen Design" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                    <p className="font-raleway text-[#adb940] text-[10px] tracking-[6px] uppercase mb-4">
                        The Art of Culinary Living
                    </p>
                    <h1 className="font-cinzel text-white text-[clamp(32px,6vw,72px)] font-bold leading-tight mb-8">
                        The Epicenter of <br /> the Home
                    </h1>
                    <button className="bg-[#3c5a25] text-white px-10 py-4 font-raleway text-[11px] tracking-[3px] uppercase hover:bg-white hover:text-[#3c5a25] transition-all duration-300">
                        Consult with us
                    </button>
                </div>
            </section>

            {/* 2. MATERIALITY & TEXTURE */}
            <section className="max-w-[1200px] mx-auto py-24 px-8 flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 space-y-8">
                    <div className="space-y-4">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                            01 — Essence
                        </p>
                        <h2 className="font-cinzel text-[38px] font-bold text-[#1A1C19] leading-tight">
                            Materiality & <br /> Texture
                        </h2>
                        <div className="w-12 h-[1px] bg-[#adb940]" />
                    </div>
                    <p className="font-raleway text-gray-500 text-[14px] leading-relaxed max-w-sm">
                        Our kitchens are defined by the tactile and the visual. Intelligent quartz work surfaces, hand-finished lacquer, and the structural beauty of solid marble integral to our design philosophy.
                    </p>
                    <div className="space-y-6 pt-4">
                        {[
                            { title: 'Calacatta Marble', desc: 'Deep veining, high-contrast fissures found in the finest Carrara quarries.' },
                            { title: 'Hand-Finished Oak', desc: 'Precision cut and hand-sanded to perfection, showing essence of every knot.' },
                            { title: 'Textured Mist', desc: 'Deep black velvet textures that reflect a raw yet sophisticated architectural edge.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="font-cinzel text-[#adb940] text-sm">0{i+1}</span>
                                <div>
                                    <h4 className="font-cinzel text-[13px] font-bold text-[#1A1C19] uppercase tracking-wider mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="font-raleway text-[11px] text-gray-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-4 h-[500px]">
                    <div className="col-span-2 h-[240px] overflow-hidden">
                        <img src={sub1} alt="Marble Texture" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="h-[240px] overflow-hidden">
                        <img src={sub2} alt="Kitchen Detail" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="h-[240px] overflow-hidden">
                        <img src={sub3} alt="Wood Texture" className="w-full h-full object-cover hover:scale-105 transition-all duration-500" />
                    </div>
                </div>
            </section>

            {/* 3. PRECISION ENGINEERING */}
            <section className="bg-white py-24 border-y border-[#e0ddd7]">
                <div className="max-w-[1200px] mx-auto px-8">
                    <div className="text-center space-y-4 mb-20">
                        <h2 className="font-cinzel text-[32px] font-bold text-[#1A1C19] uppercase tracking-[4px]">
                            Precision Engineering
                        </h2>
                        <div className="w-16 h-[1px] bg-[#adb940] mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { img: hiddenStorage, title: 'Hidden Storage', desc: 'Whisper-quiet mechanisms that reveal complex organisational systems beneath sleek surfaces.' },
                            { img: stove, title: 'Smart Integration', desc: 'State of the art appliances seamlessly integrated for an elegant, streamlined lifestyle.' },
                            { img: cabinetry, title: 'Seamless Cabinetry', desc: 'Millimeter-perfect joints that translate into effortless silhouettes.' }
                        ].map((feature, i) => (
                            <div key={i} className="space-y-6 group">
                                <div className="h-[280px] overflow-hidden border border-[#e0ddd7]">
                                    <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-cinzel text-[16px] font-bold text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
                                        {feature.title}
                                    </h4>
                                    <p className="font-raleway text-[12px] text-gray-500 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE KITCHEN PORTFOLIO */}
            <section className="max-w-[1200px] mx-auto py-24 px-8">
                <div className="flex justify-between items-baseline mb-16">
                    <div className="space-y-2">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                            Showcase
                        </p>
                        <h2 className="font-cinzel text-[32px] font-bold text-[#1A1C19]">
                            The Kitchen Portfolio
                        </h2>
                    </div>
                    <Link to="/portfolio" className="font-raleway text-[10px] tracking-[2px] text-[#3c5a25] uppercase border-b border-[#3c5a25] pb-1 font-semibold">
                        View All Projects
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        { img: pentsuite, title: 'The Penthouse Suite', tag: 'High-Gloss / Modern' },
                        { img: modernmanor, title: 'The Modern Manor', tag: 'Traditional / Grand' },
                        { img: brutalistloft, title: 'The Brooklyn Loft', tag: 'Industrial / Wood' },
                        { img: azurevila, title: 'The Azure Villa', tag: 'Mediterranean / Light' }
                    ].map((project, i) => (
                        <div key={i} className="relative h-[400px] group overflow-hidden">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                                <p className="font-raleway text-white/60 text-[9px] tracking-[3px] uppercase mb-1">
                                    {project.tag}
                                </p>
                                <h4 className="font-cinzel text-white text-[18px] font-bold">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. THE JOURNEY (Process) */}
            <section className="py-24">
                <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row gap-16">
                    <div className="flex-1 space-y-6">
                        <p className="font-raleway text-[#adb940] text-[10px] tracking-[4px] uppercase">
                            Process
                        </p>
                        <h2 className="font-cinzel text-[42px] font-bold leading-tight text-[#1A1C19]">
                            The Journey
                        </h2>
                        <div className="w-12 h-[1px] bg-[#adb940]" />
                        <p className="font-raleway text-gray-500 text-[13px] leading-relaxed max-w-sm">
                            Transforming a vision into reality requires transparency and precision at every turn. Built on expertise, refined with craftsmanship.
                        </p>
                    </div>
                    <div className="flex-[1.5] space-y-12">
                        {[
                            { num: 'I', title: 'Consultation', desc: 'Work directly with our lead designers to define the aesthetic, function and architectural requirements.' },
                            { num: 'II', title: 'Conceptual Design', desc: 'Visualise your space with 3D models and material boards to reflect the final vision exactly.' },
                            { num: 'III', title: 'Engineering & Fabrication', desc: 'Our craftmen build each component to exact specification using premium sustainable materials.' },
                            { num: 'IV', title: 'Installation', desc: 'Refined finish and final integration by our dedicated installation team to ensure flawless execution.' }
                        ].map((step, i) => (
                            <div key={i} className="flex gap-8 group">
                                <span className="font-cinzel text-[#adb940] text-xl font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                                    Phase {step.num}
                                </span>
                                <div className="space-y-2">
                                    <h4 className="font-cinzel text-[16px] font-bold tracking-widest text-[#1A1C19] group-hover:text-[#3c5a25] transition-colors">
                                        {step.title}
                                    </h4>
                                    <p className="font-raleway text-[12px] text-gray-500 leading-relaxed max-w-lg">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CTA BANNER */}
            <section className="relative py-32 overflow-hidden">
                <img src={ctaBg} alt="CTA Background" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#3c5a25]/85" />
                <div className="relative text-center text-white space-y-8 px-4">
                    <h2 className="font-cinzel text-[42px] font-bold">
                        Start Your Culinary Vision
                    </h2>
                    <p className="font-raleway text-white/70 text-[14px] max-w-xl mx-auto leading-relaxed">
                        Book a private consultation at our showroom and design the creation of your bespoke kitchen.
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

export default KitchenDetail;
