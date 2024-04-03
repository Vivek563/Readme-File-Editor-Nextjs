import React from "react";
import ReactMarkdown from "react-markdown";

function Editor() {
     const [markdown, setMarkdown] = React.useState("# Add Your Markdown Here");
     return (
          <div>
               <div className="flex w-full p-5 mt-4 gap-5 flex-wrap rounded-lg ">
                    <div className=" w-[40rem] h-[36rem] rounded-2xl">
                         <textarea
                              id="markdownInput"
                              style={{
                                   boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 10px 0px inset",
                              }}
                              className="w-full h-full rounded-2xl p-5 bg-[#151414]  resize-none focus:outline-none"
                              value={markdown}
                              onChange={(e) => setMarkdown(e.target.value)}
                         />
                    </div>
                    <div
                         style={{
                              boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 10px 0px inset",
                         }}
                         className="markdown-body overflow-scroll bg-[#b5b2b2] w-[40rem] h-[36rem] text-black rounded-2xl p-5"
                    >
                         <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
               </div>
          </div>
     );
}

export default Editor;
