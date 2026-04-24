

// import { Link } from "react-router-dom";

// const stats = [
//   { value: "900+", label: "Projects" },
//   { value: "12+", label: "Years" },
//   { value: "100%", label: "Bespoke" },
//   { value: "3D", label: "Design" },
// ];

// export default function Herosection() {
//   return (
//     <section
//       style={{
//         background: "#1A1C19",
//         minHeight: "92vh",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Decorative background accent */}
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           right: 0,
//           width: "48%",
//           height: "100%",
//           background: "#2a3520",
//           opacity: 0.4,
//           zIndex: 0,
//         }}
//       />
//       <div
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage:
//             "repeating-linear-gradient(90deg, rgba(173,185,64,0.03) 0px, rgba(173,185,64,0.03) 1px, transparent 1px, transparent 80px)",
//           zIndex: 0,
//         }}
//       />

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: "80px 48px",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 64,
//           alignItems: "center",
//           position: "relative",
//           zIndex: 1,
//           width: "100%",
//         }}
//       >
//         {/* Left — Text */}
//         <div>
//           <div
//             style={{
//               fontSize: 10,
//               letterSpacing: 4,
//               color: "#adb940",
//               fontFamily: "'Raleway', sans-serif",
//               marginBottom: 20,
//               display: "flex",
//               alignItems: "center",
//               gap: 12,
//             }}
//           >
//             <span style={{ display: "inline-block", width: 32, height: 1, background: "#adb940" }} />
//             BESPOKE INTERIORS
//           </div>

//           <h1
//             style={{
//               fontFamily: "'Cinzel', serif",
//               fontSize: "clamp(36px, 5vw, 58px)",
//               color: "#F8F6F1",
//               lineHeight: 1.15,
//               fontWeight: 400,
//               margin: "0 0 24px",
//             }}
//           >
//             Build For<br />
//             Your Spaces<br />

//             {/* <span style={{ color: "#adb940" }}>Define</span> You */}
//           </h1>

//           <p
//             style={{
//               fontFamily: "'Raleway', sans-serif",
//               fontSize: 13,
//               color: "rgba(248,246,241,0.6)",
//               lineHeight: 1.9,
//               marginBottom: 40,
//               maxWidth: 380,
//             }}
//           >
//             Premium home decor &amp; bespoke interiors — kitchens, wardrobes,
//             doors, and media walls, designed around how you live.
//           </p>

//           <div style={{ display: "flex", gap: 14 }}>
//             <Link
//               to="/services"
//               style={{
//                 background: "#adb940",
//                 color: "#1A1C19",
//                 fontSize: 10,
//                 letterSpacing: 3,
//                 padding: "14px 28px",
//                 textDecoration: "none",
//                 fontFamily: "'Raleway', sans-serif",
//                 fontWeight: 500,
//                 display: "inline-block",
//               }}
//             >
//               EXPLORE SERVICES
//             </Link>
//             <Link
//               to="/services#portfolio"
//               style={{
//                 border: "1px solid rgba(248,246,241,0.25)",
//                 color: "#F8F6F1",
//                 fontSize: 10,
//                 letterSpacing: 3,
//                 padding: "14px 28px",
//                 textDecoration: "none",
//                 fontFamily: "'Raleway', sans-serif",
//                 display: "inline-block",
//               }}
//             >
//               VIEW PORTFOLIO
//             </Link>
//           </div>
//         </div>

