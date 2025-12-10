# SERPremeSEO Brand Loader

A lightweight, framework-agnostic JavaScript utility for applying brand colors, fonts, and theme variables to embedded widgets such as the SERPremeSEO Calculator.

This script is designed to work across WordPress, Webflow, Wix, Squarespace, Shopify, or any standard HTML environment.

It supports three branding sources, in order of priority:

1. Manually defined global overrides (`window.HC_BRAND_OVERRIDES`)
2. Auto-detected brand colors from site buttons
3. Default fallback palette included in the script

The result is a consistent, client-matched UI without manual CSS adjustments.

---

## Features

-   Automatic brand color loading from the host website
-   Optional manual branding via JavaScript overrides
-   Safe fallback palette for predictable rendering
-   Lightweight and dependency-free
-   CDN friendly
-   Works with web components (SEO Calculator) or standalone widgets

---

## Installation and Usage

You may include the script via CDN or self-host it.

### CDN Example (jsDelivr)

Replace `USERNAME` and `REPO` with your GitHub values:

```html
<script src="https://cdn.jsdelivr.net/gh/USERNAME/serpremeseo-brand-loader/dist/brand-loader.min.js"></script>
```

Place the script **before** your calculator or widget so CSS variables are available when it loads.

---

## How Branding Works

The loader sets CSS variables on `:root`, making them accessible:

-   Across the entire document
-   Inside Shadow DOM for components that read these variables

### Variables Applied

```
--brand-top
--brand-bottom

--chart-onpage
--chart-tech
--chart-offpage

--font-family
--font-header
--font-subheader

--bg-light
--panel-light
--text-light

--bg-dark
--panel-dark
--text-dark
```

---

## Manual Branding Override

Developers or agencies may define explicit brand settings before loading the script:

```html
<script>
    window.HC_BRAND_OVERRIDES = {
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
</script>

<script src="dist/brand-loader.min.js"></script>
```

---

## Auto-Detection Behavior

If no overrides are provided, the script scans common button classes:

```
button
.btn
a.button
.elementor-button
.wp-block-button__link
```

The first non-transparent background color found becomes:

```
--brand-top
--brand-bottom
```

This enables basic theme matching on sites with inconsistent or undocumented branding.

---

## Development

### Project Structure

```
/
├── src/
│   └── brand-loader.js
│
├── dist/
│   ├── brand-loader.js
│   └── brand-loader.min.js
│
├── build.js
├── package.json
├── README.md
└── LICENSE
```

### Building the Project

Install dependencies:

```sh
npm install
```

Build both production files:

```sh
npm run build
```

Outputs:

```
dist/brand-loader.js
dist/brand-loader.min.js
```

---

## Versioning and CDN Releases

Use Git tags to publish versioned CDN builds.

Tag a release:

```sh
git tag v1.0.0
git push origin v1.0.0
```

A versioned CDN URL becomes:

```
https://cdn.jsdelivr.net/gh/USERNAME/serpremeseo-brand-loader@v1.0.0/dist/brand-loader.min.js
```

---

## License

MIT License. See the LICENSE file for details.
