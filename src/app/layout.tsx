import "~/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { Toaster } from "~/components/ui/sonner";
import QueryClientProviderContext from "./query-client-provider";
import { ThemeProvider } from "next-themes";

const main_font = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create T4 App",
  description: "Generated by create-t4-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${main_font.variable} font-main`}
    >
      <body>
        <NuqsAdapter>
          <QueryClientProviderContext>
            <ThemeProvider
              attribute={"class"}
              themes={["light", "dark"]}
              defaultTheme="dark"
              enableSystem
            >
              {children}
            </ThemeProvider>
          </QueryClientProviderContext>
          <Toaster />
        </NuqsAdapter>
      </body>
    </html>
  );
}
