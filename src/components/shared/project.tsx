"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import useIsMobile from "@/hooks/useIsMobile";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  const isMobile = useIsMobile();

  return (
    <HoverCard openDelay={300}>
      {isMobile ? (
        <div className="w-full">
          <div className="relative aspect-video w-full px-10 py-20 bg-zinc-700">
            <Image
              src="/project-image.png"
              alt="Project image"
              width={1920}
              height={1080}
              className="rounded-sm w-full h-auto"
            />
          </div>
          <div className="mt-6">
            <h2 className="font-title text-medium text-2xl mb-4">
              Nome do projeto
            </h2>
            <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
            <div className="mt-4 flex items-center justify-between">
              <p>2025</p>
              <a
                href="#"
                target="_blank"
                className="flex items-center justify-between text-sm"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
          <HoverCardTrigger asChild>
            <Link href="/" className="block">
              <div className="px-6 py-8 flex items-center justify-between hover:mx-8 gap-3 transition-all duration-700 hover:text-zinc-400">
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl font-title">Nome do projeto</h2>
                </div>
                <div>
                  <span>2025</span>
                </div>
              </div>
              <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="z-50 flex flex-col md:flex-row gap-4 w-[50vw] md:w-full max-w-2xl p-4">
            <div className="relative aspect-video w-full md:max-w-[60%]">
              <Image
                src="/project-image.png"
                alt="Project image"
                width={1920}
                height={1080}
                className="rounded-sm w-full h-auto"
              />
            </div>

            <div className="space-y-2 flex flex-col justify-between gap-3 w-full md:max-w-[40%]">
              <div className="flex flex-col gap-1">
                <h3 className="font-medium text-lg">Nome do projeto</h3>
                <p className="text-sm text-muted-foreground">
                  descrição completa do projeto descrição completa do projeto
                </p>
              </div>

              <a
                href="#"
                target="_blank"
                className="flex items-center justify-between text-sm"
              >
                <p>Projeto no github</p>
                <ExternalLink size={18} />
              </a>
            </div>
          </HoverCardContent>
        </>
      )}
    </HoverCard>
  );
}
