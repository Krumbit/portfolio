import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import PostHogPageView from "posthog/PostHogPageView";
import { Suspense } from "react";
import { LINKS } from "util/constants";
import { jbmono } from "util/fonts";
import "./globals.css";
import { PHProvider, ThemeProvider } from "./providers";

export const metadata: Metadata = {
  title: "krumbit",
  description: "krumbit's personal portfolio",
  applicationName: "krumbit",
  authors: [{ name: "Krumbit", url: LINKS.GitRepo }],
  category: "Personal Portfolio",
  creator: "Krumbit",
  keywords: [
    "krumbit",
    "krumb",
    "krum",
    "portfolio",
    "personal",
    "projects",
    "software",
    "development",
    "programming",
    "web",
    "app",
    "application",
    "website",
    "react",
    "nextjs",
    "typescript",
    "tailwindcss",
    "tailwind",
    "css",
    "html",
    "javascript",
    "js",
  ],
  metadataBase: new URL(LINKS.BaseURL),
  openGraph: {
    siteName: "krumbit",
    title: "krumbit",
    description: "krumbit's personal portfolio",
    type: "website",
    url: new URL(LINKS.BaseURL),
    images: [{ url: "/static/pfp.png", alt: "Krumbit profile picture" }],
    locale: "en_US",
  },
  twitter: {
    title: "krumbit",
    description: "krumbit's personal portfolio",
    site: "@krumbit",
    card: "summary",
    creator: "@krumbit",
    images: [{ url: "/static/pfp.png", alt: "Krumbit profile picture" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={jbmono.className}>
          <Suspense>
            <PostHogPageView />
          </Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
        </body>
      </PHProvider>
    </html>
  );
}
