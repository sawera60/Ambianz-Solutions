import { FaLeaf, FaPencilRuler, FaTools, FaRulerCombined } from "react-icons/fa";

const pillars = [
    {
        number: "01",
        title: "Eco Materials",
        description: "Sustainably sourced, responsibly crafted — built to endure for generations.",
        icon: <FaLeaf size={18} color="#F8F6F1" />,
    },
    {
        number: "02",
        title: "Unique Designs",
        description: "Every piece is conceived exclusively for you. Nothing is off the shelf.",
        icon: <FaPencilRuler size={18} color="#F8F6F1" />,
    },
    {
        number: "03",
        title: "Expert Craft",
        description: "Decades of skilled craftsmanship behind every joint, finish, and detail.",
        icon: <FaTools size={18} color="#F8F6F1" />,
    },
    {
        number: "04",
        title: "Perfect Fit",
        description: "Precision measured, precision made. Fitted exactly to your space.",
        icon: <FaRulerCombined size={18} color="#F8F6F1" />,
    },
];

export default function WhyAmbianz() {
    return (
        <section style={{ background: "#FFFFFF", padding: "80px 48px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <div
                        style={{
                            fontSize: 10,
                            letterSpacing: 4,
                            color: "#3c5a25",
                            fontFamily: "'Raleway', sans-serif",
                            textTransform: "uppercase",
                            marginBottom: 14,
                        }}
                    >
                        our difference
                    </div>
                    <div
                        style={{
                            width: 48,
                            height: 1,
                            background: "#adb940",
                            margin: "0 auto 18px",
                        }}
                    />
                    <h2
                        style={{
                            fontFamily: "'Cinzel', serif",
                            fontSize: "clamp(22px, 3vw, 30px)",
                            color: "#1A1C19",
                            fontWeight: 400,
                            margin: 0,
                        }}
                    >
                        Why Ambianz
                    </h2>
                </div>

                {/* Pillars Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 2,
                        background: "#e0ddd5",
                    }}
                >
                    {pillars.map((pillar, i) => (
                        <div
                            key={pillar.number}
                            style={{
                                background: i % 2 === 0 ? "#FFFFFF" : "#F8F6F1",
                                padding: "36px 28px",
                                border: "1px solid rgba(0,0,0,0.05)",
                                textAlign: "center",
                            }}
                        >
                            {/* Number */}
                            <div
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: 28,
                                    color: "rgba(60,90,37,0.45)",
                                    fontWeight: 700,
                                    lineHeight: 1,
                                    marginBottom: 16,
                                }}
                            >
                                {pillar.number}
                            </div>

                            {/* Icon block */}
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    background: "#3c5a25",
                                    borderRadius: 4,
                                    margin: "0 auto 18px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    boxShadow: "0 4px 12px rgba(60,90,37,0.25)",
                                }}
                            >
                                {pillar.icon}
                            </div>

                            {/* Title */}
                            <div
                                style={{
                                    fontFamily: "'Cinzel', serif",
                                    fontSize: 12,
                                    color: "#3c5a25",
                                    letterSpacing: 1,
                                    marginBottom: 10,
                                }}
                            >
                                {pillar.title}
                            </div>

                            {/* Description */}
                            <p
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 11,
                                    color: "rgba(26,28,25,0.7)",
                                    lineHeight: 1.8,
                                    margin: 0,
                                }}
                            >
                                {pillar.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
