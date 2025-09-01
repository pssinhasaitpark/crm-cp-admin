// import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // import VisuallyHidden
// import { useTheme } from "../context/ThemeProvider";
// import dayjs from "dayjs";

// const defaultIgnoreFields = ["_id", "__v", "deletedAt", "deleted", "updatedAt"];

// const ViewModal = ({
//   isOpen,
//   onClose,
//   title = "Details",
//   data,
//   ignoreFields = defaultIgnoreFields,
//   fieldLabels = {},
//   fieldFormatters = {},
// }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";

//   if (!data) return null;

//   const keys = Object.keys(data).filter((key) => !ignoreFields.includes(key));

//   return (
//     <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
//         <Dialog.Content
//           className={`fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-xl
//             ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
//           style={{ maxHeight: "80vh", overflowY: "auto" }}
//           aria-describedby="dialog-description"
//         >
//           {/* Dialog.Title is required for accessibility */}
//           <Dialog.Title className="text-lg font-semibold mb-4">{title}</Dialog.Title>

//           <div className="flex justify-end mb-4">
//             <Dialog.Close asChild>
//               <button
//                 className={`text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white`}
//                 aria-label="Close"
//               >
//                 <Cross2Icon />
//               </button>
//             </Dialog.Close>
//           </div>

//           {/* Optional Dialog.Description for screen readers */}
//           <Dialog.Description id="dialog-description" className="sr-only">
//             Details about {title}
//           </Dialog.Description>

//           <div className="space-y-3 text-sm">
//             {keys.map((key) => {
//               let value = data[key];

//               if (fieldFormatters[key]) {
//                 value = fieldFormatters[key](value, data);
//               }

//               if (
//                 typeof value === "string" &&
//                 (value.startsWith("http://") || value.startsWith("https://"))
//               ) {
//                 const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/.test(value);
//                 if (isImage) {
//                   value = (
//                     <img
//                       src={value}
//                       alt={fieldLabels[key] || key}
//                       className="max-h-32 rounded-md"
//                     />
//                   );
//                 } else {
//                   value = (
//                     <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                       {value}
//                     </a>
//                   );
//                 }
//               }

//               return (
//                 <p key={key}>
//                   <strong>{fieldLabels[key] || key.replace(/_/g, " ").toUpperCase()}:</strong>{" "}
//                   {value || "-"}
//                 </p>
//               );
//             })}
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default ViewModal;

// --------------mistral

// import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import { useTheme } from "../context/ThemeProvider";
// import dayjs from "dayjs";

// const defaultIgnoreFields = ["_id", "__v", "deletedAt", "deleted", "updatedAt"];

// const ViewModal = ({
//   isOpen,
//   onClose,
//   title = "Details",
//   data,
//   ignoreFields = defaultIgnoreFields,
//   fieldLabels = {},
//   fieldFormatters = {},
// }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
// console.log("daaaata",data )
//   if (!data) return null;

//   const keys = Object.keys(data).filter((key) => !ignoreFields.includes(key));

//   return (
//     <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
//         <Dialog.Content
//           className={`fixed z-50 top-1/2 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-xl
//             ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
//           style={{ maxHeight: "80vh", overflowY: "auto" }}
//           aria-describedby="dialog-description"
//         >
//           <Dialog.Title className="text-lg font-semibold mb-4">{title}</Dialog.Title>
//           <div className="flex justify-end mb-4">
//             <Dialog.Close asChild>
//               <button
//                 className={`text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white`}
//                 aria-label="Close"
//               >
//                 <Cross2Icon />
//               </button>
//             </Dialog.Close>
//           </div>
//           <Dialog.Description id="dialog-description" className="sr-only">
//             Details about {title}
//           </Dialog.Description>

//           {/* Use CSS Grid for two columns */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
//             {keys.map((key) => {
//               let value = data[key];
//               if (fieldFormatters[key]) {
//                 value = fieldFormatters[key](value, data);
//               }
//               if (
//                 typeof value === "string" &&
//                 (value.startsWith("http://") || value.startsWith("https://"))
//               ) {
//                 const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/.test(value);
//                 if (isImage) {
//                   value = (
//                     <img
//                       src={value}
//                       alt={fieldLabels[key] || key}
//                       className="max-h-32 rounded-md"
//                       loading="lazy"
//                     />
//                   );
//                 } else {
//                   value = (
//                     <a
//                       href={value}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 underline"
//                     >
//                       {value}
//                     </a>
//                   );
//                 }
//               }
//               return (
//                 <div key={key} className="flex flex-col">
//                   <strong className="capitalize">
//                     {fieldLabels[key] || key.replace(/_/g, " ")}
//                   </strong>
//                   <span>{value || "-"}</span>
//                 </div>
//               );
//             })}
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default ViewModal;

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTheme } from "../context/ThemeProvider";
import dayjs from "dayjs";

