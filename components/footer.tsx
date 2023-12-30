import Image from "next/image";
import Link from "next/link";
import React, { type ReactNode } from "react";

const Footer: React.FC = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div>
        <Link
          className="flex items-center justify-center gap-2 hover:opacity-75 md:justify-normal md:w-fit transition-all"
          href="/"
        >
          <Image
            src="/logo.png"
            alt="Countify Logo"
            width={35}
            height={35}
            className="rounded-full"
          />
          <h1 className="nx-text-primary-600 text-2xl font-bold tracking-tight">
            Countify
          </h1>
        </Link>
        <p className="mt-4 text-xs text-neutral-500">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/countifyfun"
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
          >
            Countify Labs
          </a>{" "}
          (a subdivision of{" "}
          <a
            href="https://youtube.com/@graphifystatistics"
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
          >
            Graphify Studios
          </a>
          ). All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
