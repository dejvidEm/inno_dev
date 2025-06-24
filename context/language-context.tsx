"use client"

import type React from "react"
import { createContext, useState, useContext, useMemo } from "react"
import { translations } from "@/lib/translations"

type Language = "en" | "sk"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (typeof translations)["en"]
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("sk")

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
