import * as React from "react";

export default function MessageList({ messages }) {
  const bottomRef = React.useRef(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`p-3 rounded-2xl max-w-xs ${
              msg.sender === "me"
                ? "bg-blue-500 text-white dark:bg-blue-600"
                : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
