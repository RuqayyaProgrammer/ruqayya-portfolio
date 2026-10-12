
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruqayya | Developer Portfolio",
  description:
    "Explore Ruqayya's web development projects, interactive builds, and journey as a creative, design-minded developer.",
  applicationName: "Ruqayya Portfolio",
  openGraph: {
    title: "Ruqayya | Developer Portfolio",
    description:
      "Thoughtful interfaces, practical projects, and a curious approach to building for the web.",
    type: "website",
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
