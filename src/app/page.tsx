import InfiniteName from "@/components/pages/home/infinite-name";
import PersonalInfo from "@/components/pages/home/personal-info";

export default function Home() {
  return (
    <main>
      <div className="h-screen dark:bg-grayBackground-dark bg-grayBackground-light bg-myPhotoImg bg-contain bg-no-repeat bg-center flex justify-end items-end ">
        <PersonalInfo />
        <InfiniteName />
      </div>
    </main>
  );
}
