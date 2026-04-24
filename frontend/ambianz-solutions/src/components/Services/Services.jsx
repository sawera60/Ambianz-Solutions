


import React from 'react'
import { Link, StaticRouterProvider } from 'react-router-dom'
import CTAbanner from '../Services/CTAbanner'
import GetQuote from "../GetQuote/GetQuote"
import ServicesCTA from './servicesCTA'
import kitchenImage from '../../images/kitchenimage.jpg'
import kitchenA from '../../images/kitchenA.jpg'
import kitchenB from '../../images/kitchenB.jpg'
import kitchenC from '../../images/kitchenC.jpg'
import wardrobeA from '../../images/wardrobeA.jpg'
import wardrobeBB from '../../images/wardrobeBB.jpg'
import wardrobeC from '../../images/wardrobeC.jpg'
import doorA from '../../images/doorA.jpg'
import doorB from '../../images/doorB.jpg'
import doorC from '../../images/doorC.jpg'
import interior1 from '../../images/interior1.jpg'
import interior2 from '../../images/interior2.jpg'
import interior3 from '../../images/interior3.jpg'
import interior4 from '../../images/interior4.jpg'
import interior5 from '../../images/interior5.jpg'
import interior6 from '../../images/interior6.jpg'
import interior7 from '../../images/interior7.jpg'
import interior8 from '../../images/interior8.jpg'
import interior9 from '../../images/interior9.jpg'
import mediawall1 from '../../images/mediawall1.png'
import cafeB from '../../images/cafeB.jpg'



// ALL images verified as correct interior/architectural shots
const services = [
    {
        id: 'kitchens',
        num: '01',
        tag: '01 — Kitchens',
        title: 'Bespoke\nKitchens',
        desc: 'Where precision meets warmth. Each kitchen is engineered to perfection — a seamless fusion of form, function, and premium materials crafted around the way you live and cook.',
        features: [
            'Custom cabinetry & storage solutions',
            'Premium countertop materials',
            'Integrated appliance design',
            'Full 3D visualisation before build'
        ],
        // White modern luxury kitchen — clean, architectural, no people
        img: kitchenA,
        path: '/services/kitchens',
        dark: false,
    },
    {
        id: 'wardrobes',
        num: '02',
        tag: '02 — Wardrobes',
        title: 'Bespoke\nWardrobes',
        desc: 'Your wardrobe should be a gallery for your personal history. We design precision-engineered storage systems that blend effortless organisation with refined luxury.',
        features: [
            'Floor-to-ceiling fitted designs',
            'Soft-close drawer & rail systems',
            'Integrated lighting & mirrors',
            'Walk-in & sliding door options'
        ],
        // Dark luxury walk-in wardrobe with lighting
        img: wardrobeC,
        path: '/services/wardrobes',
        dark: false,
    },
    {
        id: 'doors',
        num: '03',
        tag: '03 — Doors',
        title: 'Statement\nDoors',
        desc: 'First impressions are lasting ones. Our bespoke doors are crafted with architectural precision — making every entrance a moment of quiet drama and considered design.',
        features: [
            'Solid wood & veneer finishes',
            'Pivot, sliding & bi-fold options',
            'Custom hardware & handles',
            'Acoustic & fire-rated variants'
        ],
        // Minimal interior hallway with architectural timber door
        img: doorC,
        path: '/services/doors',
        dark: false,
    },
    {
        id: 'media-walls',
        num: '04',
        tag: '04 — Media Walls',
        title: 'Cinematic\nMedia Walls',
        desc: "The cinematic experience, seamlessly integrated into your home's architecture. A thoughtful arrangement of materials and technology that becomes the defining feature of any room.",
        features: [
            'Stone, timber & lacquer finishes',
            'Integrated cable management',
            'Built-in shelving & fireplace options',
            'Full bespoke sizing to any room'
        ],
        // Dark luxury living room — built-in shelving, ambient warm lighting
        img: mediawall1,
        path: '/services/media-walls',
        dark: false,
    },
    {
        id: 'cafe-fits',
        num: '05',
        tag: '05 — Cafe Fits',
        title: 'Bespoke\nCafe Fits',
        desc: "Transforming commercial spaces into bespoke destinations. We design and build commercial interiors that blend functional high-traffic requirements with refined architectural aesthetics.",
        features: [
            'Commercial cabinetry & bar design',
            'Bespoke seating & table solutions',
            'Durable premium surface selection',
            'Full commercial 3D floor planning'
        ],
        img: cafeB,
        path: '/services/cafe-fitouts',
        dark: false,
    }
]

