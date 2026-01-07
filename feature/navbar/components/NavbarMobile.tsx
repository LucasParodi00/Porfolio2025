"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// Definimos los items aquí o impórtalos si los tienes en un archivo de constantes
const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Mi", href: "/sobre-mi" },
];

export const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* El botón hamburguesa que abre el menú */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-white/10"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menú</span>
        </Button>
      </SheetTrigger>

      {/* El contenido del sidebar */}
      <SheetContent
        side="right"
        className="bg-[#1B1F23] border-pink-600 w-[300px] sm:w-[400px]"
      >
        {/* Título para accesibilidad (puede estar oculto visualmente si prefieres) */}
        <SheetTitle className="sr-only">Menú de navegación</SheetTitle>

        <div className="flex flex-col h-full py-6">
          {/* Logo dentro del menú móvil (opcional) */}
          <div className="mb-8 flex justify-center">
            <Image
              alt="Logo Parodi Lucas"
              src={"/logo2.png"}
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          <nav className="flex flex-col gap-y-6 items-center">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)} // Cerramos el menú al hacer click
                  className={`
                    text-2xl font-medium uppercase transition-colors duration-200
                    ${
                      isActive
                        ? "text-orange-500"
                        : "text-white hover:text-white/70"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
