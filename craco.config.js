const path = require("path");
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@layout": path.resolve(__dirname, "src/components/layout"),
      "@img": path.resolve(__dirname, "src/assets/img"),
      "@audios": path.resolve(__dirname, "src/assets/audios"),
      "@fonts": path.resolve(__dirname, "src/assets/fonts"),
    },
  },
};
