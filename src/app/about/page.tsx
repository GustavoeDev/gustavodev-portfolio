import Skills from "@/components/pages/about/skills";
import AnimationHover from "@/components/shared/animation-hover";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[70rem] px-8 mx-auto min-h-screen">
      <div className="pt-44">
        <h2 className="font-title w-full text-6xl max-[500px]:text-5xl max-[400px]:text-[2.8rem]">
          Combinando lógica e design para soluções funcionais
        </h2>
      </div>
      <div className="mt-24">
        <p className="mb-8 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
          SOBRE MIM
        </p>
        <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
      </div>
      <div className="mt-20 flex justify-between gap-8 w-full flex-row-reverse max-md:flex-col-reverse">
        <div className="w-[1200px] max-w-[100%] h-auto aspect-square relative rounded-sm overflow-hidden ">
          <Image
            src="/photo-gustavo2.JPG"
            alt="Foto de Gustavo"
            width={1280}
            height={720}
            className="object-cover object-[center_20%] h-full w-full"
          />
        </div>

        <div className="max-w-[380px] w-full max-md:max-w-[100%] flex flex-col gap-10 max-md:flex-col-reverse max-md:gap-6">
          <p className="text-zinc-900 dark:text-zinc-400 font-title leading-[1.6]">
            Ajudo a criar soluções personalizadas enquanto aprimoro minhas
            habilidades. Em cada projeto, busco novos desafios, sempre colocando
            a qualidade em primeiro lugar.
          </p>
          <ArrowUpRight className="max-md:hidden" />
          <ArrowDownRight className="hidden max-md:block" />
        </div>
      </div>

      <div className="flex flex-col gap-12 mt-20">
        <h3 className="text-3xl font-title font-medium">
          Tecnologias que utilizo
        </h3>
        <Skills />
      </div>

      <div className="my-36 flex items-center justify-center gap-28">
        <div className="w-[350px] max-w-[100%] h-auto rounded-sm overflow-hidden">
          <Image
            src="/photo-gustavo3.JPG"
            alt="Foto de Gustavo"
            width={1280}
            height={720}
            className="object-cover h-full w-full"
          />
        </div>
        <div className="max-w-[400px] flex flex-col gap-6">
          <h3 className="text-3xl font-title font-medium">
            Em constante evolução
          </h3>
          <p className="text-zinc-800 dark:text-zinc-400 leading-[1.6]">
            Atualmente, estou em constante aprendizado, explorando novas
            tecnologias e aprimorando minhas habilidades de desenvolvimento.
            Estou cursando Análise e Desenvolvimento de Sistemas, o que me
            proporciona uma base sólida e me permite acompanhar as inovações da
            área, sempre em busca de melhorar minhas competências e me adaptar
            às novas demandas do mercado.
          </p>
          <AnimationHover
            as={Link}
            href="/contact"
            className={cn(
              "rounded-full p-6 bg-grayDark inline-flex items-center overflow-hidden justify-center",
              "w-36 h-36 flex-shrink-0",
              "ml-auto",
              "transition-transform duration-500 ease-in-out",
              "transition-opacity duration-500 ease-in-out",
              "before:content-[''] before:absolute before:inset-0 before:bg-blue-500",
              "before:transition-[clip-path] before:duration-500 before:ease-in-out",
              "before:[clip-path:ellipse(20%_0%_at_50%_0%)]",
              "hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)]",
              "max-[500px]:mx-0"
            )}
          >
            <p className="text-md font-medium text-textWhite relative z-[9998]">
              Contato
            </p>
          </AnimationHover>
        </div>
      </div>
    </div>
  );
}
