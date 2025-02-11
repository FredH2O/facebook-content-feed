import { useRef, useState } from "react";
import "./TextAreaScroll.css";

const TextAreaExpand = ({ onChange, value }) => {
  const textareaRef = useRef(null);
  const [rows, setRows] = useState(1);
  const handleInput = () => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto";

      const newRows = Math.floor(element.scrollHeight / 24);
      const maxRows = 10;

      if (newRows <= maxRows) {
        setRows(newRows);
      } else {
        setRows(maxRows);
      }
    }
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      ref={textareaRef}
      onInput={handleInput}
      rows={rows}
      placeholder="What's on your mind ?"
      className="w-full text-2xl placeholder:text-zinc-400 focus:outline-none resize-none"
    ></textarea>
  );
};

export default TextAreaExpand;
