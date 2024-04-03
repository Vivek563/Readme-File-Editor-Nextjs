import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
     return (
          <div className="h-auto md:min-h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
               <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
               <div className="p-4 relative z-10 w-full text-center">
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                         {" "}
                         The hassle-free <br /> <span className="text-[#65C3C8] underline">README</span>
                    </h1>
                    <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                         Effortlessly customize your project&apos;s README with our intuitive editor. Add and tailor sections quickly to fit your project&apos;s needs.
                    </p>
                    <div className="mt-4">
                         <Link href={"/editor"}>
                              <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
                                   Getting Started
                              </Button>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default HeroSection;
