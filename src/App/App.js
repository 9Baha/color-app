import { useCallback, useState } from "react";
import { Card } from "../Card/Card";
import { ColorInput } from "../ColorInput/ColorInput";
import "./App.css";

export const App = () => {
  const [colors, setColors] = useState([]);

  const addColor = useCallback((hexcolor) => {
    setColors((prevColors) => [...prevColors, hexcolor])
  }, [])

  return (
    <div className='AppContainer'>
      <h1>Input your color</h1>
      <ColorInput addColor={addColor}/>
      <div className='ColorList'>
        {colors.map((color, i) => <Card key={color + i} color={color} />)}
      </div>     
    </div>  
  );
};
