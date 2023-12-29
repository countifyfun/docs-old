import { DocsThemeConfig } from "nextra-theme-docs";
import React from "react";
import Footer from "./components/footer";

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
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
};

export default config;
