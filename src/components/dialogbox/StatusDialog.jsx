import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTheme } from "../../components/context/ThemeProvider";
import clsx from "clsx";
const StatusModal = ({ isOpen, onClose, onSubmit, currentStatus, alldetails }) => {
  const [newStatus, setNewStatus] = useState(currentStatus);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setNewStatus(currentStatus);
  }, [currentStatus]);

  const handleSave = () => {
    onSubmit(newStatus);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        {/* ✅ Overlay only dims content area */}
        <Dialog.Overlay
          className={clsx(
            "fixed inset-0",
            isDark ? "bg-black/60" : "bg-black/30",
            "z-40 transition-opacity"
          )}
        />
        {/* ✅ Modal Content */}
        <Dialog.Content
          className={clsx(
            "fixed z-50 top-1/2 left-1/2",
            "w-[90vw] max-w-md p-6 rounded-lg shadow-lg",
            "-translate-x-1/2 -translate-y-1/2",
            isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          )}
        >
          {/* Title */}
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">
              Change Status
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className={clsx(
                  "text-xl transition-colors",
                  isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                )}
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </div>
          {/* Description */}
          <Dialog.Description
            className={clsx(
              "text-sm mb-4",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            Update the channel partner's status below.
          </Dialog.Description>
          {/* Partner Info */}
          {alldetails && (
            <div
              className={clsx(
                "mb-4 text-sm space-y-1 border rounded p-3",
                isDark
                  ? "bg-gray-900/30 text-gray-300 border-gray-700"
                  : "bg-gray-50 text-gray-700 border-gray-300"
              )}
            >
              <p><span className="font-medium">Name:</span> {alldetails.name}</p>
              <p><span className="font-medium">Email:</span> {alldetails.email}</p>
              <p><span className="font-medium">Phone:</span> {alldetails.mobile_number}</p>
              <p><span className="font-medium">Company:</span> {alldetails.firm_name}</p>
            </div>
          )}
          {/* Dropdown */}
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className={clsx(
              "w-full px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500",
              isDark
                ? "bg-gray-700 text-white border-gray-600"
                : "bg-white text-gray-900 border-gray-300"
            )}
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={onClose}
              className={clsx(
                "px-4 py-2 rounded text-sm",
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              )}
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
            >
              Save
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
export default StatusModal;
