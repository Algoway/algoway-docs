import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        property: 'og:type',
        content: 'website',
      },
    },
  ],
  title: "AlgoWay Docs",
  tagline: "TradingView webhook automation documentation",
  favicon: "img/favicon.png",
  future: { v4: true },
  url: "https://docs.algoway.trade",
  baseUrl: "/",
  trailingSlash: true,
  organizationName: "algoway",
  projectName: "algoway-docs",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: { defaultLocale: "en", locales: ["en"] },
  plugins: ["./src/plugins/og-type.js"],
  presets: [
    ["classic", { docs: { sidebarPath: "./sidebars.ts", routeBasePath: "docs", editUrl: undefined }, blog: false, theme: { customCss: "./src/css/custom.css" }, sitemap: { changefreq: "weekly", priority: 0.8, filename: "sitemap.xml" } } satisfies Preset.Options],
  ],
  themeConfig: {
    image: "img/social.jpg",
    colorMode: { defaultMode: "light", respectPrefersColorScheme: false, disableSwitch: true },
    navbar: {
      title: "ALGOWAY",
      logo: { alt: "AlgoWay Logo", src: "img/logo-64.webp" },
      items: [
        {href: "https://algoway.trade/#platforms", label: "PLATFORMS", position: "right"},
        {href: "https://algoway.trade/#pricing", label: "PRICING", position: "right"},
        {href: "https://algoway.trade/blog/", label: "BLOG", position: "right"},
        {href: "https://algoway.trade/faq", label: "FAQ", position: "right"},
        {href: "https://tradingfew.com", label: "NEWS", position: "right"},
        {href: "https://algoway.trade/#about", label: "ABOUT", position: "right"},
        {href: "https://algoway.trade/#services", label: "EDGE", position: "right"},
        {href: "https://algoway.trade/#contact", label: "CONTACT", position: "right"},
        {href: "https://algoway.trade/login", label: "LOGIN", position: "right", className: "aw-login-link"},
      ],
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.github, additionalLanguages: ["json", "bash", "php", "python"] },
  } satisfies Preset.ThemeConfig,
};

export default config;