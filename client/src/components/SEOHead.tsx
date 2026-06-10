// ArgentinaPine.com — SEO Head Component
// Sets document title and meta description dynamically

import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SITE_NAME = "ArgentinaPine.com";
const DEFAULT_DESC =
  "The independent resource for international buyers of Argentine pine — lumber, mouldings, panels, and finger joint products from Argentina's plantation forests.";

export default function SEOHead({ title, description, canonical }: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Argentine Pine Products for International Buyers`;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      (metaDesc as HTMLMetaElement).name = "description";
      document.head.appendChild(metaDesc);
    }
    (metaDesc as HTMLMetaElement).content = description || DEFAULT_DESC;

    // Canonical
    if (canonical) {
      let canonicalEl = document.querySelector('link[rel="canonical"]');
      if (!canonicalEl) {
        canonicalEl = document.createElement("link");
        (canonicalEl as HTMLLinkElement).rel = "canonical";
        document.head.appendChild(canonicalEl);
      }
      (canonicalEl as HTMLLinkElement).href = canonical;
    }
  }, [title, description, canonical]);

  return null;
}
