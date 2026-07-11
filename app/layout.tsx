import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "yuanheartart | Modern Hand-Painted Wall Art",
  description:
    "yuanheartart offers modern handmade canvas wall art, textured abstract paintings, minimalist pieces, and buyer-loved decor for contemporary interiors.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "yuanheartart | Modern Hand-Painted Wall Art",
    description:
      "Shop textured abstract paintings, minimalist wall art, and handmade canvas pieces from yuanheartart.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "yuanheartart | Modern Hand-Painted Wall Art",
    description:
      "Modern handmade canvas wall art and textured abstract paintings for contemporary homes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
