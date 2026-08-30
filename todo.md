# EUR/EPAL Pallet Article

- [ ] Verify current EUR/EPAL dimensions, markings, and licensing terminology from authoritative sources.
- [ ] Research relevant pallet wood, ISPM 15, and export/logistics context for Argentina.
- [ ] Inspect existing market posts and confirm a distinct slug, angle, and internal-link set.
- [ ] Add the new EUR/EPAL pallet article to `client/src/lib/content.ts`.
- [ ] Add English, Vietnamese, Filipino, and Simplified Chinese URLs to `client/public/sitemap.xml`.
- [ ] Run the TypeScript check and verify the article route/build.
- [ ] Save a checkpoint and push `main` to the GitHub remote for Netlify deployment.
- [ ] Report the published URL and deployment status.

## Notes

The article must distinguish the generic 1,200 × 800 mm European pallet format from licensed EUR/EPAL exchange pallets. Do not imply that Argentine pallet wood is automatically EPAL-certified or that a component shipment grants permission to manufacture a branded EPAL pallet. Avoid fabricated prices, tariffs, transit times, customer results, reviews, or testimonials. Advise buyers to confirm current licensing, inspection, customs, and destination requirements with EPAL, the importer, and their broker.

The existing site uses relative internal links and the blog renderer supports inline HTML anchors in body strings.

## Research findings

- EPAL identifies the EPAL Euro Pallet (EPAL 1) as 800 mm wide × 1,200 mm long × 144 mm high, with approximately 25 kg weight, 11 boards, 9 blocks, 78 nails, and a safe working load of 1,500 kg under the stated conditions. Source: official EPAL Euro Pallet page.
- EPAL distinguishes its licensed exchange pallet through EPAL branded markings, IPPC marking, country code, plant-protection registration number, treatment method, control staple, and licence/date information. The article must distinguish a generic 1,200 × 800 mm European pallet from a licensed EPAL pallet.
- EPAL states that its licensed production and repair operations comply with ISPM 15, and describes heat treatment at a minimum core temperature of 56°C for at least 30 minutes. The article should present this as the EPAL/ISPM 15 context and advise buyers to verify current destination and licensing requirements.
- Do not claim Argentine pallet wood is automatically EPAL-certified. Argentine material can be discussed as a potential component input or compatible pallet-board supply, while EPAL branding, licensed manufacture, inspection, and exchange-pool eligibility remain separate requirements.

## Sources

- [1] EPAL — [EPAL Euro Pallet (EPAL 1)](https://www.epal-pallets.org/eu-en/load-carriers/epal-euro-pallet)
- [2] EPAL — [ISPM 15](https://www.epal-pallets.org/eu-en/the-success-system/ispm-15)

## Publication notes

- Added the article at `/blog/european-pallet-size-eur-pallet-argentina` with internal links to the Pallet Wood product, Pinus taeda species page, UAE export guide, PEFC guide, Taeda vs SPF/Radiata comparison, and contact page.
- Added official EPAL specification and ISPM 15 links as clickable HTML anchors after verifying the renderer.
- Preview route verified: title, 1,200 × 800 mm dimensions, EPAL distinction, internal links, source links, and contact CTA render correctly.
- TypeScript check and production build passed. Build emitted only the existing large-chunk warning and pnpm configuration warning.
- Note: the current renderer displays pipe-table text rather than formatting Markdown tables; this matches existing article behavior and does not block publication.
- Pending: save checkpoint, push `main` to GitHub, and report deployment status.

## Style Decisions

Use the existing Timber Atlas editorial style and write for B2B pallet manufacturers, exporters, distributors, and procurement teams.
