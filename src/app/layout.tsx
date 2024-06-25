import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: [
    {
      url: "/logo.svg",
      href: "/logo.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={poppins.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
