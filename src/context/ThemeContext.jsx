import React, { createContext, useContext, useState, useEffect } from "react";

export const THEMES = [
  { name: "dark",      label: "Dark",      colors: ["#1f2937","#8b5cf6","#ec4899","#f8fafc"] },
  { name: "light",     label: "Light",     colors: ["#ffffff","#5a67d8","#8b5cf6","#1a202c"] },
  { name: "cupcake",   label: "Cupcake",   colors: ["#f5f5f4","#65c3c8","#ef9fbc","#291334"] },
  { name: "forest",    label: "Forest",    colors: ["#1f1d1d","#3ebc96","#70c217","#e2e8f0"] },
  { name: "bumblebee", label: "Bumblebee", colors: ["#ffffff","#f8e36f","#f0d50c","#1c1917"] },
  { name: "emerald",   label: "Emerald",   colors: ["#ffffff","#66cc8a","#3b82f6","#1e3a8a"] },
  { name: "corporate", label: "Corporate", colors: ["#ffffff","#4b6bfb","#7b92b2","#1d232a"] },
  { name: "synthwave", label: "Synthwave", colors: ["#2d1b69","#e779c1","#58c7f3","#f8f8f2"] },
  { name: "retro",     label: "Retro",     colors: ["#e4d8b4","#ea6962","#6aaa64","#282425"] },
  { name: "cyberpunk", label: "Cyberpunk", colors: ["#ffee00","#ff7598","#75d1f0","#1a103d"] },
  { name: "valentine", label: "Valentine", colors: ["#f0d6e8","#e96d7b","#a991f7","#37243c"] },
  { name: "halloween", label: "Halloween", colors: ["#0d0d0d","#ff7800","#006400","#ffffff"] },
  { name: "garden",    label: "Garden",    colors: ["#e9e7e7","#ec4899","#16a34a","#374151"] },
  { name: "aqua",      label: "Aqua",      colors: ["#193549","#4cd4e3","#9059ff","#f8d766"] },
  { name: "lofi",      label: "Lofi",      colors: ["#0f0f0f","#1a1919","#232323","#2c2c2c"] },
  { name: "pastel",    label: "Pastel",    colors: ["#f7f3f5","#d1c1d7","#a1e3d8","#4a98f1"] },
  { name: "fantasy",   label: "Fantasy",   colors: ["#ffe7d6","#a21caf","#3b82f6","#f59e0b"] },
  { name: "wireframe", label: "Wireframe", colors: ["#e6e6e6","#b3b3b3","#888888","#333333"] },
  { name: "black",     label: "Black",     colors: ["#000000","#191919","#313131","#4a4a4a"] },
  { name: "luxury",    label: "Luxury",    colors: ["#171618","#1e293b","#94589c","#d4a85a"] },
  { name: "dracula",   label: "Dracula",   colors: ["#282a36","#ff79c6","#bd93f9","#f8f8f2"] },
  { name: "cmyk",      label: "CMYK",      colors: ["#f0f0f0","#0891b2","#ec4899","#facc15"] },
  { name: "autumn",    label: "Autumn",    colors: ["#f2f2f2","#8c1f11","#f28c18","#6f4930"] },
  { name: "business",  label: "Business",  colors: ["#f5f5f5","#1e40af","#3b82f6","#f97316"] },
  { name: "acid",      label: "Acid",      colors: ["#110e0e","#ff00f2","#ff7a00","#99ff01"] },
  { name: "lemonade",  label: "Lemonade",  colors: ["#ffffff","#67e8f9","#f5d742","#2c3333"] },
  { name: "night",     label: "Night",     colors: ["#0f172a","#38bdf8","#818cf8","#e2e8f0"] },
  { name: "coffee",    label: "Coffee",    colors: ["#20161f","#dd9866","#497174","#eeeeee"] },
  { name: "winter",    label: "Winter",    colors: ["#ffffff","#0284c7","#d946ef","#0f172a"] },
  { name: "dim",       label: "Dim",       colors: ["#1c1c27","#10b981","#ff5a5f","#f8fafc"] },
  { name: "nord",      label: "Nord",      colors: ["#eceff4","#5e81ac","#81a1c1","#3b4252"] },
  { name: "sunset",    label: "Sunset",    colors: ["#1e293b","#f5734c","#ec4899","#ffffff"] },
];

// Determine if a background is dark
function isDarkColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 < 128;
}

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem("portfolio_theme") || "dark";
  });

  const currentTheme = THEMES.find((t) => t.name === themeName) || THEMES[0];
  const isDark = isDarkColor(currentTheme.colors[0]);

  useEffect(() => {
    const t = currentTheme;
    const root = document.documentElement;
    const bg = t.colors[0];
    const accent = t.colors[1];
    const accent2 = t.colors[2];
    const text = t.colors[3];

    // Helper: hex to rgba
    const hexToRgba = (hex, alpha) => {
      const r = parseInt(hex.slice(1,3), 16);
      const g = parseInt(hex.slice(3,5), 16);
      const b = parseInt(hex.slice(5,7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    const dark = isDarkColor(bg);

    // Set all CSS variables dynamically
    root.style.setProperty("--bg-primary", bg);
    root.style.setProperty("--bg-gradient", `linear-gradient(-45deg, ${bg}, ${hexToRgba(accent, 0.1)}, ${hexToRgba(accent2, 0.12)}, ${bg})`);
    root.style.setProperty("--bg-card", dark ? hexToRgba(bg, 0.7) : hexToRgba("#ffffff", 0.88));
    root.style.setProperty("--bg-card-hover", dark ? hexToRgba(bg, 0.85) : hexToRgba("#ffffff", 0.97));
    root.style.setProperty("--text-primary", text);
    root.style.setProperty("--text-secondary", dark ? hexToRgba(text, 0.75) : hexToRgba(text, 0.7));
    root.style.setProperty("--text-muted", dark ? hexToRgba(text, 0.5) : hexToRgba(text, 0.45));
    root.style.setProperty("--accent-color", accent);
    root.style.setProperty("--accent-secondary", accent2);
    root.style.setProperty("--accent-glow", hexToRgba(accent, 0.35));
    root.style.setProperty("--border-color", dark ? `rgba(255,255,255,0.12)` : `rgba(0,0,0,0.12)`);
    root.style.setProperty("--border-hover", hexToRgba(accent, 0.55));
    root.style.setProperty("--card-shadow", dark ? `0 10px 30px -10px rgba(0,0,0,0.6)` : `0 10px 25px -5px rgba(0,0,0,0.1)`);
    root.style.setProperty("--glass-border", dark ? `1px solid rgba(255,255,255,0.12)` : `1px solid rgba(0,0,0,0.1)`);
    root.style.setProperty("--header-bg", dark ? hexToRgba(bg, 0.88) : hexToRgba("#ffffff", 0.9));
    root.style.setProperty("--input-bg", dark ? hexToRgba(bg, 0.8) : hexToRgba("#ffffff", 0.92));
    root.style.setProperty("--tag-bg", hexToRgba(accent, 0.14));
    root.style.setProperty("--tag-text", accent);

    // Save to localStorage
    localStorage.setItem("portfolio_theme", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
    document.body.setAttribute("data-theme", themeName);
    document.body.style.background = `var(--bg-gradient)`;
  }, [themeName, currentTheme]);

  const setTheme = (name) => setThemeName(name);

  // Legacy toggle (dark ↔ light) used by the navbar sun/moon button
  const toggleTheme = () => {
    setThemeName((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{
      theme: themeName,
      themes: THEMES,
      currentTheme,
      setTheme,
      toggleTheme,
      isDarkMode: isDark,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
};
