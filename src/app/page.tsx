import InfiniteName from "@/components/pages/home/infinite-name";
import Intro from "@/components/pages/home/intro";
import PersonalInfo from "@/components/pages/home/personal-info";
import Project from "@/components/shared/project";
import AnimationHover from "@/components/shared/animation-hover";
import RecentProjects from "@/components/pages/home/recent-projects";

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
      <div className="min-h[100vh] max-w-[70rem] mx-auto bg-[url('/bg-portfolio.png')] bg-cover bg-center">
        <h2 className="text-4xl max-w-[750px] font-title font-medium">
          Na intersecção entre criatividade e tecnologia, desenvolvo soluções
          web que transcendem o comum
        </h2>
        <RecentProjects />
      </div>
    </main>
  );
}
