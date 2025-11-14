import { createContext, useContext, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
}>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useLayoutEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    setThemeState(stored || "light");
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const isSystemDark =
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    root.classList.remove("dark");
    if (theme === "dark" || (theme === "system" && isSystemDark)) {
      root.classList.add("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
