import { Link } from "react-router-dom";
import { useQuoteModal } from "../../context/QuoteModalContext";

export default function CTAStrip() {
    const { openQuoteModal } = useQuoteModal();
    return (
        <section
            style={{
                background: "#FFFFFF",
                padding: "80px 48px",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
            }}
        >

            <div style={{ position: "relative", zIndex: 1 }}>
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
                    start your project
                </div>

                <div
                    style={{
                        width: 48,
                        height: 1,
                        background: "#3c5a25",
                        margin: "0 auto 20px",
                    }}
                />

                <h2
                    style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: "clamp(24px, 3.5vw, 38px)",
                        color: "#1A1C19",
                        fontWeight: 400,
                        margin: "0 0 16px",
                        lineHeight: 1.3,
                    }}
                >
                    Ready to Transform<br />Your Space?
                </h2>

                <p
                    style={{
                        fontFamily: "'Raleway', sans-serif",
                        fontSize: 13,
                        color: "rgba(26, 28, 25, 0.7)",
                        marginBottom: 36,
                        lineHeight: 1.8,
                    }}
                >
                    Our design team will respond within 24 hours with a<br />
                    personalised proposal and free 3D preview.
                </p>

                <button
                    onClick={openQuoteModal}
                    style={{
                        background: "#3c5a25",
                        color: "#F8F6F1",
                        fontSize: 10,
                        letterSpacing: 3,
                        padding: "16px 40px",
                        textDecoration: "none",
                        fontFamily: "'Raleway', sans-serif",
                        fontWeight: 500,
                        display: "inline-block",
                        textTransform: "uppercase",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Request a Quote
                </button>
            </div>
        </section>
    );
}
