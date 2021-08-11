import { useState } from "react";
import "./ColorInput.css"
import validateColor from "validate-color"

export const ColorInput = (props) => {
  const [value, setValue] = useState("");
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClickButton = () => {
    if (!validateColor(value)) {
      alert('Not a valid color!')
      return
    }
    props.addColor(value)
    setValue("")
  }

  return (
    <div className='ColorInputContainer'>
      <input className='Input' type="text" value={value} onChange={handleChange} />
      <button className='AddButton' onClick={handleClickButton}>Add</button> 
    </div>
  );
};
