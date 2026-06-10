// ArgentinaPine.com — All English Content
// Design: Timber Atlas — Premium B2B Trade Portal

export const siteConfig = {
  name: "ArgentinaPine.com",
  tagline: "Your Source for Argentine Pine Products",
  description:
    "The independent resource for international buyers of Argentine pine — lumber, mouldings, panels, and finger joint products sourced from Argentina's leading pine-growing regions.",
  email: "inquiry@argentinapine.com",
  disclosure:
    "ArgentinaPine.com is operated by New Zealand Lumber Exports Limited, an independent pine sourcing specialist.",
};

export const nav = {
  home: "Home",
  products: "Products",
  species: "Species",
  sourcing: "Sourcing",
  blog: "Blog",
  about: "About",
  contact: "Contact",
  inquire: "Send Inquiry",
};

// ─── HOME PAGE ────────────────────────────────────────────────────────────────

export const home = {
  hero: {
    headline: "Your Source for Argentine Pine Products",
    subheadline:
      "An independent reference and sourcing guide for international buyers of Argentine pine — lumber, mouldings, panels, and more.",
    cta: "Explore Products",
    ctaSecondary: "Send an Inquiry",
  },
  intro: {
    title: "Why Argentine Pine?",
    body: "Argentina is one of the world's largest exporters of plantation pine, producing Pinus taeda and Pinus elliottii across the Mesopotamia region of northeastern Argentina. The country's pine plantations yield consistent, well-graded timber prized by buyers across Asia, the Middle East, and the Pacific for its dimensional stability, workability, and competitive pricing. ArgentinaPine.com is an independent resource designed to help international buyers understand the product range, species characteristics, and export logistics involved in sourcing Argentine pine.",
  },
  whyArgentinePine: {
    title: "Why Source from Argentina",
    points: [
      {
        title: "Consistent Quality",
        body: "Argentine pine plantations are managed to international forestry standards, producing uniform, well-graded timber with predictable moisture content and dimensional tolerances.",
      },
      {
        title: "Competitive Pricing",
        body: "Lower land and labour costs relative to North American and European producers make Argentine pine one of the most cost-effective softwood options available to Asian and Pacific buyers.",
      },
      {
        title: "Established Export Infrastructure",
        body: "Argentina's northeastern ports — particularly Posadas, Corrientes, and Buenos Aires — are well-equipped for container loading of lumber and processed wood products.",
      },
      {
        title: "Broad Product Range",
        body: "From rough-sawn lumber and dressed boards to precision finger joint mouldings and laminated panels, Argentine mills offer a wide range of value-added products ready for export.",
      },
    ],
  },
  ctaSection: {
    title: "Ready to Source Argentine Pine?",
    body: "Send us your specifications and we will provide product information, typical pricing ranges, and sourcing guidance.",
    cta: "Send an Inquiry",
  },
};

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export const products = {
  index: {
    title: "Argentine Pine Products",
    subtitle: "Lumber, mouldings, panels, and finger joint products for international buyers.",
    intro:
      "Argentine pine mills produce a comprehensive range of processed timber products for export. Each product category below covers typical specifications, common applications, available grades, and how to submit an inquiry.",
  },
  items: [
    {
      slug: "lumber-boards",
      title: "Lumber & Boards",
      shortDesc: "Rough-sawn and dressed pine lumber in standard and custom dimensions.",
      heroImage: "lumber",
      description:
        "Argentine pine lumber is produced from Pinus taeda and Pinus elliottii grown in the Mesopotamia region of northeastern Argentina. Both species produce a light-coloured, straight-grained timber that is easy to machine, glue, and finish. Lumber is available in rough-sawn (RS) and dressed/planed (DAR/S4S) form, with kiln-dried (KD) options available from most major mills.",
      specs: [
        { label: "Species", value: "Pinus taeda, Pinus elliottii" },
        { label: "Moisture Content", value: "KD 12–18% or Green" },
        { label: "Common Widths", value: "38mm, 50mm, 75mm, 100mm, 150mm, 200mm" },
        { label: "Common Thicknesses", value: "19mm, 25mm, 38mm, 50mm, 75mm" },
        { label: "Common Lengths", value: "1.8m, 2.4m, 3.0m, 3.6m, 4.2m, 4.8m, 5.4m, 6.0m" },
        { label: "Surface Finish", value: "Rough Sawn (RS), Dressed All Round (DAR), S4S" },
      ],
      uses: [
        "Structural framing and wall framing",
        "Flooring substrate and decking",
        "Furniture and cabinet carcassing",
        "Packing crates and pallets",
        "Formwork and scaffolding",
      ],
      grades: [
        {
          name: "Select / Clear",
          desc: "Minimal knots, straight grain, suitable for furniture and joinery applications.",
        },
        {
          name: "No. 1 Common",
          desc: "Small tight knots permitted, suitable for general construction and furniture.",
        },
        {
          name: "No. 2 Common",
          desc: "Larger knots and minor defects permitted, suitable for structural and utility applications.",
        },
        {
          name: "Utility / Economy",
          desc: "Significant defects permitted, suitable for packing, crating, and low-grade construction.",
        },
      ],
      cta: "Inquire About Lumber & Boards",
    },
    {
      slug: "pine-mouldings",
      title: "Pine Mouldings",
      shortDesc: "Profiled pine mouldings for joinery, furniture, and interior fit-out.",
      heroImage: "mouldings",
      description:
        "Argentine pine mouldings are produced from kiln-dried Pinus taeda, machined to precise profiles for use in interior joinery, furniture manufacturing, and architectural fit-out. Argentine mills are equipped with modern moulding machinery capable of producing standard profiles (architrave, skirting, scotia, ogee, ovolo, pencil round) as well as custom profiles to buyer specification. All mouldings are produced from clear or near-clear timber to ensure a clean, paint-ready surface.",
      specs: [
        { label: "Species", value: "Pinus taeda" },
        { label: "Moisture Content", value: "KD 12–15%" },
        { label: "Profile Types", value: "Architrave, Skirting, Scotia, Ogee, Ovolo, Pencil Round, Custom" },
        { label: "Common Lengths", value: "2.4m, 3.0m, 3.6m, 4.2m, 4.8m, 5.4m" },
        { label: "Surface Finish", value: "Smooth machined, sanded, or primed" },
        { label: "Packaging", value: "Bundle-wrapped, carton, or bulk container" },
      ],
      uses: [
        "Door and window architraves",
        "Skirting boards and base mouldings",
        "Cornice and ceiling mouldings",
        "Picture rails and dado rails",
        "Furniture edge profiles and decorative trim",
      ],
      grades: [
        {
          name: "Finger Joint Clear (FJC)",
          desc: "Finger-jointed from clear pieces, paint-grade, no visible knots.",
        },
        {
          name: "Clear Solid",
          desc: "Solid clear timber, suitable for stain or natural finish.",
        },
        {
          name: "Select Knotty",
          desc: "Small tight knots permitted, suitable for paint or rustic stain finishes.",
        },
      ],
      cta: "Inquire About Pine Mouldings",
    },
    {
      slug: "finger-joint-mouldings",
      title: "Finger Joint Mouldings",
      shortDesc: "Precision finger-jointed pine mouldings for paint-grade joinery applications.",
      heroImage: "fingerjoint",
      description:
        "Finger joint mouldings are produced by end-joining short, clear sections of Pinus taeda using precision finger joint machinery and exterior-grade adhesive. The resulting product is dimensionally stable, knot-free, and highly consistent — making it the preferred choice for paint-grade interior joinery applications where a smooth, blemish-free surface is required. Argentine mills produce finger joint mouldings in all standard profiles and can accommodate custom profiles with sufficient lead time.",
      specs: [
        { label: "Species", value: "Pinus taeda" },
        { label: "Moisture Content", value: "KD 12–15%" },
        { label: "Joint Type", value: "Structural finger joint, exterior-grade PVA or MUF adhesive" },
        { label: "Profile Types", value: "Architrave, Skirting, Scotia, Ogee, Custom" },
        { label: "Common Lengths", value: "2.4m, 3.0m, 3.6m, 4.2m, 4.8m" },
        { label: "Surface Finish", value: "Smooth machined, sanded, or primed" },
      ],
      uses: [
        "Paint-grade door and window architraves",
        "Interior skirting and base mouldings",
        "Cornice and ceiling trim",
        "Cabinet door frames and face frames",
        "Pre-primed joinery components",
      ],
      grades: [
        {
          name: "Finger Joint Clear (FJC) — Paint Grade",
          desc: "No visible knots, smooth machined surface, ready for primer and paint.",
        },
        {
          name: "Finger Joint Primed (FJP)",
          desc: "Factory-primed with one coat of white primer, ready for topcoat on site.",
        },
      ],
      cta: "Inquire About Finger Joint Mouldings",
    },
    {
      slug: "panels-sheet-goods",
      title: "Panels & Sheet Goods",
      shortDesc: "Pine panels, LVL, and laminated boards for furniture and construction.",
      heroImage: "panels",
      description:
        "Argentine pine panels and sheet goods are produced from Pinus taeda and Pinus elliottii using edge-gluing, lamination, and engineered wood processes. Products range from solid edge-glued panels (EGP) used in furniture and shelving to laminated veneer lumber (LVL) and structural panels for construction applications. Argentine panel products are available in a wide range of thicknesses and sheet sizes, and can be supplied with sanded, primed, or veneered surfaces.",
      specs: [
        { label: "Species", value: "Pinus taeda, Pinus elliottii" },
        { label: "Panel Types", value: "Edge Glued Panel (EGP), Laminated Board, LVL, Structural Panel" },
        { label: "Common Thicknesses", value: "12mm, 15mm, 18mm, 25mm, 30mm, 38mm, 45mm" },
        { label: "Common Sheet Sizes", value: "1200×2400mm, 1220×2440mm, custom" },
        { label: "Moisture Content", value: "KD 8–12%" },
        { label: "Surface Finish", value: "Sanded (S2S), Primed, Raw" },
      ],
      uses: [
        "Furniture tops, shelving, and cabinet components",
        "Stair treads and risers",
        "Benchtops and worksurfaces",
        "Structural beams and headers (LVL)",
        "Interior wall and ceiling panelling",
      ],
      grades: [
        {
          name: "Select / Furniture Grade",
          desc: "Clear, tight-grained panels suitable for natural or stain finishes.",
        },
        {
          name: "Paint Grade",
          desc: "Minor defects filled and sanded, suitable for paint finish.",
        },
        {
          name: "Industrial / Structural",
          desc: "Structural integrity prioritised over appearance, suitable for construction applications.",
        },
      ],
      cta: "Inquire About Panels & Sheet Goods",
    },
  ],
};

