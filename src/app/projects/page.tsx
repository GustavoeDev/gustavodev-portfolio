"use client";

import AnimationHover from "@/components/shared/animation-hover";
import Project from "@/components/shared/project";
import { useState } from "react";

export default function Projects() {
  const [isSelected, setIsSelected] = useState<string | null>("");

  const filterYearItems = [
    {
      label: "Todos",
      year: "",
    },
    {
      label: "2025",
      year: "2025",
    },
    {
      label: "2024",
      year: "2024",
    },
  ];

  return (
    <div className="max-w-[70rem] px-8 mx-auto min-h-screen">
      <div className="pt-44">
        <h2 className="font-title max-w-[900px] text-6xl">
          Transformando desafios em sistemas eficientes
        </h2>
      </div>
      <div className="mt-14">
        <div className="flex items-center gap-4">
          {filterYearItems.map((item) => {
            return (
              <AnimationHover
                key={item.year}
                as="button"
                className={`p-5 z-[50px] border border-zinc-200 dark:border-zinc-500 overflow-hidden dark:hover:text-textWhite hover:text-textWhite transition-colors duration-300 rounded-full cursor-pointer before:content-[''] before:absolute before:inset-0 before:bg-blue-500 before:transition-[clip-path] before:duration-500 before:ease-in-out before:[clip-path:ellipse(20%_0%_at_50%_0%)] ${
                  isSelected === item.year
                    ? "bg-zinc-800 dark:bg-grayDark text-textWhite"
                    : "hover:before:[clip-path:ellipse(150%_150%_at_50%_0%)]"
                }`}
                onClick={() => setIsSelected(item.year)}
              >
                <p className="relative z-[999px] flex gap-1">
                  {item.label} <span className="text-[0.625rem]">18</span>
                </p>
              </AnimationHover>
            );
          })}
        </div>
        <div className="mt-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between mb-6 text-zinc-400 dark:text-zinc-500 text-xs font-medium">
              <span>NOME</span>
              <span>LINGUAGENS</span>
            </div>
            <hr className="border-t border-zinc-200 dark:border-zinc-500 pointer-events-none" />
          </div>
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}
