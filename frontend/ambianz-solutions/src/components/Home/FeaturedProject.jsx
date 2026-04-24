import { Link } from "react-router-dom";
import kitchen2 from "../../images/3d-kitchen/kitchen2.png";
import kitchen3 from "../../images/3d-kitchen/kitchen3.png";
import kitchen1 from "../../images/3d-kitchen/kitchen1.png";

export default function FeaturedProject({
    location = "Islamabad",
    year = "2024",
    title = "Full Kitchen Fit-out — DHA Phase 2",
    description = "Custom cabinetry, stone countertops, appliance integration, and 3D-designed from concept to installation in 6 weeks.",
    caseStudyLink = "/projects/dha-phase-2",
}) {
    return (
        <section style={{ background: "#F8F6F1", padding: "64px 48px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        border: "0.5px solid #d8d4c8",
                        overflow: "hidden",
                        minHeight: 480,
                    }}
                >
                    {/* Left — Image Panel */}
                    <div
                        style={{
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >
                        {/* Background Image */}
                        <img
                            src={kitchen1}
                            alt="Featured Project"
                            style={{
                                position: "absolute",
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                zIndex: 0,
                            }}
                        />

                        {/* Subtle overlay for legibility of labels */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.4) 100%)",
                                zIndex: 1,
                            }}
                        />

                        {/* Top label */}
                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                                fontSize: 9,
                                letterSpacing: 3,
                                textTransform: "uppercase",
                                color: "rgba(248,246,241,0.9)",
                                fontFamily: "'Raleway', sans-serif",
                                padding: 28,
                            }}
                        >
                            Project Photo
                        </div>

                        {/* Location badge */}
                        <div
                            style={{
                                position: "relative",
                                zIndex: 2,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "#adb940",
                                padding: "8px 20px",
                                alignSelf: "flex-start",
                                margin: 28,
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "'Raleway', sans-serif",
                                    fontSize: 10,
                                    letterSpacing: 2.5,
                                    color: "#1A1C19",
                                    textTransform: "uppercase",
                                    fontWeight: 600,
                                }}
                            >
                                {location} · {year}
                            </span>
                        </div>
                    </div>

                    {/* Right — Content Panel */}
                    <div
                        style={{
                            background: "#F8F6F1",
                            padding: "40px 40px 40px 44px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            borderLeft: "0.5px solid #d8d4c8",
                        }}
                    >
                        {/* Label */}
                        <div
                            style={{
                                fontSize: 9,
                                letterSpacing: 3.5,
                                textTransform: "uppercase",
                                color: "#adb940",
                                fontFamily: "'Raleway', sans-serif",
                                marginBottom: 16,
                            }}
                        >
                            Featured Project
                        </div>

                        {/* Title */}
                        <h2
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "clamp(18px, 2.2vw, 26px)",
                                color: "#1A1C19",
                                fontWeight: 400,
                                margin: "0 0 18px",
                                lineHeight: 1.3,
                            }}
                        >
                            {title}
                        </h2>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 12,
                                color: "#666",
                                lineHeight: 1.9,
                                margin: "0 0 32px",
                                maxWidth: 340,
                            }}
                        >
                            {description}
                        </p>

                        {/* CTA */}
                        <Link
                            to={caseStudyLink}
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                textDecoration: "none",
                                borderBottom: "1px solid #d8d4c8",
                                paddingBottom: 12,
                                alignSelf: "flex-start",
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
                                View Case Study
                            </span>
                            <span style={{ color: "#adb940", fontSize: 14 }}>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
