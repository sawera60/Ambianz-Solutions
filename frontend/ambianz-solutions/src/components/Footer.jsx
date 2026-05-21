import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiMail, FiPhone } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import logo from "../images/logo.png";
import { useQuoteModal } from "../context/QuoteModalContext.jsx";

const serviceLinks = [
  { label: "Kitchens", path: "/services/kitchens" },
  { label: "Wardrobes", path: "/services/wardrobes" },
  { label: "Doors", path: "/services/doors" },
  { label: "Media Walls", path: "/services/media-walls" },
];

const shopLinks = [
  { label: "Furniture", path: "/shop?category=furniture" },
  { label: "Lighting", path: "/shop?category=lighting" },
  { label: "Mirrors", path: "/shop?category=mirrors" },
  { label: "Home Decor", path: "/shop?category=home-decor" },
  { label: "Hardware", path: "/shop?category=hardware" },
];

export default function Footer() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <footer className="bg-[#F8F6F1] border-t border-[#1A1C19]/10 mt-0">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-7 md:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Ambianz Logo"
                className="w-10 h-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-cinzel text-[#3c5a25] text-[11px] font-bold tracking-[2px] leading-tight">
                  AMBIANZ SOLUTIONS
                </span>
                <span className="text-[#3c5a25]/50 text-[8px] tracking-[2px] font-medium uppercase">
                  Pvt. Ltd
                </span>
              </div>
            </div>
            <p className="font-raleway text-[11px] md:text-xs text-[#1A1C19]/60 leading-relaxed max-w-[280px]">
              We seamlessly merge full featured ecommerce experiences with
              bespoke architectural services covering modern kitchens, doors,
              wardrobes and media walls.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[FiFacebook, FiInstagram, FaTiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 border border-[#3c5a25]/30 flex items-center justify-center text-[#3c5a25] transition-all duration-300 hover:bg-[#3c5a25] hover:text-white hover:border-[#3c5a25]"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:pl-12">
            <div className="font-raleway text-[9px] md:text-[10px] tracking-[3px] uppercase text-[#3c5a25] font-bold mb-6">
              Services
            </div>
            <nav className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-raleway text-[11px] md:text-xs text-[#1A1C19]/60 hover:text-[#3c5a25] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#adb940]/55 group-hover:bg-[#adb940] transition-colors shrink-0" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Shop */}
          <div>
            <div className="font-raleway text-[9px] md:text-[10px] tracking-[3px] uppercase text-[#3c5a25] font-bold mb-6">
              Shop
            </div>
            <nav className="flex flex-col gap-2.5">
              {shopLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-raleway text-[11px] md:text-xs text-[#1A1C19]/60 hover:text-[#3c5a25] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-[#adb940]/55 group-hover:bg-[#adb940] transition-colors shrink-0" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact + CTA */}
          <div>
            <div className="font-raleway text-[9px] md:text-[10px] tracking-[3px] uppercase text-[#3c5a25] font-bold mb-6">
              Contact
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:ambianz.solutionsit@gmail.com"
                className="font-raleway text-[11px] md:text-xs text-[#1A1C19]/60 hover:text-[#3c5a25] transition-colors flex items-center gap-2"
              >
                <FiMail className="text-[#adb940] shrink-0" size={13} />
                ambianz.solutionsit@gmail.com
              </a>
              <a
                href="tel:+923317416486"
                className="font-raleway text-[11px] md:text-xs text-[#1A1C19]/60 hover:text-[#3c5a25] transition-colors flex items-center gap-2"
              >
                <FiPhone className="text-[#adb940] shrink-0" size={13} />
                +92 331 7416486
              </a>
            </div>

            <div className="mt-5">
              <button
                onClick={openQuoteModal}
                className="inline-block border border-[#3c5a25] text-[#3c5a25] text-[9px] md:text-[10px] tracking-[2.5px] px-6 py-2 font-raleway font-bold uppercase transition-all duration-300 hover:bg-[#3c5a25] hover:text-[#F8F6F1] cursor-pointer"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A1C19]/10 bg-[#f0eee6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-raleway text-[10px] text-[#1A1C19]/45 text-center md:text-left">
            © 2025 Ambianz Solutions Pvt.Ltd. All rights reserved.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms & Conditions"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-raleway text-[10px] text-[#1A1C19]/45 hover:text-[#3c5a25] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
