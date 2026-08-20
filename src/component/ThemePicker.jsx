import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "../context/ThemeContext";
import { FaPalette, FaTimes, FaCheck } from "react-icons/fa";
import "./ThemePicker.css";

// Theme categories
const CATEGORIES = [
  { label: "🌟 Popular",  names: ["dark","light","dracula","night","synthwave"] },
  { label: "🌈 Colorful", names: ["cyberpunk","acid","halloween","bumblebee","valentine"] },
  { label: "🌿 Nature",   names: ["forest","garden","emerald","aqua","coffee"] },
  { label: "🎨 Artistic", names: ["cupcake","pastel","fantasy","retro","lofi"] },
  { label: "💼 Pro",      names: ["corporate","business","wireframe","luxury","nord"] },
  { label: "🌅 Seasonal", names: ["autumn","winter","sunset","dim","cmyk","lemonade"] },
];

export default function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen]     = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [search, setSearch] = useState("");
  const panelRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = search.trim()
    ? THEMES.filter((t) => t.label.toLowerCase().includes(search.toLowerCase()))
    : CATEGORIES[activeTab].names.map((n) => THEMES.find((t) => t.name === n)).filter(Boolean);

  return (
    <div className="theme-picker-wrap" ref={panelRef}>
      {/* Floating trigger button */}
      <motion.button
        className={`theme-fab ${open ? "open" : ""}`}
        onClick={() => setOpen((p) => !p)}
        title="Change Theme"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Open theme picker"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><FaTimes /></motion.span>
            : <motion.span key="p" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><FaPalette /></motion.span>
          }
        </AnimatePresence>
        <span className="fab-ring" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="theme-panel"
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1,    y: 0  }}
            exit={{    opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", stiffness: 340, damping: 26 }}
          >
            {/* Header */}
            <div className="tp-header">
              <div className="tp-title-row">
                <FaPalette className="tp-icon" />
                <h3 className="tp-title">Choose Theme</h3>
                <span className="tp-current-badge">{theme}</span>
              </div>
              {/* Search */}
              <input
                className="tp-search"
                placeholder="Search themes…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Category Tabs (hidden during search) */}
            {!search.trim() && (
              <div className="tp-tabs">
                {CATEGORIES.map((cat, i) => (
                  <button
                    key={i}
                    className={`tp-tab ${activeTab === i ? "active" : ""}`}
                    onClick={() => setActiveTab(i)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {/* Theme Grid */}
            <div className="tp-grid">
              {filtered.map((t) => (
                <motion.button
                  key={t.name}
                  className={`tp-card ${theme === t.name ? "selected" : ""}`}
                  onClick={() => { setTheme(t.name); }}
                  whileHover={{ y: -4, scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 320, damping: 18 }}
                  title={t.label}
                >
                  {/* Color swatches */}
                  <div className="tp-swatches">
                    {t.colors.map((c, ci) => (
                      <span
                        key={ci}
                        className="tp-swatch"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <span className="tp-label">{t.label}</span>
                  {theme === t.name && (
                    <motion.span
                      className="tp-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <FaCheck />
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="tp-footer">
              <span className="tp-count">{THEMES.length} themes available</span>
              <button className="tp-reset" onClick={() => setTheme("dark")}>Reset to Dark</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
