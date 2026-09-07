import type { Metadata } from "next";
import { Chakra_Petch, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Squarish techno face that actually ships a Thai subset — carries both the
// display headlines and Thai body copy.
const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

// Latin-only. Used for chrome (nav tags, labels, numbers), never for Thai.
const jetbrains = JetBrains_Mono({
  variable: "--font-jet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ailab.example.com"),
  title: {
    default: "AI·LAB — รับทำโปรเจกต์ AI ที่ใช้งานได้จริง",
    template: "%s — AI·LAB",
  },
  description:
    "เอเจนซี่ AI ที่ส่งมอบระบบใช้งานจริง ไม่ใช่เดโม รับทำแชตบอต RAG computer vision และ automation ตั้งแต่คุยโจทย์จนขึ้น production",
  keywords: ["AI", "แชตบอต", "RAG", "computer vision", "automation", "รับทำ AI"],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: "AI·LAB",
    title: "AI·LAB — รับทำโปรเจกต์ AI ที่ใช้งานได้จริง",
    description:
      "เอเจนซี่ AI ที่ส่งมอบระบบใช้งานจริง ไม่ใช่เดโม ตั้งแต่คุยโจทย์จนขึ้น production",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${chakra.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
