// import { Link } from "react-router-dom";

// const services = [
//     {
//         number: "01",
//         category: "kitchens",
//         title: "Bespoke Kitchens",
//         description:
//             "Every kitchen is a statement. Precision craftsmanship, seamless function, and materials chosen around the way you live and cook.",
//         link: "/services/kitchens",
//         linkLabel: "Explore Kitchens",
//         image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
//         theme: "light",
//     },
//     {
//         number: "02",
//         category: "wardrobes",
//         title: "Bespoke Wardrobes",
//         description:
//             "Your wardrobe should be a gallery for your personal history. Precision-engineered storage systems that blend effortless organisation with refined finishes.",
//         link: "/services/wardrobes",
//         linkLabel: "Explore Wardrobes",
//         image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
//         theme: "dark",
//     },
//     {
//         number: "03",
//         category: "doors",
//         title: "Statement Doors",
//         description:
//             "First impressions are lasting ones. Our bespoke doors are crafted with meticulous attention to detail, blending mastery of style and consistent design.",
//         link: "/services/doors",
//         linkLabel: "Explore Doors",
//         image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=700&q=80",
//         theme: "green",
//     },
//     {
//         number: "04",
//         category: "media walls",
//         title: "Cinematic Media Walls",
//         description:
//             "The dramatic centrepiece, seamlessly integrated into your home's architecture. Thoughtful materials and lighting to define any room.",
//         link: "/services/media-walls",
//         linkLabel: "Explore Media Walls",
//         image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=80",
//         theme: "light",
//     },
// ];

// const themeStyles = {
//     light: {
//         bg: "#F8F6F1",
//         text: "#1A1C19",
//         muted: "#666",
//         labelColor: "#adb940",
//         linkColor: "#3c5a25",
//         imageBorder: "#e0ddd5",
//     },
//     dark: {
//         bg: "#1A1C19",
//         text: "#F8F6F1",
//         muted: "#aaa",
//         labelColor: "#adb940",
//         linkColor: "#adb940",
//         imageBorder: "rgba(173,185,64,0.2)",
//     },
//     green: {
//         bg: "#3c5a25",
//         text: "#F8F6F1",
//         muted: "#d0d8c0",
//         labelColor: "rgba(248,246,241,0.6)",
//         linkColor: "#F8F6F1",
//         imageBorder: "rgba(248,246,241,0.2)",
//     },
// };

// export default function ServicesDisciplines() {
//     return (
//         <section style={{ background: "#F8F6F1" }}>
//             {/* Section Header */}
//             <div style={{ textAlign: "center", padding: "72px 48px 56px" }}>
//                 <div
//                     style={{
//                         fontSize: 10,
//                         letterSpacing: 4,
//                         color: "#adb940",
//                         fontFamily: "'Raleway', sans-serif",
//                         marginBottom: 14,
//                         textTransform: "uppercase",
//                     }}
//                 >
//                     what we build
//                 </div>
//                 <div
//                     style={{
//                         width: 48,
//                         height: 1,
//                         background: "#adb940",
//                         margin: "0 auto 18px",
//                     }}
//                 />
//                 <h2
//                     style={{
//                         fontFamily: "'Cinzel', serif",
//                         fontSize: "clamp(24px, 3vw, 34px)",
//                         color: "#1A1C19",
//                         fontWeight: 400,
//                         margin: 0,
//                     }}
//                 >
//                     Our Four Disciplines
//                 </h2>
//             </div>

//             {/* 2x2 Grid */}
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     gap: 2,
//                     background: "#d8d4c8",
//                 }}
//             >
//                 {services.map((service) => {
//                     const t = themeStyles[service.theme];
//                     return (
//                         <div
//                             key={service.number}
//                             style={{
//                                 background: t.bg,
//                                 padding: "40px 40px 48px",
//                             }}
//                         >
//                             {/* Label row */}
//                             <div
//                                 style={{
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 12,
//                                     marginBottom: 20,
//                                 }}
//                             >
//                                 <div
//                                     style={{
//                                         width: 34,
//                                         height: 34,
//                                         background: service.theme === "light" ? "#3c5a25" : service.theme === "green" ? "#1A1C19" : "#3c5a25",
//                                         display: "flex",
//                                         alignItems: "center",
//                                         justifyContent: "center",
//                                     }}
//                                 >
//                                     <span
//                                         style={{
//                                             fontFamily: "'Cinzel', serif",
//                                             fontSize: 10,
//                                             color: "#adb940",
//                                         }}
//                                     >
//                                         {service.number}
//                                     </span>
//                                 </div>
//                                 <span
//                                     style={{
//                                         fontSize: 9,
//                                         letterSpacing: 3,
//                                         textTransform: "uppercase",
//                                         color: t.labelColor,
//                                         fontFamily: "'Raleway', sans-serif",
//                                     }}
//                                 >
//                                     {service.category}
//                                 </span>
//                             </div>

