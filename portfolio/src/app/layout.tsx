import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, IBM_Plex_Sans_Thai, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { SmoothScroll } from "@/components/SmoothScroll";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const thai = IBM_Plex_Sans_Thai({ variable: "--font-thai", subsets: ["thai", "latin"], weight: ["300", "400", "500", "600"] });

export const metadata: Metadata = {
  title: "Kamol Supsaengin | IT & Data Analysis Portfolio",
  description:
    "Portfolio of Kamol Supsaengin. IT Specialist skilled in Hardware, Networking, Python, and Data Science based in Thailand. View my projects and resume.",
  keywords: ["IT", "Network Engineer", "Data Analyst", "Portfolio", "Kamol Supsaengin", "Resume", "Thailand", "Python", "Hardware Support"],
  metadataBase: new URL("https://hoppop1111.github.io"),
  openGraph: {
    type: "website",
    url: "https://hoppop1111.github.io/",
    title: "Kamol Supsaengin - IT & Data Analysis Portfolio",
    description: "Welcome to my personal portfolio. Check out my skills in IT Support, Data Science, and Web Development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#07090e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} ${jetbrains.variable} ${thai.variable} antialiased`}
    >
      <body>
        <LocaleProvider>
          <SmoothScroll />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
