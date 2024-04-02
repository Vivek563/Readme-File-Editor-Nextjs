"use client";

import Navbar from "@/Components/molecules/navbar/navbar";
import Main from "@/Components/organism/Main/Main";

export default function Home() {
     return (
          <>
               <div className="min-h-screen bg-base-200">
                    <Navbar />
                    <Main />
               </div>
          </>
     );
}
