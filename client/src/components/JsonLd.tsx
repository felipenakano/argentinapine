// ArgentinaPine.com — JSON-LD Structured Data Component
// Injects a <script type="application/ld+json"> tag into <head> for rich search results.
// Supports any schema.org type; callers pass a plain JS object.

import { useEffect } from "react";

interface JsonLdProps {
  /** A unique id used to identify and replace the script tag on re-renders */
  id: string;
  /** Any schema.org JSON-LD object */
  schema: Record<string, unknown>;
}

export default function JsonLd({ id, schema }: JsonLdProps) {
  useEffect(() => {
    const scriptId = `jsonld-${id}`;
    // Remove any existing tag with this id (handles route changes / re-renders)
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.getElementById(scriptId)?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, JSON.stringify(schema)]);

  return null;
}
