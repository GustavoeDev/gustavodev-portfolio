import InfiniteName from "@/components/pages/home/infinite-name";
import Intro from "@/components/pages/home/intro";
import PersonalInfo from "@/components/pages/home/personal-info";
import RecentProjects from "@/components/pages/home/recent-projects";

export default function Home() {
  return (
    <main>
      <div className="h-screen dark:bg-background bg-zinc-400 bg-myPhotoImg bg-contain bg-no-repeat bg-bottom flex flex-col justify-end max-md:flex-col-reverse max-md:justify-start">
        <PersonalInfo />
        <InfiniteName />
      </div>
      <Intro />
      <div className="min-h[100vh] max-w-[70rem] px-8 mx-auto">
        <h2 className="text-4xl max-w-[46.875rem] font-title font-medium">
          Na intersecção entre criatividade e tecnologia, desenvolvo soluções
          web que transcendem o comum
        </h2>
        <RecentProjects />
      </div>
    </main>
  );
}
