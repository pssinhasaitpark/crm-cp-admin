
import * as React from "react";
import { useTheme } from "../context/ThemeProvider";
import Sidebar from "./SideBar";
import ChatWindow from "./ChatWindow";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChatParticipants,
  fetchSingleChat,
  createChat,
  receiveMessage,
} from "../../redux/slices/chatSlice";
import { socket } from "../../utils/Socket";

export default function AgentChatPanel() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const dispatch = useDispatch();

  const { participants, singleChat } = useSelector((state) => state.chat);
  console.log("singleChat:", singleChat);

  const [search, setSearch] = React.useState("");
  const [selectedId, setSelectedId] = React.useState(null);

  // ✅ Fetch participants
  React.useEffect(() => {
    dispatch(fetchChatParticipants());
  }, [dispatch]);

  // ✅ WebSocket listeners
  // ✅ WebSocket listeners
React.useEffect(() => {
  if (!socket) return;

  socket.on("connect", () => {
    console.log("✅ Connected to socket server");
  });

 socket.on("receive-message", (data) => {
  console.log("📩 New Message:", data);
  const newMessage = {
    senderId: "68bfcb13841dd6b1b4a3c8ad", // current logged-in admin ka id
    senderRole: "admin",
    message:  data.message,
    timestamp: new Date().toISOString(),
  };
 dispatch(receiveMessage({
    chatId: selectedId,
    message: newMessage,
  }));
    dispatch(fetchSingleChat(selectedId));
});
  return () => {
    socket.off("connect");
    socket.off("receive-message"); // ✅ correct event remove
  };
}, [dispatch,selectedId]);


  // ✅ Join room when selecting customer
  React.useEffect(() => {
    if (selectedId) {
      dispatch(fetchSingleChat(selectedId));
      // socket.emit("join-agent", selectedId);
      socket.emit("join-admin", { adminId: "68bfcb13841dd6b1b4a3c8ad" });
    }
  }, [selectedId, dispatch]);


const handleSend = (text) => {
  if (!selectedId || !singleChat?.id) return;

  const newMessage = {
    senderId: "68bfcb13841dd6b1b4a3c8ad", // current logged-in admin ka id
    senderRole: "admin",
    message: text,
    timestamp: new Date().toISOString(),
  };

  // 1. 🔹 Local state update (Redux slice)
  dispatch(
    receiveMessage({
      chatId: selectedId,
      message: newMessage,
    })
  );

  // 2. Save in DB via API
  dispatch(createChat({ agentId: selectedId, message: { message: text } }));

  // 3. Emit real-time message
  socket.emit("send-message", {
    ...newMessage,
    receiverId: selectedId,
  });
};


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
        messages={singleChat?.messages || []}
        onSend={handleSend}
        themeColor={isDark}
      />
    </div>
  );
}
