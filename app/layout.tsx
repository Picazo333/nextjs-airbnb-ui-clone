import type { Metadata } from "next";
import type { ReactNode } from "react";
import { MotionPreference } from "@/components/site/MotionPreference";
import { SkipLink } from "@/components/site/SkipLink";
import { SiteFooter } from "@/components/site/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vacation rental UI preview",
  description: "Mobile-first clone of a vacation-rental home, catalog, and room page.",
  robots: { index: false, follow: false },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col font-sans">
        <MotionPreference />
        <SkipLink />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
};

export default RootLayout;
