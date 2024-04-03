"use client";

import Editor from "@/components/Editor";

function page() {
     return (
          <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] py-12">
               <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-8 text-white uppercase">Open Source README Editor</h1>
               <Editor />
          </div>
     );
}

export default page;
