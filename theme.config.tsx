import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const config: DocsThemeConfig = {
  logo: (
    <Image
      src="/logo.png"
      alt="Countify Logo"
      width={40}
      height={40}
      className="rounded-full"
    />
  ),
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: <Footer />,
  },
  primaryHue: 53,
};

export default config;
