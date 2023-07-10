import { About } from "@/components/about";
import { SocialMedia } from "@/components/social-media";

export default function Home() {
  return (
    <main className="flex pb-16 overflow-x-clip min-h-screen justify-center items-center flex-col px-24 py-10 max-lg:p-5 bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      <header className="relative">
        <div className="flex flex-col text-white text-center">
          <h1 className="text-6xl font-bold max-lg:text-4xl">
            Cristian Ricardo Holz
          </h1>
          <span className="text-3xl text-white/70 mt-3 max-lg:text-xl">
            Front End Developer
          </span>
        </div>
        <SocialMedia />
      </header>
      <About />
    </main>
  );
}
