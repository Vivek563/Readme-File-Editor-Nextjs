import { useState } from "react";
import ReactMarkdown from "react-markdown";

function Editor() {
     const [markdown, setMarkdown] = useState("");
     const insertText = (text: string) => {
          const inputElement = document.getElementById("markdownInput") as HTMLTextAreaElement;
          const { selectionStart, selectionEnd } = inputElement;
          const newText = markdown.substring(0, selectionStart) + "\n" + text + markdown.substring(selectionEnd);
          setMarkdown(newText);
     };

     return (
          <>
               <div className="flex justify-center items-center gap-5">
                    <button onClick={() => insertText("# This is heading h1")}>H1</button>
                    <button onClick={() => insertText("## This is heading h2")}>H2</button>
                    <button onClick={() => insertText("### This is heading h3")}>H3</button>
                    <button onClick={() => insertText("#### This is heading h4")}>H4</button>
                    <button onClick={() => insertText("##### This is heading h5")}>H5</button>
                    <button onClick={() => insertText("###### This is heading h6")}>H6</button>
                    <button onClick={() => insertText("**This is bold**")}>Bold</button>
                    <button onClick={() => insertText("_This is Italic_")}>Italic</button>
                    <button onClick={() => insertText("![Alt Text](image_url)")}>Image</button>
                    <button onClick={() => insertText("> ")}>Blockquote</button>
               </div>
               <div className="flex w-full p-5 gap-5 rounded-lg min-h-[40rem] max-h-full bg-base-200">
                    <div className="py-5">
                         {markdown.split("\n").map((_, index) => (
                              <div key={index + 1}>{index + 1}</div>
                         ))}
                    </div>
                    <textarea
                         id="markdownInput"
                         style={{
                              boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 10px 0px inset",
                         }}
                         className="w-1/2  rounded-lg p-5 resize-none focus:outline-none"
                         value={markdown}
                         onChange={(e) => setMarkdown(e.target.value)}
                    ></textarea>

                    <div
                         style={{
                              boxShadow: "rgba(0, 0, 0, 0.5) 0px 5px 10px 0px inset",
                         }}
                         className="markdown-body w-1/2  rounded-lg p-5"
                    >
                         <ReactMarkdown>{markdown}</ReactMarkdown>
                    </div>
               </div>
          </>
     );
}

export default Editor;
