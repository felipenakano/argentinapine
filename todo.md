# UAE Pallet Wood Article

- [ ] Verify current UAE import, ISPM 15, and port/logistics information from authoritative sources.
- [ ] Inspect existing market posts and confirm a distinct slug, angle, and internal-link set.
- [ ] Add the new UAE pallet wood article to `client/src/lib/content.ts`.
- [ ] Add English, Vietnamese, Filipino, and Simplified Chinese URLs to `client/public/sitemap.xml`.
- [ ] Run the TypeScript check and verify the article route/build.
- [ ] Save a checkpoint and push `main` to the GitHub remote for Netlify deployment.
- [ ] Report the published URL and deployment status.

## Notes

The article must not fabricate reviews, testimonials, customer results, or unsupported supplier claims. Use cautious wording for tariffs, pricing, transit times, and regulatory requirements, and advise buyers to confirm classification and current rules with their broker or UAE authorities.

The existing site uses relative internal links and the current blog renderer supports inline HTML anchors in body strings.

## Research findings

- The IPPC explains that ISPM 15 provides a harmonized approach to manage pest risks from international wood packaging, including pallets, crates, drums, and dunnage. The official mark is applied only after treatment compliant with the standard; the mark can replace the need for a phytosanitary certificate for wood packaging in contexts where the importing authority accepts it. Source: IPPC, "IPPC publishes new guide on wood packaging material" (3 May 2023).
- DP World describes Jebel Ali as a major UAE container gateway with more than 80 weekly services connecting over 150 ports, multimodal sea/air/land access, containerized-cargo handling, storage, and hinterland connections. These facts support a logistics section without asserting a specific Argentina–UAE sailing schedule.
- The UAE-specific official search results did not expose a clear, current plant-quarantine page confirming a detailed tariff or permit schedule. The article should therefore avoid definitive UAE tariff percentages, guaranteed customs clearance, fixed transit times, or blanket claims that certificates are never required. It should advise buyers to confirm HS classification, current duties, documentation, and destination requirements with a UAE customs broker and the relevant authority.

## Sources

- [1] IPPC — [IPPC publishes new guide on wood packaging material](https://www.ippc.int/en/news/ippc-publishes-new-guide-on-wood-packaging-material/)
- [2] DP World — [Jebel Ali Port | Port Operations](https://www.dpworld.com/en/ports-terminals/uae/jebel-ali-port)

## Publication notes

- Added the article at `/blog/argentina-pallet-wood-export-uae` with internal links to the pallet wood product, Pinus taeda species page, pallet comparison post, drying guide, Buenos Aires logistics page, and contact page.
- Added IPPC and DP World source links as HTML anchors after verifying that the blog renderer displays anchors correctly.
- Preview route verified: title, article body, internal links, external source links, CTA, and related articles render correctly.
- TypeScript check and production build passed. Build emitted only the existing large-chunk warning and pnpm configuration warning.
- Pending: save checkpoint, push to GitHub, and report deployment status.

## Style Decisions

Use the existing Timber Atlas editorial style and write for B2B importers, pallet manufacturers, logistics operators, and procurement teams in the UAE.
