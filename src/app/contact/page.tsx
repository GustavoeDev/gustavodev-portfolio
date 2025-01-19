import AnimationHover from "@/components/shared/animation-hover";
import { Github, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-[70rem] px-8 mx-auto min-h-screen">
      <div className="pt-44">
        <h2 className="font-title w-full text-6xl max-[500px]:text-5xl max-[400px]:text-[2.8rem]">
          Vamos trabalhar juntos?
        </h2>
      </div>
      <div className="mt-24 flex justify-between">
        <form action="" className="max-w-[700px]">
          <div className="">
            <p className="mb-8 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
              ENTRE EM CONTATO
            </p>
            <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          </div>
          <div className="py-6 flex flex-col gap-4 ">
            <label htmlFor="name" className="font-title font-medium text-xl">
              Qual é o seu nome?
            </label>
            <input
              type="text"
              id="name"
              className="border-none focus:outline-none text-lg placeholder:text-zinc-400 bg-transparent"
              placeholder="Gustavo Emanuel *"
            />
          </div>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          <div className="py-6 flex flex-col gap-4 ">
            <label htmlFor="email" className="font-title font-medium text-xl">
              Qual é o seu email?
            </label>
            <input
              type="text"
              id="email"
              className="border-none focus:outline-none text-lg placeholder:text-zinc-400 bg-transparent"
              placeholder="gustavoe.dev@gmail.com *"
            />
          </div>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          <div className="py-6 flex flex-col gap-4 ">
            <label htmlFor="org" className="font-title font-medium text-xl">
              Você faz parte de alguma organização? (opcional)
            </label>
            <input
              type="text"
              id="org"
              className="border-none focus:outline-none text-lg placeholder:text-zinc-400 bg-transparent"
              placeholder="Microsoft, Google..."
            />
          </div>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          <div className="py-6 flex flex-col gap-4 ">
            <label htmlFor="message" className="font-title font-medium text-xl">
              O que você gostaria de compartilhar comigo?
            </label>
            <input
              type="text"
              id="message"
              className="border-none focus:outline-none text-lg placeholder:text-zinc-400 bg-transparent"
              placeholder="Gustavo, você poderia me ajudar... *"
            />
          </div>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />

          <AnimationHover
            as="button"
            type="submit"
            className="mt-12 p-5 z-[50px] border border-zinc-200 dark:border-zinc-500 overflow-hidden dark:text-zinc-300 dark:hover:text-white hover:text-white transition-colors duration-300 rounded-full cursor-pointer before:content-[''] before:absolute before:inset-0 before:bg-btnColor before:transition-[clip-path] before:duration-500 before:ease-in-out before:[clip-path:ellipse(20%_0%_at_50%_0%)] hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)]"
          >
            <p className="relative z-[999px] flex gap-1">Enviar mensagem</p>
          </AnimationHover>
        </form>
        <div className="flex flex-col gap-4 max-md:hidden">
          <a
            href="https://github.com/GustavoeDev/"
            target="_blank"
            className="rounded-full p-2 border border-zinc-600 flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/gustavo-emanuel-52bb29344/"
            target="_blank"
            className="rounded-full p-2 border border-zinc-600 flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://www.instagram.com/gustavox8_/"
            target="_blank"
            className="rounded-full p-2 border border-zinc-600 flex items-center justify-center w-10 h-10 transition-colors duration-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            <Instagram size={18} />
          </a>
        </div>
      </div>

      <div className="my-24 grid grid-cols-[1.5fr_1fr_1fr] gap-16 max-[780px]:grid-cols-2 max-[500px]:grid-cols-1 max-[500px]:gap-12">
        <div className="flex flex-col gap-4 max-w-[300px] max-[500px]:max-w-[250px]">
          <p>Informações para contato</p>
          <h3 className="font-title text-2xl font-bold">
            Estarei sempre feliz em poder ajudá-lo
          </h3>
        </div>
        <div className="max-w-[250px] flex flex-col gap-2">
          <p className="font-medium">Endereço de Email</p>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          <p className="font-medium">gustavoe.dev@gmail.com</p>
          <span>Sempre disponível - De segunda à segunda</span>
        </div>
        <div className="max-w-[250px] flex flex-col gap-2">
          <p className="font-medium">Telefone</p>
          <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          <p className="font-medium">+55 (84) 98155-7099</p>
          <span>Sempre disponível - De segunda à segunda</span>
        </div>
      </div>
    </div>
  );
}
