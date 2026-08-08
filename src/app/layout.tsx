import type { Metadata, Viewport } from "next";
import { Caveat, Oswald, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marvin-paul.github.io"),
  title: {
    default: `${site.fullName} — Software Developer`,
    template: `%s — ${site.fullName}`,
  },
  description:
    "Muwereza Marvin Paul is a software developer from Entebbe, Uganda building full-stack web products, mobile apps and AI-powered tools.",
  openGraph: {
    title: `${site.fullName} — Software Developer`,
    description:
      "Full-stack web, mobile and AI. Building digital products with clarity and restraint.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#131313",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${oswald.variable} ${plusJakarta.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-48 -top-48 h-[520px] w-[520px] rounded-full bg-primary/10 blur-[130px]" />
          <div className="absolute right-[-12%] top-[28%] h-[420px] w-[420px] rounded-full bg-red-700/10 blur-[130px]" />
          <div className="absolute bottom-[-24%] left-[30%] h-[560px] w-[560px] rounded-full bg-primary/10 blur-[150px]" />
        </div>
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
