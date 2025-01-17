import type { Metadata } from "next";

import localFont from "next/font/local";

import "../styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/header";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navigation from "@/components/shared/navigation";
import Footer from "@/components/shared/footer";
import NavigationProvider from "@/contexts/openNavigationContext";
import ReactLenis from "lenis/react";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gustavo Emanuel",
  description: "Meu portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="max-lg:text-[87.5%]">
      <ReactLenis root>
        <body
          className={cn(
            "bg-background font-sans antialiased relative",
            geistSans.variable,
            geistMono.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationProvider>
              <Navigation />
              <Header />
              {children}
              <Footer />
            </NavigationProvider>
          </ThemeProvider>
        </body>
      </ReactLenis>
    </html>
  );
}
