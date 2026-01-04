import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Cenko - Software Engineer Portfolio",
  description:
    "Portfolio of Florian Cenko, recent Applied Informatics graduate specializing in back-end development and data-driven applications.",
  openGraph: {
    title: "Florian Cenko - Software Engineer Portfolio",
    description:
      "Portfolio of Florian Cenko, recent Applied Informatics graduate specializing in back-end development and data-driven applications.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Florian Cenko Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Cenko - Software Engineer Portfolio",
    description:
      "Portfolio of Florian Cenko, recent Applied Informatics graduate specializing in back-end development and data-driven applications.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}