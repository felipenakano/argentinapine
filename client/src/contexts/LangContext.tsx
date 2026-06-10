// ArgentinaPine.com — Language Context
// Design: Timber Atlas — Premium B2B Trade Portal

import React, { createContext, useContext, useMemo } from "react";
import { useLocation } from "wouter";
import { Language, Translations, getLangFromPath, useTranslations } from "@/lib/i18n";

interface LangContextType {
  lang: Language;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  t: useTranslations("en"),
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const lang = getLangFromPath(location);
  const t = useTranslations(lang);

  const value = useMemo(() => ({ lang, t }), [lang, t]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
