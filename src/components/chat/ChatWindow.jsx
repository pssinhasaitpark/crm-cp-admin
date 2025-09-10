import * as React from "react";
import * as Avatar from "@radix-ui/react-avatar";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatWindow({ customer, messages, onSend, themeColor}) {
  if (!customer) {
    return (
      <section className="flex-1 flex items-center justify-center text-gray-400">
        Select a conversation
      </section>
    );
  }

  return (
    <section className="flex-1 flex flex-col">
      {/* Header */}
      <div className={`p-4 border-b flex items-center gap-3 ${themeColor ? 'border-gray-700' : 'border-gray-200'}`}>
        <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
          <Avatar.Image
            src={customer.profile_photo || customer.avatar}
            alt={customer.name}
            className="w-full h-full object-cover"
          />
        </Avatar.Root>
        <div>
          <p className="font-medium">{customer.name}</p>
          {/* <p className="text-xs text-green-400">Online</p> */}
        </div>
      </div>

      {/* Messages */}
      <MessageList messages={messages} />

      {/* Input */}
      <MessageInput onSend={onSend} themeColor={themeColor} />
    </section>
  );
}
