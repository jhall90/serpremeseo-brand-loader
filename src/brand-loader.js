// ======================================================
// UNIVERSAL BRAND LOADER SCRIPT for SEO Calculator
// Supports: WordPress, Webflow, Wix, Squarespace, HTML sites
// Author: Josh Hall
// ======================================================

// ---- 1. Default fallback palette (used if no overrides found) ----
const DEFAULT_BRAND = {
    brandTop: "#013740",
    brandBottom: "#2B5C64",

    chartOnPage: "#D8724E",
    chartTech: "#DFA07F",
    chartOffPage: "#CCE2A2",

    fontBody: "'Lato', sans-serif",
    fontHeader: "'DM Serif Display', serif",
    fontSub: "'Montserrat', sans-serif",

    bgLight: "#F9F9F9",
    panelLight: "#FFFFFF",
    textLight: "#013740",

    bgDark: "#013740",
    panelDark: "#2B5C64",
    textDark: "#F9F9F9",
};

// ---- 2. Try to read overrides from a global JS config ----
// (Agencies can give clients a JSON file: window.HC_BRAND_OVERRIDES)
const BRAND = window.HC_BRAND_OVERRIDES || {};

// ---- 3. Utility: set CSS var if provided, otherwise fallback ----
function setVar(name, value) {
    document.documentElement.style.setProperty(name, value);
}

// ---- 4. Apply all variables ----
function applyBranding() {
    const b = { ...DEFAULT_BRAND, ...BRAND };

    setVar("--brand-top", b.brandTop);
    setVar("--brand-bottom", b.brandBottom);

    setVar("--chart-onpage", b.chartOnPage);
    setVar("--chart-tech", b.chartTech);
    setVar("--chart-offpage", b.chartOffPage);

    setVar("--font-family", b.fontBody);
    setVar("--font-header", b.fontHeader);
    setVar("--font-subheader", b.fontSub);

    setVar("--bg-light", b.bgLight);
    setVar("--panel-light", b.panelLight);
    setVar("--text-light", b.textLight);

    setVar("--bg-dark", b.bgDark);
    setVar("--panel-dark", b.panelDark);
    setVar("--text-dark", b.textDark);
}

// ---- 5. Optional: Auto-detect brand colors from site buttons ----
// This allows the calculator to match ANY site with ZERO manual config
function autoDetectBrand() {
    const candidates = document.querySelectorAll(
        "button, .btn, a.button, .elementor-button, .wp-block-button__link"
    );

    for (let el of candidates) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
            // Apply main branding color
            setVar("--brand-top", bg);
            setVar("--brand-bottom", bg);
            break;
        }
    }
}

// ---- 6. Execute branding logic ----
applyBranding();
autoDetectBrand();

// Optional console log for debugging
console.log("Brand Loader Applied:", BRAND);
