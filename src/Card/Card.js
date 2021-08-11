import "./Card.css"
import fontColorContrast from "font-color-contrast";
import parseColor from "parse-color";

export const Card = (props) => {
    const color = parseColor(props.color).hex
    const textColor = fontColorContrast(color)
    
    return (
        <div className='Card' style={{backgroundColor: color, color: textColor}}>{color}</div>
    );
};

