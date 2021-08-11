import { useCallback, useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { ColorInput } from "../ColorInput/ColorInput";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

export const App = () => {
  const [colors, setColors] = useState(() => {
    const storageData = localStorage.getItem('colors')
    const parsed = JSON.parse(storageData) || []

    return parsed
  });

  const addColor = useCallback((hexcolor) => {
    setColors((prevColors) => [...prevColors, hexcolor]);
  }, []);

  const deleteColor = useCallback((index) => {
    setColors((prevColors) => prevColors.filter((_c, i) => i !== index))
  }, []);


  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors))
  }, [colors])

  return (
    <div className="AppContainer">
      <h1>Input your color</h1>
      <ColorInput addColor={addColor} />
      <div className="ColorList">
        {colors.map((color, i) => (
          <Card key={color + i} color={color} index={i} deleteColor={deleteColor} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};
