"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Sobre Mi", href: "/sobre-mi" },
];

export const NavbarLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 items-center">
      {navItems.map((item) => {
        const isActive =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`
                uppercase text-lg transition-colors duration-200 ease-in-out 
                ${
                  isActive
                    ? "text-orange-500 " // Estilo Activo
                    : "hover:text-white/70 text-white" // Estilo Inactivo
                }
              `}
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
