import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // importing fonts
import "./globals.css";

// setting up the fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Abdessamad BENDADA | Portfolio",
  description: "Creative Developer & UI Designer",
  icons: {
    icon: "/abdessamad-headshot.webp",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* merging both font variables into the body */}
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
