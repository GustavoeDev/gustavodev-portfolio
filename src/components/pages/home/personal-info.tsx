import { HiGlobeAlt } from "react-icons/hi";
import { HiArrowDownRight } from "react-icons/hi2";

export default function PersonalInfo() {
  return (
    <div className="w-full flex items-end justify-between text-white font-medium max-md:flex-row-reverse">
      <div className="flex items-center justify-between gap-8 pl-8 pr-4 py-4 rounded-tr-[999px] rounded-br-[999px] bg-grayDark max-md:p-0 max-md:bg-transparent">
        <div className="max-md:hidden">
          <p>Pau dos Ferros</p>
          <p>Rio Grande do Norte</p>
        </div>
        <span className="p-4 rounded-[999px] inline-flex items-center justify-center dark:bg-background bg-zinc-400 max-md:p-0 max-md:rounded-none max-md:my-10 max-md:mr-6">
          <HiGlobeAlt size={32} />
        </span>
      </div>
      <div className="mr-8 flex flex-col items-start gap-16">
        <HiArrowDownRight size={28} className="max-md:hidden" />
        <div className="flex flex-col gap-1 text-3xl max-md:p-6">
          <p>Desenvolvedor</p>
          <p>FrontEnd</p>
        </div>
      </div>
    </div>
  );
}
