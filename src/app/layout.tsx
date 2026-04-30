import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { VideoBackground } from "@/components/video-background";
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
  title: {
    default: "Deepcomet - Next Gen AI, Science & Space",
    template: "%s | Deepcomet",
  },
  description:
    "Deepcomet pioneers the next generation of artificial intelligence, scientific research, and space exploration. Pushing the boundaries of what is possible.",
  keywords: [
    "AI",
    "artificial intelligence",
    "space",
    "science",
    "research",
    "deep learning",
    "space exploration",
    "Deepcomet",
  ],
  authors: [{ name: "Deepcomet" }],
  openGraph: {
    title: "Deepcomet - Next Gen AI, Science & Space",
    description:
      "Pioneering the next generation of AI, science, and space exploration.",
    url: "https://deepcomet.space",
    siteName: "Deepcomet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepcomet - Next Gen AI, Science & Space",
    description:
      "Pioneering the next generation of AI, science, and space exploration.",
  },
  metadataBase: new URL("https://deepcomet.space"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <VideoBackground />
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
