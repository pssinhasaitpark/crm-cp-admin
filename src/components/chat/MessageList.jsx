// import * as React from "react";

// export default function MessageList({ messages }) {
//   const bottomRef = React.useRef(null);

//   React.useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);
// console.log("chat masd",messages)
//   return (
//     <div className="flex-1 p-4 space-y-4 overflow-y-auto">
//       {messages.map((msg, i) => (
//         <div
//           key={i}
//           className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
//         >
//           <div
//             className={`p-3 rounded-2xl max-w-xs ${
//               msg.sender === "me"
//                 ? "bg-blue-500 text-white dark:bg-blue-600"
//                 : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
//             }`}
//           >
//             {msg.message}
//           </div>
//         </div>
//       ))}
//       <div ref={bottomRef} />
//     </div>
//   );
// }
import * as React from "react";
import dayjs from "dayjs";

export default function MessageList({ messages }) {
  const bottomRef = React.useRef(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 p-4 space-y-4 overflow-y-auto">
      {messages.map((msg, i) => {
        const isAgent = msg.senderRole === "agent"; // backend field
        return (
          <div
            key={msg._id || i}
            className={`flex ${isAgent ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`p-3 rounded-2xl max-w-xs shadow ${
                isAgent
                  ? "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-gray-200"
                  : "bg-blue-500 text-white dark:bg-blue-600"
              }`}
            >
              <p>{msg.message}</p>
              <span className="block text-[10px] mt-1 text-right opacity-70">
                {dayjs(msg.timestamp).format("HH:mm")}
              </span>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
}
