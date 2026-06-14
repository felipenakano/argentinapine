// ArgentinaPine.com — Content Data
// Design: Timber Atlas — Premium B2B Trade Portal

export const PRODUCT_IMAGES: Record<string, string> = {
  "lumber-boards": "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/lumber-boards-v2-bHP9X5ePQ4hVBVzFE3r3iu.webp",
  "pine-mouldings": "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/pine-mouldings-YR6gNyeXNvEqodfVDq7fb5.webp",
  "finger-joint-mouldings": "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/finger-joint-mouldings-3Y4FG8TFU9hTRsPt4jjYWt.webp",
  "panels-sheet-goods": "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/pine-panels-n2UJybQ9sVpiAYqeoxWgnJ.webp",
  "pallet-wood": "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/pallet-wood-product-Qh39aPYkxFnFDxVXcDo8DJ.webp",
};

export const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/hero-pine-forest-XgRiG9fbVxGeZLeukbZW6z.webp";

export interface Product {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  specs: { label: string; value: string }[];
  uses: string[];
  grades: { name: string; desc: string }[];
  cta: string;
}

export const products: Product[] = [
  {
    slug: "lumber-boards",
    title: "Timber & Boards",
    shortDesc: "Rough-sawn and dressed pine timber in standard and custom dimensions.",
    description: "Argentine pine timber is produced from Pinus taeda grown in the Mesopotamia region of northeastern Argentina. This species produces a light-coloured, straight-grained wood that is easy to machine, glue, and finish. Sawn timber is available in rough-sawn (RS) form, with kiln-dried (KD) options available from most major mills. Also available as pine lumber in standard dimensional sizes.",
    specs: [
      { label: "Species", value: "Pinus taeda" },
      { label: "Moisture Content", value: "KD 12–18%" },
      { label: "Common Thicknesses", value: "19mm, 25mm, 38mm, 50mm" },
      { label: "Common Widths", value: "75mm, 100mm, 150mm, 200mm" },
      { label: "Common Lengths", value: "1.8m, 2.4m, 3.0m, 3.6m, 4.2m, 4.8m, 5.4m, 6.0m" },
      { label: "Surface Finish", value: "Rough Sawn (RS), S4S" },
    ],
    uses: [
      "Structural framing and wall framing",
      "Flooring substrate and decking",
      "Furniture and cabinet carcassing",
      "Packing crates and pallets",
      "Formwork and scaffolding",
    ],
    grades: [
      { name: "Clears", desc: "No knots, no pith, straight grain. Suitable for high-end joinery, furniture, and appearance applications." },
      { name: "COL-A / COL-Select", desc: "No pith. Small, tight knots permitted. Suitable for paint-grade joinery and furniture manufacturing." },
      { name: "Millrun", desc: "Mixed grade as it comes from the mill. Suitable for general construction, framing, and structural applications." },
      { name: "Industrial", desc: "Significant defects permitted. Suitable for packing, crating, pallets, and low-grade construction." },
    ],
    cta: "Inquire About Timber & Boards",
  },
  {
    slug: "pine-mouldings",
    title: "Pine Mouldings",
    shortDesc: "Profiled pine mouldings for joinery, furniture, and interior fit-out.",
    description: "Argentine pine mouldings are produced from kiln-dried Pinus taeda, machined to precise profiles for use in interior joinery, furniture manufacturing, and architectural fit-out. Argentine mills are equipped with modern moulding machinery capable of producing standard profiles (architrave, skirting, scotia, ogee, ovolo, pencil round) as well as custom profiles to buyer specification.",
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
      { name: "Finger Joint Clear (FJC)", desc: "Finger-jointed from clear pieces, paint-grade, no visible knots." },
      { name: "Clear Solid", desc: "Solid clear timber, suitable for stain or natural finish." },
      { name: "Select Knotty", desc: "Small tight knots permitted, suitable for paint or rustic stain finishes." },
    ],
    cta: "Inquire About Pine Mouldings",
  },
  {
    slug: "finger-joint-mouldings",
    title: "Finger Joint Mouldings",
    shortDesc: "Precision finger-jointed pine mouldings for paint-grade joinery applications.",
    description: "Finger joint mouldings are produced by end-joining short, clear sections of Pinus taeda using precision finger joint machinery and exterior-grade adhesive. The resulting product is dimensionally stable, knot-free, and highly consistent — making it the preferred choice for paint-grade interior joinery applications where a smooth, blemish-free surface is required.",
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
      { name: "Finger Joint Clear (FJC) — Paint Grade", desc: "No visible knots, smooth machined surface, ready for primer and paint." },
      { name: "Finger Joint Primed (FJP)", desc: "Factory-primed with one coat of white primer, ready for topcoat on site." },
    ],
    cta: "Inquire About Finger Joint Mouldings",
  },
  {
    slug: "panels-sheet-goods",
    title: "Panels & Sheet Goods",
    shortDesc: "Pine panels, LVL, and laminated boards for furniture and construction.",
    description: "Argentine pine panels and sheet goods are produced from Pinus taeda using edge-gluing, lamination, and engineered wood processes. Products range from solid edge-glued panels (EGP) used in furniture and shelving to laminated veneer lumber (LVL) and structural panels for construction applications.",
    specs: [
      { label: "Species", value: "Pinus taeda" },
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
      { name: "Select / Furniture Grade", desc: "Clear, tight-grained panels suitable for natural or stain finishes." },
      { name: "Paint Grade", desc: "Minor defects filled and sanded, suitable for paint finish." },
      { name: "Industrial / Structural", desc: "Structural integrity prioritised over appearance, suitable for construction applications." },
    ],
    cta: "Inquire About Panels & Sheet Goods",
  },
  {
    slug: "pallet-wood",
    title: "Pallet Wood",
    shortDesc: "Argentine Pinus taeda cut stock and boards for pallet and packaging manufacture.",
    description: "Argentine pine pallet wood is produced from Pinus taeda and supplied as kiln-dried (KD) or heat-treated (HT) cut-to-length boards and notched components for pallet manufacturers. Heat-treated material meets ISPM 15 standards, making it suitable for export packaging applications worldwide. Consistent dimensions, straight grain, and competitive pricing make Argentine pine a preferred raw material for pallet producers across Asia, the Middle East, and the Pacific.",
    specs: [
      { label: "Species", value: "Pinus taeda" },
      { label: "Moisture Content", value: "KD 12–18%" },
      { label: "Common Thicknesses", value: "15mm, 16mm, 17mm, 18mm, 19mm, 20mm" },
      { label: "Common Widths", value: "75mm, 88mm, 95mm, 100mm, 125mm, 150mm" },
      { label: "Common Lengths", value: "800mm, 1000mm, 1100mm, 1200mm, custom" },
      { label: "Surface Finish", value: "Rough Sawn (RS)" },
      { label: "Treatment", value: "ISPM 15 Heat Treatment (HT mark available)" },
    ],
    uses: [
      "Pallet deck boards and stringer boards",
      "Export packaging and crating",
      "Light-duty wooden boxes and cases",
      "Dunnage and blocking material",
      "Low-cost construction and formwork",
    ],
    grades: [
      { name: "Pallet Grade A", desc: "Consistent dimensions, minimal wane, suitable for standard export pallets and reusable pallet programmes." },
      { name: "Pallet Grade B", desc: "Some wane and minor defects permitted. Suitable for one-way export pallets and general packaging." },
    ],
    cta: "Inquire About Pallet Wood",
  },
];

