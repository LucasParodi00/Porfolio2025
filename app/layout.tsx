import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/feature/navbar/components/Navbar";
import { ThemeProvider } from "@/feature/navbar/provider/ThemeProvider";
import { Footer } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Parodi Lucas | Porfolio",
  description:
    "Porfolio de Parodi Lucas - Desarrollador Full Stack - Licenciado en Sistemas - Analista Programador ",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Elige los pesos que necesites
  variable: "--font-poppins", // IMPORTANTE: Definir el nombre de la variable CSS
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="bg-[#f2f2f7] dark:bg-black ">
            <div className="max-w-[900px] m-auto px-2 pb-10">{children}</div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
