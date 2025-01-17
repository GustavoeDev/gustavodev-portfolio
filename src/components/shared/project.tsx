import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild>
        <Link href="/" className="block">
          <div className="px-6 py-8 flex items-center justify-between hover:mx-8 transition-all duration-700 hover:text-gray-400">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-title">Nome do projeto</h2>
            </div>
            <div className="flex items-center gap-3">
              <span>Typescript</span>
              <span>CSS</span>
            </div>
          </div>
          <hr className="border-t border-gray-200 dark:border-gray-500 pointer-events-none" />
        </Link>
      </HoverCardTrigger>
      <HoverCardContent className="z-50 flex gap-5 w-[700px] max-w-3xl p-4">
        <Image
          src="/project-image.png"
          alt="Project image"
          width={400}
          height={250}
          className="rounded-sm"
        />
        <div className="space-y-2 flex flex-col justify-between w-full">
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-lg">Nome do projeto</h3>
            <p className="text-sm text-muted-foreground">
              descrição completa do projeto
            </p>
          </div>

          <Link href="#" className="flex items-center justify-between text-sm">
            <p>Projeto no github</p>
            <ExternalLink size={18} />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