export interface SpeciesPage {
  slug: string;
  title: string;
  metaDesc: string;
  intro: string;
  body: string;
  keyFacts?: { label: string; value: string }[];
  comparisonTable?: Record<string, string>[];
  propertiesTable?: { property: string; value: string }[];
}

export const speciesPages: SpeciesPage[] = [
  {
    slug: "what-is-pinus-taeda",
    title: "What is Pinus Taeda?",
    metaDesc: "An overview of Pinus taeda (loblolly pine) — the primary commercial species grown in Argentina's plantation forests.",
    intro: "Pinus taeda, commonly known as loblolly pine, is the dominant commercial timber species grown in Argentina's plantation forests. Native to the southeastern United States, Pinus taeda was introduced to Argentina's Mesopotamia region in the mid-twentieth century and has since become the backbone of Argentina's softwood export industry.",
    body: `Pinus taeda thrives in the subtropical climate of northeastern Argentina, where warm temperatures, high rainfall, and well-drained red soils support rapid growth rates. Plantation-grown trees typically reach harvestable size in 15–20 years, producing timber with consistent grain, moderate density, and excellent workability.

The wood is light yellowish-brown in colour with a straight to slightly interlocked grain. It is moderately hard for a pine species, with a Janka hardness of approximately 870 lbf (3,870 N), making it suitable for a wide range of structural and appearance applications. The timber machines cleanly, takes glue well, and accepts paint, stain, and clear finishes without difficulty.

In Argentina, Pinus taeda is grown primarily in the province of Misiones, which accounts for the majority of the country's pine plantation area. The province's combination of subtropical climate, fertile soils, and established forestry infrastructure has made it the centre of Argentina's softwood processing industry.

For international buyers, Pinus taeda timber from Argentina offers a reliable, consistent, and cost-competitive alternative to North American southern yellow pine, European spruce, and New Zealand radiata pine. The species' combination of workability, dimensional stability, and availability in a wide range of processed forms makes it a versatile choice for furniture manufacturers, joinery producers, construction companies, and distributors across Asia, the Middle East, and the Pacific.`,
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
    metaDesc: "A detailed comparison of Pinus taeda (Argentine pine) and Pinus radiata (New Zealand/Chilean pine) for international buyers.",
    intro: "International buyers frequently compare Pinus taeda from Argentina with Pinus radiata from New Zealand and Chile — the two most widely traded plantation softwoods in the Asia-Pacific region. While both species are plantation-grown pines offering similar product ranges, there are meaningful differences in density, hardness, workability, and typical applications.",
    body: `**Density and Hardness**

Pinus taeda is moderately denser and harder than Pinus radiata. Argentine pine typically has an air-dry density of 480–560 kg/m³ and a Janka hardness of approximately 870 lbf, compared to Pinus radiata's density of 400–500 kg/m³ and Janka hardness of approximately 710 lbf. This makes Pinus taeda slightly more resistant to denting and wear, which can be an advantage in flooring, stair tread, and furniture applications.

**Workability**

Both species are easy to work with hand and machine tools. Pinus taeda has a slightly more pronounced grain and resin content than Pinus radiata, which can affect finishing in some applications. Radiata pine is generally considered to have a more uniform, fine-grained texture that accepts paint and stain with exceptional consistency.

**Dimensional Stability**

Pinus radiata is widely regarded as one of the most dimensionally stable plantation softwoods. Pinus taeda is also dimensionally stable when kiln-dried to appropriate moisture content, but may exhibit slightly more movement in high-humidity environments.

**Availability and Pricing**

Pinus radiata from New Zealand and Chile has historically dominated the Asia-Pacific softwood market. Argentine Pinus taeda offers a competitive alternative, often at lower cost, with growing export volumes and improving logistics infrastructure.`,
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
    metaDesc: "Technical properties and specifications for Pinus taeda grown in Argentina — density, strength, durability, and processing data.",
    intro: "This page provides technical properties and specifications for Pinus taeda grown in Argentina's plantation forests. Data is indicative of plantation-grown material from the Mesopotamia region and may vary depending on site, rotation age, and processing method.",
    body: `**Physical Properties**

Plantation-grown Pinus taeda from Argentina produces timber with consistent physical properties across the range of commercial grades. The wood is light yellowish-brown in colour, darkening slightly on exposure to light. The grain is generally straight with occasional slight interlocking.

**Mechanical Properties**

Pinus taeda has moderate mechanical properties for a plantation softwood, making it suitable for both structural and appearance applications. The species' modulus of rupture (MOR) and modulus of elasticity (MOE) values are comparable to other commercial pines and meet the requirements of most international structural timber standards when graded appropriately.

**Durability**

Pinus taeda has low natural durability and is susceptible to fungal decay and insect attack in exposed or high-moisture environments. For exterior or ground-contact applications, treatment with preservative (CCA, ACQ, or equivalent) is required.

**Treatability**

Pinus taeda is highly treatable with preservative chemicals due to its permeable sapwood. The species is classified as permeable to moderately resistant, making it suitable for full-cell pressure treatment processes.

**Processing**

The species machines cleanly with standard tooling. It glues well with PVA, MUF, and epoxy adhesives. It accepts nails, screws, and mechanical fasteners without splitting when pre-drilled. The timber sands to a smooth finish and accepts paint, primer, and clear finishes without difficulty.`,
    propertiesTable: [
      { property: "Air-dry density", value: "480–560 kg/m³" },
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

export interface SourcingPage {
  slug: string;
  title: string;
  metaDesc: string;
  intro: string;
  body: string;
}

export const sourcingPages: SourcingPage[] = [
  {
    slug: "argentine-pine-export-overview",
    title: "Argentine Pine Export Overview",
    metaDesc: "An overview of Argentina's pine export industry — production volumes, key markets, product mix, and trade data.",
    intro: "Argentina is one of the world's leading exporters of plantation pine, with a well-established forestry and wood processing industry centred in the Mesopotamia region of northeastern Argentina.",
    body: `**Argentina's Pine Plantation Industry**

Argentina's commercial pine plantations cover approximately 900,000 hectares, concentrated in the provinces of Misiones, Corrientes, and Entre Ríos. The dominant commercial species is Pinus taeda (loblolly pine), introduced from the southeastern United States and well-adapted to the subtropical climate of the region.

**Production and Processing**

Argentina's wood processing industry has grown significantly over the past two decades, with substantial investment in sawmilling, kiln-drying, moulding, and panel manufacturing capacity. The country produces a broad range of processed pine products for export, from rough-sawn sawn timber and kiln-dried boards to precision mouldings, finger joint products, and laminated panels.

**Key Export Markets**

Argentina's pine products are exported to markets across the world. Key destinations include Vietnam, China, South Korea, Japan, and Taiwan in Asia; Saudi Arabia, UAE, and other Gulf states in the Middle East; and New Zealand and Australia in Oceania.

**Trade and Certification**

Most Argentine pine exporters comply with CITES and phytosanitary requirements for export. A growing number of mills hold FSC Chain of Custody certification, enabling supply of certified pine timber to buyers with sustainability requirements.

**Currency and Payment**

Argentine pine is typically priced and invoiced in US dollars. Payment terms vary by supplier but commonly include 30% deposit with order and 70% against bill of lading, or letter of credit (LC) at sight.`,
  },
  {
    slug: "argentine-pine-ports-logistics",
    title: "Argentine Pine Ports & Logistics",
    metaDesc: "A guide to Argentine pine export ports, container loading, shipping routes, and logistics for international buyers.",
    intro: "Understanding Argentina's export logistics is essential for buyers planning to source pine products from the country. This page covers the main export ports, typical shipping routes, container specifications, and lead time expectations.",
    body: `**Main Export Port**

All Argentine pine exports are shipped through the Port of Buenos Aires (Puerto de Buenos Aires), Argentina's primary container port. The port is well-equipped for container handling of pine timber and processed wood products, with regular liner services to Asia, the Middle East, Oceania, and Europe. Sawn timber from the Mesopotamia growing regions in northeastern Argentina is transported by road and rail to Buenos Aires for container loading and export.

**Container Specifications**

Argentine pine timber and processed products are typically exported in 20-foot or 40-foot dry containers. Typical container loads for sawn timber range from 18–25 cubic metres (20-foot) to 38–50 cubic metres (40-foot), depending on product dimensions and packing method.

**Shipping Routes and Transit Times**

From the Port of Buenos Aires, typical transit times to major destination ports are:

- Vietnam (Ho Chi Minh City / Hai Phong): 28–38 days
- China (Shanghai / Guangzhou): 30–40 days
- South Korea (Busan): 32–42 days
- UAE (Dubai / Jebel Ali): 22–32 days
- New Zealand (Auckland): 20–28 days
- Australia (Sydney / Melbourne): 22–30 days

**Lead Times**

Buyers should allow 2–4 weeks for stock items and 6–12 weeks for production items from order confirmation to vessel loading, in addition to ocean transit time.

**Documentation**

Standard export documentation includes: commercial invoice, packing list, bill of lading, phytosanitary certificate, fumigation certificate (if required), certificate of origin, and FSC certificate (if applicable).`,
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "introduction-to-argentine-pine",
    title: "An Introduction to Argentine Pine for International Buyers",
    date: "2025-01-13",
    category: "Species",
    excerpt: "A primer on Argentina's plantation pine industry — what species are grown, where they are grown, and why they matter to international buyers.",
    body: `Argentina's plantation pine industry has grown from a modest forestry experiment in the mid-twentieth century into one of the world's most significant softwood export sectors. For international buyers unfamiliar with the country's timber industry, this post provides a concise introduction to the key species, growing regions, and product types that define Argentine pine.

**The Species**

The dominant commercial pine species grown in Argentina is Pinus taeda (loblolly pine), introduced from the southeastern United States and proven exceptionally well-suited to the subtropical climate of Argentina's Mesopotamia region. Pinus taeda accounts for the vast majority of Argentina's pine timber and processed wood production.

**The Growing Regions**

Argentina's pine plantations are concentrated in three northeastern provinces: Misiones, Corrientes, and Entre Ríos. Misiones — a narrow, forested province bordering Brazil and Paraguay — is the heartland of Argentina's pine industry, accounting for the largest plantation area and the greatest concentration of sawmills and processing facilities.

**The Products**

Argentine mills produce a comprehensive range of pine products for export, from rough-sawn sawn timber and kiln-dried boards to precision mouldings, finger joint products, and laminated panels. The industry has invested significantly in value-added processing capacity over the past two decades.

**Why It Matters**

For buyers in Asia, the Middle East, and the Pacific, Argentine pine offers a reliable, consistent, and cost-competitive alternative to North American southern yellow pine, European spruce, and New Zealand radiata pine.`,
  },
  {
    slug: "pinus-taeda-growing-regions-argentina",
    title: "Where is Pinus Taeda Grown in Argentina?",
    date: "2025-02-03",
    category: "Species",
    excerpt: "A geographic overview of Argentina's Pinus taeda plantation regions — Misiones, Corrientes, and Entre Ríos.",
    body: `Argentina's Pinus taeda plantations are concentrated in the Mesopotamia region — the area between the Paraná and Uruguay rivers in northeastern Argentina. This geographic overview covers the three main pine-growing provinces.

**Misiones**

Misiones is Argentina's most important pine-growing province, accounting for the majority of the country's plantation pine area. The province is a narrow, subtropical strip of land bordering Brazil to the north and east and Paraguay to the west. Its climate — warm, humid, and with high annual rainfall — is ideal for fast-growing Pinus taeda, which can reach harvestable size in as little as 15 years under optimal conditions.

**Corrientes**

Corrientes province, to the southwest of Misiones, has a significant and growing pine plantation area. The province's climate is slightly drier than Misiones, which can result in slower growth rates but also denser, harder timber in some cases.

**Entre Ríos**

Entre Ríos, the southernmost of the three main pine-growing provinces, has a smaller plantation area but contributes to Argentina's overall pine production. The province's cooler climate results in slower-growing timber with tighter growth rings.`,
  },
  {
    slug: "argentine-pine-lumber-grades-explained",
    title: "Argentine Pine Timber Grades Explained",
    date: "2025-02-24",
    category: "Products",
    excerpt: "A practical guide to Argentine pine timber grading — what the grades mean, how they are assessed, and which grade is right for your application.",
    body: `Timber grading is one of the most important factors in sourcing pine products, yet it is also one of the most frequently misunderstood. This post explains the grading system used for Argentine pine sawn timber and provides practical guidance for international buyers.

**How Argentine Pine Timber is Graded**

Argentine pine timber is graded visually. Graders assess each piece for knots, grain deviation, pith, warp, bow, twist, splits, and other defects. Most Argentine exporters use a broadly consistent set of grade descriptions, which are outlined below from highest to lowest.

**Clears**

The highest appearance grade. Clears are free of knots and pith, with straight, consistent grain. This grade is specified for applications where the natural wood surface will be visible — furniture faces, joinery, and high-end interior fit-out. Expect a significant price premium over lower grades.

**COL-A / COL-Select**

A high-quality structural and appearance grade. COL-A / COL-Select pieces are free of pith and contain only small, tight knots. This grade is well-suited to paint-grade joinery, furniture carcassing, and applications where dimensional stability and a clean surface are required but a fully clear face is not essential. It represents the best value for most B2B buyers.

**Millrun**

Mixed grade as it comes from the mill, without sorting by appearance. Millrun includes a range of knot sizes and minor defects. It is suitable for general construction, framing, and structural applications where appearance is secondary to structural performance. Millrun is the most common grade for volume orders and offers the most competitive pricing.

**Industrial**

The lowest grade, with significant defects permitted. Industrial-grade timber is suitable for packing, crating, pallet components, and low-grade construction where structural integrity is the only requirement. It is not suitable for visible applications.

**Practical Guidance for Buyers**

When ordering Argentine pine timber, specify the grade clearly in your purchase order. If you are unsure which grade suits your application, request sample pieces or photographs before committing to a container order. Most mills can supply Clears and COL-A / COL-Select in kiln-dried (KD) form; Millrun and Industrial are typically available KD or heat-treated (HT) depending on end use.

For pallet and packaging applications, see our separate Pallet Wood product page, which covers specific pallet grades and ISPM 15 heat treatment options.`,
  },
  {
    slug: "pine-mouldings-argentina-export",
    title: "Pine Mouldings from Argentina: What Buyers Need to Know",
    date: "2025-03-17",
    category: "Products",
    excerpt: "A buyer's guide to Argentine pine mouldings — profiles, grades, specifications, and what to look for when sourcing.",
    body: `Argentine pine mouldings have become an increasingly important export product over the past decade, with growing demand from furniture manufacturers and joinery producers in Vietnam, China, and other Asian markets.

**What Profiles Are Available?**

Argentine mills produce a wide range of standard moulding profiles, including architrave, skirting, scotia, ogee, ovolo, pencil round, and various bead and cove profiles. Most mills can also produce custom profiles to buyer specification.

**Solid vs Finger Joint**

Argentine pine mouldings are available in solid (produced from a single piece of timber) and finger joint (produced by end-joining short, clear pieces) forms. Finger joint mouldings are generally preferred for paint-grade applications because they are more dimensionally stable and free of knots.

**Surface Finish Options**

Argentine mouldings are available in smooth machined, sanded, and primed surface finishes. Primed mouldings are increasingly popular with buyers who want to reduce on-site finishing labour.

**Minimum Order Quantities**

Most mills require a minimum of one 20-foot container per order (approximately 15–20 cubic metres of product). For custom profiles, minimum quantities may be higher.`,
  },
  {
    slug: "finger-joint-mouldings-guide",
    title: "Finger Joint Mouldings: A Complete Buyer's Guide",
    date: "2025-04-07",
    category: "Products",
    excerpt: "Everything buyers need to know about finger joint pine mouldings — how they are made, why they are preferred for paint-grade applications, and what to specify.",
    body: `Finger joint mouldings are one of the most widely used products in interior joinery, and Argentine pine is one of the most popular raw materials for their production.

**How Finger Joint Mouldings Are Made**

Finger joint mouldings are produced by cutting short, clear pieces of kiln-dried pine into precise finger-shaped profiles at each end, then joining them end-to-end using structural adhesive under pressure. The resulting product is a long, continuous piece of timber that is free of knots and other defects.

**Why Finger Joint for Paint-Grade Applications?**

Finger joint mouldings offer several advantages over solid mouldings for paint-grade applications. They are produced from clear, defect-free timber, ensuring a smooth surface that accepts paint without the need for filling or sanding around knots. They are also more dimensionally stable because the finger jointing process randomises the orientation of the wood grain.

**Key Specifications to Confirm**

When ordering finger joint mouldings from Argentina, buyers should confirm: adhesive type, moisture content at time of shipment, profile dimensions and tolerances, surface finish, and packaging method.`,
  },
  {
    slug: "edge-glued-panels-argentina",
    title: "Edge Glued Pine Panels from Argentina",
    date: "2025-04-28",
    category: "Products",
    excerpt: "A guide to Argentine edge-glued pine panels — production process, specifications, grades, and applications.",
    body: `Edge-glued pine panels (EGP) are one of Argentina's most rapidly growing export products, with strong demand from furniture manufacturers in Asia and the Middle East.

**What is an Edge Glued Panel?**

An edge-glued panel is produced by gluing narrow strips of kiln-dried pine together along their long edges to form a wide, flat panel. The strips are selected for colour and grain consistency, arranged to minimise visual variation, and then glued under pressure.

**Specifications**

Argentine EGP is available in a range of thicknesses (typically 12mm, 18mm, 25mm, 30mm, and 38mm) and sheet sizes (typically 1200×2400mm or 1220×2440mm). Panels are available in sanded (S2S) or raw finish.

**Applications**

Argentine EGP is used in furniture and joinery applications including tabletops, shelving, cabinet components, stair treads, and benchtops. The product's combination of dimensional stability, workability, and competitive pricing makes it a popular choice for furniture manufacturers in Vietnam, China, and other Asian markets.`,
  },
  {
    slug: "sourcing-pine-from-argentina-first-time-buyers",
    title: "Sourcing Pine from Argentina: A Guide for First-Time Buyers",
    date: "2025-05-19",
    category: "Sourcing",
    excerpt: "A practical guide for buyers sourcing Argentine pine for the first time — how to find suppliers, what to specify, and how to manage the process.",
    body: `Sourcing pine from Argentina for the first time can seem daunting, but with the right preparation and guidance, the process is straightforward.

**Step 1: Define Your Requirements**

Before approaching suppliers, prepare a clear specification for the pine timber or wood products you need. This should include: species, product type, dimensions, grade, moisture content, surface finish, and packaging requirements.

**Step 2: Identify Potential Suppliers**

Argentina has dozens of pine exporters, ranging from large integrated mills to smaller specialist producers. Potential suppliers can be identified through trade directories, industry associations, trade fairs, and through sourcing agents with experience in the Argentine market.

**Step 3: Request Samples and Quotes**

Request product samples and quotations. Samples should be assessed for grade, moisture content, surface finish, and dimensional accuracy.

**Step 4: Conduct Due Diligence**

Before placing an order, verify the supplier's export registration, request references from other buyers, and check for relevant certifications.

**Step 5: Place Your Order**

Place your order with a clear written purchase order specifying all agreed specifications, quantities, prices, and delivery terms.`,
  },
  {
    slug: "argentina-pine-export-ports-guide",
    title: "A Guide to Argentine Pine Export Ports",
    date: "2025-06-09",
    category: "Sourcing",
    excerpt: "An overview of the main ports used for Argentine pine exports — location, facilities, and what buyers need to know.",
    body: `Understanding Argentina's export port infrastructure is important for buyers planning to source pine products from the country.

**The Port of Buenos Aires**

All Argentine pine exports are shipped through the Port of Buenos Aires (Puerto de Buenos Aires), Argentina's primary container port. The port is well-equipped for container handling of pine timber and processed wood products, with regular liner services to Asia, the Middle East, Oceania, and Europe. Sawn timber from the Mesopotamia growing regions in northeastern Argentina is transported by road and rail to Buenos Aires for container loading and export.

**Transit Times from Buenos Aires**

Typical ocean transit times from the Port of Buenos Aires to major destination ports are:

- Vietnam (Ho Chi Minh City / Hai Phong): 28–38 days
- China (Shanghai / Guangzhou): 30–40 days
- South Korea (Busan): 32–42 days
- UAE (Dubai / Jebel Ali): 22–32 days
- New Zealand (Auckland): 20–28 days
- Australia (Sydney / Melbourne): 22–30 days

**Container Specifications**

Pine timber is typically shipped in 20-foot or 40-foot dry containers. Buyers should confirm fumigation and phytosanitary requirements with their customs broker before shipment.`,
  },
  {
    slug: "kiln-drying-argentine-pine",
    title: "Kiln Drying Argentine Pine: What Buyers Should Know",
    date: "2025-06-30",
    category: "Products",
    excerpt: "An explanation of kiln drying for Argentine pine — why it matters, what moisture content to specify, and how to verify it.",
    body: `Kiln drying is one of the most important processing steps for pine timber and processed wood products, and it is a critical factor in the quality and performance of Argentine pine in service.

**Why Kiln Drying Matters**

Freshly sawn pine wood contains a high proportion of free and bound water — typically 80–120% moisture content (MC) on a dry weight basis. Kiln drying reduces the moisture content to a level appropriate for the intended application, improving dimensional stability, durability, and workability.

**What Moisture Content to Specify**

As a general guide:
- Interior furniture and joinery in air-conditioned environments: 10–14% MC
- General construction in temperate climates: 15–19% MC
- Exterior applications (before treatment): 18–22% MC

**How to Verify Moisture Content**

Moisture content can be verified using a calibrated pin-type or capacitance-type moisture meter. For large shipments, buyers should request a moisture content certificate from the supplier.`,
  },
  {
    slug: "fsc-certified-pine-argentina",
    title: "FSC Certified Pine from Argentina",
    date: "2025-07-21",
    category: "Sourcing",
    excerpt: "An overview of FSC certification in Argentina's pine industry — which mills are certified, what it means for buyers, and how to source certified timber.",
    body: `Forest Stewardship Council (FSC) certification is increasingly important for buyers with sustainability requirements or customers in markets where certified timber is preferred or required.

**What is FSC Certification?**

FSC certification is an independent, third-party certification system that verifies that timber products come from forests managed according to environmental, social, and economic standards.

**FSC in Argentina**

A growing number of Argentina's pine plantations and processing mills hold FSC certification. FSC-certified plantation area in Argentina has expanded significantly over the past decade, driven by demand from export markets — particularly in Europe and North America.

**How to Source FSC-Certified Argentine Pine**

Buyers seeking FSC-certified Argentine pine should specify this requirement in their purchase inquiry and request a copy of the supplier's FSC Chain of Custody certificate. Buyers can verify the authenticity of FSC certificates through the FSC certificate database at info.fsc.org.`,
  },
  {
    slug: "pine-mouldings-vietnam-market",
    title: "Argentine Pine Mouldings in the Vietnamese Market",
    date: "2025-08-11",
    category: "Market Intelligence",
    excerpt: "How Argentine pine mouldings are used in Vietnam's furniture and joinery industry, and what Vietnamese buyers look for.",
    body: `Vietnam has become one of the most important markets for Argentine pine mouldings, with significant volumes imported annually for use in furniture manufacturing, interior joinery, and construction.

**Vietnam's Wood Products Industry**

Vietnam is one of the world's largest exporters of wood furniture and interior products, with a manufacturing industry that sources timber from a wide range of countries. Argentine pine has become an important raw material for Vietnamese furniture and joinery manufacturers.

**How Argentine Pine Mouldings Are Used**

In Vietnam, Argentine pine mouldings are used primarily in furniture manufacturing (door frames, cabinet components, decorative trim), interior joinery (architraves, skirting boards, cornice mouldings), and construction.

**What Vietnamese Buyers Look For**

Vietnamese buyers typically prioritise consistent quality, competitive pricing, reliable supply, and appropriate moisture content (12–15%) for Argentine pine mouldings.`,
  },
  {
    slug: "pine-panels-furniture-manufacturing",
    title: "Pine Panels in Furniture Manufacturing: Argentine Options",
    date: "2025-09-01",
    category: "Products",
    excerpt: "How Argentine pine panels are used in furniture manufacturing, and what specifications furniture producers should look for.",
    body: `Argentine pine panels have become an important raw material for furniture manufacturers in Asia and the Middle East, offering a combination of workability, dimensional stability, and competitive pricing.

**Panel Types for Furniture**

The most commonly used panel types in furniture manufacturing are edge-glued panels (EGP) and laminated boards. EGP is typically preferred because it has a more natural appearance and is suitable for both paint and stain finishes.

**Key Specifications for Furniture Producers**

Furniture producers should pay particular attention to: moisture content (8–12% for furniture applications), surface quality (sanded S2S), dimensional accuracy, and glue type (interior-grade PVA for most applications, exterior-grade MUF for moisture-exposed applications).`,
  },
  {
    slug: "container-loading-pine-lumber",
    title: "Container Loading Guide for Pine Timber",
    date: "2025-09-22",
    category: "Sourcing",
    excerpt: "A practical guide to container loading for pine timber — how to maximise container utilisation and what to specify for efficient loading.",
    body: `Efficient container loading is important for buyers of pine timber, as it directly affects the cost per cubic metre of product delivered to the destination port.

**Container Types**

Pine timber is typically shipped in 20-foot or 40-foot dry containers. For most buyers, the 40-foot container offers the best value per cubic metre of product.

**Typical Container Loads**

- 20-foot container: 18–25 m³ of pine timber
- 40-foot container: 38–50 m³ of pine timber
- 40-foot High Cube: 42–55 m³ of pine timber

**Fumigation**

Most destination countries require pine timber to be fumigated or heat-treated before import to prevent the introduction of wood-boring insects and other pests. The most common treatment is methyl bromide fumigation or heat treatment to ISPM 15 standards.`,
  },
  {
    slug: "argentine-pine-vs-new-zealand-radiata",
    title: "Argentine Pine vs New Zealand Radiata: A Buyer's Comparison",
    date: "2025-10-13",
    category: "Market Intelligence",
    excerpt: "A detailed comparison of Argentine Pinus taeda and New Zealand Pinus radiata for international buyers — quality, pricing, availability, and applications.",
    body: `Argentine Pinus taeda and New Zealand Pinus radiata are the two most widely traded plantation softwoods in the Asia-Pacific region.

**Quality Comparison**

Both species produce high-quality wood suitable for a wide range of applications. New Zealand radiata pine is widely regarded as one of the most consistent and uniform plantation softwoods in the world. Argentine Pinus taeda is slightly denser and harder, with a more pronounced grain.

**Pricing**

Argentine pine is generally priced at a discount to New Zealand radiata pine, typically offering a cost saving of 10–25% compared to equivalent New Zealand radiata products.

**Recommendation**

For buyers with strict quality requirements and established supply chains, New Zealand radiata pine remains the benchmark. For buyers seeking a cost-competitive alternative without significant compromise on quality, Argentine Pinus taeda is an excellent option, particularly for paint-grade mouldings, finger joint products, and panels.`,
  },
  {
    slug: "pine-lumber-moisture-content-guide",
    title: "Moisture Content in Pine Wood: A Buyer's Guide",
    date: "2025-11-03",
    category: "Products",
    excerpt: "Understanding moisture content in pine wood — why it matters, how to specify it, and how to verify it on arrival.",
    body: `Moisture content is one of the most important quality parameters for pine wood and processed timber products.

**What is Moisture Content?**

Moisture content (MC) is the weight of water in wood expressed as a percentage of the dry weight. Freshly sawn pine wood typically has a moisture content of 80–120%.

**Why Does Moisture Content Matter?**

Wood with too high a moisture content will continue to dry and shrink after installation, potentially causing gaps, warping, or splitting. Matching the moisture content of the timber to the equilibrium moisture content of the environment where it will be used is the key to dimensional stability in service.

**Recommended Moisture Content Levels**

- Interior furniture and joinery in air-conditioned environments: 8–12%
- Interior construction in temperate climates: 12–16%
- General construction in tropical climates: 15–19%
- Exterior applications (before treatment): 18–22%`,
  },
  {
    slug: "phytosanitary-requirements-pine-imports",
    title: "Phytosanitary Requirements for Pine Imports",
    date: "2025-11-24",
    category: "Sourcing",
    excerpt: "An overview of phytosanitary and biosecurity requirements for importing pine products from Argentina into key destination markets.",
    body: `Phytosanitary and biosecurity requirements are an important consideration for buyers importing pine products from Argentina.

**What are Phytosanitary Requirements?**

Phytosanitary requirements are regulations designed to prevent the introduction of plant pests and diseases through the import of plant-based products, including timber. Most countries require imported timber to be accompanied by a phytosanitary certificate.

**ISPM 15**

ISPM 15 is an international standard that specifies approved treatments for wood packaging material used in international trade. Most countries require wood packaging material to be treated to ISPM 15 standards and marked with the ISPM 15 mark.

**Requirements for Key Destination Markets**

Vietnam, China, Australia, and New Zealand all require phytosanitary certificates and may require additional treatment for pine products. Buyers should confirm current requirements with their customs broker before ordering.`,
  },
  {
    slug: "argentina-pine-industry-outlook-2024",
    title: "Argentina's Pine Industry: Outlook and Trends",
    date: "2025-12-15",
    category: "Market Intelligence",
    excerpt: "An assessment of Argentina's pine industry outlook — production trends, investment, export growth, and key challenges.",
    body: `Argentina's pine industry has experienced significant growth and transformation over the past decade, and the outlook for the coming years is broadly positive for international buyers.

**Production Growth**

Argentina's pine plantation area has grown steadily over the past two decades, supported by government incentives for afforestation and private investment. Investment in processing capacity has also been significant, with new sawmills, kiln-drying facilities, moulding plants, and panel mills coming online in recent years.

**Export Growth**

Argentine pine exports have grown significantly over the past decade, driven by demand from Asian markets — particularly Vietnam, China, and South Korea.

**Currency and Economic Challenges**

Argentina's chronic economic instability and currency volatility have been a persistent challenge for the pine export industry. Buyers should be aware of these risks and factor them into their sourcing strategy.

**Outlook**

The overall outlook for Argentine pine exports is positive, with growing production, improving quality, and expanding export markets.`,
  },
  {
    slug: "pine-mouldings-specifications-guide",
    title: "How to Specify Pine Mouldings: A Technical Guide",
    date: "2026-01-19",
    category: "Products",
    excerpt: "A technical guide to specifying pine mouldings — profile dimensions, tolerances, moisture content, and surface finish.",
    body: `Specifying pine mouldings correctly is essential for getting the product you need from your supplier.

**Profile Dimensions**

The most important dimension for a moulding is the profile — the cross-sectional shape of the finished piece. For standard profiles, buyers can reference the profile by name and provide a cross-section drawing. For custom profiles, a full-size drawing or a physical sample piece should be provided.

**Dimensional Tolerances**

Typical tolerances for pine mouldings are: Width and thickness ±0.5mm; Length +50mm / -0mm; Straightness: maximum bow of 2mm per 2.4m length.

**Moisture Content**

A typical specification for interior applications: "KD 12–15%, maximum 18% for any individual piece."

**Surface Finish**

Surface finish should be specified as: rough machined (RM), smooth machined (SM), sanded (S), or primed (P).`,
  },
  {
    slug: "pine-lumber-uses-construction",
    title: "Pine Timber in Construction: Applications and Grades",
    date: "2026-02-16",
    category: "Products",
    excerpt: "How pine timber from Argentina is used in construction applications, and which grades are appropriate for different uses.",
    body: `Pine timber is one of the most versatile construction materials in the world, used in applications ranging from structural framing to interior fit-out.

**Structural Framing**

Pine timber is widely used for structural framing in residential and light commercial construction, including wall framing, floor joists, roof rafters, and beams. For structural applications, timber must be graded to a recognised structural grading standard.

**Interior Fit-Out**

Pine timber is widely used in interior fit-out applications, including door and window frames, stair components, shelving, and decorative trim. For these applications, appearance is important, and higher grades (Select or No. 1 Common) are typically specified.

**Packing and Crating**

Lower-grade pine wood (Utility or Economy grade) is widely used for packing cases, crates, and pallets. For these applications, structural performance is more important than appearance.`,
  },
  {
    slug: "sourcing-pine-mouldings-vietnam-buyers",
    title: "Sourcing Pine Mouldings for Vietnamese Furniture Manufacturers",
    date: "2026-03-10",
    category: "Market Intelligence",
    excerpt: "A guide for Vietnamese furniture manufacturers sourcing pine mouldings from Argentina — what to look for, how to order, and common pitfalls.",
    body: `Vietnamese furniture manufacturers are among the largest buyers of Argentine pine mouldings in the world.

**Why Argentine Pine?**

Argentine pine mouldings offer Vietnamese furniture manufacturers a combination of consistent quality, competitive pricing, and a wide range of available profiles.

**What to Look For**

Vietnamese furniture manufacturers should prioritise: moisture content (12–15%), surface quality (smooth, free of machining marks), dimensional consistency, and profile accuracy.

**Common Pitfalls**

Always request and inspect samples before placing a large order. Allow sufficient lead time (6–12 weeks for production items). Provide a clear, written specification for all products ordered.

**Building a Long-Term Relationship**

The most successful buyers build long-term relationships with their suppliers, with regular orders, clear communication, and mutual investment in quality improvement.`,
  },
  {
    slug: "pine-products-middle-east-market",
    title: "Argentine Pine Products in the Middle East Market",
    date: "2026-04-07",
    category: "Market Intelligence",
    excerpt: "How Argentine pine products are used in Middle Eastern construction and interior fit-out markets, and what buyers in the region look for.",
    body: `The Middle East is an important and growing market for Argentine pine products, with significant demand from construction, interior fit-out, and furniture manufacturing sectors.

**Market Overview**

The Middle East's construction boom has created strong demand for timber products across the region. Argentina has established itself as a reliable supplier of pine timber, mouldings, and panels to buyers in Saudi Arabia, the UAE, Qatar, and other Gulf states.

**Key Applications**

Pine timber is used in construction for formwork and temporary structures. Pine mouldings, finger joint products, and panels are widely used in interior fit-out applications. A growing furniture manufacturing sector in Saudi Arabia, UAE, and Egypt uses Argentine pine panels and sawn timber.

**What Middle Eastern Buyers Look For**

Middle Eastern buyers typically prioritise consistent quality, competitive pricing, reliable supply, and comprehensive documentation for customs clearance.

**Logistics**

Argentine pine products are typically shipped to Middle Eastern ports via the Atlantic route, with transit times of approximately 20–30 days from Argentine ports.`,
  },
];
