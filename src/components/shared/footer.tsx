"use client";

import { Github, Instagram, Linkedin, Link as LinkIcon } from "lucide-react";
import { Button } from "../ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

export default function Footer() {
  const [isVisibleSocial, setIsVisibleSocial] = useState(false);

  const handleShowSocial = () => {
    setIsVisibleSocial(true);
    setTimeout(() => {
      setIsVisibleSocial(false);
    }, 10000);
  };

  return (
    <footer className="py-10 max-w-[70rem] mx-auto flex flex-col items-center justify-center gap-6">
      <p className="text-zinc-600 dark:text-zinc-400 text-sm font-title">
        Copyright · 2025 - gustavoe.dev
      </p>
      <div className="flex items-center w-full justify-between">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                onClick={handleShowSocial}
                className="flex items-center gap-2 hover:bg-transparent"
              >
                <LinkIcon
                  className={`transition-transform duration-300 ${
                    isVisibleSocial ? "scale-125" : "scale-100"
                  }`}
                />
                <div
                  className={`
        flex items-center gap-4 ml-3
        transition-all duration-300 ease-in-out
        origin-left
        ${
          isVisibleSocial
            ? "w-auto opacity-100 scale-x-100 border-l border-zinc-400 pl-5"
            : "w-0 opacity-0 scale-x-0"
        }
        overflow-hidden
      `}
                >
                  <a
                    href="https://www.linkedin.com/in/gustavo-emanuel-52bb29344/"
                    target="_blank"
                  >
                    <Linkedin />
                  </a>
                  <a href="https://github.com/GustavoeDev/" target="_blank">
                    <Github />
                  </a>
                  <a
                    href="https://www.instagram.com/gustavox8_/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Redes sociais</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="">v1.0</p>
            </TooltipTrigger>
            <TooltipContent>
              <p>Versão 1.0</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </footer>
  );
}
