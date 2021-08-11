import "./Card.css";
import fontColorContrast from "font-color-contrast";
import parseColor from "parse-color";
import { X as CloseIcon } from "react-feather";
import { toast } from "react-toastify";

export const Card = (props) => {
  const color = parseColor(props.color).hex;
  const textColor = fontColorContrast(color);

  const handleClickDeleteButton = () => {
    props.deleteColor(props.index);
  };

  const handleClickColor = () => {
    navigator.clipboard.writeText(color)
    toast('Copied to clipboard!', { autoClose: 2000, hideProgressBar: true, type: 'info' })
  }

  return (
    <div className="Card" style={{ backgroundColor: color, color: textColor }}>
      <div className="Card--Color" onClick={handleClickColor}>{color}</div>
      <button
        className="Card--DeleteButton"
        style={{ color: textColor }}
        onClick={handleClickDeleteButton}
      >
        <CloseIcon />
      </button>
    </div>
  );
};
