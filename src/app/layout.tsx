import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "components/utility/ThemeProvider";
import type { Metadata, Viewport } from "next";
import { LINKS } from "util/constants";
import { jbmono } from "util/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krumbit",
  description: "Krumbit's personal portfolio",
  applicationName: "Krumbit",
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
    siteName: "Krumbit",
    title: "Krumbit",
    description: "Krumbit's personal portfolio",
    type: "website",
    url: new URL(LINKS.BaseURL),
    images: [{ url: "/static/pfp.png", alt: "Krumbit profile picture" }],
  },
};

export const viewport: Viewport = {
  themeColor: "815AF0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jbmono.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
