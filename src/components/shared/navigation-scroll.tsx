"use client";

import { NavigationScrollContext } from "@/contexts/openNavigationScrollContext";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import AnimationHover from "./animation-hover";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { List, X } from "lucide-react";

export default function NavigationScroll() {
  const { handleNavigationVisible, isVisible, handleOpenModal, isModalOpen } =
    useContext(NavigationScrollContext);

  const location = usePathname();

  const toggleModal = () => {
    handleOpenModal(!isModalOpen);
    if (window.innerWidth <= 768 && isModalOpen) {
      handleNavigationVisible(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      handleNavigationVisible(true);
    } else {
      handleNavigationVisible(false);
      handleOpenModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeModalOpen = () => {
    if (window.innerWidth > 768) {
      handleNavigationVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", changeModalOpen);
    return () => {
      window.removeEventListener("resize", changeModalOpen);
    };
  }, []);

  return (
    <>
      <AnimationHover
        as="button"
        onClick={toggleModal}
        className={cn(
          "fixed top-8 right-8 p-6 bg-zinc-900 text-white rounded-full cursor-pointer transition-opacity duration-500 ease-in-out transform scale-0 hover:scale-100 hover:opacity-100 opacity-0 flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-blue-500 before:transition-[clip-path] before:duration-500 before:ease-in-out before:[clip-path:ellipse(20%_0%_at_50%_0%)] hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)] z-[9999]",
          isVisible && isModalOpen ? "visible bg-blue-500" : "",
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <span className="relative z-10 leading-none">
          {isModalOpen ? <X size={24} /> : <List size={24} />}
        </span>
      </AnimationHover>

      <nav
        className={cn(
          "fixed z-[9998] top-0 right-0 max-w-[32rem] w-full h-screen bg-zinc-900 transition-[clip-path] duration-1000 ease-out [clip-path:ellipse(0%_70%_at_200%_50%)]",
          isModalOpen ? "[clip-path:ellipse(150%_100%_at_100%_50%)]" : ""
        )}
      >
        <div className="p-24 h-full flex flex-col justify-center gap-10">
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
                href={href}
                className={cn(
                  "text-5xl text-textWhite relative after:content-[''] after:absolute after:top-1/2 after:-left-6 after:w-2 after:h-2 after:bg-white after:rounded-full after:transform after:-translate-y-1/2 after:scale-0 after:transition-transform after:duration-400 hover:after:scale-100",
                  location === href ? "after:scale-100" : ""
                )}
              >
                {label}
              </AnimationHover>
            ))}
          </div>

          <div className="text-zinc-500 flex flex-col gap-4">
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
                  className="text-sm text-textWhite relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white after:transition-[width] after:duration-300 hover:after:w-full"
                >
                  {label}
                </AnimationHover>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