//                             {/* Title */}
//                             <h3
//                                 style={{
//                                     fontFamily: "'Cinzel', serif",
//                                     fontSize: 22,
//                                     color: t.text,
//                                     fontWeight: 400,
//                                     margin: "0 0 12px",
//                                 }}
//                             >
//                                 {service.title}
//                             </h3>

//                             {/* Description */}
//                             <p
//                                 style={{
//                                     fontFamily: "'Raleway', sans-serif",
//                                     fontSize: 12,
//                                     color: t.muted,
//                                     lineHeight: 1.9,
//                                     margin: "0 0 24px",
//                                 }}
//                             >
//                                 {service.description}
//                             </p>

//                             {/* Link */}
//                             <Link
//                                 to={service.link}
//                                 style={{
//                                     display: "inline-flex",
//                                     alignItems: "center",
//                                     gap: 10,
//                                     textDecoration: "none",
//                                     marginBottom: 28,
//                                 }}
//                             >
//                                 <span
//                                     style={{
//                                         display: "inline-block",
//                                         width: 36,
//                                         height: 1,
//                                         background: "#adb940",
//                                     }}
//                                 />
//                                 <span
//                                     style={{
//                                         fontSize: 9,
//                                         letterSpacing: 2.5,
//                                         textTransform: "uppercase",
//                                         color: t.linkColor,
//                                         fontFamily: "'Raleway', sans-serif",
//                                         fontWeight: 500,
//                                     }}
//                                 >
//                                     {service.linkLabel}
//                                 </span>
//                             </Link>

