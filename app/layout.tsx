import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "BountyBoard by Base",
  description: "Connect companies with top recruiters on Base. Post bounties, track candidates, and automate payouts.",
  openGraph: {
    title: "BountyBoard by Base",
    description: "Connect companies with top recruiters on Base",
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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
