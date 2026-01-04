"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";

interface INavbarContainer {
  children: ReactNode;
}

export const NavbarContainer = ({ children }: INavbarContainer) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[90px] bg-[#1B1F23]" />; // Placeholder para evitar salto visual

  return (
    <header className="py-7 border-b border-pink-600 bg-[#1B1F23] sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <nav
        aria-label="Navegación Principal"
        className="max-w-[1000px] w-full mx-auto px-4 flex justify-between h-10 items-center"
      >
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            alt="Logo Parodi Lucas"
            src={"/log.png"}
            width={35}
            height={35}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:block">{children}</div>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors "
          aria-label="Cambiar tema"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-200" />
          )}
        </button>
      </nav>
    </header>
  );
};
