import type { Metadata, Viewport } from "next";
import { Antonio, IBM_Plex_Sans_Thai, Inter, JetBrains_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MotionProvider, ScrollProgress } from "@/components/ui/Reveal";

const antonio = Antonio({ variable: "--font-antonio", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const kanit = Kanit({ variable: "--font-kanit", subsets: ["thai", "latin"], weight: ["300", "400", "500"] });
const thai = IBM_Plex_Sans_Thai({ variable: "--font-thai", subsets: ["thai", "latin"], weight: ["300", "400", "500", "600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500", "600"] });
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Kamol Supsaengin | IT & Data Analysis Portfolio",
  description:
    "Portfolio of Kamol Supsaengin. IT Specialist skilled in Hardware, Networking, Python, and Data Science based in Thailand. View my projects and resume.",
  keywords: [
    "IT",
    "Network Engineer",
    "Data Analyst",
    "Portfolio",
    "Kamol Supsaengin",
    "Resume",
    "Thailand",
    "Python",
    "Hardware Support",
  ],
  metadataBase: new URL("https://hoppop1111.github.io"),
  openGraph: {
    type: "website",
    url: "https://hoppop1111.github.io/",
    title: "Kamol Supsaengin - IT & Data Analysis Portfolio",
    description: "Welcome to my personal portfolio. Check out my skills in IT Support, Data Science, and Web Development.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${antonio.variable} ${kanit.variable} ${inter.variable} ${thai.variable} ${mono.variable} antialiased`}>
      <body>
        <LocaleProvider>
          <SmoothScroll />
          <MotionProvider>
            <ScrollProgress />
            {children}
          </MotionProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
