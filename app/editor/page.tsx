"use client";
import Editor from "@/Components/organism/Editor/Editor";

function page() {
     return (
          <div>
               <div className="flex justify-center items-center font-sans font-bold py-5 text-3xl uppercase">
                    <h1>Open Source README Editor</h1>
               </div>
               {/* <Navbar /> */}
               <Editor />
          </div>
     );
}

export default page;
