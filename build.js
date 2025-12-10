const esbuild = require("esbuild");

// Build readable, non-minified version
esbuild
    .build({
        entryPoints: ["src/brand-loader.js"],
        outfile: "dist/brand-loader.js",
        bundle: false,
        minify: false,
        sourcemap: false,
    })
    .catch(() => process.exit(1));

// Build minified CDN-ready version
esbuild
    .build({
        entryPoints: ["src/brand-loader.js"],
        outfile: "dist/brand-loader.min.js",
        bundle: false,
        minify: true,
        sourcemap: false,
    })
    .catch(() => process.exit(1));

console.log("Brand Loader built successfully! NOICE!");
