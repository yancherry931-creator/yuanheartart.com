import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yuanheartart.com"),
  title: "yuanheartart | Handmade Textured Wall Art",
  description:
    "Shop yuanheartart handmade textured wall art, abstract oil paintings, ocean wave canvases, wabi-sabi pieces, and custom-size artwork for modern interiors.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "yuanheartart | Handmade Textured Wall Art",
    description:
      "Shop handmade textured abstract paintings, ocean wave art, and custom-size canvas pieces from yuanheartart.",
    url: "https://yuanheartart.com",
    siteName: "yuanheartart",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "yuanheartart | Handmade Textured Wall Art",
    description:
      "Handmade textured wall art and abstract canvas paintings for contemporary homes.",
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
