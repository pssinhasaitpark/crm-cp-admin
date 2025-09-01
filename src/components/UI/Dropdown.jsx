// import * as Select from '@radix-ui/react-select';
// import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
// // import { cn } from '../../lib/utils'; // Optional: classNames merge utility
// import React from 'react';

// const statusColors = {
//   "new": "bg-blue-400 text-white",
//   "contacted": "bg-yellow-400 text-black",
//   "interested": "bg-green-500 text-white",
//   "not interested": "bg-gray-400 text-white",
//   "follow-Up": "bg-purple-400 text-white",
//   "site visit scheduled": "bg-indigo-400 text-white",
//   "site visit done": "bg-indigo-600 text-white",
//   "converted": "bg-green-700 text-white",
//   "lost": "bg-red-500 text-white",
//   "on hold": "bg-orange-400 text-white",
//   "duplicate": "bg-pink-400 text-white",
//   "dead lead": "bg-red-700 text-white"
// };

  
// const cn = (...classes) => classes.filter(Boolean).join(' ');
// // const StatusDropdown = ({ value, onChange, options = [] }) => {
// //   return (
// //     <Select.Root value={value} onValueChange={onChange}>
// //       <Select.Trigger
// //         className={cn(
// //           "inline-flex items-center justify-between gap-2 rounded px-2 py-1 text-xs border shadow-sm",
// //           "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
// //           "bg-white text-black dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
// //         )}
// //       >
// //         <Select.Value />
// //         <Select.Icon>
// //           <ChevronDownIcon />
// //         </Select.Icon>
// //       </Select.Trigger>

// //       <Select.Portal>
// //         <Select.Content
// //           className="z-50 mt-1 overflow-hidden rounded border bg-white shadow-lg dark:bg-gray-800 dark:border-gray-700"
// //         >
// //           <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700">
// //             <ChevronUpIcon />
// //           </Select.ScrollUpButton>

// //           <Select.Viewport className="p-1">
// //             {options.map((status) => (
// //               <Select.Item
// //                 key={status}
// //                 value={status}
// //                 className={cn(
// //                   "text-sm px-2 py-1.5 rounded-md cursor-pointer flex items-center justify-between",
// //                   "data-[highlighted]:bg-blue-500 data-[highlighted]:text-white",
// //                   "data-[state=checked]:font-semibold",
// //                   statusColors[status] || ""
// //                 )}
// //               >
// //                 <Select.ItemText>{status}</Select.ItemText>
// //                 <Select.ItemIndicator>
// //                   <CheckIcon className="ml-2 w-4 h-4" />
// //                 </Select.ItemIndicator>
// //               </Select.Item>
// //             ))}
// //           </Select.Viewport>

// //           <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-gray-100 dark:bg-gray-700">
// //             <ChevronDownIcon />
// //           </Select.ScrollDownButton>
// //         </Select.Content>
// //       </Select.Portal>
// //     </Select.Root>
// //   );
// // };
// // Radix UI dropdown for Status column
// const StatusDropdown = ({ value, onChange, options = [], isDark }) => {

//     return (
//       <Select.Root value={value} onValueChange={onChange}>
//         <Select.Trigger
//           className={cn(
//             "inline-flex items-center justify-between gap-2 rounded px-2 py-1 text-xs border shadow-sm w-[120px] capitalize",
//             "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
//             isDark
//               ? "border-gray-600"
//               : "border-gray-300",
//             // Apply background and text color based on selected value
//             statusColors[value] || (isDark ? "bg-gray-800 text-white" : "bg-white text-black")
//           )}
//         >
//           <Select.Value />
//           <Select.Icon>
//             <ChevronDownIcon />
//           </Select.Icon>
//         </Select.Trigger>
  
//         <Select.Portal>
//           <Select.Content
//             className={cn(
//               "z-50 mt-1 overflow-hidden rounded border shadow-lg w-[120px]",
//               isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
//             )}
//           >
//             <Select.ScrollUpButton className={cn(
//               "flex items-center justify-center h-6",
//               isDark ? "bg-gray-700" : "bg-gray-100"
//             )}>
//               <ChevronUpIcon />
//             </Select.ScrollUpButton>
  
