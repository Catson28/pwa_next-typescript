import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configuração das fontes locais
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Definir os metadados usando a Metadata API
export const metadata: Metadata = {
  title: "Tyula",
  description:
    "A Solid Foundation for Building Scalable and Efficient Progressive Web Application!",
  applicationName: "Tyula",
  keywords: [
    "Next.js",
    "PWA",
    "React",
    "HTML",
    "CSS",
    "TypeScript",
    "tyula",
    "facts",
    "breeds",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3EFE0" },
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { rel: "icon", url: "/icons-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/icons-16x16.png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://tyula.vercel.app",
    title: "The Next.js Progressive Web App Template",
    description:
      "A Solid Foundation for Building Scalable and Efficient Progressive Web Application!",
    images: [
      {
        url: "https://tyula.vercel.app/og-image.png",
        alt: "Next.js PWA Template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AjayKanniyappan",
    title: "The Next.js Progressive Web App Template",
    description:
      "A Solid Foundation for Building Scalable and Efficient Progressive Web Application!",
    images: [
      {
        url: "https://tyula.vercel.app/og-image.png",
        alt: "Next.js PWA Template",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}