const serviceStrip = [
    { label: 'Kitchens', sub: 'Precision Crafted' },
    { label: 'Wardrobes', sub: 'Gallery for Living' },
    { label: 'Doors', sub: 'Architectural Drama' },
    { label: 'Media Walls', sub: 'Cinematic Living' },
]

// Local kitchen image for hero
const HERO_IMG = interior1

const ServiceChapter = ({ svc, index }) => {
    const cream = '#F8F6F1'
    const dark = '#1A1C19'
    const bg = svc.dark ? dark : cream
    const text = svc.dark ? cream : dark
    const sub = svc.dark ? 'rgba(248,246,241,0.5)' : '#666'
    const feat = svc.dark ? 'rgba(248,246,241,0.7)' : '#565853'
    const border = svc.dark ? 'rgba(209,196,0,0.6)' : '#d1c400'

    const isRight = index % 2 !== 0;

    return (
        <div id={svc.id} style={{ position: 'relative', width: '100%', height: '560px', overflow: 'hidden', borderBottom: '0.5px solid #c8c4bc' }}>

            {/* Full-bleed background image */}
            <img
                src={svc.img}
                alt={svc.id}
                style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover', objectPosition: 'center',
                }}
            />

            {/* Content panel */}
            <div style={{
                position: 'absolute',
                top: 0, bottom: 0,
                left: isRight ? 'auto' : 0,
                right: isRight ? 0 : 'auto',
                width: '42%',
                background: bg,
                borderRight: isRight ? 'none' : `1px solid #d1c400`,
                borderLeft: isRight ? `1px solid #d1c400` : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '52px 52px',
                zIndex: 2,
            }}>
                {/* Faded decorative number */}
                <span style={{
                    position: 'absolute',
                    top: '12px', right: '18px',
                    fontFamily: "'Cinzel', serif",
                    fontSize: '100px',
                    fontWeight: 600,
                    lineHeight: 1,
                    color: svc.dark ? 'rgba(248,246,241,0.04)' : 'rgba(26,28,25,0.05)',
                    letterSpacing: '-2px',
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}>
                    {svc.num}
                </span>

                {/* Tag */}
                <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '9px', letterSpacing: '5px',
                    textTransform: 'uppercase',
                    color: '#adb940',
                    marginBottom: '12px',
                }}>
                    {svc.tag}
                </p>

                {/* Gold rule */}
                <div style={{ height: '1px', width: '36px', background: '#d1c400', marginBottom: '18px' }} />

                {/* Title */}
                <h3 style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: 'clamp(28px, 2.6vw, 38px)',
                    fontWeight: 600,
                    color: text,
                    lineHeight: 1.1,
                    marginBottom: '16px',
                    whiteSpace: 'pre-line',
                }}>
                    {svc.title}
                </h3>

                {/* Description */}
                <p style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontSize: '13px', lineHeight: 1.85,
                    color: sub,
                    marginBottom: '20px',
                    maxWidth: '290px',
                }}>
                    {svc.desc}
                </p>

                {/* Features */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '26px' }}>
                    {svc.features.map((f, i) => (
                        <li key={i} style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: '11px', color: feat,
                            display: 'flex', alignItems: 'center', gap: '12px',
                        }}>
                            <div style={{ height: '1px', width: '16px', background: '#d1c400', flexShrink: 0 }} />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    to={svc.path}
                    style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: '10px', letterSpacing: '3px',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: text,
                        borderBottom: `0.5px solid ${text}`,
                        paddingBottom: '3px',
                        display: 'inline-block',
                        width: 'fit-content',
                        textDecoration: 'none',
                        transition: 'color 0.3s, border-color 0.3s',
                    }}
                >
                    Explore {svc.id.charAt(0).toUpperCase() + svc.id.slice(1).replace('-', ' ')} →
                </Link>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <>
            <div className='w-full'>

                {/* ===== HERO — EDITORIAL SPLIT ===== */}
                <div className='w-full border-b border-[#e0ddd7]'>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', minHeight: '620px' }}>

                        {/* Left — text */}
                        <div className='flex flex-col justify-center bg-[#F8F6F1]' style={{ padding: '80px clamp(44px, 5.5vw, 96px)' }}>
                            <div className='self-start mb-9' style={{ border: '0.5px solid #d1c400', padding: '6px 18px' }}>
                                <span className='font-raleway text-[#3c5a25]' style={{ fontSize: '9px', letterSpacing: '4px', textTransform: 'uppercase' }}>
                                    Ambianz — Bespoke Interiors
                                </span>
                            </div>
                            <p className='font-raleway text-[#adb940]' style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '14px' }}>
                                Our Expertise
                            </p>
                            <div style={{ height: '1px', width: '40px', background: '#d1c400', marginBottom: '22px' }} />
                            <h1
                                className='font-cinzel font-semibold text-[#1A1C19]'
                                style={{ fontSize: 'clamp(46px, 5vw, 76px)', lineHeight: 1.05, marginBottom: '22px' }}
                            >
                                Spaces<br />
                                Crafted to<br />
                                Define You
                            </h1>
                            <p className='font-raleway text-[#bbb]' style={{ fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', whiteSpace: 'nowrap', marginBottom: '52px' }}>
                                Interior Architecture &amp; Bespoke Design
                            </p>
                            <a href="#services-list" className='flex items-center gap-3 w-fit group'>
                                <div className='bg-[#1A1C19] transition-all duration-500 group-hover:w-14' style={{ height: '1px', width: '32px' }} />
                                <span className='font-raleway text-[#1A1C19]' style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase' }}>
                                    Scroll to explore
                                </span>
                            </a>
                        </div>

                        {/* Right — image */}
                        <div className='relative' style={{ minHeight: '620px' }}>
                            <div className='absolute top-0 bottom-0 left-0 z-10 pointer-events-none' style={{ width: '1px' }}>
                                <div style={{ height: '100%', background: 'linear-gradient(to bottom, transparent 0%, #d1c400 15%, #d1c400 85%, transparent 100%)' }} />
                            </div>
                            <div className='relative w-full h-full overflow-hidden group'>
                                <img
                                    src={HERO_IMG}
                                    alt='Luxury bespoke interior'
                                    className='w-full h-full object-cover object-center block transition-transform duration-700 group-hover:scale-[1.03]'
                                    style={{ minHeight: '620px' }}
                                />
                                <div className='absolute top-0 left-0 h-full pointer-events-none' style={{ width: '90px', background: 'linear-gradient(to right, #F8F6F1 0%, transparent 100%)' }} />
                                <div className='absolute flex items-center gap-3' style={{ bottom: '28px', right: '28px' }}>
                                    <div style={{ width: '24px', height: '1px', background: '#d1c400' }} />
                                    <span className='font-raleway text-white/75' style={{ fontSize: '9px', letterSpacing: '3px', textTransform: 'uppercase', textShadow: '0 1px 8px rgba(0,0,0,0.65)' }}>
                                        Bespoke Interiors
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service strip */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', background: '#F8F6F1', borderTop: '0.5px solid #e0ddd7' }}>
                        {serviceStrip.map((s, i) => (
                            <div key={i} style={{ padding: '24px clamp(22px, 3.5vw, 56px)', borderRight: i !== serviceStrip.length - 1 ? '0.5px solid #e0ddd7' : 'none' }}>
                                <p className='font-cinzel text-[#1A1C19]' style={{ fontSize: '14px', marginBottom: '6px', fontWeight: 500 }}>{s.label}</p>
                                <p className='font-raleway text-[#aaa]' style={{ fontSize: '9px', letterSpacing: '2.5px', textTransform: 'uppercase' }}>{s.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* ===== SECTION INTRO ===== */}
                <div id="services-list" style={{ textAlign: 'center', padding: '56px 40px 48px', borderBottom: '0.5px solid #e0ddd7', background: '#F8F6F1' }}>
                    <p className='font-raleway text-[#adb940]' style={{ fontSize: '10px', letterSpacing: '5px', textTransform: 'uppercase', marginBottom: '12px' }}>
                        What We Build
                    </p>
                    <div style={{ height: '1px', width: '36px', background: '#d1c400', margin: '0 auto 18px' }} />
                    <h2 className='font-cinzel font-semibold text-[#1A1C19]' style={{ fontSize: 'clamp(26px, 3vw, 36px)', lineHeight: 1.1 }}>
                        Our Four Disciplines
                    </h2>
                </div>

                {/* ===== SERVICE CHAPTERS ===== */}
                <div id="services-list">
                    {services.map((svc, i) => <ServiceChapter key={svc.id} svc={svc} index={i} />)}
                </div>

            </div>
            {/* <ServicesCTA /> */}



        </>
    )
}

export default Services



