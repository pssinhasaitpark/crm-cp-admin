import * as React from "react";
import { IoSend, IoAttach } from "react-icons/io5";

export default function MessageInput({ onSend,themeColor }) {
  const [text, setText] = React.useState("");

  const handleSend = () => {
    if (text.trim() !== "") {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className={`p-4 border-t flex items-center gap-2 ${themeColor ? 'border-gray-700' : 'border-gray-200'}`}>
      <input
        type="text"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className={`flex-1 p-2 rounded-lg outline-none ${themeColor ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-black'}`}
      />
      <button
        onClick={handleSend}
        className={`p-2 rounded-lg ${themeColor ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
      >
        <IoSend size={20} />
      </button>
    </div>
  );
}
