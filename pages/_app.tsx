import React from "react";
import { MarkGithubIcon } from "@primer/octicons-v2-react";
import "../styles/index.css";
import Link from "next/link";

/**
 * Provide a consistent layout to all pages
 */
function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header
        className="text-center text-gray-300 bg-gray-700 py-3"
        role="banner"
      >
        <nav>
          <Link href="/">
            <a>
              <MarkGithubIcon size="medium" />
            </a>
          </Link>
        </nav>
      </header>
      <div className="flex-auto">
        <Component {...pageProps} />
      </div>
      <footer className="text-center text-gray-500 py-3 mt-3">
        <a href="https://developer.github.com/v4/explorer/">
          Data provided by GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;
