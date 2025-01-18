import AnimationHover from "@/components/shared/animation-hover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="h-screen max-w-[70rem] px-8 flex items-center justify-center gap-12 w-full mx-auto bg-[url('/bg-portfolio.png')] bg-cover bg-center max-[830px]:my-16 max-[580px]:my-20 max-[830px]:flex-col max-[500px]:my-32">
      <div className="w-96 h-96 max-[500px]:h-80 max-[500px]:w-80 rounded-full overflow-hidden bg-grayBackground-light flex-shrink-0 relative">
        <Image
          src="/about.png"
          alt="Descrição da imagem"
          width={2731}
          height={4096}
          className="absolute object-cover scale-150 translate-y-24 translate-x-2"
        />
      </div>
      <div className="max-w-[36rem] w-full flex flex-col gap-3 items-start max-[830px]:max-w-none max-[830px]:flex-row max-[830px]:gap-6 max-[500px]:flex-col">
        <div className="flex flex-col gap-3 max-w-[36rem]">
          <h1 className="font-title text-4xl font-bold">
            Cada linha de código é uma oportunidade de inovação
          </h1>
          <p className="text-gray-600 dark:text-gray-500">
            Desenvolvedor FrontEnd
          </p>
          <span className="text-gray-800 dark:text-textWhite">
            Sou Gustavo Emanuel, estudante de Análise e Desenvolvimento de
            Sistemas, apaixonado por desenvolvimento web e focado em criar
            soluções inovadoras com tecnologias modernas.
          </span>
        </div>
        <AnimationHover
          as={Link}
          href="/about"
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
            Sobre mim
          </p>
        </AnimationHover>
      </div>
    </div>
  );
}