// ─── SPECIES PAGES ────────────────────────────────────────────────────────────

export const species = [
  {
    slug: "what-is-pinus-taeda",
    title: "What is Pinus Taeda?",
    metaDesc:
      "An overview of Pinus taeda (loblolly pine) — the primary commercial species grown in Argentina's plantation forests.",
    intro:
      "Pinus taeda, commonly known as loblolly pine, is the dominant commercial timber species grown in Argentina's plantation forests. Native to the southeastern United States, Pinus taeda was introduced to Argentina's Mesopotamia region (the provinces of Misiones, Corrientes, and Entre Ríos) in the mid-twentieth century and has since become the backbone of Argentina's softwood export industry.",
    body: `Pinus taeda thrives in the subtropical climate of northeastern Argentina, where warm temperatures, high rainfall, and well-drained red soils support rapid growth rates. Plantation-grown trees typically reach harvestable size in 15–20 years, producing timber with consistent grain, moderate density, and excellent workability.

The wood is light yellowish-brown in colour with a straight to slightly interlocked grain. It is moderately hard for a pine species, with a Janka hardness of approximately 870 lbf (3,870 N), making it suitable for a wide range of structural and appearance applications. The timber machines cleanly, takes glue well, and accepts paint, stain, and clear finishes without difficulty.

In Argentina, Pinus taeda is grown primarily in the province of Misiones, which accounts for the majority of the country's pine plantation area. The province's combination of subtropical climate, fertile soils, and established forestry infrastructure has made it the centre of Argentina's softwood processing industry, with dozens of sawmills, moulding plants, and panel mills operating in the region.

For international buyers, Pinus taeda from Argentina offers a reliable, consistent, and cost-competitive alternative to North American southern yellow pine, European spruce, and New Zealand radiata pine. The species' combination of workability, dimensional stability, and availability in a wide range of processed forms makes it a versatile choice for furniture manufacturers, joinery producers, construction companies, and distributors across Asia, the Middle East, and the Pacific.`,
    keyFacts: [
      { label: "Common Name", value: "Loblolly Pine" },
      { label: "Origin", value: "Southeastern USA (introduced to Argentina)" },
      { label: "Main Growing Region", value: "Misiones, Corrientes, Entre Ríos, Argentina" },
      { label: "Rotation Age", value: "15–20 years (plantation)" },
      { label: "Janka Hardness", value: "~870 lbf (3,870 N)" },
      { label: "Density", value: "480–560 kg/m³ (air dry)" },
      { label: "Colour", value: "Light yellowish-brown" },
      { label: "Grain", value: "Straight to slightly interlocked" },
    ],
  },
  {
    slug: "pinus-taeda-vs-radiata-pine",
    title: "Pinus Taeda vs Radiata Pine",
    metaDesc:
      "A detailed comparison of Pinus taeda (Argentine pine) and Pinus radiata (New Zealand/Chilean pine) for international buyers.",
    intro:
      "International buyers frequently compare Pinus taeda from Argentina with Pinus radiata from New Zealand and Chile — the two most widely traded plantation softwoods in the Asia-Pacific region. While both species are plantation-grown pines offering similar product ranges, there are meaningful differences in density, hardness, workability, and typical applications that buyers should understand when making sourcing decisions.",
    body: `**Density and Hardness**

Pinus taeda is moderately denser and harder than Pinus radiata. Argentine pine typically has an air-dry density of 480–560 kg/m³ and a Janka hardness of approximately 870 lbf, compared to Pinus radiata's density of 400–500 kg/m³ and Janka hardness of approximately 710 lbf. This makes Pinus taeda slightly more resistant to denting and wear, which can be an advantage in flooring, stair tread, and furniture applications.

**Workability**

Both species are easy to work with hand and machine tools. Pinus taeda has a slightly more pronounced grain and resin content than Pinus radiata, which can affect finishing in some applications — particularly with water-based stains and clear finishes. Radiata pine is generally considered to have a more uniform, fine-grained texture that accepts paint and stain with exceptional consistency. For paint-grade applications, both species perform well.

**Dimensional Stability**

Pinus radiata is widely regarded as one of the most dimensionally stable plantation softwoods, with low shrinkage and movement in service. Pinus taeda is also dimensionally stable when kiln-dried to appropriate moisture content, but may exhibit slightly more movement in high-humidity environments. For interior applications in climate-controlled environments, both species perform comparably.

**Availability and Pricing**

Pinus radiata from New Zealand and Chile has historically dominated the Asia-Pacific softwood market due to established supply chains and consistent quality. Argentine Pinus taeda offers a competitive alternative, often at lower cost, with growing export volumes and improving logistics infrastructure. For buyers in Southeast Asia, the Middle East, and South Asia, Argentine pine can represent a meaningful cost saving without significant compromise on quality.

**Product Range**

Both species are available in a comprehensive range of processed products including lumber, mouldings, finger joint products, and panels. Argentine mills have invested significantly in value-added processing capacity in recent years, closing the gap with New Zealand and Chilean producers in terms of product range and finish quality.`,
    comparisonTable: [
      { property: "Species", taeda: "Pinus taeda", radiata: "Pinus radiata" },
      { property: "Origin (export)", taeda: "Argentina", radiata: "New Zealand, Chile" },
      { property: "Air-dry density", taeda: "480–560 kg/m³", radiata: "400–500 kg/m³" },
      { property: "Janka hardness", taeda: "~870 lbf", radiata: "~710 lbf" },
      { property: "Grain", taeda: "Straight to interlocked", radiata: "Straight, fine" },
      { property: "Paint acceptance", taeda: "Good", radiata: "Excellent" },
      { property: "Stain acceptance", taeda: "Good", radiata: "Very good" },
      { property: "Dimensional stability", taeda: "Good (KD)", radiata: "Excellent" },
      { property: "Typical pricing", taeda: "Competitive", radiata: "Market standard" },
    ],
  },
  {
    slug: "pinus-taeda-properties-specifications",
    title: "Pinus Taeda Properties & Specifications",
    metaDesc:
      "Technical properties and specifications for Pinus taeda grown in Argentina — density, strength, durability, and processing data.",
    intro:
      "This page provides technical properties and specifications for Pinus taeda grown in Argentina's plantation forests. Data is indicative of plantation-grown material from the Mesopotamia region and may vary depending on site, rotation age, and processing method.",
    body: `**Physical Properties**

Plantation-grown Pinus taeda from Argentina produces timber with consistent physical properties across the range of commercial grades. The wood is light yellowish-brown in colour, darkening slightly on exposure to light. The grain is generally straight with occasional slight interlocking. Growth rings are moderately distinct, with a clear differentiation between earlywood and latewood bands.

**Mechanical Properties**

Pinus taeda has moderate mechanical properties for a plantation softwood, making it suitable for both structural and appearance applications. The species' modulus of rupture (MOR) and modulus of elasticity (MOE) values are comparable to other commercial pines and meet the requirements of most international structural timber standards when graded appropriately.

**Durability**

Untreated Pinus taeda has low natural durability and is susceptible to fungal decay and insect attack in exposed or high-moisture environments. For exterior or ground-contact applications, treatment with preservative (CCA, ACQ, or equivalent) is required. For interior, dry-service applications, untreated kiln-dried material performs well.

**Treatability**

Pinus taeda is highly treatable with preservative chemicals due to its permeable sapwood. The species is classified as permeable to moderately resistant, making it suitable for full-cell pressure treatment processes. Treated Argentine pine is available from several mills for applications requiring H3 or H4 treatment levels.

**Processing**

The species machines cleanly with standard tooling. It glues well with PVA, MUF, and epoxy adhesives. It accepts nails, screws, and mechanical fasteners without splitting when pre-drilled. The timber sands to a smooth finish and accepts paint, primer, and clear finishes without difficulty.`,
    propertiesTable: [
      { property: "Air-dry density", value: "480–560 kg/m³" },
      { property: "Green density", value: "800–900 kg/m³" },
      { property: "Janka hardness (air dry)", value: "~870 lbf (3,870 N)" },
      { property: "Modulus of Rupture (MOR)", value: "70–90 MPa" },
      { property: "Modulus of Elasticity (MOE)", value: "10,000–13,000 MPa" },
      { property: "Compression parallel to grain", value: "35–45 MPa" },
      { property: "Shear strength", value: "8–12 MPa" },
      { property: "Natural durability class", value: "Class 4 (low durability)" },
      { property: "Treatability", value: "Permeable to moderately resistant" },
      { property: "Shrinkage (radial)", value: "3.5–4.5%" },
      { property: "Shrinkage (tangential)", value: "6.5–8.0%" },
    ],
  },
];

