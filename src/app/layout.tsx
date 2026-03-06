import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Codematics Services Pvt Ltd — For A Better, Safe And Peaceful World",
  description:
    "Codematics is a global trusted partner for guaranteed software engineering excellence. We specialize in Mobile Apps, Web Development, Game Development, AI, Blockchain, and more.",
  keywords:
    "Codematics, software development, mobile apps, web development, game development, AI, blockchain, digital marketing, remote resources",
  openGraph: {
    title: "Codematics Services Pvt Ltd",
    description:
      "A global trusted partner for guaranteed software engineering excellence, quality, and transparency at every step.",
    type: "website",
    url: "https://www.codematics.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
