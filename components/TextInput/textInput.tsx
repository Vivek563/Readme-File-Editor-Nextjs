import React from "react";

interface TextInputProps {
     label: string;
     value: string;
     onChange: (value: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ label, value, onChange }) => {
     return (
          <div>
               <label>{label}</label>
               <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
          </div>
     );
};

export default TextInput;
