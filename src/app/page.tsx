import InfiniteName from "@/components/pages/home/infinite-name";
import Intro from "@/components/pages/home/intro";
import PersonalInfo from "@/components/pages/home/personal-info";

export default function Home() {
  return (
    <main>
      <div className="h-screen dark:bg-grayBackground-dark bg-grayBackground-light bg-myPhotoImg bg-contain bg-no-repeat bg-center flex flex-col justify-end ">
        <PersonalInfo />
        <InfiniteName />
      </div>
      <div className="h-screen flex items-center justify-center gap-12 w-full mx-auto bg-[url('/bg-portfolio.png')] bg-cover bg-center">
        <Intro />
      </div>
    </main>
  );
}
