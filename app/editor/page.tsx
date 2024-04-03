"use client";
import Editor from "@/Components/organism/Editor/Editor";

function page() {
     return (
          <div className=" bg-base-200">
               <div className="flex justify-center items-center font-sans font-bold py-5 text-2xl uppercase">
                    <h1>Open Source README Editor</h1>
               </div>
               <Editor />
          </div>
     );
}

export default page;
