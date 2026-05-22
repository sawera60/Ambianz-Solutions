import React from "react";
import cafe1 from "../../images/projectphotos/cafe1stimg.jpg";
import cafe2 from "../../images/projectphotos/cafe2ndimg.jpg";
import cafe3 from "../../images/projectphotos/cafe3rdimg.jpg";
import execOffice1 from "../../images/projectphotos/Executiveofice.jpg";
import execOffice2i from "../../images/projectphotos/Executiveofice2(i).jpg";
import execOffice2ii from "../../images/projectphotos/Executiveofice2(ii).jfif";
import kitchen1 from "../../images/projectphotos/kitchendesign1.jpg";
import kitchen2 from "../../images/projectphotos/kitchendesign2.png";
import kitchen2i from "../../images/projectphotos/kitchendesign2nd(i).jpg";
import kitchen2ii from "../../images/projectphotos/kitchendesign2nd(ii).jpg";
import kitchen3 from "../../images/projectphotos/kitchendesign3rd.jpg";
import kitchen4 from "../../images/projectphotos/kitchendesign4rth.jpg";
import kitchen5 from "../../images/projectphotos/kitchendesign5th.jpg";
import mediaWall from "../../images/projectphotos/mediawall.jfif";
import officeRestroom from "../../images/projectphotos/officerestroom.jpg";
import CTAStrip from "../Home/components/CTAStrip";

const kitchenProjects = [
  {
    src: kitchen1,
    title: "Full kitchen renewal",
    description: "A complete kitchen fitout with integrated appliances, soft-close cabinetry, and premium stone worktops.",
  },
  {
    src: kitchen2,
    title: "Contemporary kitchen study",
    description: "A crisp, modern arrangement with hidden storage, ambient underlighting and a refined palette.",
  },
  {
    src: kitchen2i,
    title: "Kitchen design 2 – view A",
    description: "Side A of the same kitchen project showing the seamless transition between cooking and dining zones.",
  },
  {
    src: kitchen2ii,
    title: "Kitchen design 2 – view B",
    description: "Side B highlights the functional work area and custom finish details we installed.",
  },
  {
    src: kitchen3,
    title: "Elegant kitchen layout",
    description: "A refined kitchen designed for family living, with premium joinery and practical circulation.",
  },
  {
    src: kitchen4,
    title: "Luxury island kitchen",
    description: "A statement island kitchen with warm wood tones and sophisticated material layering.",
  },
  {
    src: kitchen5,
    title: "Modern kitchen flow",
    description: "A contemporary kitchen with sharp lines, custom storage and visual harmony throughout.",
  },
];

const cafeProjects = [
  {
    src: cafe1,
    title: "Cafe fitout — feature counter",
    description: "A hospitality space finished with curated textures and a welcoming coffee bar layout.",
  },
  {
    src: cafe2,
    title: "Cafe interior — seating zone",
    description: "Warm seating areas and ambient lighting built for guest comfort and brand appeal.",
  },
  {
    src: cafe3,
    title: "Cafe fitout — service area",
    description: "A functional service area executed with quality fixtures, storage and material contrast.",
  },
];

const officeProjects = [
  {
    src: execOffice1,
    title: "Executive office suite",
    description: "A polished office interior with refined joinery, premium finishes, and polished details.",
  },
  {
    src: execOffice2i,
    title: "Executive office 2 — side A",
    description: "One perspective of the executive fitout showing the premium boardroom aesthetic.",
  },
  {
    src: execOffice2ii,
    title: "Executive office 2 — side B",
    description: "The second perspective highlights custom storage, display and meeting space design.",
  },
];

const mediaProjects = [
  {
    src: mediaWall,
    title: "Media wall feature",
    description: "A bespoke media wall installation crafted to be the focal point of the living space.",
  },
];

const restroomProjects = [
  {
    src: officeRestroom,
    title: "Restroom finish",
    description: "A premium restroom interior completed with clean lines, elegant surfaces, and thoughtful detailing.",
  },
];

const ProjectCard = ({ src, title, description }) => (
  <article className="group overflow-hidden rounded-4xl border border-[#e0ddd5] bg-white shadow-[0_18px_70px_rgba(28,40,23,0.06)] transition-transform duration-500 hover:-translate-y-1">
    <div className="relative h-72 overflow-hidden bg-[#f8f6f1]">
      <img
        src={src}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <div className="px-6 py-6">
      <h3 className="font-cinzel text-sm font-semibold uppercase tracking-[2px] text-[#3c5a25]">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#4f4f42] font-raleway">
        {description}
      </p>
    </div>
  </article>
);

