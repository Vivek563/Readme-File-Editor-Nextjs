import READMEPreview from "@/components/READMEPreview/READMEPreview";
import TextInput from "@/components/TextInput/textInput";
import { useState } from "react";

function Page() {
     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");

     const generateREADME = () => {
          return `# ${title}

${description}`;
     };
     return (
          <div>
               {" "}
               <h1>VIevk</h1>
               <TextInput label="Title" value={title} onChange={setTitle} />
               <TextInput label="Description" value={description} onChange={setDescription} />
               <READMEPreview content={generateREADME()} />
          </div>
     );
}

export default Page;
