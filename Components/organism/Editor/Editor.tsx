import { useState } from "react";
import ReactMarkdown from "react-markdown";

function Editor() {
     const [markdown, setMarkdown] = useState("");
     const [showToast, setShowToast] = useState(false);

     const insertText = (text: string) => {
          const inputElement = document.getElementById("markdownInput") as HTMLTextAreaElement;
          inputElement.focus(); // Ensure textarea is focused

          const { selectionStart, selectionEnd } = inputElement;

          // Calculate the new text based on cursor position
          const newText = markdown.substring(0, selectionStart) + "\n" + text + markdown.substring(selectionEnd);

          // Update the markdown state
          setMarkdown(newText);

          // Set the cursor position to after the inserted text
          const newCursorPosition = selectionStart + text.length;
          inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
     };

     const handleDownload = () => {
          if (markdown.trim() === "") {
               setShowToast(true);
               const timeoutId = setTimeout(() => {
                    setShowToast(false);
               }, 2000);
               return () => clearTimeout(timeoutId);
          }

          const element = document.createElement("a");
          const file = new Blob([markdown], { type: "text/plain" });
          element.href = URL.createObjectURL(file);
          element.download = "README.md";
          document.body.appendChild(element);
          element.click();
     };

     return (
          <>
               {showToast && (
                    <div className="toast">
                         <div className="alert alert-info">
                              <span>Please add some content before downloading.</span>
                         </div>
                    </div>
               )}
               <div className="flex justify-center items-center gap-5  p-3">
                    <button onClick={() => insertText("# This is heading h1")}>H1</button>
                    <button onClick={() => insertText("## This is heading h2")}>H2</button>
                    <button onClick={() => insertText("### This is heading h3")}>H3</button>
                    <button onClick={() => insertText("#### This is heading h4")}>H4</button>
                    <button onClick={() => insertText("##### This is heading h5")}>H5</button>
                    <button onClick={() => insertText("###### This is heading h6")}>H6</button>
                    <button className="font-bold" onClick={() => insertText("**This is bold**")}>
                         Bold
                    </button>
                    <button className="italic" onClick={() => insertText("_This is Italic_")}>
                         Italic
                    </button>
                    <button onClick={() => insertText("![Alt Text](image_url)")}>Image</button>
                    <button onClick={() => insertText("```code```")}>Code</button>
                    <button onClick={() => insertText("> blockquote")}>Blockquote</button>
                    <button onClick={() => insertText(" --- ")}>Horizontal Rule</button>
                    <button onClick={() => insertText("### My Great Heading {#custom-id}")}>Heading ID</button>
                    <button onClick={() => insertText("~~The world is flat.~~")}>Strikethrough</button>
                    <button className="btn bg-[#65c3c8]" onClick={handleDownload}>
                         Download
                    </button>
               </div>

               <div className="flex w-full p-5 mt-4 gap-5 rounded-lg min-h-[40rem] max-h-full ">
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