//         {/* Right — Image */}
//         <div
//           style={{
//             position: "relative",
//             height: 480,
//             border: "1px solid rgba(173,185,64,0.2)",
//           }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
//             alt="Luxury interior by Ambianz"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               display: "block",
//               filter: "brightness(0.85)",
//             }}
//           />
//           {/* Overlay badge */}
//           <div
//             style={{
//               position: "absolute",
//               bottom: 24,
//               left: 24,
//               background: "rgba(26,28,25,0.85)",
//               border: "0.5px solid rgba(173,185,64,0.4)",
//               padding: "12px 18px",
//               backdropFilter: "blur(4px)",
//             }}
//           >
//             <div
//               style={{
//                 fontFamily: "'Cinzel', serif",
//                 color: "#adb940",
//                 fontSize: 10,
//                 letterSpacing: 2,
//               }}
//             >
//               AMBIANZ SIGNATURE
//             </div>
//             <div
//               style={{
//                 fontFamily: "'Raleway', sans-serif",
//                 color: "#F8F6F1",
//                 fontSize: 11,
//                 marginTop: 2,
//                 opacity: 0.7,
//               }}
//             >
//               Bespoke · Precision · Craft
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Stat Strip */}
//       <div className="overflow-hidden bg-[#adb940] py-3 border-y border-black/10">
//         <div className="flex animate-marquee whitespace-nowrap">
//           {[...Array(3)].map((_, gi) => (
//             <div key={gi} className="flex items-center">
//               {["Bespoke Kitchens", "Fitted Wardrobes", "Statement Doors", "Media Walls", "Home Offices", "Cafe Fit-outs"].map((item, i) => (
//                 <span key={i} className="inline-flex items-center gap-4 px-8 font-['Raleway'] text-[11px] tracking-[3px] uppercase text-[#1a1c19] font-medium">
//                   <span className="w-1.5 h-1.5 bg-[#3c5a25] inline-block flex-shrink-0" />
//                   {item}
//                 </span>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom";
import heroBg from "../../images/hero2.jpeg";
import herosection from "../../images/herosection.jpg";
import kitchenA from "../../images/kitchenA.jpg"
import kitchenB from "../../images/kitchenB.jpg"
import kitchenC from "../../images/kitchenC.jpg"

export default function Herosection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Full-width background image */}
      <div
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1A1C19",
        }}
      >
        {/* Background image */}
        <img
          src={kitchenC}
          alt="Luxury interior by Ambianz"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
          }}
        />

        {/* Dark overlay — stronger on left for text legibility, fades right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(26, 28, 25, 0.48) 0%, rgba(26, 28, 25, 0.37) 20%, rgba(26,28,25,0.15) 80%)",
            zIndex: 1,
          }}
        />

        {/* Subtle grid texture overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(173,185,64,0.03) 0px, rgba(173,185,64,0.03) 1px, transparent 1px, transparent 80px)",
            zIndex: 2,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "80px 48px",
            width: "100%",
          }}
        >
          {/* Left — Text (max ~50% width) */}
          <div style={{ maxWidth: 520 }}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: 4,
                color: "#adb940",
                fontFamily: "'Raleway', sans-serif",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 12,
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
              BESPOKE INTERIORS
            </div>

            <h1
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(36px, 5vw, 58px)",
                color: "#F8F6F1",
                lineHeight: 1.15,
                fontWeight: 400,
                margin: "0 0 24px",
              }}
            >
              Build For
              <br />
              Your Spaces
            </h1>

            <p
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 13,
                color: "rgba(248,246,241,0.6)",
                lineHeight: 1.9,
                marginBottom: 40,
                maxWidth: 380,
              }}
            >
              Premium home decor &amp; bespoke interiors — kitchens, wardrobes,
              doors, and media walls, designed around how you live.
            </p>

            <div className="flex gap-4">
              <Link
                to="/services"
                className="bg-[#3c5a25] text-white px-8 py-4 text-[10px] tracking-[3px] font-medium font-raleway transition-all duration-300 hover:bg-[#4a6b2e] hover:scale-105 hover:shadow-xl inline-block no-underline uppercase"
              >
                EXPLORE SERVICES
              </Link>
              <Link
                to="/services#portfolio"
                className="border border-white/60 text-white px-8 py-4 text-[10px] tracking-[3px] font-raleway transition-all duration-300  hover:text-white hover:scale-105 hover:shadow-xl inline-block no-underline uppercase"
              >
                VIEW PORTFOLIO
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom-right badge */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            zIndex: 4,
            background: "rgba(26,28,25,0.85)",
            border: "0.5px solid rgba(173,185,64,0.4)",
            padding: "12px 18px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#adb940",
              fontSize: 10,
              letterSpacing: 2,
            }}
          >
            AMBIANZ SIGNATURE
          </div>
          <div
            style={{
              fontFamily: "'Raleway', sans-serif",
              color: "#F8F6F1",
              fontSize: 11,
              marginTop: 2,
              opacity: 0.7,
            }}
          >
            Bespoke · Precision · Craft
          </div>
        </div>
      </div>

      {/* Stat Strip — unchanged */}
      <div className="overflow-hidden bg-[#adb940] py-3 border-y border-black/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, gi) => (
            <div key={gi} className="flex items-center">
              {[
                "Bespoke Kitchens",
                "Fitted Wardrobes",
                "Statement Doors",
                "Media Walls",
                "Home Offices",
                "Cafe Fit-outs",
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-4 px-8 font-['Raleway'] text-[11px] tracking-[3px] uppercase text-[#1a1c19] font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-[#3c5a25] inline-block flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}