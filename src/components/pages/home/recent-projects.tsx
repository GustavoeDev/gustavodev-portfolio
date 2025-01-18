import AnimationHover from "@/components/shared/animation-hover";
import Project from "@/components/shared/project";
import Link from "next/link";

export default function RecentProjects() {
  return (
    <div className="mt-28">
      <p className="mb-8 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
        PROJETOS RECENTES
      </p>
      <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
      <div className="">
        <Project />
        <Project />
        <Project />
      </div>
      <div className="flex justify-center items-center my-16">
        <AnimationHover
          as={Link}
          href="/projects"
          className="p-5 z-[50px] border border-zinc-200 dark:border-zinc-500 overflow-hidden dark:text-zinc-300 dark:hover:text-textWhite hover:text-textWhite transition-colors duration-300 rounded-full cursor-pointer before:content-[''] before:absolute before:inset-0 before:bg-blue-500 before:transition-[clip-path] before:duration-500 before:ease-in-out before:[clip-path:ellipse(20%_0%_at_50%_0%)] hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)]"
        >
          <p className="relative z-[999px] flex gap-1">
            Mais projetos <span className="text-[0.625rem]">18</span>
          </p>
        </AnimationHover>
      </div>
    </div>
  );
}
