import React, { useState } from "react";

// Kitchen imports
import kitchen1 from "../../../images/3d-kitchen/kitchen1.png";
import kitchen2 from "../../../images/3d-kitchen/kitchen2.png";
import kitchen3 from "../../../images/3d-kitchen/kitchen3.png";

// Wardrobe imports
import wardrobe1 from "../../../images/3d-wardrobe/wardrobe1.jpg";
import wardrobe2 from "../../../images/3d-wardrobe/wardrobe2.jpg";

// Doors imports
import door1 from "../../../images/3d-doors/door1.png";

// Media Wall imports
import mediawall1 from "../../../images/3d-mediawall/mediawall1.png";
import mediawall2 from "../../../images/3d-mediawall/mediawall2.jpg";

const tabs = [
  { label: "Kitchen", icon: "✦", images: [kitchen1, kitchen2, kitchen3] },
  { label: "Wardrobe", icon: "✦", images: [wardrobe1, wardrobe2] },
  { label: "Doors", icon: "✦", images: [door1] },
  { label: "Media Wall", icon: "✦", images: [mediawall1, mediawall2] },
];

const Designgallery = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (img, index) => {
    setLightbox(img);
    setLightboxIndex(index);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const imgs = tabs[activeTab].images;
    const newIndex = (lightboxIndex - 1 + imgs.length) % imgs.length;
    setLightboxIndex(newIndex);
    setLightbox(imgs[newIndex]);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const imgs = tabs[activeTab].images;
    const newIndex = (lightboxIndex + 1) % imgs.length;
    setLightboxIndex(newIndex);
    setLightbox(imgs[newIndex]);
  };

  return (
    <div className="py-20 px-10 bg-white relative overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-[60px] bg-gradient-to-r from-transparent to-[#d1c400]" />
          <span className="font-raleway text-[11px] text-[#d1c400] tracking-[4px] uppercase">
            Portfolio
          </span>
          <div className="h-[1px] w-[60px] bg-gradient-to-l from-transparent to-[#d1c400]" />
        </div>
        <h2
          className="font-cinzel text-[42px] font-bold
                               text-gray-900 leading-tight"
        >
          3D Design Gallery
        </h2>
        <p
          className="font-raleway text-[14px] text-gray-400 mt-4
                               max-w-[480px] mx-auto leading-relaxed tracking-wide"
        >
          Photorealistic renders crafted before a single nail is hammered.
          Visualize your dream space with precision.
        </p>
      </div>

      {/* Tabs — Underline Style */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`font-cinzel px-8 py-4 text-[13px] tracking-widest
                                        uppercase relative transition-all duration-300 cursor-pointer
                                        ${
                                          activeTab === index
                                            ? "text-[#d1c400]"
                                            : "text-gray-300 hover:text-gray-500"
                                        }`}
            >
              {tab.label}
              {activeTab === index && (
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px]
                                                 bg-gradient-to-r from-[#3c5a25] via-[#d1c400] to-[#3c5a25]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-3 relative z-10">
        {tabs[activeTab].images.map((img, index) => (
          <div
            key={index}
            onClick={() => openLightbox(img, index)}
            className={`relative overflow-hidden cursor-pointer group
                                    ${index === 0 ? "col-span-2 h-[420px]" : "col-span-1 h-[420px]"}
                                    ${tabs[activeTab].images.length === 1 ? "col-span-3" : ""}
                                    ${tabs[activeTab].images.length === 2 ? "col-span-1 h-[360px]" : ""}
                                    `}
          >
            <img
              src={img}
              alt={`design-${index}`}
              className="w-full h-full object-cover transition-all duration-700
                                       group-hover:scale-110"
            />

            {/* Hover overlay */}
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/40
                                        transition-all duration-500 flex items-center justify-center"
            >
              <div
                className="opacity-0 group-hover:opacity-100 transition-all
                                            duration-300 flex flex-col items-center gap-2"
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-[#d1c400]
                                                flex items-center justify-center"
                >
                  <span className="text-[#d1c400] text-[20px]">⤢</span>
                </div>
                <span
                  className="font-raleway text-[11px] text-white/80
                                                 tracking-widest uppercase"
                >
                  View Full
                </span>
              </div>
            </div>

            {/* Corner accents */}
            <div
              className="absolute top-0 left-0 w-0 h-0
                                        group-hover:w-[40px] group-hover:h-[40px]
                                        border-t-2 border-l-2 border-[#d1c400]
                                        transition-all duration-300"
            />
            <div
              className="absolute bottom-0 right-0 w-0 h-0
                                        group-hover:w-[40px] group-hover:h-[40px]
                                        border-b-2 border-r-2 border-[#d1c400]
                                        transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Image count */}
      <div className="text-center mt-6 relative z-10">
        <span className="font-raleway text-[12px] text-gray-300 tracking-widest">
          {tabs[activeTab].images.length} DESIGN
          {tabs[activeTab].images.length > 1 ? "S" : ""} IN{" "}
          {tabs[activeTab].label.toUpperCase()}
        </span>
      </div>

      {/* Lightbox — keep dark for fullscreen focus */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-8 font-raleway text-white/40
                                   hover:text-[#d1c400] transition-all duration-300
                                   text-[13px] tracking-widest uppercase flex items-center gap-2"
          >
            Close ✕
          </button>

          <span className="absolute top-8 left-8 font-cinzel text-white/20 text-[13px]">
            {lightboxIndex + 1} / {tabs[activeTab].images.length}
          </span>

          {tabs[activeTab].images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-6 text-white/30 hover:text-[#d1c400]
                                       transition-all duration-300 text-[40px] z-10"
            >
              ‹
            </button>
          )}

          <img
            src={lightbox}
            alt="design"
            className="max-w-[85vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {tabs[activeTab].images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-6 text-white/30 hover:text-[#d1c400]
                                       transition-all duration-300 text-[40px] z-10"
            >
              ›
            </button>
          )}

          <div className="absolute bottom-6 flex gap-3">
            {tabs[activeTab].images.map((img, i) => (
              <div
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox(img);
                  setLightboxIndex(i);
                }}
                className={`w-[60px] h-[40px] overflow-hidden cursor-pointer
                                            transition-all duration-300 border-2
                                            ${
                                              lightboxIndex === i
                                                ? "border-[#d1c400] opacity-100"
                                                : "border-transparent opacity-40 hover:opacity-70"
                                            }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Designgallery;
