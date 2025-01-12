"use client";

import Link from "next/link";
import AnimationHover from "./animation-hover";
import { ModeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="w-full p-8 flex items-center justify-between text-base absolute text-textWhite">
      <AnimationHover as={Link} href="/">
        © Feito por Gustavo
      </AnimationHover>
      <nav className="flex items-center gap-8">
        <AnimationHover as={Link} href="/projects" className="link-with-hover">
          Projetos
        </AnimationHover>
        <AnimationHover as={Link} href="/about" className="link-with-hover">
          Sobre mim
        </AnimationHover>
        <AnimationHover as={Link} href="/contact" className="link-with-hover">
          Contato
        </AnimationHover>
        <ModeToggle />
      </nav>
    </header>
  );
}
