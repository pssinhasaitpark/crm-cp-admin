// import * as React from "react";
// import { useTheme } from "../context/ThemeProvider";
// import Sidebar from "./SideBar";
// import ChatWindow from "./ChatWindow";

// export default function AgentChatPanel() {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   // Customers data
//   const [customers] = React.useState(
//     Array.from({ length: 5 }).map((_, i) => ({
//       id: i + 1,
//       name: `Customer ${i + 1}`,
//       avatar: `https://i.pravatar.cc/150?img=${i + 3}`,
//       lastMessage: "Last message preview...",
//       time: `12:${i}0`,
//     }))
//   );

//   const [search, setSearch] = React.useState("");
//   const [selectedId, setSelectedId] = React.useState(customers[0].id);

//   // Chat history for each customer
//   const [chats, setChats] = React.useState({
//     1: [
//       { sender: "other", text: "Hello, I need help with my booking." },
//       { sender: "me", text: "Sure, tell me more." },
//     ],
//     2: [{ sender: "other", text: "Hi, my payment failed!" }],
//     3: [{ sender: "other", text: "Is this item available?" }],
//     4: [{ sender: "other", text: "Can you call me back?" }],
//     5: [{ sender: "other", text: "Need invoice copy." }],
//   });

//   const selectedCustomer = customers.find((c) => c.id === selectedId);
//   const messages = chats[selectedId] || [];

//   const handleSend = (text) => {
//     setChats((prev) => ({
//       ...prev,
//       [selectedId]: [...(prev[selectedId] || []), { sender: "me", text }],
//     }));
//   };

//   return (
//     <div
//       className={`flex h-[800px] overflow-hidden ${
//         isDark
//           ? "bg-[#1e1e1e] text-gray-100 border border-gray-700"
//           : "bg-white text-gray-900 border border-gray-200"
//       }`}
//     >
//       <Sidebar
//         customers={customers}
//         search={search}
//         setSearch={setSearch}
//         onSelect={setSelectedId}
//         selectedId={selectedId}
//         themeColor={isDark}
//       />
//       <ChatWindow
//         customer={selectedCustomer}
//         messages={messages}
//         onSend={handleSend}
//         themeColor={isDark}
//       />
//     </div>
//   );
// }
import * as React from "react";
import { useTheme } from "../context/ThemeProvider";
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatParticipants } from "../../redux/slices/chatSlice";

export default function AgentChatPanel() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();

  const { participants, isLoading } = useSelector((state) => state.chat);
  console.log("Participants:", participants);

  const [search, setSearch] = React.useState("");
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchChatParticipants());
  }, [dispatch]);

  const selectedCustomer = participants.find((c) => c._id === selectedId);

  return (
    <div
      className={`flex h-[800px] overflow-hidden ${
        isDark
          ? "bg-[#1e1e1e] text-gray-100 border border-gray-700"
          : "bg-white text-gray-900 border border-gray-200"
      }`}
    >
      <Sidebar
        customers={participants}
        search={search}
        setSearch={setSearch}
        onSelect={setSelectedId}
        selectedId={selectedId}
        themeColor={isDark}
      />

      <ChatWindow
        customer={selectedCustomer}
        messages={selectedCustomer?.messages || []} // abhi dummy empty
        onSend={() => {}} // yaha createChat hook karenge
        themeColor={isDark}
      />
    </div>
  );
}
