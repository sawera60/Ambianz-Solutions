import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        category: "Furniture",
        name: "Luxury Sofa",
        price: "Rs. 85,000",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    },
    {
        id: 2,
        category: "Lighting",
        name: "Pendant Light",
        price: "Rs. 12,000",
        image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80",
    },
    {
        id: 3,
        category: "Mirrors",
        name: "Wall Mirror",
        price: "Rs. 18,000",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
    },
    {
        id: 4,
        category: "Furniture",
        name: "Dinning Chair",
        price: "Rs. 2,500",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&q=80",
    },
];

export default function ShopPreview() {
    return (
        <section style={{ background: "#F8F6F1", padding: "80px 48px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Header Row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        marginBottom: 40,
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontSize: 10,
                                letterSpacing: 4,
                                color: "#adb940",
                                fontFamily: "'Raleway', sans-serif",
                                textTransform: "uppercase",
                                marginBottom: 10,
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <span
                                style={{
                                    display: "inline-block",
                                    width: 28,
                                    height: 1,
                                    background: "#adb940",
                                }}
                            />
                            curated pieces
                        </div>
                        <h2
                            style={{
                                fontFamily: "'Cinzel', serif",
                                fontSize: "clamp(20px, 2.5vw, 28px)",
                                color: "#1A1C19",
                                fontWeight: 400,
                                margin: "0 0 8px",
                            }}
                        >
                            Explore Our Shop
                        </h2>
                        <p
                            style={{
                                fontFamily: "'Raleway', sans-serif",
                                fontSize: 12,
                                color: "#888",
                                margin: 0,
                            }}
                        >
                            Premium home accessories to complement your space.
                        </p>
                    </div>

                    <Link
                        to="/shop"
                        style={{
                            border: "1px solid #3c5a25",
                            color: "#3c5a25",
                            fontSize: 9,
                            letterSpacing: 2.5,
                            padding: "11px 22px",
                            textDecoration: "none",
                            fontFamily: "'Raleway', sans-serif",
                            textTransform: "uppercase",
                            fontWeight: 500,
                            whiteSpace: "nowrap",
                        }}
                    >
                        View All Products
                    </Link>
                </div>

                {/* Product Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: 20,
                    }}
                >
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            to={`/shop/${product.id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <div
                                style={{
                                    background: "#fff",
                                    border: "0.5px solid #e0ddd5",
                                    cursor: "pointer",
                                    transition: "border-color 0.2s",
                                }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.borderColor = "#adb940")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.borderColor = "#e0ddd5")
                                }
                            >
                                {/* Image */}
                                <div
                                    style={{
                                        height: 180,
                                        overflow: "hidden",
                                        background: "#f0ece3",
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block",
                                            transition: "transform 0.4s ease",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.transform = "scale(1.05)")
                                        }
                                        onMouseLeave={(e) =>
                                            (e.currentTarget.style.transform = "scale(1)")
                                        }
                                    />
                                </div>

                                {/* Info */}
                                <div style={{ padding: "14px 16px 18px" }}>
                                    <div
                                        style={{
                                            fontSize: 8,
                                            letterSpacing: 2.5,
                                            color: "#adb940",
                                            fontFamily: "'Raleway', sans-serif",
                                            textTransform: "uppercase",
                                            marginBottom: 5,
                                        }}
                                    >
                                        {product.category}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'Cinzel', serif",
                                            fontSize: 13,
                                            color: "#1A1C19",
                                            marginBottom: 8,
                                        }}
                                    >
                                        {product.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "'Raleway', sans-serif",
                                            fontSize: 12,
                                            color: "#3c5a25",
                                            fontWeight: 500,
                                        }}
                                    >
                                        {product.price}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
