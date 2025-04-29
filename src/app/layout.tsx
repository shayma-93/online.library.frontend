import type React from "react";
import "../styles/globals.css"; // adjust path based on your folder structure
import {
  Quicksand,
  Fredoka,
  Dancing_Script,
  Sedgwick_Ave_Display,
  Permanent_Marker,
  Caveat_Brush,
  Akaya_Kanadaka,
  Satisfy,
  Grechen_Fuemen,
  Playfair_Display,
} from "next/font/google";
import { ThemeProvider } from "./components/theme-provider";
import "../styles/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});
const sedgwickAve = Sedgwick_Ave_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sedgwick-ave-display",
  display: "swap",
});
const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-permanent-marker",
  display: "swap",
});

const caveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caveat-brush",
  display: "swap",
});
const akayaKanadaka = Akaya_Kanadaka({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-akaya-kanadaka",
  display: "swap",
});
const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
  display: "swap",
});
const grechenFuemen = Grechen_Fuemen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-grechen-fuemen",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "EnchantedReads - Your Magical Digital Library",
  description: "A magical reading portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        dancingScript.variable,
        sedgwickAve.variable,
        caveatBrush.variable,
        akayaKanadaka.variable,
        satisfy.variable,
        grechenFuemen.variable,
        permanentMarker.variable
      ].join(" ")}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
