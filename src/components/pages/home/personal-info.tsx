import { HiGlobeAlt } from "react-icons/hi";
import { HiArrowDownRight } from "react-icons/hi2";

export default function PersonalInfo() {
  return (
    <div className="w-full flex items-end justify-between text-textWhite font-medium">
      <div className="flex items-center justify-between gap-8 pl-8 pr-4 py-4 rounded-tr-[999px] rounded-br-[999px] bg-grayDark">
        <div>
          <p>Pau dos Ferros</p>
          <p>Rio Grande do Norte</p>
        </div>
        <span className="p-4 rounded-[999px] inline-flex items-center justify-center dark:bg-grayBackground-dark bg-grayBackground-light">
          <HiGlobeAlt size={32} />
        </span>
      </div>
      <div className="mr-8 flex flex-col items-start gap-16">
        <HiArrowDownRight size={28} />
        <div className="flex flex-col gap-1 text-3xl">
          <p>Desenvolvedor</p>
          <p>FrontEnd</p>
        </div>
      </div>
    </div>
  );
}
