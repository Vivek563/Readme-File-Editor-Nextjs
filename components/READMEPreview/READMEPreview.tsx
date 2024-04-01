import React from "react";

interface READMEPreviewProps {
     content: string;
}

const READMEPreview: React.FC<READMEPreviewProps> = ({ content }) => {
     return (
          <div>
               <h2>README Preview</h2>
               <pre>{content}</pre>
          </div>
     );
};

export default READMEPreview;
