import { useEffect } from "react";
import { React, useState } from "react";

const TextInput = ({ setTextProps, placeholder, valueProps }) => {
  const [value, setValue] = useState(valueProps);
  useEffect(()=>{
    setValue(valueProps)
  },[valueProps])
  const setTextOnchange = (text) => {
    setValue(text);
  }
  const setText = (text) => {
    setValue(text);
    if(setTextProps){
      setTextProps(text)
    }
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        onChange={(e) => setTextOnchange(e.target.value)}
        onBlur={(e) => setText(e.target.value)}
        // placeholder={value}
        value={value}
        
      ></input>
      <div className="input-group-append">
        <div className="input-group-text">
          <span className="fas fa-envelope"></span>
        </div>
      </div>
      
    </div>
  );
};
export default TextInput;
