// import * as Dialog from "@radix-ui/react-dialog";

// export default function ConfirmDialog({ open, setOpen, title, description, onConfirm }) {
//   return (
//     <Dialog.Root open={open} onOpenChange={setOpen}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/30" />
//         <Dialog.Content className="fixed top-1/2 left-1/2 w-100 p-4 bg-white rounded-md shadow-md -translate-x-1/2 -translate-y-1/2">
//           <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>
//           {description && (
//             <Dialog.Description className="mt-2 text-sm text-gray-500">
//               {description}
//             </Dialog.Description>
//           )}
//           <div className="mt-4 flex justify-end gap-2">
//             <button
//               className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
//               onClick={() => setOpen(false)}
//             >
//               Cancel
//             </button>
//             <button
//               className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
//               onClick={() => {
//                 onConfirm();
//                 setOpen(false);
//               }}
//             >
//               Confirm
//             </button>
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// }
import * as Dialog from "@radix-ui/react-dialog";
import { useTheme } from "../../components/context/ThemeProvider";

export default function ConfirmDialog({ open, setOpen, title, description, onConfirm }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay
          className={`fixed inset-0 transition-colors ${
            isDark ? "bg-black/60" : "bg-black/30"
          }`}
        />

        {/* Content */}
        <Dialog.Content
          className={`
            fixed top-1/2 left-1/2 w-[90%] max-w-md p-6 rounded-lg shadow-lg 
            transition-colors
            ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}
            -translate-x-1/2 -translate-y-1/2
          `}
        >
          <Dialog.Title className="text-lg font-semibold">{title}</Dialog.Title>

          {description && (
            <Dialog.Description
              className={`mt-2 text-sm ${
                isDark ? "text-gray-300" : "text-gray-500"
              }`}
            >
              {description}
            </Dialog.Description>
          )}

          <div className="mt-6 flex justify-end gap-3">
            {/* Cancel Button */}
            <button
              className={`px-4 py-2 rounded transition-colors ${
                isDark
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>

            {/* Confirm Button */}
            <button
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}
            >
              Confirm
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
