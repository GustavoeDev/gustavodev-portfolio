"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import AnimationHover from "./animation-hover";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext, useEffect, useState } from "react";
import { List } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import { NavigationContext } from "@/contexts/openNavigationContext";

export default function Navigation() {
  const { handleOpenNavigation, isOpen, isVisible, handleBtnVisible } =
    useContext(NavigationContext);

  const location = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleBtnVisible(true);
    } else {
      handleBtnVisible(false);
      handleOpenNavigation(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenNavigation}>
      <SheetTrigger asChild>
        <AnimationHover
          as="button"
          className={cn(
            "fixed top-8 right-8 p-5 bg-zinc-900 overflow-hidden text-white rounded-full cursor-pointer",
            "transition-transform duration-500 ease-in-out",
            "transition-opacity duration-500 ease-in-out",
            isVisible && !isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0",
            !isVisible && "invisible",
            "z-[9999]",
            "before:content-[''] before:absolute before:inset-0 before:bg-btnColor",
            "before:transition-[clip-path] before:duration-500 before:ease-in-out",
            "before:[clip-path:ellipse(20%_0%_at_50%_0%)]",
            "hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)]"
          )}
        >
          <List size={24} className="relative z-[9998]" />
        </AnimationHover>
      </SheetTrigger>

      <SheetContent className="bg-grayDark border-none max-[520px]:w-screen">
        <SheetTitle></SheetTitle>
        <SheetDescription></SheetDescription>

        <div className="h-full flex flex-col justify-center gap-10 px-8">
          <div className="flex flex-col gap-6 text-zinc-500">
            <p className="text-[0.65rem] font-bold">NAVEGAÇÃO</p>
            <hr className="border-none h-px bg-zinc-500" />
          </div>

          <div className="flex flex-col items-start gap-5">
            {[
              { href: "/", label: "Início" },
              { href: "/projects", label: "Projetos" },
              { href: "/about", label: "Sobre" },
              { href: "/contact", label: "Contato" },
            ].map(({ href, label }) => (
              <AnimationHover
                key={href}
                as={Link}
                href={href}
                className={cn(
                  "text-5xl text-white relative after:content-[''] after:absolute after:top-1/2 after:-left-6 after:w-2 after:h-2 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:scale-0 after:transition-transform after:duration-400 hover:after:scale-100",
                  location === href ? "after:scale-100" : ""
                )}
                onClick={() => handleOpenNavigation(false)}
              >
                {label}
              </AnimationHover>
            ))}
          </div>

          <div className="text-zinc-500 flex items-center gap-5 justify-between">
            <div className="flex flex-col gap-4 justify-between">
              <p className="text-[0.65rem] font-bold">REDES SOCIAIS</p>

              <div className="flex gap-6">
                {[
                  { href: "https://github.com/GustavoeDev/", label: "Github" },
                  {
                    href: "https://www.linkedin.com/in/gustavo-emanuel-52bb29344/",
                    label: "Linkedin",
                  },
                  {
                    href: "https://www.instagram.com/gustavox8_/",
                    label: "Instagram",
                  },
                ].map(({ href, label }) => (
                  <AnimationHover
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </AnimationHover>
                ))}
              </div>
            </div>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
