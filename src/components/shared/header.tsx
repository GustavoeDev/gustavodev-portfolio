"use client";

import Link from "next/link";
import AnimationHover from "./animation-hover";
import { ModeToggle } from "./theme-toggle";
import { NavigationContext } from "@/contexts/openNavigationContext";
import { useContext } from "react";

export default function Header() {
  const { handleOpenNavigation } = useContext(NavigationContext);

  return (
    <header className="w-full p-8 flex items-center justify-between text-base absolute text-textWhite">
      <AnimationHover as={Link} href="/">
        © Feito por Gustavo
      </AnimationHover>
      <nav className="flex items-center gap-8">
        <AnimationHover
          as={Link}
          href="/projects"
          className="link-with-hover max-sm:hidden"
        >
          Projetos
        </AnimationHover>
        <AnimationHover
          as={Link}
          href="/about"
          className="link-with-hover max-sm:hidden"
        >
          Sobre mim
        </AnimationHover>
        <AnimationHover
          as={Link}
          href="/contact"
          className="link-with-hover max-sm:hidden"
        >
          Contato
        </AnimationHover>
        <AnimationHover
          as="button"
          className="link-with-hover hidden max-sm:block"
          onClick={() => handleOpenNavigation(true)}
        >
          Menu
        </AnimationHover>
        <div className="max-sm:hidden">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