const ProjectSection = ({ heading, lead, actions, projects }) => (
  <section className="space-y-10">
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
      <div>
        <p className="font-raleway text-[10px] tracking-[4px] uppercase text-[#adb940]">
          {heading}
        </p>
        <h2 className="mt-4 font-cinzel text-3xl md:text-4xl text-[#1A1C19] font-semibold leading-tight">
          {lead}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-[#4f4f42] font-raleway">
          {actions}
        </p>
      </div>
      <div className="rounded-4xl border border-[#e0ddd5] bg-[#fffdf8] p-8 shadow-[0_20px_80px_rgba(28,40,23,0.06)]">
        <p className="font-raleway text-xs uppercase tracking-[3px] text-[#3c5a25]">
          Ambianz delivered
        </p>
        <p className="mt-4 text-sm leading-7 text-[#4f4f42] font-raleway">
          {heading === "Kitchen Projects"
            ? "From concept to installation, these kitchens were fully completed by our team."
            : heading === "Cafe Projects"
            ? "Hospitality spaces designed for strong first impressions and durable performance."
            : heading === "Office Projects"
            ? "Workspaces finished to suit executive standards and polished brand presentation."
            : heading === "Media Wall Projects"
            ? "Feature walls created with precision joinery and show-stopping material detail."
            : "Restroom interiors delivered with premium finishes and a refined user experience."}
        </p>
      </div>
    </div>

    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

const Projects = () => {
  return (
    <main className="bg-[#F8F6F1]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Text */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-raleway text-[10px] tracking-[5px] uppercase text-[#adb940]">
                Ambianz Projects
              </p>
              <h1 className="font-cinzel text-5xl lg:text-6xl leading-tight text-[#1A1C19] font-semibold">
                Kitchens, cafes, offices & more.
              </h1>
              <p className="max-w-xl text-base leading-8 text-[#4f4f42] font-raleway">
                Every project displayed here was designed, built and finished by Ambianz Solutions. From custom kitchen fitouts to hospitality interiors and executive offices.
              </p>
            </div>

            <div className="h-px w-16 bg-[#adb940]" />

            <div className="text-sm font-raleway text-[#4f4f42] space-y-3">
              <p>✓ Kitchen fitouts with bespoke cabinetry</p>
              <p>✓ Cafe & hospitality interior design</p>
              <p>✓ Executive office spaces</p>
              <p>✓ Media walls & feature installations</p>
            </div>
          </div>

          {/* Right: Featured Image */}
          <div className="relative overflow-hidden rounded-[40px] border border-[#e0ddd5] bg-[#1A1C19] shadow-[0_40px_140px_rgba(28,40,23,0.2)]">
            <img
              src={kitchen1}
              alt="Featured kitchen project"
              className="h-full w-full object-cover object-[center_65%] aspect-3/4"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#1A1C19]/95 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
              <p className="font-raleway text-[11px] tracking-[4px] uppercase text-white/80">
                Featured Project
              </p>
              <h2 className="font-cinzel text-4xl text-white font-semibold leading-tight">
                Modern Kitchen
              </h2>
              <p className="text-sm leading-7 text-white/90 font-raleway max-w-sm">
                Custom design with premium cabinetry, integrated appliances, and elegant finishes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 space-y-24">
          <ProjectSection
            heading="Kitchen Projects"
            lead="Kitchens finished with intelligent function and refined detail"
            actions="This section highlights the kitchen projects we completed from measurement to installation, with bespoke storage, elegant surfaces and intuitive design."
            projects={kitchenProjects}
          />

          <ProjectSection
            heading="Cafe Projects"
            lead="Hospitality interiors built to welcome customers"
            actions="Cafe fitouts that combine ergonomic flow, polished counters, and atmosphere-enhancing materials."
            projects={cafeProjects}
          />

          <ProjectSection
            heading="Office Projects"
            lead="Executive spaces designed for professionalism and comfort"
            actions="Office interiors finished with premium joinery, display storage, and thoughtful layout for modern business environments."
            projects={officeProjects}
          />

          <ProjectSection
            heading="Media Wall Projects"
            lead="Feature walls that anchor the room"
            actions="Media wall installations created to showcase technology and style in a seamless built-in solution."
            projects={mediaProjects}
          />

          <ProjectSection
            heading="Restroom Projects"
            lead="Restroom finishes with premium material choices"
            actions="Restroom interiors completed with refined surfaces, clean details and a polished final look."
            projects={restroomProjects}
          />
        </div>
      </div>
       <CTAStrip/>
    </main>
   
  );
};

export default Projects;