const DEFAULT_IGNORE_FIELDS = [
  "_id",
  "__v",
  "deletedAt",
  "deleted",
  "updatedAt",
  "created_by_id"
];

// const ViewModal = ({
//   isOpen,
//   onClose,
//   title = "Details",
//   data,
//   ignoreFields = DEFAULT_IGNORE_FIELDS,
//   fieldLabels = {},
//   fieldFormatters = {},
// }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
// console.log("data", data)
//   if (!data) return null;

//   const keys = Object.keys(data).filter((key) => !ignoreFields.includes(key));

//   const renderValue = (key, value) => {
//     if (fieldFormatters[key]) {
//       value = fieldFormatters[key](value, data);
//     }
//     if (typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://"))) {
//       const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/.test(value);
//       if (isImage) {
//         return <img src={value} alt={fieldLabels[key] || key} className="max-h-32 rounded-md h-[100px] w-[100px] " />;
//       }
//       return (
//         <a href={value} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//           {value}
//         </a>
//       );
//     }
//     return value !== undefined && value !== null ? value : "-";

//   };

//   return (
//     <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
//       <Dialog.Portal>
//         <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
//         <Dialog.Content
//           className={`fixed z-50 top-1/2 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-xl
//             ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
//           style={{ maxHeight: "80vh", overflowY: "auto" }}
//           aria-describedby="dialog-description"
//         >
//           <div className="flex justify-between mb-4 text-white">
//           <Dialog.Title className="text-lg font-semibold mb-1">{title}</Dialog.Title>
//           {/* <Dialog.Description id="dialog-description" className="">
//             Details about {title}
//           </Dialog.Description> */}
//             <Dialog.Close asChild>
//               <button
//                 className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer"
//                 aria-label="Close"
//               >
//                 <Cross2Icon width={20} height={20} />
//               </button>
//             </Dialog.Close>

//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 text-sm">
//             {keys.map((key) => (
//               <div key={key} className="flex flex-col">
//                 <strong className="capitalize">{fieldLabels[key] || key.replace(/_/g, " ")}:</strong>
//                 <span>{renderValue(key, data[key])}</span>
//               </div>
//             ))}
//           </div>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default ViewModal;

const ViewModal = ({
  isOpen,
  onClose,
  title = "Details",
  data,
  ignoreFields = DEFAULT_IGNORE_FIELDS,
  fieldLabels = {},
  fieldFormatters = {},
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  console.log("datttata", data)
  if (!data) return null;

  // Get all keys, filter out ignored fields
  let keys = Object.keys(data).filter((key) => !ignoreFields.includes(key));

  // Sort keys: images/PDFs/files last
  keys.sort((a, b) => {
    const isImageOrFileA =
      typeof data[a] === "string" &&
      (data[a].startsWith("http://") || data[a].startsWith("https://"));
    const isImageOrFileB =
      typeof data[b] === "string" &&
      (data[b].startsWith("http://") || data[b].startsWith("https://"));

    // If both are images/files, maintain original order
    if (isImageOrFileA && isImageOrFileB) return 0;
    // If only A is image/file, move it to the end
    if (isImageOrFileA) return 1;
    // If only B is image/file, move it to the end
    if (isImageOrFileB) return -1;
    // Otherwise, maintain original order
    return 0;
  });

  const renderValue = (key, value) => {
    if (fieldFormatters[key]) {
      value = fieldFormatters[key](value, data);
    }
    if (
      typeof value === "string" &&
      (value.startsWith("http://") || value.startsWith("https://"))
    ) {
      const isImage = /\.(jpg|jpeg|png|webp|gif|svg|pdf)$/i.test(value);
      if (isImage) {
        return (
          <img
            src={value}
            alt={fieldLabels[key] || key}
            className="max-h-32 rounded-md h-[100px] w-[100px]"
          />
        );
      }
      return (
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          {value}
        </a>
      );
    }
    return value !== undefined && value !== null ? value : "N/A";
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
        <Dialog.Content
          className={`fixed z-50 top-1/2 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-xl
            ${isDark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}
          style={{ maxHeight: "80vh", overflowY: "auto" }}
          aria-describedby="dialog-description"
        >
          <div className="flex justify-between mb-4 text-white">
            <Dialog.Title className="text-lg font-semibold mb-1">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white cursor-pointer"
                aria-label="Close"
              >
                <Cross2Icon width={20} height={20} />
              </button>
            </Dialog.Close>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            {keys.map((key) => (
              <div key={key} className="flex flex-col">
                <strong className="capitalize">
                  {fieldLabels[key] || key.replace(/_/g, " ")}:
                </strong>
                <span>{renderValue(key, data[key])}</span>
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ViewModal;
