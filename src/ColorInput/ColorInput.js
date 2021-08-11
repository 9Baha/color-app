import { useState } from "react";
import "./ColorInput.css"
import validateColor from "validate-color"
import { toast } from "react-toastify";

export const ColorInput = (props) => {
  const [value, setValue] = useState("");
  
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const showError = (message) => {
    toast(message, { autoClose: 3000, hideProgressBar: true, type: 'error' })
  }

  const handleClickButton = () => {
    const color = value.trim()

    if (color.length === 0) {
      showError('Input your color')
      return
    }

    if (!validateColor(color)) {
      showError(`"${color}" is not a valid color`)
      return
    }

    props.addColor(color)
    setValue("")
  }

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleClickButton()
    }
  }

  return (
    <div className='ColorInputContainer'>
      <input className='Input' type="text" value={value} onChange={handleChange} onKeyPress={handleKeyPress} />
      <button className='AddButton' onClick={handleClickButton}>Add</button> 
    </div>
  );
};
