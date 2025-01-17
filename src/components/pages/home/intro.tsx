import AnimationHover from "@/components/shared/animation-hover";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <AnimationHover
        as={Link}
        href="/about"
        factor={0.1}
        className="relative w-80 h-80 overflow-hidden rounded-full bg-grayBackground-light cursor-pointer group"
      >
        <Image
          src="/about.png"
          alt="Descrição da imagem"
          width={2731}
          height={4096}
          className="object-cover scale-150 translate-y-20"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-xl font-medium">Sobre mim</span>
        </div>
      </AnimationHover>
      <div className="max-w-[37.5rem] flex flex-col gap-3">
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
    </>
  );
}
