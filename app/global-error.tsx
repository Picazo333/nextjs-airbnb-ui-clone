"use client";

import { ErrorState } from "@/components/feedback/ErrorState";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

const GlobalError = ({ retry }: { error: unknown; retry: () => void }) => {
  return (
    <html lang="en">
      <body className="flex min-h-full flex-col font-sans">
        <main id="content" className="mx-auto w-full max-w-[var(--container)] flex-1 px-[var(--gutter)] py-12">
          <ErrorState
            title="This preview could not be shown"
            body="An unexpected problem stopped the page. Nothing was booked or submitted."
            onRetry={retry}
          />
        </main>
        <SiteFooter />
      </body>
    </html>
  );
};

export default GlobalError;
