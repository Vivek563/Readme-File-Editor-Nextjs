"use client";

import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
     return (
          <div className={cn("fixed top-10 inset-x-0 max-w-4xl mx-auto z-50", className)}>
               <div className="flex justify-between items-center w-full bg-transparent">
                    <div className="text-[1.5rem] uppercase font-extrabold">
                         <h1>Readme Editor</h1>
                    </div>
                    <div>
                         <Link href="https://github.com/Vivek563/Readme-File-Maker-Nextjs">
                              <button className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                   Github
                              </button>
                         </Link>
                    </div>
               </div>
          </div>
     );
}

export default Navbar;
