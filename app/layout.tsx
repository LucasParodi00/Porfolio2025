import type { Metadata, Viewport } from "next"; // Importa Viewport
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/feature/navbar/components/Navbar";
import { ThemeProvider } from "@/feature/navbar/provider/ThemeProvider";
import { Footer } from "@/components/common/Footer";

const baseUrl = "https://parodilucas.com";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f2f7" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Parodi Lucas | Licenciado en Sistemas",
    template: "%s | Parodi Lucas",
  },
  alternates: {
    canonical: "./",
  },
  description:
    "Portfolio de Parodi Lucas, Licenciado en Sistemas y Desarrollador Web Full Stack. Mejorando procesos y descartando lo que no aporta valor.",
  keywords: [
    "Desarrollador Web",
    "Full Stack",
    "Sistemas",
    "Licenciado",
    "Freelance",
    "unne",
    "Analista Programador",
    "Desarrollador Web Full Stack",
    "Licenciado en Sistemas",
    "Argentina",
    "React",
    "Next.js",
    "Nest.js",
    "FrontEnd",
    "BackEnd",
  ],
  authors: [{ name: "Parodi Lucas", url: baseUrl }],
  creator: "Parodi Lucas",
  openGraph: {
    title: "Parodi Lucas | Licenciado en Sistemas",
    description:
      "Portfolio de Parodi Lucas. Mejorando procesos y descartando lo que no aporta valor.",
    url: baseUrl,
    siteName: "Portfolio Parodi Lucas",
    images: [
      {
        url: "/perfil2.png",
        width: 1200,
        height: 630,
        alt: "Parodi Lucas - Desarrollador Web Full Stack",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Parodi Lucas",
  url: baseUrl,
  jobTitle: "Licenciado en Sistemas | Desarrollador Web Full Stack",
  image: `${baseUrl}/perfil2.png`,
  nationality: {
    "@type": "Country",
    name: "Argentina",
  },
  sameAs: [
    "https://www.linkedin.com/in/parodi-lucas-ivan/",
    "https://github.com/LucasParodi00",
    "https://x.com/parodilucas_",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="bg-[#f2f2f7] dark:bg-black min-h-screen">
            <div className="max-w-[900px] m-auto px-2 pb-10">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
