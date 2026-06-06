import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "SIT | Services for Impact and Transformation",
  description:
    "SIT RDC est une plateforme multidimensionnelle dédiée à l'encadrement, la transformation sociétale et le leadership éthique en République Démocratique du Congo.",
  icons: { icon: "/favicon-logo-sit.png" },
  metadataBase: new URL("https://sit-rdc.vercel.app"),
  openGraph: {
    title: "SIT | Services for Impact and Transformation",
    description:
      "Une plateforme multidimensionnelle dédiée à l'encadrement, la transformation sociétale et le leadership éthique en République Démocratique du Congo.",
    url: "https://sit-rdc.vercel.app",
    siteName: "SIT RDC",
    images: [
      {
        url: "/logo-sit.png",
        width: 800,
        height: 800,
        alt: "SIT RDC — Services for Impact and Transformation",
      },
    ],
    locale: "fr_CD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIT | Services for Impact and Transformation",
    description:
      "Une plateforme multidimensionnelle dédiée à l'encadrement, la transformation sociétale et le leadership éthique en République Démocratique du Congo.",
    images: ["/logo-sit.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
