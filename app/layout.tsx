import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AtlasHub.SI",
    template: "%s · AtlasHub.SI",
  },
  description: "People, technology and intelligent systems organized around measurable results.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
