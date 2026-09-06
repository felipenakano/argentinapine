# Argentina Sawmill Payment Terms Article

- [ ] Verify documentary payment terminology and risk allocation from authoritative trade-finance sources.
- [ ] Inspect existing content and choose a distinct commercial slug and internal-link set.
- [ ] Add the new article to `client/src/lib/content.ts`.
- [ ] Add English, Vietnamese, Filipino, and Simplified Chinese URLs to `client/public/sitemap.xml`.
- [ ] Run TypeScript validation, production build, and route verification.
- [ ] Save a checkpoint and push `main` to the GitHub remote for Netlify deployment.
- [ ] Report the published URL and deployment status.

## Notes

Present 20% deposit / 80% balance by documentary letter of credit or payment against documents as a negotiable commercial structure, not as a universal Argentine sawmill rule. Explain that final terms depend on supplier relationship, buyer credit, order size, product, country, bank requirements, Incoterms, and contract negotiation. Do not provide individualized financial or legal advice. Do not fabricate prices, customer results, testimonials, or supplier guarantees. Advise buyers to have banks, brokers, and trade counsel confirm wording and documentary requirements.

The existing site uses relative internal links and the blog renderer supports inline HTML anchors in body strings.

## Research findings

- The U.S. International Trade Administration defines a letter of credit as a contractual commitment by the buyer’s bank to pay once the exporter ships and presents the required documents. It notes that LCs can protect both sides but involve bank fees, detailed documentary requirements, and discrepancy risk. Source: ITA, Letter of Credit.
- ITA describes documentary collection as the exporter entrusting payment collection to its bank, which sends title/shipping documents to the importer’s bank with instructions to release them against payment or acceptance. Documents against payment (D/P) is payable at sight; documents against acceptance (D/A) is payable on a specified future date. Documentary collections are generally less expensive than LCs but provide limited recourse and no bank verification of the buyer’s ability or willingness to pay.
- The article should describe 20% deposit plus 80% LC or D/P as a negotiable structure that can balance production commitment, seller cash flow, buyer risk, and documentary control. It must not claim that all Argentine sawmills use this structure or that an LC guarantees product quality.
- The article should distinguish “payment against documents” from an LC. D/P is normally a documentary collection rather than a bank payment undertaking; the exact documents, release instructions, banks, fees, and remedies must be written into the contract and collection instructions.

## Sources

- [1] U.S. International Trade Administration — [Letter of Credit](https://www.trade.gov/letter-credit)
- [2] U.S. International Trade Administration — [Methods of Payment](https://www.trade.gov/methods-payment)
- [3] U.S. International Trade Administration — [Documentary Collections](https://www.trade.gov/documentary-collections)

## Publication notes

- Added the article at `/blog/payment-terms-argentina-sawmills-20-deposit-lc-documents` with internal links to timber boards, export sourcing, tariff competitiveness, and contact pages.
- Added official U.S. International Trade Administration links for letters of credit, methods of payment, and documentary collections as clickable HTML anchors.
- Preview route verified: title, 20% deposit / 80% LC or D/P explanation, comparison tables, source links, internal links, and inquiry CTA render correctly.
- TypeScript check and production build passed. Build emitted only the existing large-chunk warning and pnpm configuration warning.
- Pending: save checkpoint, push `main` to GitHub, and report deployment status.

## Style Decisions

Use the existing Timber Atlas editorial style for B2B importers, procurement teams, sawmills, and trade-finance departments.
