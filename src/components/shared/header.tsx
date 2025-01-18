"use client";

import Link from "next/link";
import AnimationHover from "./animation-hover";
import { ModeToggle } from "./theme-toggle";
import { NavigationContext } from "@/contexts/openNavigationContext";
import { useContext } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { handleOpenNavigation } = useContext(NavigationContext);
  const pathname = usePathname();

  const navigationItems = [
    {
      label: "Projetos",
      path: "/projects",
    },
    {
      label: "Sobre mim",
      path: "/about",
    },
    {
      label: "Contato",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`w-full p-8 flex items-center justify-between text-base absolute text-white font-medium ${
        pathname === "/" ? "" : "text-zinc-800 dark:text-white"
      }`}
    >
      <AnimationHover as={Link} href="/">
        © Feito por Gustavo
      </AnimationHover>
      <nav className="flex items-center gap-8">
        {navigationItems.map((item) => (
          <AnimationHover
            as={Link}
            href={item.path}
            key={item.label}
            className="group relative max-sm:hidden"
          >
            {item.label}
            <span
              className={`absolute -bottom-3 left-1/2 w-1.5 h-1.5 ${
                pathname === "/" ? " bg-white" : "bg-zinc-800  dark:bg-white"
              } rounded-full 
              transform -translate-x-1/2 -translate-y-1/2 scale-0 rotate-0
              transition-transform duration-400 ease-in-out
              group-hover:scale-100 group-hover:rotate-360
              peer-active:scale-100 peer-active:rotate-360
              ${pathname === item.path ? "scale-100" : ""}
              `}
            />
          </AnimationHover>
        ))}

        <AnimationHover
          as="button"
          className="group relative hidden max-sm:block"
          onClick={() => handleOpenNavigation(true)}
        >
          Menu
          <span
            className={`absolute -bottom-3 left-1/2 w-1.5 h-1.5 ${
              pathname === "/" ? " bg-white" : "bg-zinc-800  dark:bg-white"
            } rounded-full 
            transform -translate-x-1/2 -translate-y-1/2 scale-0 rotate-0
            transition-transform duration-400 ease-in-out
            group-hover:scale-100 group-hover:rotate-360
            peer-active:scale-100 peer-active:rotate-360`}
          />
        </AnimationHover>
        <div className="max-sm:hidden">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