// ─── SOURCING PAGES ───────────────────────────────────────────────────────────

export const sourcing = [
  {
    slug: "argentine-pine-export-overview",
    title: "Argentine Pine Export Overview",
    metaDesc:
      "An overview of Argentina's pine export industry — production volumes, key markets, product mix, and trade data.",
    intro:
      "Argentina is one of the world's leading exporters of plantation pine, with a well-established forestry and wood processing industry centred in the Mesopotamia region of northeastern Argentina. This page provides an overview of Argentina's pine export industry for international buyers.",
    body: `**Argentina's Pine Plantation Industry**

Argentina's commercial pine plantations cover approximately 900,000 hectares, concentrated in the provinces of Misiones, Corrientes, and Entre Ríos. The dominant species are Pinus taeda and Pinus elliottii, both introduced from the southeastern United States and well-adapted to the subtropical climate of the region. Plantation management practices are generally aligned with international forestry standards, with a growing number of operations holding FSC or PEFC certification.

**Production and Processing**

Argentina's wood processing industry has grown significantly over the past two decades, with substantial investment in sawmilling, kiln-drying, moulding, and panel manufacturing capacity. The country produces a broad range of processed pine products for export, from rough-sawn lumber and kiln-dried boards to precision mouldings, finger joint products, and laminated panels.

Annual pine lumber production in Argentina is estimated at 1.5–2.0 million cubic metres, with a significant and growing proportion destined for export. Key export products include dressed lumber, pine mouldings, finger joint mouldings, and edge-glued panels.

**Key Export Markets**

Argentina's pine products are exported to markets across the world. Key destinations include:

- **Asia:** Vietnam, China, South Korea, Japan, and Taiwan are among the largest buyers of Argentine pine lumber and mouldings. Vietnam in particular has become a major importer, with Argentine pine used extensively in furniture and joinery manufacturing.
- **Middle East:** Saudi Arabia, UAE, and other Gulf states import Argentine pine for construction and interior fit-out applications.
- **Latin America:** Brazil, Chile, and other regional markets import Argentine pine products, particularly mouldings and panels.
- **Oceania:** New Zealand and Australia import Argentine pine for furniture, joinery, and construction applications.

**Trade and Certification**

Most Argentine pine exporters are registered with the Argentine Forestry Secretariat (Secretaría de Agricultura, Ganadería y Pesca) and comply with CITES and phytosanitary requirements for export. Fumigation and heat treatment certificates are available on request. A growing number of mills hold FSC Chain of Custody certification, enabling supply of certified timber to buyers with sustainability requirements.

**Currency and Payment**

Argentine pine is typically priced and invoiced in US dollars. Payment terms vary by supplier but commonly include 30% deposit with order and 70% against bill of lading, or letter of credit (LC) at sight. Buyers should be aware that Argentina's currency controls and export regulations can affect pricing and lead times — working with an experienced sourcing agent or intermediary is advisable for first-time buyers.`,
  },
  {
    slug: "argentine-pine-ports-logistics",
    title: "Argentine Pine Ports & Logistics",
    metaDesc:
      "A guide to Argentine pine export ports, container loading, shipping routes, and logistics for international buyers.",
    intro:
      "Understanding Argentina's export logistics is essential for buyers planning to source pine products from the country. This page covers the main export ports, typical shipping routes, container specifications, and lead time expectations.",
    body: `**Main Export Ports**

Argentine pine products are exported through several ports, depending on the origin of the product and the destination market.

**Puerto Posadas (Misiones)** is the closest port to the main pine-growing region and is used for river barge transport to downstream ports. It is not a deep-water ocean port and is primarily used for domestic and regional transport.

**Puerto Corrientes** handles some pine product exports from the Corrientes province growing region.

**Puerto General San Martín and Puerto Rosario** (both in Santa Fe province, on the Paraná River) are the primary deep-water export ports for Argentine pine. Both ports have established container handling facilities and regular liner services to Asia, the Middle East, and Europe. Most Argentine pine exporters consolidate product at these ports for container loading.

**Puerto Buenos Aires** (Port of Buenos Aires) handles a portion of pine exports, particularly for smaller volumes and LCL (less-than-container-load) shipments.

**Container Specifications**

Argentine pine lumber and processed products are typically exported in 20-foot or 40-foot dry containers. Standard container specifications:

- 20-foot: internal dimensions approximately 5.9m × 2.35m × 2.39m, payload capacity approximately 28 tonnes
- 40-foot: internal dimensions approximately 12.0m × 2.35m × 2.39m, payload capacity approximately 28 tonnes
- 40-foot High Cube: internal dimensions approximately 12.0m × 2.35m × 2.69m, payload capacity approximately 28 tonnes

Typical container loads for pine lumber range from 18–25 cubic metres (20-foot) to 38–50 cubic metres (40-foot), depending on product dimensions and packing method.

**Shipping Routes and Transit Times**

From Puerto Rosario or Puerto General San Martín, typical transit times to major destination ports are:

- Vietnam (Ho Chi Minh City / Hai Phong): 25–35 days
- China (Shanghai / Guangzhou): 28–38 days
- South Korea (Busan): 30–40 days
- Japan (Tokyo / Osaka): 32–42 days
- UAE (Dubai / Jebel Ali): 20–30 days
- New Zealand (Auckland): 18–25 days
- Australia (Sydney / Melbourne): 20–28 days

Transit times are approximate and subject to carrier schedules, port congestion, and routing via transhipment hubs (typically São Paulo/Santos or Montevideo for Asia-bound cargo).

**Lead Times**

Buyers should allow for the following indicative lead times from order confirmation to vessel loading:

- Stock items (standard dimensions, available inventory): 2–4 weeks
- Production items (custom dimensions or profiles): 6–12 weeks
- Large volume orders: 8–16 weeks

These lead times are in addition to ocean transit time. Total lead time from order to delivery at destination port is typically 8–16 weeks for standard products.

**Documentation**

Standard export documentation for Argentine pine includes: commercial invoice, packing list, bill of lading, phytosanitary certificate, fumigation certificate (if required), certificate of origin, and FSC certificate (if applicable). Letter of credit documentation can be arranged on request.`,
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    slug: "introduction-to-argentine-pine",
    title: "An Introduction to Argentine Pine for International Buyers",
    date: "2024-01-15",
    category: "Species",
    excerpt:
      "A primer on Argentina's plantation pine industry — what species are grown, where they are grown, and why they matter to international buyers.",
    body: `Argentina's plantation pine industry has grown from a modest forestry experiment in the mid-twentieth century into one of the world's most significant softwood export sectors. For international buyers unfamiliar with the country's timber industry, this post provides a concise introduction to the key species, growing regions, and product types that define Argentine pine.

**The Species**

The two dominant commercial pine species grown in Argentina are Pinus taeda (loblolly pine) and Pinus elliottii (slash pine). Both were introduced from the southeastern United States and have proven exceptionally well-suited to the subtropical climate of Argentina's Mesopotamia region. Pinus taeda is the more widely planted of the two and accounts for the majority of Argentina's pine lumber and processed wood production.

**The Growing Regions**

Argentina's pine plantations are concentrated in three northeastern provinces: Misiones, Corrientes, and Entre Ríos. Misiones — a narrow, forested province bordering Brazil and Paraguay — is the heartland of Argentina's pine industry, accounting for the largest plantation area and the greatest concentration of sawmills and processing facilities. The province's combination of subtropical climate, fertile red soils, and established forestry infrastructure has made it the centre of gravity for Argentine pine production.

**The Products**

Argentine mills produce a comprehensive range of pine products for export, from rough-sawn lumber and kiln-dried boards to precision mouldings, finger joint products, and laminated panels. The industry has invested significantly in value-added processing capacity over the past two decades, and Argentine pine is now available in a wide range of finished and semi-finished forms suitable for furniture manufacturing, joinery, construction, and distribution.

**Why It Matters**

For buyers in Asia, the Middle East, and the Pacific, Argentine pine offers a reliable, consistent, and cost-competitive alternative to North American southern yellow pine, European spruce, and New Zealand radiata pine. As supply chains continue to diversify and buyers seek alternatives to traditional sources, Argentina's pine industry is increasingly well-positioned to meet international demand.`,
  },
  {
    slug: "pinus-taeda-growing-regions-argentina",
    title: "Where is Pinus Taeda Grown in Argentina?",
    date: "2024-01-22",
    category: "Species",
    excerpt:
      "A geographic overview of Argentina's Pinus taeda plantation regions — Misiones, Corrientes, and Entre Ríos.",
    body: `Argentina's Pinus taeda plantations are concentrated in the Mesopotamia region — the area between the Paraná and Uruguay rivers in northeastern Argentina. This geographic overview covers the three main pine-growing provinces and what buyers should know about each.

**Misiones**

Misiones is Argentina's most important pine-growing province, accounting for the majority of the country's plantation pine area. The province is a narrow, subtropical strip of land bordering Brazil to the north and east and Paraguay to the west. Its climate — warm, humid, and with high annual rainfall — is ideal for fast-growing Pinus taeda, which can reach harvestable size in as little as 15 years under optimal conditions.

The province is home to dozens of sawmills, moulding plants, and panel mills, many of which are located in and around the cities of Posadas (the provincial capital), Eldorado, and Oberá. Misiones is the primary source of Argentine pine lumber and processed wood products for export.

**Corrientes**

Corrientes province, to the southwest of Misiones, has a significant and growing pine plantation area. The province's climate is slightly drier than Misiones, which can result in slower growth rates but also denser, harder timber in some cases. Corrientes is an important secondary source of pine lumber and is home to several major sawmilling operations.

**Entre Ríos**

Entre Ríos, the southernmost of the three main pine-growing provinces, has a smaller plantation area than Misiones or Corrientes but contributes to Argentina's overall pine production. The province's cooler climate results in slower-growing timber with tighter growth rings, which some buyers prefer for certain applications.

**Implications for Buyers**

The geographic concentration of Argentina's pine industry in the Mesopotamia region means that most Argentine pine products originate within a relatively compact area, facilitating quality consistency and supply chain management. The proximity of the growing regions to the Paraná River and its export ports also supports efficient logistics for container loading and export.`,
  },
  {
    slug: "argentine-pine-lumber-grades-explained",
    title: "Argentine Pine Lumber Grades Explained",
    date: "2024-02-05",
    category: "Products",
    excerpt:
      "A practical guide to Argentine pine lumber grading — what the grades mean, how they are assessed, and which grade is right for your application.",
    body: `Lumber grading is one of the most important factors in sourcing pine products, yet it is also one of the most frequently misunderstood. This post explains the main grading systems used for Argentine pine lumber and provides practical guidance for buyers selecting grades for specific applications.

**How Argentine Pine is Graded**

Argentine pine lumber is typically graded visually, with graders assessing each piece for knots, grain deviation, warp, bow, twist, splits, and other defects. Argentina does not have a single national grading standard equivalent to the NHLA rules used in North America or the European grading standards, so grading terminology can vary between mills. However, most Argentine exporters use a broadly consistent set of grade descriptions that align with international buyer expectations.

**Common Grade Descriptions**

*Select / Clear:* The highest grade, with minimal or no knots and straight grain. Suitable for furniture, joinery, and applications where appearance is critical. Select grade commands a significant price premium and is available in limited volumes.

*No. 1 Common:* Small, tight knots are permitted, but the piece must be otherwise free of significant defects. Suitable for furniture carcassing, general joinery, and construction applications where a clean appearance is desired.

*No. 2 Common:* Larger knots and minor defects are permitted. Suitable for general construction, framing, and applications where structural performance is more important than appearance.

*Utility / Economy:* The lowest grade, with significant defects permitted. Suitable for packing, crating, and low-grade construction applications.

**Grading for Mouldings and Finger Joint Products**

For mouldings and finger joint products, grading is typically described in terms of the surface quality of the finished product rather than the raw timber grade. The most common descriptions are:

*Finger Joint Clear (FJC):* No visible knots or defects on the machined surface. Paint-grade quality.

*Select Knotty:* Small, tight knots permitted on the machined surface. Suitable for paint or rustic stain finishes.

**Practical Guidance for Buyers**

When ordering Argentine pine, buyers should specify the grade required for their application and request sample pieces or photographs before committing to a large order. It is also advisable to agree on a written grading specification with the supplier, particularly for first-time orders, to avoid misunderstandings about acceptable defect levels.`,
  },
  {
    slug: "pine-mouldings-argentina-export",
    title: "Pine Mouldings from Argentina: What Buyers Need to Know",
    date: "2024-02-19",
    category: "Products",
    excerpt:
      "A buyer's guide to Argentine pine mouldings — profiles, grades, specifications, and what to look for when sourcing.",
    body: `Argentine pine mouldings have become an increasingly important export product over the past decade, with growing demand from furniture manufacturers and joinery producers in Vietnam, China, and other Asian markets. This post covers the key things buyers need to know when sourcing pine mouldings from Argentina.

**What Profiles Are Available?**

Argentine mills produce a wide range of standard moulding profiles, including architrave, skirting, scotia, ogee, ovolo, pencil round, and various bead and cove profiles. Most mills can also produce custom profiles to buyer specification, provided the order volume justifies the tooling investment. Buyers with specific profile requirements should provide a full-size profile drawing or sample piece when requesting a quote.

**Solid vs Finger Joint**

Argentine pine mouldings are available in two main forms: solid (produced from a single piece of timber) and finger joint (produced by end-joining short, clear pieces). Finger joint mouldings are generally preferred for paint-grade applications because they are more dimensionally stable and free of knots. Solid mouldings are preferred for stain or natural finish applications where the appearance of the wood grain is important.

**Surface Finish Options**

Argentine mouldings are available in three main surface finishes: smooth machined (ready for sanding and finishing on site), sanded (pre-sanded to a smooth surface), and primed (factory-primed with one coat of white primer, ready for topcoat on site). Primed mouldings are increasingly popular with buyers who want to reduce on-site finishing labour.

**Moisture Content and Packaging**

All mouldings for export should be kiln-dried to a moisture content appropriate for the destination climate. For most Asian and Pacific markets, a moisture content of 12–15% is appropriate. Mouldings are typically packaged in bundles wrapped with plastic film or in cardboard cartons, depending on the buyer's preference and the shipping method.

**Minimum Order Quantities**

Minimum order quantities for Argentine pine mouldings vary by supplier, but most mills require a minimum of one 20-foot container per order (approximately 15–20 cubic metres of product). For custom profiles, minimum quantities may be higher to justify tooling costs.`,
  },
  {
    slug: "finger-joint-mouldings-guide",
    title: "Finger Joint Mouldings: A Complete Buyer's Guide",
    date: "2024-03-04",
    category: "Products",
    excerpt:
      "Everything buyers need to know about finger joint pine mouldings — how they are made, why they are preferred for paint-grade applications, and what to specify.",
    body: `Finger joint mouldings are one of the most widely used products in interior joinery, and Argentine pine is one of the most popular raw materials for their production. This guide covers the manufacturing process, quality considerations, and key specifications buyers should understand.

**How Finger Joint Mouldings Are Made**

Finger joint mouldings are produced by cutting short, clear pieces of kiln-dried pine into precise finger-shaped profiles at each end, then joining them end-to-end using structural adhesive under pressure. The resulting product is a long, continuous piece of timber that is free of knots and other defects, with joints that are virtually invisible when painted.

The process begins with the selection of clear or near-clear pine pieces, typically offcuts or short lengths from sawmilling operations. These pieces are inspected for defects, kiln-dried to the target moisture content, and then fed through a finger jointing machine that cuts the joint profiles and applies adhesive simultaneously. The joined pieces are then fed through a moulding machine to produce the final profile.

**Why Finger Joint for Paint-Grade Applications?**

Finger joint mouldings offer several advantages over solid mouldings for paint-grade applications. First, they are produced from clear, defect-free timber, ensuring a smooth, blemish-free surface that accepts paint without the need for filling or sanding around knots. Second, they are more dimensionally stable than solid mouldings because the finger jointing process randomises the orientation of the wood grain, reducing the tendency for the product to cup, bow, or twist in service. Third, they make efficient use of timber resources by utilising short, clear pieces that would otherwise be wasted, which can contribute to a lower cost per linear metre compared to solid clear mouldings.

**Key Specifications to Confirm**

When ordering finger joint mouldings from Argentina, buyers should confirm the following specifications with their supplier: adhesive type (exterior-grade PVA or MUF is standard for most applications), moisture content at time of shipment, profile dimensions and tolerances, surface finish (machined, sanded, or primed), and packaging method.

**Quality Control**

Buyers should request quality control documentation from their supplier, including moisture content test results, adhesive bond strength test results (if available), and photographs of the finished product before shipment. For first-time orders, it is advisable to request a sample shipment of a small quantity before committing to a full container load.`,
  },
  {
    slug: "edge-glued-panels-argentina",
    title: "Edge Glued Pine Panels from Argentina",
    date: "2024-03-18",
    category: "Products",
    excerpt:
      "A guide to Argentine edge-glued pine panels — production process, specifications, grades, and applications.",
    body: `Edge-glued pine panels (EGP) are one of Argentina's most rapidly growing export products, with strong demand from furniture manufacturers in Asia and the Middle East. This post covers the production process, key specifications, and typical applications for Argentine EGP.

**What is an Edge Glued Panel?**

An edge-glued panel is produced by gluing narrow strips of kiln-dried pine together along their long edges to form a wide, flat panel. The strips are selected for colour and grain consistency, arranged to minimise visual variation, and then glued under pressure to produce a panel that is dimensionally stable and suitable for furniture and joinery applications.

**Production in Argentina**

Argentina has invested significantly in edge-glued panel production capacity over the past decade, with several large-scale panel mills operating in Misiones and Corrientes. These mills produce panels from Pinus taeda and Pinus elliottii, using kiln-dried timber with a moisture content of 8–12% to ensure dimensional stability in service.

**Specifications**

Argentine EGP is available in a range of thicknesses (typically 12mm, 18mm, 25mm, 30mm, and 38mm) and sheet sizes (typically 1200×2400mm or 1220×2440mm, with custom sizes available). Panels are available in sanded (S2S) or raw finish, and can be supplied with a factory-applied primer for paint-grade applications.

**Grades**

EGP is typically available in two main grades: furniture grade (clear, tight-grained, suitable for natural or stain finishes) and paint grade (minor defects filled and sanded, suitable for paint finish). Buyers should specify the grade required for their application and request samples before ordering.

**Applications**

Argentine EGP is used in a wide range of furniture and joinery applications, including tabletops, shelving, cabinet components, stair treads, and benchtops. The product's combination of dimensional stability, workability, and competitive pricing makes it a popular choice for furniture manufacturers in Vietnam, China, and other Asian markets.`,
  },
  {
    slug: "sourcing-pine-from-argentina-first-time-buyers",
    title: "Sourcing Pine from Argentina: A Guide for First-Time Buyers",
    date: "2024-04-01",
    category: "Sourcing",
    excerpt:
      "A practical guide for buyers sourcing Argentine pine for the first time — how to find suppliers, what to specify, and how to manage the process.",
    body: `Sourcing pine from Argentina for the first time can seem daunting, but with the right preparation and guidance, the process is straightforward. This guide covers the key steps for first-time buyers, from identifying suppliers to managing quality and logistics.

**Step 1: Define Your Requirements**

Before approaching suppliers, prepare a clear specification for the product you need. This should include: species (Pinus taeda or Pinus elliottii), product type (lumber, mouldings, panels, etc.), dimensions (thickness, width, length), grade, moisture content, surface finish, and packaging requirements. The more specific your specification, the easier it will be to get accurate quotes and avoid misunderstandings.

**Step 2: Identify Potential Suppliers**

Argentina has dozens of pine exporters, ranging from large integrated mills to smaller specialist producers. Potential suppliers can be identified through trade directories, industry associations (such as the Argentine Forestry Association, AFOA), trade fairs (such as Expomader in Buenos Aires), and through sourcing agents or intermediaries with experience in the Argentine market.

**Step 3: Request Samples and Quotes**

Once you have identified potential suppliers, request product samples and quotations. Samples should be representative of the product you intend to order and should be assessed for grade, moisture content, surface finish, and dimensional accuracy. Quotations should specify the price per cubic metre or linear metre, the minimum order quantity, payment terms, and lead time.

**Step 4: Conduct Due Diligence**

Before placing an order, conduct basic due diligence on your chosen supplier. This should include verifying their export registration, requesting references from other buyers, and checking for any relevant certifications (FSC, PEFC, etc.). For larger orders, a factory visit or third-party inspection may be advisable.

**Step 5: Place Your Order and Manage Logistics**

Once you are satisfied with the supplier, place your order with a clear written purchase order specifying all agreed specifications, quantities, prices, and delivery terms. Arrange freight forwarding and insurance, and agree on the documentation required for customs clearance at your destination port. Consider using a letter of credit for first-time orders to protect both parties.`,
  },
  {
    slug: "argentina-pine-export-ports-guide",
    title: "A Guide to Argentine Pine Export Ports",
    date: "2024-04-15",
    category: "Sourcing",
    excerpt:
      "An overview of the main ports used for Argentine pine exports — location, facilities, and what buyers need to know.",
    body: `Understanding Argentina's export port infrastructure is important for buyers planning to source pine products from the country. This post provides an overview of the main ports used for pine exports, their facilities, and what buyers should know about each.

**The Paraná River System**

Argentina's pine-growing regions in the Mesopotamia area are connected to the export port network via the Paraná River and its tributaries. The river system allows timber and processed wood products to be transported by barge from the growing regions to deep-water export ports further downstream, reducing road transport costs and distances.

**Puerto General San Martín and Puerto Rosario**

Located in Santa Fe province, approximately 300km north of Buenos Aires, Puerto General San Martín and Puerto Rosario are the primary deep-water export ports for Argentine pine. Both ports have well-established container handling facilities and regular liner services to Asia, the Middle East, Europe, and other destinations. Most Argentine pine exporters use these ports for container loading and export.

Puerto Rosario is the larger of the two ports and handles a significant volume of Argentina's agricultural and industrial exports. It has multiple container terminals with modern handling equipment and good connectivity to the national road and rail network.

**Puerto Buenos Aires**

The Port of Buenos Aires handles a portion of pine exports, particularly for smaller volumes and LCL (less-than-container-load) shipments. It is the most accessible port for buyers requiring small quantities or mixed container loads, and has the best connectivity to international liner services.

**Implications for Buyers**

For most buyers ordering full container loads (FCL) of Argentine pine, Puerto General San Martín or Puerto Rosario will be the loading port. Buyers should confirm the loading port with their supplier when requesting a quotation, as freight rates and transit times can vary depending on the port of origin.`,
  },
  {
    slug: "kiln-drying-argentine-pine",
    title: "Kiln Drying Argentine Pine: What Buyers Should Know",
    date: "2024-05-06",
    category: "Products",
    excerpt:
      "An explanation of kiln drying for Argentine pine — why it matters, what moisture content to specify, and how to verify it.",
    body: `Kiln drying is one of the most important processing steps for pine lumber and processed wood products, and it is a critical factor in the quality and performance of Argentine pine in service. This post explains the kiln drying process, why it matters, and what buyers should specify and verify.

**Why Kiln Drying Matters**

Freshly sawn pine timber contains a high proportion of free and bound water — typically 80–120% moisture content (MC) on a dry weight basis. At this moisture content, the timber is prone to fungal decay, insect attack, and significant dimensional movement as it dries in service. Kiln drying reduces the moisture content to a level appropriate for the intended application, improving dimensional stability, durability, and workability.

**The Kiln Drying Process**

Kiln drying involves stacking the timber in a controlled-environment chamber (the kiln) and gradually reducing the temperature and humidity to drive moisture out of the wood. The process typically takes 1–3 weeks depending on the species, thickness, and target moisture content. Modern kilns use computer-controlled drying schedules to minimise drying defects such as checking, splitting, and case hardening.

**What Moisture Content to Specify**

The appropriate moisture content for Argentine pine depends on the intended application and the destination climate. As a general guide:

- For interior applications in climate-controlled environments (furniture, joinery, interior trim): 10–14% MC
- For general construction in temperate climates: 15–19% MC
- For exterior applications (treated timber): 18–22% MC before treatment

Buyers should specify the target moisture content in their purchase order and request moisture content test results with each shipment.

**How to Verify Moisture Content**

Moisture content can be verified using a calibrated pin-type or capacitance-type moisture meter. For large shipments, buyers should request a moisture content certificate from the supplier, showing the average and range of moisture content measurements taken from a representative sample of the shipment. Third-party inspection services can also be engaged to verify moisture content before shipment.`,
  },
  {
    slug: "fsc-certified-pine-argentina",
    title: "FSC Certified Pine from Argentina",
    date: "2024-05-20",
    category: "Sourcing",
    excerpt:
      "An overview of FSC certification in Argentina's pine industry — which mills are certified, what it means for buyers, and how to source certified timber.",
    body: `Forest Stewardship Council (FSC) certification is increasingly important for buyers with sustainability requirements or customers in markets where certified timber is preferred or required. This post provides an overview of FSC certification in Argentina's pine industry.

**What is FSC Certification?**

FSC certification is an independent, third-party certification system that verifies that timber products come from forests managed according to environmental, social, and economic standards. There are two main types of FSC certification relevant to timber buyers: Forest Management (FM) certification, which applies to the forest itself, and Chain of Custody (CoC) certification, which applies to the processing and trading of certified timber.

**FSC in Argentina**

A growing number of Argentina's pine plantations and processing mills hold FSC certification. FSC-certified plantation area in Argentina has expanded significantly over the past decade, driven by demand from export markets — particularly in Europe and North America — where certified timber is increasingly required.

Several of Argentina's major pine exporters hold both FSC Forest Management and Chain of Custody certification, enabling them to supply FSC-labelled products to buyers with certification requirements. The number of certified operations continues to grow as more mills seek to access premium markets.

**What FSC Certification Means for Buyers**

For buyers, sourcing FSC-certified Argentine pine provides assurance that the timber comes from responsibly managed forests and has been tracked through the supply chain. This can be important for buyers supplying to retailers, construction projects, or end markets with sustainability requirements, or for buyers seeking to meet their own corporate sustainability commitments.

**How to Source FSC-Certified Argentine Pine**

Buyers seeking FSC-certified Argentine pine should specify this requirement in their purchase inquiry and request a copy of the supplier's FSC Chain of Custody certificate. The certificate should be current (not expired) and should cover the specific products being ordered. Buyers can verify the authenticity of FSC certificates through the FSC certificate database at info.fsc.org.`,
  },
  {
    slug: "pine-mouldings-vietnam-market",
    title: "Argentine Pine Mouldings in the Vietnamese Market",
    date: "2024-06-03",
    category: "Market Intelligence",
    excerpt:
      "How Argentine pine mouldings are used in Vietnam's furniture and joinery industry, and what Vietnamese buyers look for.",
    body: `Vietnam has become one of the most important markets for Argentine pine mouldings, with significant volumes imported annually for use in furniture manufacturing, interior joinery, and construction. This post examines how Argentine pine mouldings are used in the Vietnamese market and what Vietnamese buyers typically look for.

**Vietnam's Wood Products Industry**

Vietnam is one of the world's largest exporters of wood furniture and interior products, with a manufacturing industry that sources timber from a wide range of countries. Argentine pine has become an important raw material for Vietnamese furniture and joinery manufacturers, valued for its consistent quality, workability, and competitive pricing.

**How Argentine Pine Mouldings Are Used**

In Vietnam, Argentine pine mouldings are used primarily in furniture manufacturing (door frames, cabinet components, decorative trim), interior joinery (architraves, skirting boards, cornice mouldings), and construction (door and window frames). Finger joint mouldings are particularly popular for paint-grade applications, where a smooth, knot-free surface is required.

**What Vietnamese Buyers Look For**

Vietnamese buyers of Argentine pine mouldings typically prioritise the following factors:

*Consistent quality:* Vietnamese manufacturers require consistent dimensions, moisture content, and surface finish across shipments. Variability in quality can cause production problems and customer complaints.

*Competitive pricing:* Price is a critical factor for Vietnamese buyers, who operate in a highly competitive export market. Argentine pine is valued for its combination of quality and competitive pricing relative to alternatives such as New Zealand radiata pine.

*Reliable supply:* Vietnamese manufacturers require reliable, on-time delivery to maintain production schedules. Buyers typically work with suppliers who can commit to regular shipment schedules.

*Appropriate moisture content:* Vietnam's tropical climate means that timber with too high a moisture content can develop mould or warp in transit or in storage. Vietnamese buyers typically specify a moisture content of 12–15% for Argentine pine mouldings.`,
  },
  {
    slug: "pine-panels-furniture-manufacturing",
    title: "Pine Panels in Furniture Manufacturing: Argentine Options",
    date: "2024-06-17",
    category: "Products",
    excerpt:
      "How Argentine pine panels are used in furniture manufacturing, and what specifications furniture producers should look for.",
    body: `Argentine pine panels have become an important raw material for furniture manufacturers in Asia and the Middle East, offering a combination of workability, dimensional stability, and competitive pricing. This post examines how pine panels are used in furniture manufacturing and what specifications furniture producers should consider.

**Panel Types for Furniture**

The most commonly used panel types in furniture manufacturing are edge-glued panels (EGP) and laminated boards. EGP is produced by gluing narrow strips of kiln-dried pine together along their edges to form a wide, flat panel. Laminated boards are produced by gluing multiple layers of pine together under pressure, with the grain direction of alternate layers running perpendicular to each other for added stability.

For furniture applications, EGP is typically preferred because it has a more natural appearance (the grain of the individual strips is visible on the surface) and is suitable for both paint and stain finishes. Laminated boards are used where additional strength or stability is required.

**Key Specifications for Furniture Producers**

Furniture producers sourcing Argentine pine panels should pay particular attention to the following specifications:

*Moisture content:* For furniture applications in climate-controlled environments, a moisture content of 8–12% is appropriate. Higher moisture content can cause panels to warp or split as they dry in service.

*Surface quality:* For furniture applications, panels should be sanded to a smooth, consistent surface on both faces (S2S). Any knots or defects should be filled and sanded flush before shipment.

*Dimensional accuracy:* Furniture manufacturers require panels with consistent dimensions and square, flat surfaces. Buyers should specify dimensional tolerances in their purchase order and request quality control documentation.

*Glue type:* For furniture applications, panels should be produced with interior-grade adhesive (PVA or equivalent). For applications where the panel may be exposed to moisture (kitchen furniture, bathroom vanities), exterior-grade adhesive (MUF or equivalent) should be specified.

**Ordering and Lead Times**

Argentine pine panels are available in standard sheet sizes (1200×2400mm or 1220×2440mm) from stock, or in custom sizes with additional lead time. Most mills require a minimum order of one 20-foot container per order.`,
  },
  {
    slug: "container-loading-pine-lumber",
    title: "Container Loading Guide for Pine Lumber",
    date: "2024-07-01",
    category: "Sourcing",
    excerpt:
      "A practical guide to container loading for pine lumber — how to maximise container utilisation and what to specify for efficient loading.",
    body: `Efficient container loading is important for buyers of pine lumber, as it directly affects the cost per cubic metre of product delivered to the destination port. This guide covers the key principles of container loading for pine lumber and what buyers should specify to maximise container utilisation.

**Container Types**

Pine lumber is typically shipped in 20-foot or 40-foot dry containers. For most buyers, the 40-foot container offers the best value per cubic metre of product, as the fixed costs of ocean freight (documentation, port charges, and a portion of the freight rate) are spread over a larger volume.

40-foot High Cube containers (with an internal height of approximately 2.69m versus 2.39m for standard containers) can be useful for loading long lengths of lumber or tall bundles of mouldings, but are not always available on all trade routes.

**Typical Container Loads**

The volume of pine lumber that can be loaded into a container depends on the dimensions of the product, the packing method, and the weight of the timber. As a general guide:

- 20-foot container: 18–25 m³ of pine lumber (depending on dimensions and moisture content)
- 40-foot container: 38–50 m³ of pine lumber
- 40-foot High Cube: 42–55 m³ of pine lumber

Note that container payload limits (typically 28 tonnes for a 20-foot container and 28 tonnes for a 40-foot container) may restrict the volume of dense or green timber that can be loaded.

**Packing Methods**

Pine lumber is typically loaded in bundles, with individual pieces stacked and strapped together. Bundles should be sized to fit the container width and height efficiently, with minimal wasted space. Dunnage (timber spacers) should be placed between bundles to allow air circulation and prevent moisture build-up.

**Fumigation**

Most destination countries require pine lumber to be fumigated or heat-treated before import to prevent the introduction of wood-boring insects and other pests. The most common treatment is methyl bromide fumigation or heat treatment to ISPM 15 standards. Buyers should confirm the treatment requirements for their destination country and ensure that the supplier can provide the required treatment certificate.`,
  },
  {
    slug: "argentine-pine-vs-new-zealand-radiata",
    title: "Argentine Pine vs New Zealand Radiata: A Buyer's Comparison",
    date: "2024-07-15",
    category: "Market Intelligence",
    excerpt:
      "A detailed comparison of Argentine Pinus taeda and New Zealand Pinus radiata for international buyers — quality, pricing, availability, and applications.",
    body: `Argentine Pinus taeda and New Zealand Pinus radiata are the two most widely traded plantation softwoods in the Asia-Pacific region. This post provides a detailed comparison for buyers considering both options.

**Background**

New Zealand radiata pine has dominated the Asia-Pacific softwood market for decades, with a well-established supply chain, consistent quality, and strong brand recognition among buyers in Asia, the Middle East, and the Pacific. Argentine Pinus taeda is a newer entrant to these markets but has gained significant market share over the past decade, driven by competitive pricing and improving quality.

**Quality Comparison**

Both species produce high-quality timber suitable for a wide range of applications. New Zealand radiata pine is widely regarded as one of the most consistent and uniform plantation softwoods in the world, with a fine, even grain and excellent paint acceptance. Argentine Pinus taeda is slightly denser and harder, with a more pronounced grain and slightly higher resin content.

For paint-grade applications (mouldings, finger joint products, painted furniture), both species perform well, with New Zealand radiata having a slight edge in terms of surface uniformity. For stain or natural finish applications, Argentine Pinus taeda's more pronounced grain can be an advantage, giving the timber a more characterful appearance.

**Pricing**

Argentine pine is generally priced at a discount to New Zealand radiata pine, reflecting lower production costs in Argentina. The price differential varies by product type and market conditions, but Argentine pine typically offers a cost saving of 10–25% compared to equivalent New Zealand radiata products. For price-sensitive buyers, this can represent a significant saving on large volume orders.

**Availability and Lead Times**

New Zealand radiata pine benefits from a well-established export infrastructure with regular liner services to all major Asian and Pacific ports. Argentine pine has improved significantly in terms of export logistics over the past decade, but lead times and shipping frequency may be slightly longer for some destinations.

**Recommendation**

For buyers with strict quality requirements and established supply chains, New Zealand radiata pine remains the benchmark. For buyers seeking a cost-competitive alternative without significant compromise on quality, Argentine Pinus taeda is an excellent option, particularly for paint-grade mouldings, finger joint products, and panels.`,
  },
  {
    slug: "pine-lumber-moisture-content-guide",
    title: "Moisture Content in Pine Lumber: A Buyer's Guide",
    date: "2024-08-05",
    category: "Products",
    excerpt:
      "Understanding moisture content in pine lumber — why it matters, how to specify it, and how to verify it on arrival.",
    body: `Moisture content is one of the most important quality parameters for pine lumber and processed wood products. Getting it wrong can result in warping, splitting, mould growth, and other problems in service. This guide explains what buyers need to know about moisture content in Argentine pine.

**What is Moisture Content?**

Moisture content (MC) is the weight of water in timber expressed as a percentage of the dry weight of the wood. Freshly sawn pine timber typically has a moisture content of 80–120%, meaning it contains more water than wood by weight. Kiln drying reduces this to a level appropriate for the intended application.

**Why Does Moisture Content Matter?**

Timber with too high a moisture content will continue to dry and shrink after installation, potentially causing gaps, warping, or splitting. Timber with too low a moisture content may absorb moisture from the surrounding environment and swell, causing similar problems. Matching the moisture content of the timber to the equilibrium moisture content (EMC) of the environment where it will be used is the key to dimensional stability in service.

**Recommended Moisture Content Levels**

As a general guide, the following moisture content levels are appropriate for different applications:

- Interior furniture and joinery in air-conditioned environments: 8–12%
- Interior construction in temperate climates: 12–16%
- General construction in tropical climates: 15–19%
- Exterior applications (before treatment): 18–22%

**Specifying Moisture Content**

Buyers should specify the target moisture content and acceptable range in their purchase order. A typical specification might read: "Kiln dried to 12–15% MC, maximum 18% MC for any individual piece."

**Verifying Moisture Content**

Moisture content can be verified using a calibrated moisture meter. For large shipments, buyers should request a moisture content certificate from the supplier, showing measurements taken from a representative sample of the shipment. Third-party inspection services can also be engaged to verify moisture content before shipment.`,
  },
  {
    slug: "phytosanitary-requirements-pine-imports",
    title: "Phytosanitary Requirements for Pine Imports",
    date: "2024-08-19",
    category: "Sourcing",
    excerpt:
      "An overview of phytosanitary and biosecurity requirements for importing pine products from Argentina into key destination markets.",
    body: `Phytosanitary and biosecurity requirements are an important consideration for buyers importing pine products from Argentina. Failure to comply with destination country requirements can result in shipments being held, fumigated, or destroyed at the buyer's expense. This post provides an overview of the key requirements for major destination markets.

**What are Phytosanitary Requirements?**

Phytosanitary requirements are regulations designed to prevent the introduction of plant pests and diseases through the import of plant-based products, including timber. Most countries require imported timber to be accompanied by a phytosanitary certificate issued by the exporting country's plant health authority, confirming that the product has been inspected and meets the importing country's requirements.

**ISPM 15 — International Standards for Phytosanitary Measures**

ISPM 15 is an international standard that specifies approved treatments for wood packaging material (pallets, crates, dunnage) used in international trade. Most countries require wood packaging material to be treated to ISPM 15 standards (heat treatment or methyl bromide fumigation) and marked with the ISPM 15 mark. Buyers should ensure that their supplier uses ISPM 15-compliant packaging.

**Requirements for Key Destination Markets**

*Vietnam:* Requires a phytosanitary certificate from Argentina's SENASA (National Agri-Food Health and Quality Service) for all timber imports. Heat treatment or fumigation may be required depending on the product type and species.

*China:* Requires a phytosanitary certificate and may require additional treatment (heat treatment or fumigation) for pine products. China's biosecurity requirements have become more stringent in recent years, and buyers should confirm current requirements with their customs broker before ordering.

*Australia:* Has strict biosecurity requirements for timber imports. Argentine pine must be accompanied by a phytosanitary certificate and may require heat treatment or fumigation. Buyers should consult the Australian Department of Agriculture, Fisheries and Forestry (DAFF) for current requirements.

*New Zealand:* Requires a phytosanitary certificate and heat treatment or fumigation for most pine timber imports. Buyers should consult the Ministry for Primary Industries (MPI) for current requirements.

**Practical Advice**

Buyers should confirm phytosanitary requirements for their destination country with their customs broker or freight forwarder before placing an order, and ensure that their supplier can provide the required documentation and treatment. Building phytosanitary requirements into the purchase order specification avoids last-minute complications at the destination port.`,
  },
  {
    slug: "argentina-pine-industry-outlook-2024",
    title: "Argentina's Pine Industry: Outlook and Trends",
    date: "2024-09-02",
    category: "Market Intelligence",
    excerpt:
      "An assessment of Argentina's pine industry outlook — production trends, investment, export growth, and key challenges.",
    body: `Argentina's pine industry has experienced significant growth and transformation over the past decade, and the outlook for the coming years is broadly positive for international buyers. This post examines the key trends shaping Argentina's pine industry and what they mean for buyers.

**Production Growth**

Argentina's pine plantation area has grown steadily over the past two decades, supported by government incentives for afforestation and private investment in plantation establishment. The country's plantation area is expected to continue growing, providing a growing raw material base for the processing industry.

Investment in processing capacity has also been significant, with new sawmills, kiln-drying facilities, moulding plants, and panel mills coming online in recent years. This investment is improving the quality and range of products available for export and reducing lead times for some product categories.

**Export Growth**

Argentine pine exports have grown significantly over the past decade, driven by demand from Asian markets — particularly Vietnam, China, and South Korea. Export volumes are expected to continue growing as Argentine mills increase capacity and improve product quality.

The development of new export markets — including South Asia, the Middle East, and Oceania — is also contributing to export growth, reducing Argentina's dependence on a small number of key markets.

**Currency and Economic Challenges**

Argentina's chronic economic instability and currency volatility have been a persistent challenge for the pine export industry. Currency controls, inflation, and periodic economic crises can affect pricing, payment terms, and the reliability of supply. Buyers should be aware of these risks and factor them into their sourcing strategy, particularly for large or long-term orders.

**Sustainability and Certification**

The growing importance of sustainability in global timber markets is driving increased investment in FSC and PEFC certification among Argentine pine producers. The number of certified operations is growing, and buyers with sustainability requirements will find an increasing range of certified options available from Argentina.

**Outlook**

The overall outlook for Argentine pine exports is positive, with growing production, improving quality, and expanding export markets. For buyers seeking a cost-competitive, quality alternative to traditional softwood sources, Argentina's pine industry offers an increasingly attractive option.`,
  },
  {
    slug: "pine-mouldings-specifications-guide",
    title: "How to Specify Pine Mouldings: A Technical Guide",
    date: "2024-09-16",
    category: "Products",
    excerpt:
      "A technical guide to specifying pine mouldings — profile dimensions, tolerances, moisture content, and surface finish.",
    body: `Specifying pine mouldings correctly is essential for getting the product you need from your supplier. This technical guide covers the key parameters that should be included in a moulding specification.

**Profile Dimensions**

The most important dimension for a moulding is the profile — the cross-sectional shape of the finished piece. Profile dimensions are typically specified as the overall width and thickness of the piece (the "blank size") plus a profile drawing or reference to a standard profile name.

For standard profiles (architrave, skirting, scotia, etc.), buyers can reference the profile by name and provide a cross-section drawing showing the exact dimensions required. For custom profiles, a full-size drawing or a physical sample piece should be provided to the supplier.

**Dimensional Tolerances**

Buyers should specify acceptable dimensional tolerances for width, thickness, and length. Typical tolerances for pine mouldings are:

- Width and thickness: ±0.5mm for dressed dimensions
- Length: +50mm / -0mm (i.e., pieces may be slightly longer than specified but not shorter)
- Straightness: maximum bow of 2mm per 2.4m length

**Moisture Content**

Moisture content should be specified as a target range and a maximum for any individual piece. A typical specification for interior applications might be: "KD 12–15%, maximum 18% for any individual piece."

**Surface Finish**

Surface finish should be specified as one of: rough machined (RM), smooth machined (SM), sanded (S), or primed (P). For paint-grade applications, a smooth machined or sanded finish is typically required. For primed mouldings, the primer type and coverage should be specified.

**Packaging**

Packaging requirements should be specified, including bundle size, wrapping material, and labelling. Typical packaging for export mouldings is bundles of 10–20 pieces, wrapped in plastic film and labelled with product code, dimensions, and quantity.

**Quality Control Documentation**

Buyers should request quality control documentation with each shipment, including moisture content test results, dimensional inspection records, and photographs of the finished product.`,
  },
  {
    slug: "pine-lumber-uses-construction",
    title: "Pine Lumber in Construction: Applications and Grades",
    date: "2024-10-07",
    category: "Products",
    excerpt:
      "How pine lumber from Argentina is used in construction applications, and which grades are appropriate for different uses.",
    body: `Pine lumber is one of the most versatile construction materials in the world, used in applications ranging from structural framing to interior fit-out. This post examines how Argentine pine lumber is used in construction and which grades are appropriate for different applications.

**Structural Framing**

Pine lumber is widely used for structural framing in residential and light commercial construction, including wall framing, floor joists, roof rafters, and beams. For structural applications, lumber must be graded to a recognised structural grading standard to ensure adequate strength and stiffness.

Argentine pine can be graded to structural standards on request, with most mills able to provide machine stress-rated (MSR) or visually graded structural lumber. Buyers should specify the structural grade required and confirm that the supplier can provide the necessary grading documentation.

**Floor and Deck Framing**

Pine lumber is commonly used for floor and deck framing, where it is exposed to higher moisture levels than interior framing. For these applications, kiln-dried lumber with a moisture content of 15–19% is appropriate, and preservative treatment may be required depending on the exposure conditions.

**Interior Fit-Out**

Pine lumber is widely used in interior fit-out applications, including door and window frames, stair components, shelving, and decorative trim. For these applications, appearance is important, and higher grades (Select or No. 1 Common) are typically specified.

**Packing and Crating**

Lower-grade pine lumber (Utility or Economy grade) is widely used for packing cases, crates, and pallets. For these applications, structural performance is more important than appearance, and lower-grade material with knots and other defects is acceptable.

**Specifying Pine Lumber for Construction**

When specifying pine lumber for construction applications, buyers should include the following in their specification: species, grade, dimensions (thickness, width, length), moisture content, surface finish (rough sawn or dressed), and any treatment requirements. Clear documentation of requirements reduces the risk of receiving unsuitable material.`,
  },
  {
    slug: "sourcing-pine-mouldings-vietnam-buyers",
    title: "Sourcing Pine Mouldings for Vietnamese Furniture Manufacturers",
    date: "2024-10-21",
    category: "Market Intelligence",
    excerpt:
      "A guide for Vietnamese furniture manufacturers sourcing pine mouldings from Argentina — what to look for, how to order, and common pitfalls.",
    body: `Vietnamese furniture manufacturers are among the largest buyers of Argentine pine mouldings in the world. This post is written specifically for Vietnamese buyers, covering the key considerations for sourcing Argentine pine mouldings effectively.

**Why Argentine Pine?**

Argentine pine mouldings offer Vietnamese furniture manufacturers a combination of consistent quality, competitive pricing, and a wide range of available profiles. The species — primarily Pinus taeda — is well-suited to paint-grade joinery applications, which represent a significant proportion of Vietnamese furniture production.

**What to Look For**

Vietnamese furniture manufacturers should prioritise the following when evaluating Argentine pine moulding suppliers:

*Moisture content:* Vietnam's tropical climate means that timber arriving with too high a moisture content can develop mould in transit or in storage. Specify a moisture content of 12–15% and request moisture content certificates with each shipment.

*Surface quality:* For paint-grade applications, the moulding surface must be smooth and free of machining marks, tearout, and other defects. Request samples before ordering and inspect them carefully.

*Dimensional consistency:* Furniture manufacturing requires consistent dimensions across all pieces in a shipment. Specify tight dimensional tolerances and request quality control documentation.

*Profile accuracy:* If ordering custom profiles, provide a full-size profile drawing to the supplier and request a sample piece for approval before production.

**Common Pitfalls**

*Ordering without samples:* Always request and inspect samples before placing a large order. Photographs can be misleading — physical samples allow you to assess surface quality, moisture content, and dimensional accuracy directly.

*Insufficient lead time:* Argentine pine mouldings typically require 6–12 weeks from order to shipment for production items. Allow sufficient lead time to avoid production delays.

*Unclear specifications:* Provide a clear, written specification for all products ordered. Verbal agreements and informal communications are a common source of disputes.

**Building a Long-Term Relationship**

The most successful buyers of Argentine pine mouldings build long-term relationships with their suppliers, with regular orders, clear communication, and mutual investment in quality improvement. Suppliers who know your requirements and production standards are better able to meet them consistently.`,
  },
  {
    slug: "pine-products-middle-east-market",
    title: "Argentine Pine Products in the Middle East Market",
    date: "2024-11-04",
    category: "Market Intelligence",
    excerpt:
      "How Argentine pine products are used in Middle Eastern construction and interior fit-out markets, and what buyers in the region look for.",
    body: `The Middle East is an important and growing market for Argentine pine products, with significant demand from construction, interior fit-out, and furniture manufacturing sectors. This post examines how Argentine pine is used in the Middle East and what buyers in the region typically look for.

**Market Overview**

The Middle East's construction boom — driven by population growth, urbanisation, and major infrastructure projects — has created strong demand for timber products across the region. Argentina has established itself as a reliable supplier of pine lumber, mouldings, and panels to buyers in Saudi Arabia, the UAE, Qatar, and other Gulf states.

**Key Applications**

*Construction:* Pine lumber is used in residential and commercial construction for framing, formwork, and temporary structures. The region's predominantly concrete construction methods limit the use of timber in structural applications, but pine lumber is widely used for formwork and temporary works.

*Interior Fit-Out:* Pine mouldings, finger joint products, and panels are widely used in interior fit-out applications, including door and window frames, skirting boards, cornice mouldings, and furniture components. The region's high-end residential and hospitality sectors are significant consumers of quality pine joinery products.

*Furniture Manufacturing:* A growing furniture manufacturing sector in Saudi Arabia, UAE, and Egypt uses Argentine pine panels and lumber as raw materials for furniture production.

**What Middle Eastern Buyers Look For**

Middle Eastern buyers of Argentine pine products typically prioritise:

*Consistent quality:* Buyers in the region require consistent dimensions, moisture content, and surface finish across shipments. Variability in quality can cause production problems and customer complaints.

*Competitive pricing:* Price is a critical factor for most Middle Eastern buyers, who source from multiple countries and compare prices carefully.

*Reliable supply:* Buyers require reliable, on-time delivery to maintain production schedules and meet project deadlines.

*Documentation:* Middle Eastern customs authorities require comprehensive documentation for timber imports, including phytosanitary certificates, certificates of origin, and fumigation certificates. Buyers should ensure that their supplier can provide all required documentation.

**Logistics**

Argentine pine products are typically shipped to Middle Eastern ports (Dubai/Jebel Ali, Dammam, Jeddah) via the Atlantic route, with transit times of approximately 20–30 days from Argentine ports. Several major shipping lines offer regular services on this route.`,
  },
];

export const about = {
  title: "About ArgentinaPine.com",
  body: `ArgentinaPine.com is an independent online resource for international buyers of Argentine pine products. The site provides information on product types, species characteristics, export logistics, and market intelligence to help buyers make informed sourcing decisions.

The site covers the full range of Argentine pine products available for export, including lumber and boards, pine mouldings, finger joint mouldings, and panels and sheet goods. Content is produced by specialists with direct experience in the Argentine pine export market.

ArgentinaPine.com is operated by New Zealand Lumber Exports Limited, an independent pine sourcing specialist.`,
  disclosure:
    "ArgentinaPine.com is operated by New Zealand Lumber Exports Limited, an independent pine sourcing specialist.",
};

export const contact = {
  title: "Contact & Inquiry",
  intro:
    "Send us your product specifications and we will provide information, typical pricing guidance, and sourcing support.",
  email: "inquiry@argentinapine.com",
  formFields: {
    name: "Name",
    company: "Company",
    country: "Country",
    message: "Message",
    submit: "Send Inquiry",
  },
  disclosure:
    "ArgentinaPine.com is operated by New Zealand Lumber Exports Limited.",
};
