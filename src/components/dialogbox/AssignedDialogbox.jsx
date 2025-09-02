import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeProvider"; // custom hook
import { IoChevronDown, IoCheckmark, IoClose } from "react-icons/io5";

export default function AssignLeadDialog({
  open,
  onOpenChange,
  lead,
  agents,
  onAssign,
  onClose,
  onSubmit
}) {
  const [selectedAgent, setSelectedAgent] = useState("");
  const { theme } = useTheme(); // "light" | "dark"
   // ✅ Preset assigned agent
  useEffect(() => {
    if (lead?.assigned_to) {
      setSelectedAgent(lead.assigned_to);
    } else {
      setSelectedAgent("");
    }
  }, [lead, open]);

  const handleAssign = () => {
    console.log(selectedAgent)
    if (selectedAgent) {
      onSubmit(selectedAgent);
      onClose();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className={`fixed inset-0 ${
            theme === "dark" ? "bg-black/70" : "bg-black/50"
          }`}
        />

        {/* Content */}
        <Dialog.Content
          className={`fixed top-1/2 left-1/2 w-[400px] -translate-x-1/2 -translate-y-1/2 
            rounded-xl p-6 shadow-xl border transition-colors duration-300
            ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
        >
          {/* Title */}
          <Dialog.Title
            className={`text-lg font-semibold ${
              theme === "dark" ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Assign Lead
          </Dialog.Title>

          {/* Description */}
          <Dialog.Description
            className={`text-sm mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Assign this lead to one of your available agents
          </Dialog.Description>

          {/* Agent Select */}
          <Select.Root value={selectedAgent} onValueChange={setSelectedAgent}>
            <Select.Trigger
              className={`w-full inline-flex items-center justify-between rounded-md border 
                px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500
                ${theme === "dark" ? "border-gray-600 bg-gray-800 text-gray-100" : "border-gray-300 bg-white text-gray-900"}`}
            >
              <Select.Value placeholder="Select an agent" />
              <Select.Icon>
                <IoChevronDown
                  className={`h-4 w-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content
                className={`overflow-hidden rounded-md border shadow-lg
                  ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
              >
                <Select.Viewport>
                  {agents.map((agent) => (
                    // console.log(agent),
                    <Select.Item
                      key={agent._id}
                      value={agent._id}
                      className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer 
                        ${theme === "dark" ? "text-gray-100 hover:bg-gray-700" : "text-gray-900 hover:bg-gray-100"}`}
                    >
                      <Select.ItemText>{agent.name}</Select.ItemText>
                      <Select.ItemIndicator>
                        <IoCheckmark className="h-4 w-4 text-blue-500" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  ))}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
          {/* Footer Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <Dialog.Close asChild>
              <button
               onClick={() => {
                onClose();
              }}
                className={`rounded-md border px-4 py-2 text-sm cursor-pointer
                  ${theme === "dark" ? "border-gray-600 text-gray-100 hover:bg-gray-700" : "border-gray-300 text-gray-900 hover:bg-gray-100"}`}
              >
                Cancel
              </button>
            </Dialog.Close>
            <button
              onClick={handleAssign}
              disabled={!selectedAgent}
              className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white cursor-pointer
                hover:bg-blue-700 
                disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Assign
            </button>
          </div>

          {/* Top-right Close Button */}
          <Dialog.Close asChild>
            <button
              onClick={() => {
                onClose();
              }}
              className={`absolute top-3 right-3 rounded-full p-1 cursor-pointer
                ${theme === "dark" ? "text-gray-400 hover:text-gray-200" : "text-gray-500 hover:text-gray-700"}`}
            >
              <IoClose className="h-5 w-5" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
