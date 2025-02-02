import { useRef } from "react";

const TextAreaExpand = () => {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto";
      element.style.height = `${element.scrollHeight}px`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      onInput={handleInput}
      rows={1}
      placeholder="What's on your mind ?"
      className="w-full text-2xl placeholder:text-zinc-400 focus:outline-none resize-none"
    ></textarea>
  );
};

export default TextAreaExpand;
