"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const applyTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const getTimeBasedTheme = (): Theme => {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 19 ? "light" : "dark";
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", nextTheme);
    window.localStorage.setItem("theme-manual-override", "true");
    applyTheme(nextTheme);
  };

  useEffect(() => {
    const manualOverride = window.localStorage.getItem("theme-manual-override") === "true";

    if (manualOverride) {
      const savedTheme = window.localStorage.getItem("theme") as Theme | null;
      if (savedTheme === "light" || savedTheme === "dark") {
        applyTheme(savedTheme);
      } else {
        applyTheme(getTimeBasedTheme());
      }
      return;
    }

    window.localStorage.removeItem("theme");
    applyTheme(getTimeBasedTheme());

    const interval = window.setInterval(() => {
      const stillManualOverride =
        window.localStorage.getItem("theme-manual-override") === "true";

      if (stillManualOverride) {
        const savedTheme = window.localStorage.getItem("theme") as Theme | null;
        if (savedTheme === "light" || savedTheme === "dark") {
          applyTheme(savedTheme);
        }
        return;
      }

      applyTheme(getTimeBasedTheme());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}
