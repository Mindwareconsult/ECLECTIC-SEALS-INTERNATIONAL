import { ServiceItem, ProjectItem, TestimonialItem, TeamMember, FaqItem, BlogPost } from '../types';

export const SITE_CONFIG = {
  name: "Eclectic Seals Int'l",
  tagline: "From Concept To Blueprint To Reality.",
  eyebrow: "Abuja's Premium Design & Construction Studio",
  description: "From luxury interior design and bespoke furnishings to large-scale construction, renovation, landscaping, paint manufacturing, and property management, Eclectic Seals Int'l delivers timeless spaces built with excellence.",
  phone1: "08027997172",
  phone2: "081600422514",
  phone1Tel: "+2348027997172",
  phone2Tel: "+23481600422514",
  whatsapp: "2348027997172",
  email: "eclecticseals@gmail.com",
  address: "11 Mungo Park Close, Asokoro, Abuja, Nigeria",
  hours: "Mon – Fri: 8am – 5pm | Sat: 9am – 2pm | Sun: Closed",
  facebook: "https://www.facebook.com/share/1JaoMTg6S8/",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "interior-design",
    title: "Interior Design",
    shortDesc: "We shape residential and commercial interiors around how a space will actually be used, layering in lighting, materials, and bespoke styling.",
    fullDesc: "Our interior design service transforms blank shells and dated spaces into captivating, functional environments. We balance refined aesthetics with spatial practicality, crafting custom floor plans, 3D renderings, bespoke finishes, and lighting architectures tailored specifically to your lifestyle or brand identity.",
    bullets: [
      "Residential & Commercial Interiors",
      "Space Planning & Flow Architecture",
      "Bespoke Lighting Design",
      "Custom Furniture & Texture Selection",
      "Photo-realistic 3D Visualizations",
      "Curated Mood Boards & Luxury Styling"
    ],
    deliverables: [
      "Complete 3D photorealistic renderings",
      "Schematic space layouts and CAD elevations",
      "Detailed materials, textiles & finishes schedule",
      "Site procurement and supervisory handoff"
    ],
    icon: "M4 4h16v16H4zM4 9h16M9 9v11",
    image: "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-06.jpeg"
  },
  {
    id: "interior-finishing",
    title: "Interior Finishing & Furnishing",
    shortDesc: "The architectural details that separate ordinary rooms from mastercrafted spaces: precision POP ceilings, seamless floors, and custom joinery.",
    fullDesc: "Execution is everything in interior architecture. Our dedicated craftspeople deliver clean-lined POP cornices, acoustic plaster ceilings, imported Italian tiles, premium hardwood flooring, custom-built fitted wardrobes, luxury kitchens, and tailored window drapery.",
    bullets: [
      "Architectural POP Ceilings",
      "Custom Wall Panels & Acoustic Cladding",
      "Marble & Vitrified Tile Flooring",
      "Bespoke Kitchens & Modular Cabinetry",
      "Fitted Wardrobes & Walk-in Closets",
      "Designer Curtains, Blinds & Automation"
    ],
    deliverables: [
      "Millwork fabrication and installation drawings",
      "Surface flatness quality certifications",
      "Complete hardware and soft furnishings supply"
    ],
    icon: "M3 21l6-6M14 4l6 6-9 9H5v-6z",
    image: "/assets/projects/tv-console-installations/tv-console-installations-05.jpeg"
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    shortDesc: "Comprehensive remodeling that updates older residences, embassies, and commercial structures to modern structural and energy standards.",
    fullDesc: "We specialize in complex structural revamps, diplomatic missions, and luxury residence modernization across Abuja. Our project managers sequence structural alterations, mechanical revamps, and cosmetic overhauls with meticulous scheduling to minimize disruption.",
    bullets: [
      "Residential Structural Renovations",
      "Commercial & Corporate Office Remodeling",
      "Embassy & Diplomatic Facility Upgrades",
      "Modern Kitchen & Spa Bathroom Overhauls",
      "Structural Reinforcement & Re-roofing",
      "Mechanical, Electrical & Plumbing Overhauls"
    ],
    deliverables: [
      "Structural integrity audit report",
      "Phased demolition and rebuilding timeline",
      "Itemized bill of quantities with zero hidden costs"
    ],
    icon: "M14 2 4 12l3 3L17 5zM17 5l2 2M9 15l-4 4 3 1 1 3 4-4",
    image: "/assets/projects/chinese-cultural-center/renovation-hero.jpg"
  },
  {
    id: "landscaping",
    title: "Landscaping & Exterior Architecture",
    shortDesc: "Outdoor spaces engineered and planted with the same precision and aesthetic elegance as the luxury interiors they complement.",
    fullDesc: "We craft seamless outdoor living areas combining tropical horticulture, interlocking pavers, drainage solutions, exterior architectural lighting, pergolas, and serene water features designed for Abuja's climate.",
    bullets: [
      "Bespoke Landscape Garden Design",
      "High-Traffic Interlock & Stone Paving",
      "Outdoor Architectural & Path Lighting",
      "Water Cascades, Fountains & Reflection Ponds",
      "Pergolas, Gazebos & Outdoor Lounges",
      "Automated Irrigation & Flora Maintenance"
    ],
    deliverables: [
      "Botanical and hardscape master plan",
      "Drainage and grading civil designs",
      "Ongoing scheduled landscape care plan"
    ],
    icon: "M12 2v6M8 6l4 2 4-2M4 22c2-6 6-9 8-9s6 3 8 9M2 22h20",
    image: "/assets/projects/landscaping-solutions/landscaping-solutions-03.jpeg"
  },
  {
    id: "supplies",
    title: "Construction Supplies & Logistics",
    shortDesc: "Dependable procurement and delivery of tested building materials, structural steel, aggregates, and imported fixtures on schedule.",
    fullDesc: "Through our vetted supply chain networks and direct factory relationships, we supply premium-grade cement, reinforcement rebars, vitrified porcelain tiles, specialized MEP fixtures, and industrial waterproofing membranes for projects of every scale.",
    bullets: [
      "Certified High-Strength Cement & Aggregates",
      "Structural Steel Rebars & Mesh",
      "Imported Porcelain & Ceramic Tiles",
      "Concealed Electrical & Plumbing Materials",
      "Stone-Coated & Aluminum Roofing Systems",
      "Waterproofing & Insulation Membranes"
    ],
    deliverables: [
      "Batch testing certificates",
      "Direct-to-site crane and flatbed delivery",
      "Wholesale volume pricing tiers"
    ],
    icon: "M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10",
    image: "/assets/projects/floor-tiles-installation/floor-tiles-installation-01.jpeg"
  },
  {
    id: "construction",
    title: "Building & Civil Construction",
    shortDesc: "End-to-end residential and commercial construction managed by licensed civil engineers from groundbreaking through turnkey handover.",
    fullDesc: "From luxury private villas in Asokoro to multi-storey commercial complexes in Central Business District, our engineering team manages foundation excavation, reinforced concrete framing, masonry, services integration, and turnkey finishing under rigorous quality protocols.",
    bullets: [
      "Luxury Residential Villa Construction",
      "Commercial Complexes & Office Plazas",
      "Industrial Warehouses & Distribution Centers",
      "Civil Engineering & Retaining Structures",
      "Rigorous On-Site Quality Control & Testing",
      "Full Turnkey Project Management"
    ],
    deliverables: [
      "Council approval documentation & permits",
      "Daily digital progress reports and milestones",
      "Turnkey structural warranty & operations manual"
    ],
    icon: "M3 21V9l6-4 6 4v12M9 21V13h6v8M15 21V11l6-3v13",
    image: "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg"
  },
  {
    id: "paint",
    title: "Paint Manufacturing & Coatings",
    shortDesc: "In-house paint formulation offering rich pigmentation, fungus-resistant formulas, and computerized color matching built for the Nigerian climate.",
    fullDesc: "Eclectic Seals manufactures our own line of high-grade emulsion, gloss, textured, and protective coatings. Formulated specifically to resist UV degradation and tropical monsoon humidity, our paints guarantee uniform coverage, rich depth of tone, and lasting durability.",
    bullets: [
      "Premium Interior Silk & Matte Emulsions",
      "Weather-Shield Exterior Acrylic Coatings",
      "Textured & Trowel-On Architectural Finishes",
      "Computerized Custom Color Formulation",
      "Anti-Fungal & Anti-Algae Chemistry",
      "Low-VOC Eco-Friendly Formulations"
    ],
    deliverables: [
      "Lab spectrophotometer color matching",
      "Direct factory supply in 20L/4L drums",
      "Technical surface preparation guidance"
    ],
    icon: "M19 3H9a2 2 0 0 0-2 2v6l-3 7a2 2 0 0 0 2 3h9l3-9V5a2 2 0 0 0-2-2z",
    image: "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-14.jpeg"
  },
  {
    id: "property",
    title: "Real Estate Property Management",
    shortDesc: "Comprehensive facility management and asset protection for landlords, diplomats, and property investors requiring hands-off peace of mind.",
    fullDesc: "We safeguard the physical and financial value of your real estate investments. Our dedicated property managers handle preventive maintenance, utility management, tenant vetting, lease compliance, 24/7 emergency repairs, and detailed financial accounting.",
    bullets: [
      "Integrated Facility & Systems Management",
      "Preventive & Corrective Maintenance",
      "Tenant Vetting, Placement & Rent Collection",
      "Quarterly Detailed Property Inspections",
      "Asset Value Protection & Capital Works",
      "Estate Administration & Investment Advisory"
    ],
    deliverables: [
      "Comprehensive asset condition audit",
      "Monthly financial disbursement statements",
      "Dedicated 24/7 tenant helpdesk line"
    ],
    icon: "M3 10.5 12 3l9 7.5M5 9v11h14V9M9 20v-6h6v6",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "pool",
    title: "Swimming Pool Construction & Maintenance",
    shortDesc: "End-to-end aquatic engineering: reinforced concrete gunite pools, mosaic glass tiling, multi-stage filtration, and chemical care.",
    fullDesc: "Transform private compounds or hospitality properties with custom vanishing-edge, skimmer, or overflow swimming pools. We engineer structural reinforced concrete shells, plumb energy-efficient filtration systems, install underwater LED illumination, and provide weekly maintenance.",
    bullets: [
      "Custom Residential & Commercial Pool Construction",
      "Spanish Glass Mosaic & Coping Stone Tiling",
      "High-Efficiency Sand Filtration & Pumps",
      "Automated Saltwater & Chlorination Systems",
      "Underwater Architectural LED Lighting",
      "Scheduled Water Treatment & Chemical Balancing"
    ],
    deliverables: [
      "Hydraulic flow and piping schematics",
      "Pressure-tested structural shell certificate",
      "Weekly water testing and maintenance routine"
    ],
    icon: "M2 17c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0 3 1.2 4.5 0M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80"
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "liberia-embassy-renovation",
    title: "Renovation of The Republic of Liberia Embassy",
    category: "renovation",
    location: "Central Area, Abuja",
    scope: "Diplomatic Mission Chancery Renovation & Comprehensive Restoration",
    clientType: "Diplomatic Mission",
    summary: "Complete structural overhaul, facade modernization, and dignitary-grade interior restoration for the Republic of Liberia Embassy in Abuja's Central Diplomatic Zone. Works included perimeter structural stabilization, consular hall reconfiguration, high-durability weather-shield coatings, and diplomatic reception suites.",
    image: "/assets/projects/liberia-embassy/after-renovation.jpg",
    beforeImage: "/assets/projects/liberia-embassy/before-renovation.jpg",
    afterImage: "/assets/projects/liberia-embassy/after-renovation.jpg",
    featured: true,
    completionDate: "Completed 2025",
    servicesProvided: ["Diplomatic Facility Renovation", "Exterior Facade Restoration", "Consular Suite Fit-out", "Security Perimeter Hardening"],
    keyHighlights: [
      "Transformed aged institutional building into a modern diplomatic chancery",
      "Applied weather-resistant acrylic coatings formulated to resist high tropical UV and rains",
      "Seamless mechanical, electrical, and diplomatic communication rewiring",
      "Dignitary VIP meeting room and ambassadorial suite upgrades"
    ],
    gallery: [
      "/assets/projects/liberia-embassy/after-renovation.jpg",
      "/assets/projects/liberia-embassy/before-renovation.jpg"
    ]
  },
  {
    id: "chinese-cultural-center-renovation",
    title: "Renovation of Chinese Cultural Center",
    category: "renovation",
    location: "Wuse 2, Abuja",
    scope: "Full Architectural Renovation & Cultural Space Modernization",
    clientType: "Cultural & Diplomatic Institution",
    summary: "Comprehensive renovation and interior spatial modernization of the renowned Chinese Cultural Center in Wuse 2, Abuja. Eclectic Seals revamped the main ceremonial auditorium, interactive exhibition galleries, conference suites, and cultural classrooms with refined acoustic paneling, ambient LED lighting, and polished architectural woodwork.",
    image: "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
    beforeImage: "/assets/projects/chinese-cultural-center/chinese-cultural-center-01.jpeg",
    afterImage: "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
    featured: true,
    completionDate: "Completed 2024",
    servicesProvided: ["Architectural Renovation", "Exhibition Hall Modernization", "Acoustic Wall Paneling", "Decorative Ceiling Finishes"],
    keyHighlights: [
      "Upgraded historic cultural landmark with modern energy-efficient infrastructure",
      "Crafted bespoke acoustic wall panels and ceremonial lighting installations",
      "Complete refurbishment of exhibition halls and diplomatic gathering spaces",
      "Precision floor resurfacing and climate-controlled gallery preparation"
    ],
    gallery: [
      "/assets/projects/chinese-cultural-center/renovation-hero.jpg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-01.jpeg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-02.jpeg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-03.jpeg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-04.jpeg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-05.jpeg",
      "/assets/projects/chinese-cultural-center/chinese-cultural-center-06.jpeg"
    ]
  },
  {
    id: "estate-concrete-road-gudu",
    title: "Estate Concrete Road & Drainage Infrastructure",
    category: "construction",
    location: "Gudu District, Abuja",
    scope: "Heavy-Duty Reinforced Rigid Pavement & Stormwater Drainage Engineering",
    clientType: "Residential Estate Development",
    summary: "Full civil engineering design and execution of reinforced rigid concrete roads, curbs, and subterranean drainage networks for a premier gated residential estate in Gudu, Abuja. Engineered with laser-guided grading, heavy steel reinforcement mesh, and engineered expansion joints built to withstand decades of vehicular traffic.",
    image: "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg",
    featured: true,
    completionDate: "Completed 2025",
    servicesProvided: ["Civil Engineering", "Reinforced Rigid Concrete Pavement", "Stormwater Drainage Channels", "Roadway Sub-base Compaction"],
    keyHighlights: [
      "Grade 30 reinforced concrete mix with computerized batching for maximum compressive strength",
      "Integrated continuous roadside gutters with interlocking access slabs",
      "Precision expansion joint spacing with elastomeric sealant prevents monsoon water ingress",
      "Laser-leveled roadway crown for rapid stormwater shedding and zero puddle accumulation"
    ],
    gallery: [
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-02.jpeg",
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-01.jpeg",
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-03.jpeg",
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-04.jpeg",
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-05.jpeg",
      "/assets/projects/estate-concrete-road-gudu/estate-concrete-road-gudu-06.jpeg"
    ]
  },
  {
    id: "interior-cabinet-furnishings",
    title: "Bespoke Millwork, Fitted Wardrobes & Cabinetry",
    category: "interior-design",
    location: "Maitama & Asokoro, Abuja",
    scope: "Luxury Fitted Closets, Modular Storage, Pantry Cabinets & Architectural Joinery",
    clientType: "Luxury Residential Estates",
    summary: "Tailored architectural cabinetry and custom luxury wardrobe systems crafted for upscale residences across Maitama and Asokoro. Each installation combines moisture-resistant high-density boards, German soft-close hydraulic runners, integrated concealed warm LED profile lighting, and custom reeded glass accents.",
    image: "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-06.jpeg",
    featured: true,
    completionDate: "Continuous Client Commissions",
    servicesProvided: ["Custom Millwork", "Fitted Bedroom Closets", "Pantry & Kitchen Cabinets", "Integrated LED Accent Profiles"],
    keyHighlights: [
      "Precision shop-built joinery assembled on-site with zero gap tolerances",
      "High-durability scratch-resistant textured laminates and acrylic fronts",
      "Intelligent interior organizers, pull-out trouser racks, and concealed jewelry compartments",
      "Concealed LED strip channels with micro-sensors that light up automatically upon door opening"
    ],
    gallery: [
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-06.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-01.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-02.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-03.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-04.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-05.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-07.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-08.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-09.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-10.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-11.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-12.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-13.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-14.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-15.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-16.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-17.jpeg",
      "/assets/projects/interior-cabinet-furnishings/interior-cabinet-furnishings-18.jpeg"
    ]
  },
  {
    id: "tv-console-installations",
    title: "Bespoke TV Consoles & Architectural Feature Walls",
    category: "interior-design",
    location: "Wuse 2 & Jabi, Abuja",
    scope: "Media Center Joinery, Fluted Wall Cladding, Porcelain Slabs & Wire Invisibility Systems",
    clientType: "Executive Residences & Luxury Penthouses",
    summary: "Statement living room media centers designed and installed by Eclectic Seals. Featuring fluted timber slats, book-matched porcelain slab wall backdrops, floating consoles with soft-closing drawers, and smart wire conduits that ensure zero visible cables.",
    image: "/assets/projects/tv-console-installations/tv-console-installations-05.jpeg",
    featured: true,
    completionDate: "Completed 2025",
    servicesProvided: ["TV Console Joinery", "Acoustic Wall Slatting", "Porcelain Feature Backsplashes", "Concealed Cable Engineering"],
    keyHighlights: [
      "Floating consoles engineered with high load-bearing concealed steel wall anchors",
      "Seamless integration of ambient indirect backlighting around TV screen brackets",
      "Custom fluted vertical wall paneling that enhances living room acoustics",
      "Ventilated hidden compartments for sound systems, decoders, and gaming consoles"
    ],
    gallery: [
      "/assets/projects/tv-console-installations/tv-console-installations-05.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-01.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-02.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-03.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-04.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-06.jpeg",
      "/assets/projects/tv-console-installations/tv-console-installations-07.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-01.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-02.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-03.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-04.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-05.jpeg",
      "/assets/projects/tv-console-installations-2/tv-console-installations-2-06.jpeg"
    ]
  },
  {
    id: "gypsum-pop-ceiling-designs",
    title: "Architectural Gypsum & POP Suspended Ceilings",
    category: "interior-design",
    location: "Guzape & Katampe, Abuja",
    scope: "Multi-level False Ceilings, Perimeter Shadow-Gaps & Concealed Cove Lighting Trays",
    clientType: "Private Residential Villas",
    summary: "Artisan Plaster of Paris (POP) and moisture-resistant gypsum false ceiling installations. Features geometric layered trays, concealed LED ambient perimeter glow channels, recessed magnetic track lights, and razor-sharp shadow gap edges that elevate ceiling height perception.",
    image: "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-01.jpeg",
    featured: false,
    completionDate: "Completed 2025",
    servicesProvided: ["POP Ceiling Artistry", "Gypsum Board Framing", "Perimeter Cove Light Trays", "Acoustic Plaster Finishes"],
    keyHighlights: [
      "Heavy-duty galvanized steel grid framing prevents future ceiling sagging or micro-cracks",
      "Seamless skim-coating and joint taping for pristine marble-smooth paint finishes",
      "Custom recessed slots for magnetic architectural track lights and concealed AC diffusers",
      "Superior thermal and acoustic insulation damping between upper and lower floors"
    ],
    gallery: [
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-01.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-02.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-03.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-04.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-05.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-06.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-07.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-08.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-09.jpeg",
      "/assets/projects/gypsum-pop-ceiling-designs/gypsum-pop-ceiling-designs-10.jpeg"
    ]
  },
  {
    id: "floating-stairs-design",
    title: "Architectural Cantilevered Floating Staircase",
    category: "interior-design",
    location: "Asokoro Extension, Abuja",
    scope: "Structural Steel Cantilever Spines, Hardwood Treads & Frameless Glass Balustrades",
    clientType: "Modern Private Villa",
    summary: "Spectacular cantilevered floating staircase designed as a sculptural centerpiece in a private luxury residence. Each solid hardwood tread appears to hover unsupported from the reinforced masonry wall, stabilized by concealed high-tensile steel anchors and complemented by crystal clear tempered glass balustrades.",
    image: "/assets/projects/floating-stairs-design/floating-stairs-design-03.jpeg",
    featured: false,
    completionDate: "Completed 2024",
    servicesProvided: ["Cantilever Staircase Engineering", "Steel Substructure Fabrication", "Solid Hardwood Tread Encasement", "Frameless Tempered Glass"],
    keyHighlights: [
      "Rigid structural calculation eliminates tread vibration or bounce under human load",
      "Concealed in-wall structural steel box-beam spine embedded into reinforced columns",
      "Warm integrated under-tread LED night lights that illuminate every stepping surface",
      "12mm laminated architectural safety glass balustrades with stainless-steel base spigots"
    ],
    gallery: [
      "/assets/projects/floating-stairs-design/floating-stairs-design-03.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-01.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-02.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-04.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-05.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-06.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-07.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-08.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-09.jpeg",
      "/assets/projects/floating-stairs-design/floating-stairs-design-10.jpeg"
    ]
  },
  {
    id: "floor-tiles-installation",
    title: "Precision Floor & Wall Porcelain Tile Finishing",
    category: "construction",
    location: "Apo & Lokogoma Districts, Abuja",
    scope: "Large-Format Vitrified Porcelain Tiling, Laser Surface Alignment & Epoxy Grouting",
    clientType: "Residential & Commercial Developments",
    summary: "Flawless tiling solutions across luxury homes and commercial spaces. Utilizing precision laser levelers and mechanical leveling clip systems, our master tile setters ensure true 0mm lip page, razor-thin expansion gaps, and waterproof epoxy grout lines that never discolor.",
    image: "/assets/projects/floor-tiles-installation/floor-tiles-installation-01.jpeg",
    featured: false,
    completionDate: "Completed 2025",
    servicesProvided: ["Large-Format Porcelain Tiling", "Floor Screed Self-Leveling", "Laser Alignment & Clip Leveling", "Waterproof Epoxy Grouting"],
    keyHighlights: [
      "Installation of 600x1200mm and 800x1600mm oversized porcelain slabs with zero lippage",
      "High-grade flexible polymer-modified thinset mortars for high-temperature resilience",
      "Precision diamond-blade wet miter 45-degree edge cuts for pristine corner profiles",
      "100% waterproof chemical-resistant epoxy grout lines across bathrooms and kitchens"
    ],
    gallery: [
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-01.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-02.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-03.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-04.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-05.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-06.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-07.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-08.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-09.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-10.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-11.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-12.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-13.jpeg",
      "/assets/projects/floor-tiles-installation/floor-tiles-installation-14.jpeg"
    ]
  },
  {
    id: "landscaping-solutions",
    title: "Estate Landscaping, Hardscaping & Grounds Beautification",
    category: "landscaping",
    location: "Maitama & Guzape Hills, Abuja",
    scope: "Tropical Horticulture, Interlocking Pavements, Natural Stone Curbs & Drainage",
    clientType: "Private Luxury Compounds & Corporate Grounds",
    summary: "Complete outdoor environment design merging tropical horticultural beauty with structural durability. Projects include custom geometric interlocking brick driveways, elevated decorative planters, manicured lawns, stone retaining tiers, and automated drip irrigation networks.",
    image: "/assets/projects/landscaping-solutions/landscaping-solutions-03.jpeg",
    featured: true,
    completionDate: "Completed 2025",
    servicesProvided: ["Landscape Architecture", "Interlocking Paver Driveways", "Horticultural Garden Planting", "Compound Stormwater Drainage"],
    keyHighlights: [
      "Engineered multi-tone interlocking pavers laid on compacted gravel base with edge restraints",
      "Selection of climate-acclimatized tropical foliage and shade palms requiring minimal water",
      "Concealed sub-surface storm drains preventing estate waterlogging during heavy downpours",
      "Decorative stone retaining planter beds with warm low-voltage landscape spot lighting"
    ],
    gallery: [
      "/assets/projects/landscaping-solutions/landscaping-solutions-03.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-01.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-02.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-04.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-05.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-06.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-07.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-08.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-09.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-10.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-11.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-12.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-13.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-14.jpeg",
      "/assets/projects/landscaping-solutions/landscaping-solutions-15.jpeg"
    ]
  },
  {
    id: "painting-architectural-coatings",
    title: "In-House Paint Production & Architectural Finishing",
    category: "paint",
    location: "Abuja Industrial Area & Prime Sites",
    scope: "Formulation of Premium Emulsions, Texcote Application & Specialty Decorative Finishes",
    clientType: "Commercial Developers & Private Estates",
    summary: "Field and laboratory showcase of Eclectic Seals' proprietary paint manufacturing operations and master coating applications. Our in-house chemical formulations guarantee rich depth of color, anti-fungal protection against tropical humidity, and exceptional washability across interior and exterior walls.",
    image: "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-14.jpeg",
    featured: false,
    completionDate: "Continuous Production & Application",
    servicesProvided: ["Proprietary Paint Formulation", "Exterior Texcote Weather-Shielding", "Interior Silk & Matte Emulsions", "Computerized Color Matching"],
    keyHighlights: [
      "Rigorous chemical quality testing ensuring high opacity, adhesion, and UV colorfastness",
      "Direct factory supply to construction sites ensures zero adulteration and bulk cost savings",
      "Professional spray and roller application crews delivering seamless brush-free surfaces",
      "Specialty anti-algae and water-repellent chemistry for harsh Nigerian wet season resistance"
    ],
    gallery: [
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-14.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-01.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-02.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-03.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-04.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-05.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-06.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-07.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-08.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-09.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-10.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-11.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-12.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-13.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-15.jpeg",
      "/assets/projects/painting-architectural-coatings/painting-architectural-coatings-16.jpeg"
    ]
  },
  {
    id: "mabushi-residential-renovation",
    title: "Ongoing Renovation of Residential Building",
    category: "renovation",
    location: "Mabushi, Abuja",
    scope: "Structural Redesign, Parapet Modernization, MEP Overhaul & Turnkey Finishing",
    clientType: "Private Residential Owner",
    summary: "Active large-scale residential renovation converting a dated two-story building into a contemporary luxury residence in Mabushi, Abuja. Involves structural load transfer for larger open-plan living rooms, new roof parapet lines, insulated windows, and complete building services modernization.",
    image: "/assets/projects/mabushi-residential/ongoing-renovation.jpg",
    featured: false,
    completionDate: "In Progress (2025/2026)",
    servicesProvided: ["Structural Remodeling", "Facade Redesign", "Roof Parapet Reconstruction", "Electrical & Plumbing Overhaul"],
    keyHighlights: [
      "Engineered structural lintels and columns enabling open-concept layout expansion",
      "Complete exterior aesthetic renewal with modern architectural lines and finishes",
      "Full MEP replacement with concealed PEX plumbing and fire-rated electrical cabling",
      "Staged demolition preserving critical load-bearing structural integrity throughout"
    ],
    gallery: [
      "/assets/projects/mabushi-residential/ongoing-renovation.jpg"
    ]
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Dr. Aliyu Mohammed",
    role: "Private Homeowner, Asokoro",
    text: "Eclectic Seals took over our residential project after a previous contractor stalled. Their attention to detail on the POP ceilings and marble work was nothing short of extraordinary. Delivered on schedule with complete budget transparency.",
    avatarColor: "#0F172A",
    stars: 5
  },
  {
    id: "testi-2",
    name: "Ambassador K. Johnson",
    role: "Diplomatic Mission Representative",
    text: "Managing a diplomatic mission renovation requires strict adherence to security, international finishes, and unyielding deadlines. Engr. Edward and the Eclectic Seals crew handled every specification with supreme professionalism.",
    avatarColor: "#1B2842",
    stars: 5
  },
  {
    id: "testi-3",
    name: "Chief (Mrs.) Folake Adeleke",
    role: "Real Estate Developer, Maitama",
    text: "We have partnered with Eclectic Seals across three luxury developments. Their in-house paint manufacturing gives their finishes a durability and lustre that stands out against anything else on the Abuja market.",
    avatarColor: "#F5810D",
    stars: 5
  },
  {
    id: "testi-4",
    name: "Mr. Tunde Balogun",
    role: "Managing Director, Apex Properties",
    text: "From structural engineering to the final coat of paint, having one accountable partner eliminated the usual finger-pointing between subcontractors. Their transparent pricing and weekly progress updates kept our stakeholders thrilled.",
    avatarColor: "#0F172A",
    stars: 5
  },
  {
    id: "testi-5",
    name: "Engr. Nnamdi Eze",
    role: "Commercial Facility Manager, CBD",
    text: "Their property maintenance team responded promptly and effectively to our corporate facility overhaul. The quality of their plumbing, electrical rework, and interior finishing was world-class.",
    avatarColor: "#1B2842",
    stars: 5
  },
  {
    id: "testi-6",
    name: "Mrs. Zainab Bello",
    role: "Villa Owner, Guzape",
    text: "The swimming pool and garden landscape they engineered in Guzape transformed our home into a serene resort. Six months later, the pool filtration and landscaping are performing flawlessly.",
    avatarColor: "#F5810D",
    stars: 5
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "engr-onabe-edward",
    name: "Engr. Onabe Edward",
    role: "Managing Director & CEO",
    title: "Managing Director & Chief Executive Officer (MD/CEO)",
    bio: "Leads the company's strategic vision and brings over 15 years of civil engineering excellence, overseeing projects from architectural conception to turnkey delivery.",
    fullBio: "As the Managing Director and Chief Executive Officer of Eclectic Seals Int'l, Engr. Onabe Edward steers the firm's strategic expansion, engineering excellence, and executive client relationships. With over 15 years of civil engineering and construction management experience across Nigeria's Federal Capital Territory, he has championed major institutional, diplomatic, and luxury residential projects in Abuja. His leadership emphasizes uncompromising structural integrity, transparent bills of quantities, and continuous innovation in local construction materials and in-house paint formulation.",
    image: "/assets/team/md-ceo.jpeg",
    imagePosition: "object-[center_12%]",
    qualifications: [
      "B.Eng. in Civil Engineering",
      "Registered Engineer with COREN (Council for the Regulation of Engineering in Nigeria)",
      "Member of the Nigerian Society of Engineers (MNSE)",
      "Advanced Structural Project Leadership Certification"
    ],
    expertise: [
      "Turnkey Building & Civil Construction",
      "Structural Engineering & Foundation Design",
      "Executive Project Management & Governance",
      "Diplomatic & Institutional Contract Execution"
    ],
    experience: "15+ Years in Civil Construction & Corporate Leadership",
    responsibilities: [
      "Executive leadership, capital allocation, and strategic governance",
      "High-level technical oversight on all structural engineering designs",
      "Direct oversight of turnkey project deliveries and diplomatic contracts",
      "Institutional client relations and government development approvals"
    ],
    achievements: [
      "Successfully delivered the historic renovation of the Republic of Liberia Embassy in Abuja",
      "Spearheaded the establishment of Eclectic Seals' in-house paint manufacturing division",
      "Supervised over 45+ luxury residential and commercial structures from groundbreaking to handover"
    ]
  },
  {
    id: "ohams-claribel",
    name: "Ohams Claribel",
    role: "Lead Space Planner & Interior Designer",
    title: "Lead Space Planner & Interior Designer",
    bio: "Specialises in luxury space planning, bespoke interior architecture, and material harmonies, creating spaces that feel timeless and deeply considered.",
    fullBio: "Ohams Claribel directs the interior architecture and spatial planning studio at Eclectic Seals Int'l. Known for her refined sense of proportion, materials harmony, and lighting choreography, Claribel transforms empty shells into serene, functional sanctuaries. Her portfolio encompasses private estates in Asokoro, executive corporate headquarters in Maitama, and specialized diplomatic mission fit-outs. She works closely with clients from initial 3D concept visualization through to bespoke joinery fabrication, ensuring every environment reflects both aesthetic prestige and daily functional comfort.",
    image: "/assets/team/lead-interior-designer.jpeg",
    imagePosition: "object-[center_20%]",
    qualifications: [
      "B.Sc. in Interior Architecture & Design",
      "Certified Professional Space Planner",
      "Advanced 3D Photorealistic Architectural Rendering Certification",
      "Member of the Interior Designers Association of Nigeria (IDAN)"
    ],
    expertise: [
      "Luxury Residential Interior Architecture",
      "Ergonomic Space Planning & Circulation Flow",
      "Custom Furniture & Bespoke Millwork Design",
      "Photorealistic 3D Concept Visualization & Lighting Design"
    ],
    experience: "10+ Years in Space Planning & Luxury Interiors",
    responsibilities: [
      "Conceptual space planning and ergonomic floor layout design",
      "Creation of 3D photorealistic visualizations and interior mood boards",
      "Selection and specification of luxury textiles, lighting, marble, and custom joinery",
      "Direct on-site supervision of interior finishing and decor styling"
    ],
    achievements: [
      "Designed the turnkey luxury interior fit-out for landmark private villas across Asokoro and Guzape",
      "Curated exclusive interior finishing concepts for diplomatic residences in Abuja",
      "Pioneered Eclectic Seals' custom modular cabinetry and architectural POP design standards"
    ]
  },
  {
    id: "eddy-calyo",
    name: "Eddy Calyo",
    role: "Senior Project Manager",
    title: "Senior Project Manager",
    bio: "Directs site logistics, milestone schedules, subcontractor alignment, and rigorous quality enforcement across all ongoing residential and commercial sites.",
    fullBio: "Eddy Calyo coordinates the end-to-end execution of Eclectic Seals' building and renovation projects. With over a decade of hands-on construction project management experience, Eddy bridges architectural blueprints and site craft. He manages project timelines, labor allocations, material staging, and quality audits, ensuring projects progress seamlessly from groundbreaking to snag-free client handover on schedule and within budget.",
    image: "/assets/team/project-manager.jpeg",
    imagePosition: "object-[center_15%]",
    qualifications: [
      "PMP (Project Management Professional) Certified",
      "B.Tech. in Building Technology",
      "Certified Construction Site Safety Supervisor",
      "Advanced Critical Path Scheduling & CPM Analysis"
    ],
    expertise: [
      "Construction Operations & Milestone Scheduling",
      "On-Site Quality Control Checkpoints",
      "Subcontractor Alignment & Labor Coordination",
      "Client Progress Reporting & Handover Procedures"
    ],
    experience: "12+ Years in Commercial & Residential Project Management",
    responsibilities: [
      "Comprehensive construction scheduling and critical-path milestone monitoring",
      "Daily site supervision, subcontractor coordination, and engineering inspections",
      "Quality assurance audits at every foundation, structural, and finishing phase",
      "Client milestone progress reporting and project handover walkthroughs"
    ],
    achievements: [
      "Maintained a 95% on-time completion record across multi-million naira commercial and residential developments",
      "Managed site execution for the Chinese Cultural Center renovation in Wuse Zone 5, Abuja",
      "Implemented digital site tracking protocols that reduced construction lead-times by 18%"
    ]
  },
  {
    id: "benjamin-okwoche",
    name: "Benjamin Okwoche",
    role: "Procurement & Logistics Coordinator",
    title: "Procurement & Logistics Coordinator",
    bio: "Manages material supply chains, factory direct relationships, and freight delivery ensuring all sites stay fully supplied without costly lead-time delays.",
    fullBio: "Benjamin Okwoche leads Eclectic Seals' procurement division and supply chain operations. He manages relationships with verified steel mills, cement distributors, tile manufacturers, and MEP equipment importers across Nigeria and international markets. By securing direct-from-factory pricing and coordinating strict just-in-time site deliveries, Benjamin protects project budgets and ensures that construction crews never experience costly downtime.",
    image: "/assets/team/procurement-coordinator.jpeg",
    imagePosition: "object-[center_25%]",
    qualifications: [
      "HND in Purchasing & Supply Management",
      "Certified Supply Chain & Logistics Professional (CSCP)",
      "Material Quality Assurance & Standards Testing Auditor",
      "Member of the Chartered Institute of Procurement & Supply (CIPS)"
    ],
    expertise: [
      "Direct-Factory Building Material Sourcing",
      "Logistics Network Optimization & Site Dispatch",
      "Contractor & Vendor Agreement Negotiation",
      "Bulk Material Quality & Batch Testing"
    ],
    experience: "10+ Years in Construction Procurement & Supply Chain",
    responsibilities: [
      "Sourcing and batch-testing of certified construction supplies and structural steel",
      "Negotiation of bulk factory-direct pricing for clients",
      "Fleet logistics and direct-to-site crane and truck deliveries",
      "Inventory management for in-house paint manufacturing raw materials"
    ],
    achievements: [
      "Built a network of direct manufacturing partners cutting material procurement costs by over 14%",
      "Maintained zero site downtime across all flagship projects through proactive inventory forecasting",
      "Established strict batch inspection procedures preventing defective building supplies from reaching sites"
    ]
  },
  {
    id: "chidi-ohams",
    name: "Chidi Ohams",
    role: "Health, Safety & Environment Officer",
    title: "Health, Safety & Environment (HSE) Officer",
    bio: "Oversees site safety protocols, structural compliance checkpoints, and hazard prevention in accordance with international building standards.",
    fullBio: "Chidi Ohams is the guardian of safety and environmental protocols across all Eclectic Seals Int'l construction sites. Passionate about zero-incident work environments, Chidi conducts daily safety briefings, inspects scaffolding, enforces personal protective equipment (PPE) compliance, and implements environmental hazard mitigation measures. His vigilance ensures that workers, subcontractors, and visiting clients operate in safe, rigorously controlled environments.",
    image: "/assets/team/safety-officer.jpeg",
    imagePosition: "object-[center_20%]",
    qualifications: [
      "Certified Safety Professional (CSP)",
      "NEBOSH International General Certificate in Occupational Health and Safety",
      "OSHA Construction Industry Certified Safety Officer",
      "First Aid, CPR & Emergency Response Certified"
    ],
    expertise: [
      "Site Hazard Identification & Risk Assessment (HIRA)",
      "Scaffolding, Trenching & High-Elevation Safety Enforcement",
      "Environmental Compliance & Construction Waste Management",
      "Toolbox Safety Briefings & Emergency Drills"
    ],
    experience: "8+ Years in Construction Site Safety & Compliance",
    responsibilities: [
      "Daily safety inspections, hazard mitigation, and tool-box briefings",
      "Scaffolding, structural shoring, and high-elevation safety verification",
      "Personal Protective Equipment (PPE) compliance and worker safety training",
      "Environmental safety audits and site sanitation management"
    ],
    achievements: [
      "Maintained a zero lost-time injury record across five consecutive major construction projects in Abuja",
      "Developed Eclectic Seals' comprehensive site safety manual and hazard prevention protocols",
      "Certified 100% of site foremen and technical crews in modern emergency response and first aid"
    ]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    category: "general",
    question: "What services does Eclectic Seals Int'l provide?",
    answer: "We provide interior design, interior finishing, furnishing, renovation, landscaping, construction supplies, building & civil construction, in-house paint manufacturing, and real estate property management."
  },
  {
    category: "general",
    question: "Do you operate outside Abuja?",
    answer: "Yes, while our headquarters and core operations are in Abuja, we execute select commercial, diplomatic, and luxury residential projects across Nigeria depending on project scope and site accessibility."
  },
  {
    category: "general",
    question: "Do you offer free consultations?",
    answer: "Yes! Every project begins with a complimentary initial consultation where we review your architectural briefs, site parameters, design aspirations, and budget boundaries."
  },
  {
    category: "general",
    question: "How do I get started?",
    answer: "You can submit an inquiry through our Request a Quote wizard, call our office directly at 08027997172, or message us on WhatsApp for immediate support."
  },
  {
    category: "construction",
    question: "How long does it take to complete a residential project?",
    answer: "A single-room or kitchen renovation typically takes 2–4 weeks. A full residential home construction from groundbreaking to turnkey handover generally spans 6–12 months depending on scale, weather, and finishes."
  },
  {
    category: "construction",
    question: "Can you handle commercial developments?",
    answer: "Yes, our engineering division routinely delivers commercial office plazas, diplomatic buildings, corporate fit-outs, and mixed-use complexes with complete regulatory adherence."
  },
  {
    category: "construction",
    question: "Do you manage construction permits?",
    answer: "Yes, our experienced project management team assists clients in processing all requisite development permits, structural documentation, and council building approvals."
  },
  {
    category: "construction",
    question: "How do you ensure quality?",
    answer: "We run a structured 5-checkpoint quality control system: Planning, Inspection, Lab Material Testing, Approval, and Handover Walkthrough, guaranteeing work conforms to engineering codes."
  },
  {
    category: "interior",
    question: "Can you design both residential and commercial interiors?",
    answer: "Absolutely. Our interior design studio balances personal residential intimacy with ergonomic, brand-forward corporate environments."
  },
  {
    category: "interior",
    question: "Do you offer 3D design concepts?",
    answer: "Yes. Before breaking a single wall or laying tiles, we develop 3D photorealistic renderings and mood boards so you can preview textures, lighting, and spatial layouts."
  },
  {
    category: "interior",
    question: "Can I choose my own materials?",
    answer: "Yes. We happily accommodate client-procured materials alongside our curated in-house specifications and direct factory imports."
  },
  {
    category: "renovation",
    question: "Can I renovate my home while living in it?",
    answer: "In most residential renovations, yes. We establish phased dust partitions and isolate work zones to minimize disruption to your household routines."
  },
  {
    category: "renovation",
    question: "Do you renovate offices?",
    answer: "Yes, we regularly perform fast-track commercial renovations, scheduling high-noise works outside business hours to prevent operational downtime."
  },
  {
    category: "property",
    question: "Do you manage rental properties?",
    answer: "Yes, our real estate property management division handles tenant vetting, rent collection, preventive maintenance, and asset value protection for property owners."
  },
  {
    category: "property",
    question: "Do you inspect properties regularly?",
    answer: "Yes, scheduled quarterly preventive audits are an integral part of every property management agreement."
  },
  {
    category: "paint",
    question: "Can you produce custom paint colours?",
    answer: "Yes! Our in-house paint manufacturing facility provides computerized spectrophotometer color matching to recreate any shade or designer palette."
  },
  {
    category: "paint",
    question: "Are your paints weather resistant?",
    answer: "Yes, our exterior formulations are specifically engineered with anti-fungal, UV-resistant acrylic resins designed to withstand Nigeria's harsh rainy and dry seasons."
  },
  {
    category: "payments",
    question: "How are projects priced?",
    answer: "Projects are priced via a transparent, itemized Bill of Quantities (BOQ) with transparent labor and material breakdowns following an initial site audit."
  },
  {
    category: "payments",
    question: "Can payments be made in phases?",
    answer: "Yes, all our contracts feature milestone-based payment schedules tied to certified completion stages."
  },
  {
    category: "payments",
    question: "Which payment methods are accepted?",
    answer: "We accept verified bank electronic transfers and corporate checks outlined in the formal contractual agreement."
  },
  {
    category: "support",
    question: "Do you offer after-project support?",
    answer: "Yes, every completed project is protected by a defect liability warranty period followed by optional ongoing maintenance packages."
  },
  {
    category: "support",
    question: "Is maintenance available?",
    answer: "Yes, ongoing preventive and corrective maintenance contracts are readily available through our property management arm."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "modern-interior-design-trends-abuja",
    title: "Modern Interior Design Trends Shaping Luxury Homes in Abuja",
    date: "24 October 2026",
    category: "Interior Design",
    excerpt: "From warm acoustic wood paneling to hidden ambient cove lighting, explore the design philosophies transforming Abuja's most exclusive residences.",
    content: `Luxury residential architecture in Abuja is experiencing a profound shift away from cold, ornate grandeur towards warm, understated minimalism and functional wellness.

Homeowners in Asokoro, Maitama, and Guzape are prioritizing tactile materiality: natural travertine, fluted white oak, microcement feature walls, and recessed magnetic track lighting that illuminates art without visual clutter.

At Eclectic Seals Int'l, our design studio blends architectural symmetry with custom-built modular joinery. We believe spaces should feel calm, effortless, and timeless, maintaining their aesthetic prestige long after trends evolve.`,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "navigating-full-renovation-diplomatic-facility",
    title: "Navigating Full Renovations for Diplomatic & Institutional Facilities",
    date: "12 September 2026",
    category: "Renovation",
    excerpt: "Insights from our landmark work on the Liberia Embassy and Chinese Cultural Center renovations in the Federal Capital Territory.",
    content: `Renovating diplomatic missions and cultural facilities presents unique engineering challenges: historical preservation must coexist with strict contemporary security, accessibility, and high-traffic acoustic performance.

During our renovation of the Republic of Liberia Embassy in Central Area, Abuja, our engineering team conducted non-destructive structural scans before completely re-engineering the HVAC and plumbing backbones.

By combining meticulous structural planning with high-durability surface coatings manufactured in-house, we delivered a revitalized diplomatic landmark that stands as a testament to craftsmanship and institutional pride.`,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "importance-weather-resistant-paints-nigeria",
    title: "Why In-House Paint Formulation Matters in the Nigerian Climate",
    date: "18 August 2026",
    category: "Paint Manufacturing",
    excerpt: "How tropical UV exposure and intense monsoon moisture degrade standard paints, and what our chemical formulation does differently.",
    content: `The Nigerian climate is notoriously demanding on exterior building envelopes. Intense tropical sunlight rapidly degrades inferior binder resins, while high humidity during the rainy season promotes black algae and fungal colonization.

Recognizing these industry-wide shortcomings, Eclectic Seals established our own specialized paint manufacturing division in Abuja. We utilize premium acrylic emulsions, titanium dioxide pigments, and specialized anti-fungal additives.

The result is a coating that retains its color depth, resists chalking, and maintains a pristine facade year after year.`,
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80"
  }
];
