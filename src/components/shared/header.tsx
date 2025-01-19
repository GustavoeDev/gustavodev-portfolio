"use client";

import Link from "next/link";
import AnimationHover from "./animation-hover";
import { ModeToggle } from "./theme-toggle";
import { NavigationContext } from "@/contexts/openNavigationContext";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

import LogoGustavo from "@/assets/gustavoedev-logo.svg";

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
        <div className="flex items-center">
          <LogoGustavo
            className={`${
              pathname === "/" ? "text-white" : "text-zinc-800 dark:text-white"
            } `}
          />
          <div className="w-max">
            <h2
              className={`animate-typing overflow-hidden whitespace-nowrap box-content border-r-4 text-lg ${
                pathname === "/"
                  ? "text-white border-r-white"
                  : "text-zinc-800 border-r-zinc-800 dark:text-white"
              }  font-bold`}
            >
              ustavo
            </h2>
          </div>
        </div>
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