//             <Select.Viewport className="p-1">
//               {options.map((status) => (
//                 <Select.Item
//                   key={status}
//                   value={status}
//                   // className={cn(
//                   //   "text-sm px-2 py-1 rounded-md cursor-pointer flex items-center justify-between my-1 capitalize",
//                   //   "data-[highlighted]:bg-blue-500 data-[highlighted]:text-white",
//                   //   "data-[state=checked]:font-semibold",
//                   //   // Use darker bg with white text on selected items inside dropdown
//                   //   statusColors[status] || ""
//                   // )}
//                   className={cn(
//                     "text-sm px-2 py-1 rounded-md cursor-pointer flex items-center justify-between my-1 capitalize font-medium",
//                     "data-[state=checked]:font-semibold",
//                     statusColors[status] || ""
//                   )}
//                 >
//                   <Select.ItemText>{status.label}</Select.ItemText>
//                   <Select.ItemIndicator>
//                     <CheckIcon className="ml-2 w-4 h-4" />
//                   </Select.ItemIndicator>
//                 </Select.Item>
//               ))}
//             </Select.Viewport>
  
//             <Select.ScrollDownButton className={cn(
//               "flex items-center justify-center h-6",
//               isDark ? "bg-gray-700" : "bg-gray-100"
//             )}>
//               <ChevronDownIcon />
//             </Select.ScrollDownButton>
//           </Select.Content>
//         </Select.Portal>
//       </Select.Root>
//     );
//   };
  
// export default StatusDropdown;
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';

const statusColors = {
  "new": "bg-blue-400 text-white",
  "contacted": "bg-yellow-400 text-black",
  "interested": "bg-green-500 text-white",
  "not interested": "bg-gray-400 text-white",
  "follow-up": "bg-purple-400 text-white",
  "site visit scheduled": "bg-indigo-400 text-white",
  "site visit done": "bg-indigo-600 text-white",
  "converted": "bg-green-700 text-white",
  "lost": "bg-red-500 text-white",
  "on hold": "bg-orange-400 text-white",
  "duplicate": "bg-pink-400 text-white",
  "dead lead": "bg-red-700 text-white"
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

const StatusDropdown = ({ value, onChange, options = [], isDark }) => {
  
  // agar value object hai to uska id lo, agar string hai to string hi lo
  const selectedValue = typeof value === "object" ? value.value : value;

  // dropdown me selected label dikhana
  const selectedLabel = options.find(opt => opt.value === selectedValue)?.label || value;

  return (
    <Select.Root value={selectedValue} onValueChange={onChange}>
      <Select.Trigger
        className={cn(
          "inline-flex items-center justify-between gap-2 rounded px-2 py-1 text-xs border shadow-sm w-[180px] capitalize",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          isDark ? "border-gray-600" : "border-gray-300",
          statusColors[selectedLabel?.toLowerCase()] || (isDark ? "bg-gray-800 text-white" : "bg-white text-black")
        )}
      >
        <Select.Value>{selectedLabel}</Select.Value>
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className={cn(
            "z-50 mt-1 overflow-hidden rounded border shadow-lg w-[180px]",
            isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"
          )}
        >
          <Select.ScrollUpButton className={cn(
            "flex items-center justify-center h-6",
            isDark ? "bg-gray-700" : "bg-gray-100"
          )}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>

          <Select.Viewport className="p-1">
            {options.map((status) => (
              <Select.Item
                key={status.value}
                value={status.value}
                className={cn(
                  "text-sm px-2 py-1 rounded-md cursor-pointer flex items-center justify-between my-1 capitalize font-medium",
                  "data-[state=checked]:font-semibold",
                  statusColors[status?.label?.toLowerCase()] || ""
                )}
              >
                <Select.ItemText>{status.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <CheckIcon className="ml-2 w-4 h-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>

          <Select.ScrollDownButton className={cn(
            "flex items-center justify-center h-6",
            isDark ? "bg-gray-700" : "bg-gray-100"
          )}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default StatusDropdown;
