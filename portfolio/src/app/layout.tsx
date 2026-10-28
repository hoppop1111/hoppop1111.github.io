import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans_Thai, Inter, JetBrains_Mono, Kanit } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale";
import { SmoothScroll } from "@/components/SmoothScroll";

const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const kanit = Kanit({ variable: "--font-kanit", subsets: ["thai", "latin"], weight: ["400", "500", "600"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });
const thai = IBM_Plex_Sans_Thai({ variable: "--font-thai", subsets: ["thai", "latin"], weight: ["300", "400", "500", "600"] });

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
};

// Runs before paint so a saved/system dark theme never flashes light first.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${bricolage.variable} ${kanit.variable} ${inter.variable} ${jetbrains.variable} ${thai.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <LocaleProvider>
          <SmoothScroll />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