//                             {/* Image */}
//                             <div
//                                 style={{
//                                     border: `1px solid ${t.imageBorder}`,
//                                     overflow: "hidden",
//                                     height: 200,
//                                 }}
//                             >
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     style={{
//                                         width: "100%",
//                                         height: "100%",
//                                         objectFit: "cover",
//                                         display: "block",
//                                         filter: service.theme === "light" ? "brightness(0.9)" : "brightness(0.75)",
//                                         transition: "transform 0.5s ease",
//                                     }}
//                                     onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
//                                     onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                                 />
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

import { Link } from "react-router-dom";
import wardrobeImg from "../../images/wardrobe.png";
import mediawallImg from "../../images/mediawall.jpg";
import officeImg from "../../images/officefurniture.png";
import doorImg from "../../images/bespokedoor.png";
import cafeImg from "../../images/table.jpg";
import kitchenA from "../../images/kitchenA.jpg"
import kitchenB from "../../images/kitchenB.jpg"
import kitchenC from "../../images/kitchenC.jpg"
import wardrobeA from "../../images/wardrobeA.jpg"
import wardrobeBB from "../../images/wardrobeBB.jpg"
import wardrobeC from "../../images/wardrobeC.jpg"
import doorA from "../../images/doorA.jpg"
import doorB from "../../images/doorB.jpg"
import doorC from "../../images/doorC.jpg"
import officeA from "../../images/officeA.jpg"
import officeB from "../../images/officeB.jpg"
import officeC from "../../images/officeC.jpg"
import cafeA from "../../images/cafeA.jpg"
import cafeB from "../../images/cafeB.jpg"

import { FiArrowUpRight } from "react-icons/fi";

const specialisations = [
    {
        number: "01",
        title: "Bespoke Kitchens",
        description: "Full design, custom cabinetry, countertops & all appliance installation included.",
        link: "/services/kitchens",
        image: kitchenA,
        size: "large", // spans full width top
    },
    {
        number: "02",
        title: "Fitted Wardrobes",
        description: "Precision-engineered storage with refined finishes.",
        link: "/services/wardrobes",
        image: wardrobeBB,
        size: "medium",
    },
    {
        number: "03",
        title: "Media Walls",
        description: "Cinematic centrepieces seamlessly integrated into your home.",
        link: "/services/media-walls",
        image: mediawallImg,
        size: "medium",
    },
    {
        number: "04",
        title: "Home Offices",
        description: "Productive, beautiful, built for focus.",
        link: "/services/home-offices",
        image: officeA,
        size: "small",
    },
    {
        number: "05",
        title: "Cafe Fit-outs",
        description: "Commercial interiors with a bespoke edge.",
        link: "/services/cafe-fitouts",
        image: cafeB,
        size: "small",
    },

    {
        number: "06",
        title: "Doors",
        description: "Statement doors crafted for lasting impressions.",
        link: "/services/doors",
        image: doorC,
        size: "small",
    },
];

function ServiceCard({ item, height = 200, dark = false }) {
    return (
        <Link
            to={item.link}
            style={{ textDecoration: "none", display: "block", height }}
        >
            <div
                style={{
                    position: "relative",
                    height: "100%",
                    background: item.image ? "#1A1C19" : (dark ? "#2a3520" : "#3c5a25"),
                    overflow: "hidden",
                    cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.querySelector(".card-overlay").style.opacity = "1";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.querySelector(".card-overlay").style.opacity = "0";
                    const img = e.currentTarget.querySelector("img");
                    if (img) img.style.transform = "scale(1)";
                }}
            >
                {/* Grid texture */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 36px), repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 36px)",
                        zIndex: 0,
                    }}
                />

                {/* Image if provided */}
                {item.image && (
                    <img
                        src={item.image}
                        alt={item.title}
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            opacity: 0.7,
                            zIndex: 0,
                            transition: "transform 0.5s ease",
                        }}
                    />
                )}

                {/* Arrow icon top-right */}
                <div
                    style={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        width: 28,
                        height: 28,
                        border: "1.5px solid rgba(173,185,64,0.7)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                    }}
                >
                    <FiArrowUpRight style={{ color: "#adb940", fontSize: 16 }} strokeWidth={3} />
                </div>

                {/* Hover overlay */}
                <div
                    className="card-overlay"
                    style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(173,185,64,0.08)",
                        zIndex: 1,
                        opacity: 0,
                        transition: "opacity 0.25s ease",
                    }}
                />

                {/* Bottom content */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "14px 16px",
                        background: "linear-gradient(to top, rgba(26,28,25,0.85) 0%, transparent 100%)",
                        zIndex: 2,
                    }}
                >
                    <div
                        style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: 11,
                            letterSpacing: 3,
                            color: "#adb940",
                            fontWeight: 800,
                            marginBottom: 4,
                            opacity: 1,
                        }}
                    >
                        {item.number}
                    </div>
                    <div
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: item.size === "large" ? 22 : 16,
                            color: "#F8F6F1",
                            fontWeight: 500,
                            letterSpacing: 2,
                            marginBottom: item.description && item.size === "large" ? 8 : 0,
                        }}
                    >
                        {item.title}
                    </div>
                    {item.size === "large" && (
                        <p
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 11,
                                color: "rgba(248,246,241,0.65)",
                                margin: 0,
                                lineHeight: 1.7,
                            }}
                        >
                            {item.description}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default function Specialisations() {
    const [large, ...rest] = specialisations;
    const mediums = rest.slice(0, 2);
    const smalls = rest.slice(2);

    return (
        <section style={{ background: "#F8F6F1", padding: "72px 32px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>

                {/* Header */}
                <div style={{ marginBottom: 40 }}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            marginBottom: 14,
                        }}
                    >
                        <span
                            style={{
                                display: "inline-block",
                                width: 32,
                                height: 1,
                                background: "#adb940",
                            }}
                        />
                        <span
                            style={{
                                fontSize: 9,
                                letterSpacing: 3.5,
                                textTransform: "uppercase",
                                color: "#adb940",
                                fontFamily: "'Raleway', sans-serif",
                            }}
                        >
                            What We Build
                        </span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "clamp(22px, 3vw, 34px)",
                            color: "#1A1C19",
                            fontWeight: 400,
                            margin: "0 0 12px",
                        }}
                    >
                        Our Specialisations
                    </h2>

                    <p
                        style={{
                            fontFamily: "'Raleway', sans-serif",
                            fontSize: 13,
                            color: "#777",
                            margin: 0,
                            lineHeight: 1.8,
                        }}
                    >
                        Every project designed in 3D, crafted in our workshop, and<br />
                        professionally installed in your space.
                    </p>
                </div>

                {/* Grid Layout */}
                <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>

                    {/* Row 1 — Large card full width */}
                    <ServiceCard item={large} height={360} dark={false} />

                    {/* Row 2 — Two medium cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                        {mediums.map((item, i) => (
                            <ServiceCard key={item.number} item={item} height={270} dark={i % 2 === 0} />
                        ))}
                    </div>

                    {/* Row 3 — Three small cards */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 3 }}>
                        {smalls.map((item, i) => (
                            <ServiceCard key={item.number} item={item} height={210} dark={i % 2 !== 0} />
                        ))}
                    </div>
                </div>

                {/* View All CTA */}
                <div style={{ textAlign: "center", marginTop: 36 }}>
                    <Link
                        to="/services"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            textDecoration: "none",
                            borderBottom: "1px solid #d8d4c8",
                            paddingBottom: 10,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 10,
                                letterSpacing: 2.5,
                                color: "#3c5a25",
                                textTransform: "uppercase",
                                fontWeight: 500,
                            }}
                        >
                            View All Services
                        </span>
                        <span style={{ color: "#adb940", fontSize: 14 }}>→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
