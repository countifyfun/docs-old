import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const config: DocsThemeConfig = {
  useNextSeoProps: () => ({
    titleTemplate: "%s – Countify",
    description: "Documentation for your dream Discord counting bot.",
    themeColor: "#fde047",
    twitter: {
      cardType: "summary_large_image",
      handle: "@ToastedDev",
    },
    openGraph: {
      type: "website",
      url: "https://docs.countify.fun",
      images: [
        {
          url: "https://countify.fun/og.jpg",
        },
      ],
    },
    additionalLinkTags: [
      {
        href: "https://countify.fun/apple-icon-180x180.png",
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
      {
        href: "https://countify.fun/android-icon-192x192.png",
        rel: "icon",
        sizes: "192x192",
        type: "image/png",
      },
      {
        href: "https://countify.fun/favicon-32x32.png",
        rel: "icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        href: "https://countify.fun/favicon-16x16.png",
        rel: "icon",
        sizes: "16x16",
        type: "image/png",
      },
      {
        href: "https://countify.fun/favicon.ico",
        rel: "icon",
        type: "image/x-icon",
        sizes: "16x16",
      },
    ],
  }),
  logo: (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Countify Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <p className="text-3xl font-bold tracking-tighter nx-text-primary-600">
        docs
      </p>
    </div>
  ),
  project: {
    link: "https://github.com/countifyfun/bot",
  },
  navbar: {
    extraContent: (
      <a href="https://countify.fun/invite" className="p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
        </svg>
      </a>
    ),
  },
  docsRepositoryBase: "https://github.com/countifyfun/docs/edit/main",
  footer: {
    text: <Footer />,
  },
  editLink: {
    text: "Edit this page on GitHub →",
  },
  feedback: {
    content: "Questions? Give us feedback →",
    labels: "feedback",
  },
  primaryHue: 53,
  darkMode: false,
  nextThemes: {
    defaultTheme: "dark",
    forcedTheme: "dark",
  },
};

export default config;
