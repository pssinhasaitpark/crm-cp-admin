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
  "created_by_id",
   "assigned_to"
];



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
  // console.log("datttata", data)
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

  // const renderValue = (key, value) => {
  //   if (fieldFormatters[key]) {
  //     value = fieldFormatters[key](value, data);
  //   }
  //   if (
  //     typeof value === "string" &&
  //     (value.startsWith("http://") || value.startsWith("https://"))
  //   ) {
  //     const isImage = /\.(jpg|jpeg|png|webp|gif|svg|pdf)$/i.test(value);
  //     if (isImage) {
  //       return (
  //         <img
  //           src={value}
  //           alt={fieldLabels[key] || key}
  //           className="max-h-32 rounded-md h-[100px] w-[100px]"
  //         />
  //       );
  //     }
  //     return (
  //       <a
  //         href={value}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="text-blue-500 underline"
  //       >
  //         {value}
  //       </a>
  //     );
  //   }
  //   return value !== undefined && value !== null ? value : "N/A";
  // };

// const renderValue = (key, value) => {
//   if (fieldFormatters[key]) {
//     value = fieldFormatters[key](value, data);
//   }

//   // 🔹 Handle arrays (like status_updated_by)
//   if (Array.isArray(value)) {
//     return (
//       <ul className="list-disc ml-5 space-y-1">
//         {value.map((item, idx) => {
//           // agar object hai aur usme role + name + updated_at hai
//           if (item && typeof item === "object") {
//             console.log("ata", item);
//             const role = item.role || item.assigned_to_name || "Unknown";
//             const name = item.name || "N/A";
//             const date = item.updated_at
//               ? new Date(item.updated_at).toLocaleString() // 👈 default format
//               : "";

//             return (
//               <li key={idx}>
//                 {`${role} (${name})${date ? " - " + date : ""}`}
//               </li>
//             );
//           }

//           // agar simple string/number ho to direct show karo
//           return <li key={idx}>{String(item)}</li>;
//         })}
//       </ul>
//     );
//   }

//   // 🔹 Handle single objects (like assigned_to)
//   if (typeof value === "object" && value !== null) {
//     if (value.name) return value.name;
//     if (value.title) return value.title;
//     return JSON.stringify(value, null, 2);
//   }

//   // 🔹 Handle URLs (images, pdf, links)
//   if (
//     typeof value === "string" &&
//     (value.startsWith("http://") || value.startsWith("https://"))
//   ) {
//     const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(value);
//     if (isImage) {
//       return (
//         <img
//           src={value}
//           alt={fieldLabels[key] || key}
//           className="max-h-32 rounded-md h-[100px] w-[100px]"
//         />
//       );
//     }
//     return (
//       <a
//         href={value}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-500 underline"
//       >
//         {value}
//       </a>
//     );
//   }

//   // 🔹 Default
//   return value !== undefined && value !== null ? String(value) : "N/A";
// };

const renderValue = (key, value) => {
  if (fieldFormatters[key]) {
    value = fieldFormatters[key](value, data);
  }

  // 🔹 Handle arrays (like status_updated_by)
  if (Array.isArray(value)) {
    return (
      <ul className="list-disc ml-5 space-y-1">
        {value.map((item, idx) => {
          if (item && typeof item === "object") {
            // ✅ Assigned fields (role/name/status/date)
            const role = item.role || item.assigned_to_name || "Unknown";
            const name = item.name || "N/A";
            const status = item.status ? ` | Status: ${item.status}` : "";
            const date = item.updated_at
              ? dayjs(item.updated_at).format("DD MMM YYYY, hh:mm A")
              : "";

            return (
              <li key={idx}>
                {`${role} (${name})${status}${date ? " - " + date : ""}`}
              </li>
            );
          }
          return <li key={idx}>{String(item)}</li>;
        })}
      </ul>
    );
  }

  // 🔹 Handle single objects (like assigned_to)
  if (typeof value === "object" && value !== null) {
    // ✅ Agar object me sirf id hai to ignore karo
    if (Object.keys(value).length === 1 && value._id) return "N/A";

    // ✅ ID remove karke name/title preference do
    const { _id, ...rest } = value;
    if (rest.name) return rest.name;
    if (rest.title) return rest.title;

    return JSON.stringify(rest, null, 2);
  }

  // 🔹 Handle URLs (images, pdf, links)
  if (
    typeof value === "string" &&
    (value.startsWith("http://") || value.startsWith("https://"))
  ) {
    const isImage = /\.(jpg|jpeg|png|webp|gif|svg)$/i.test(value);
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

  // 🔹 Default
  return value !== undefined && value !== null ? String(value) : "N/A";
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
