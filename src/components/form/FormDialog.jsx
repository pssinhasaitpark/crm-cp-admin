// import React, { useEffect, useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import { useTheme } from "../../components/context/ThemeProvider";

// const FormDialog = ({
//   title = "Form",
//   triggerLabel = "Open",
//   fields = [],
//   onSubmit = () => {},
//   submitLabel = "Submit",
// }) => {

//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const [formData, setFormData] = useState({});
//   const [open, setOpen] = useState(false);

//   const buttonBase = `inline-flex items-center gap-1 px-4 py-2 text-sm rounded cursor-pointer`;
//   const addBtn = `${buttonBase} text-white bg-green-500 hover:bg-green-600`;

//   useEffect(() => {
//     if (!open) setFormData({});
//   }, [open]);

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;
//     const newValue = type === "file" ? files[0] : value;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: newValue,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//     setFormData({});
//     setOpen(false);
//   };

//   const renderField = (field) => {
//     const commonProps = {
//       name: field.name,
//       value: formData[field.name] || "",
//       onChange: handleChange,
//       required: field.required,
//       placeholder: field.placeholder || "",
//       className: `w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//         isDark
//           ? "bg-gray-800 text-white border-gray-600"
//           : "bg-white text-black border-gray-300"
//       }`,
//     };

//     switch (field.type) {
//       case "select":
//         return (
//           <select
//             {...commonProps}
//             value={formData[field.name] || field.options?.[0]}
//           >
//             {field.options?.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );

//       case "textarea":
//         return (
//           <textarea
//             {...commonProps}
//             className={`${commonProps.className} h-24`}
//           />
//         );

//       case "file":
//         return (
//           <input
//             type="file"
//             name={field.name}
//             accept={field.accept || "*"}
//             onChange={handleChange}
//             required={field.required}
//             className={`${commonProps.className}`}
//           />
//         );

//       default:
//         return <input type={field.type} {...commonProps} />;
//     }
//   };

//   return (
//     <Dialog.Root open={open} onOpenChange={setOpen}>
//       <Dialog.Trigger asChild>
//         <button type="button" className={addBtn}>
//           + {triggerLabel}
//         </button>
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay
//           className={`bg-black/50 fixed inset-0 z-40 ${
//             isDark ? "bg-black/70" : "bg-black/50"
//           }`}
//         />
//         <Dialog.Content
//           className={`fixed z-50 top-1/2 left-1/2 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg 
//           ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
//         >
//           <Dialog.Title className="text-lg font-bold mb-4">
//             {title}
//           </Dialog.Title>

//           <form
//             onSubmit={handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto"
//           >
//             {fields.map((field) => (
//               <div key={field.name} className="flex flex-col">
//                 <label className="block text-sm font-medium mb-1">
//                   {field.label}
//                 </label>
//                 {renderField(field)}
//               </div>
//             ))}

//             <div className="flex justify-end gap-2 mt-4 col-span-2">
//               <Dialog.Close asChild>
//                 <button
//                   type="button"
//                   className={`px-4 py-2 rounded ${
//                     isDark
//                       ? "bg-gray-600 text-white hover:bg-gray-500"
//                       : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                   }`}
//                 >
//                   Cancel
//                 </button>
//               </Dialog.Close>
//               <button
//                 type="submit"
//                 className={`px-4 py-2 rounded ${
//                   isDark
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "bg-blue-600 text-white hover:bg-blue-500"
//                 }`}
//               >
//                 {submitLabel}
//               </button>
//             </div>
//           </form>

//           <Dialog.Close asChild>
//             <button
//               className={`absolute top-4 right-4 text-gray-500 hover:text-black ${
//                 isDark ? "text-white" : ""
//               }`}
//             >
//               <Cross2Icon />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default FormDialog;











// ====================================


// import React, { useState } from "react";
// import * as Dialog from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
// import { useTheme } from "../../components/context/ThemeProvider";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { LuLoader } from "react-icons/lu";
// import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

// const FormDialog = ({
//   title = "Form",
//   triggerLabel = "Open",
//   fields = [],
//   onSubmit = () => { },
//   submitLabel = "Submit",
// }) => {
//   const { theme } = useTheme();
//   const isDark = theme === "dark";
//   const [open, setOpen] = useState(false);
//   const [visiblePasswords, setVisiblePasswords] = useState({});
//   const Spinner = () => (
//     <div className="animate-spin h-4 w-4">
//       <LuLoader />
//     </div>
//   );
//   const validationSchema = Yup.object(
//     fields.reduce((schema, field) => {
//       if (field.required) {
//         switch (field.type) {
//           case "email":
//             schema[field.name] = Yup.string()
//               .email("Invalid email format")
//               .required(`${field.label} is required`);
//             break;

//           case "password":
//             schema[field.name] = Yup.string()
//               .min(6, "Password must be at least 6 characters")
//               .required(`${field.label} is required`);
//             break;

//           case "number":
//             schema[field.name] = Yup.number()
//               .typeError(`${field.label} must be a number`)
//               .required(`${field.label} is required`);
//             break;

//           case "phone_number":
//           case "mobile_number": // ✅ Always keep as string
//             schema[field.name] = Yup.string()
//               .matches(/^[0-9]+$/, "Only digits allowed")
//               .min(10, "Mobile number must be 10 digits")
//               .max(10, "Mobile number must be 10 digits")
//               .required(`${field.label} is required`);
//             break;

//           case "file":
//             schema[field.name] = Yup.mixed()
//               .required(`${field.label} is required`)
//               .test("fileSize", "File size too large (max 2MB)", (value) =>
//                 value ? value.size <= 2 * 1024 * 1024 : false
//               )
//               .test("fileType", "Unsupported file type", (value) =>
//                 value
//                   ? ["image/jpeg", "image/png", "application/pdf"].includes(
//                     value.type
//                   )
//                   : false
//               );
//             break;

//           default:
//             schema[field.name] = Yup.string().required(
//               `${field.label} is required`
//             );
//         }
//       }
//       return schema;
//     }, {})
//   );

//   const formik = useFormik({
//     validateOnBlur: true,
//     validateOnChange: true,
//     initialValues: fields.reduce((values, field) => {
//       values[field.name] = "";
//       return values;
//     }, {}),
//     validationSchema,
//     onSubmit: async (values, helpers) => {
//       try {
//         const isSuccess = await onSubmit(values, helpers); // ✅ Parent returns true/false
//       console.log("sucessssssssss",isSuccess)
//         if (isSuccess) {
//           setVisiblePasswords({});
//           setOpen(false); // ✅ Close modal only on success
//         }
//       } catch (error) {
//         console.error("Submit failed:", error);
//       }
//     },

//   });

//   const renderField = (field) => {
//     const commonClasses = `w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark
//       ? "bg-gray-800 text-white border-gray-600"
//       : "bg-white text-black border-gray-300"
//       }`;
//   // Password / Confirm Password toggle
//   if (field.type === "password") {
//     const isVisible = visiblePasswords[field.name];
//     return (
//       <div className="relative">
//         <input
//           type={isVisible ? "text" : "password"}
//           name={field.name}
//           value={formik.values[field.name]}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           className={commonClasses}
//         />
//         <button
//           type="button"
//           onClick={() =>
//             setVisiblePasswords((prev) => ({
//               ...prev,
//               [field.name]: !prev[field.name],
//             }))
//           }
//           className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
//         >
//           {isVisible ? <EyeOpenIcon width={20} height={20} /> : <EyeClosedIcon width={20} height={20} />}
//         </button>
//       </div>
//     );
//   }
//     switch (field.type) {
//       case "select":
//         return (
//           <select
//             name={field.name}
//             value={formik.values[field.name]}
//             onChange={formik.handleChange}
//             className={commonClasses}
//           >
//             {field.options?.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );

//       case "textarea":
//         return (
//           <textarea
//             name={field.name}
//             value={formik.values[field.name]}
//             onChange={formik.handleChange}
//             className={`${commonClasses} h-24`}
//           />
//         );

//       case "file":
//         return (
//           <>
//             <input
//               type="file"
//               name={field.name}
//               onChange={(e) => {
//                 const file = e.currentTarget.files[0];
//                 formik.setFieldValue(field.name, file || null); // ✅ null if removed
//               }}
//               onBlur={() => formik.setFieldTouched(field.name, true)} // ✅ trigger validation
//               className={commonClasses}
//             />
//           </>
//         );
//         case "mobile_number":
//         case "phone_number":
//         return (
//           <>
//             <input
//               type="text"               // ✅ string, not number
//               name={field.name}
//               maxLength="10"            // ✅ prevents >10 chars
//               value={formik.values[field.name]}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               className={commonClasses}
//             />
//           </>
//         );

//       default:
//         return (
//           <>
//             <input
//               type={field.type}
//               name={field.name}
//               value={formik.values[field.name]}
//               onChange={formik.handleChange}
//               className={commonClasses}
//             />

//           </>
//         );
//     }
//   };

//   return (
//     <Dialog.Root open={open} onOpenChange={setOpen}>
//       <Dialog.Trigger asChild>
//         <button
//           type="button"
//           className="inline-flex items-center gap-1 px-4 py-2 text-sm rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
//         >
//           + {triggerLabel}
//         </button>
//       </Dialog.Trigger>

//       <Dialog.Portal>
//         <Dialog.Overlay
//           className={`fixed inset-0 bg-black/50 z-40 ${isDark ? "bg-black/70" : "bg-black/50"
//             }`}
//         />
//         {/* <Dialog.Content
//           className={`fixed z-50 top-1/2 left-1/2 w-[70%] max-w-3xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"
//             }`}
//         > */}
//         <Dialog.Content
//   className={`
//     fixed z-50 top-1/2 left-1/2 
//     w-[70%] sm:w-auto md:w-[80%] lg:w-[70%] max-w-3xl
//     max-h-[90vh] overflow-y-auto
//     -translate-x-1/2 -translate-y-1/2 
//     p-4 sm:p-6 rounded-lg shadow-lg
//     ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}
//   `}
// >

//           <Dialog.Title className="text-lg font-bold mb-4">{title}</Dialog.Title>

//           {/* <form
//             onSubmit={formik.handleSubmit}
//             className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[80vh] overflow-y-auto pr-4"
//           > */}
//           <form
//   onSubmit={formik.handleSubmit}
//   className="flex flex-col gap-4 md:grid md:grid-cols-2"
// >

//             {fields.map((field) => (
//               <div key={field.name} className="flex flex-col">
//                 <label htmlFor={field.name} className="block text-sm font-medium mb-1">
//                   {field.label}
//                 </label>
//                 {renderField(field)}
//                 {formik.errors[field.name] && formik.touched[field.name] && (
//                   <span className="text-red-500 text-sm">
//                     {formik.errors[field.name]}
//                   </span>
//                 )}
//               </div>
//             ))}

//             {/* <div className="flex justify-end gap-2 mt-4 col-span-2"> */}
//             <div className="flex flex-col md:flex-row justify-end gap-2 mt-4 col-span-2">

//               <Dialog.Close asChild>
//                 <button
//                   type="button"
//                     onClick={() => formik.resetForm()}  
//                   className={`w-full md:w-auto px-4 py-2 rounded cursor-pointer ${isDark
//                     ? "bg-gray-600 text-white hover:bg-gray-500"
//                     : "bg-gray-200 text-gray-800 hover:bg-gray-300"
//                     }`}
//                 >
//                   Cancel
//                 </button>
//               </Dialog.Close>
//               {/* <button
//                 type="submit"
//                 className={`px-4 py-2 rounded ${
//                   isDark
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "bg-blue-600 text-white hover:bg-blue-500"
//                 }`}
//               >
//                 {submitLabel}
//               </button> */}
//               <button
//                 type="submit"
//                 disabled={formik.isSubmitting}
//                 className={`w-full md:w-auto px-4 py-2 rounded flex items-center justify-center gap-2
//     ${isDark
//                     ? "bg-blue-600 text-white hover:bg-blue-700"
//                     : "bg-blue-600 text-white hover:bg-blue-500"
//                   }
//     ${formik.isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
//   `}
//               >
//                 {formik.isSubmitting ? (
//                   <>
//                     <Spinner />
//                     Adding...
//                   </>
//                 ) : (
//                   submitLabel
//                 )}
//               </button>

//             </div>
//           </form>

//           <Dialog.Close asChild>
//             <button
//             aria-label="Close"
//              onClick={() => formik.resetForm()}  
//               className={`absolute top-4 right-4 hidden sm:block  ${isDark ? "text-white" : "text-gray-500"
//                 } cursor-pointer`}
//             >
//               <Cross2Icon />
//             </button>
//           </Dialog.Close>
//         </Dialog.Content>
//       </Dialog.Portal>
//     </Dialog.Root>
//   );
// };

// export default FormDialog;



// raj cloude 

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTheme } from "../../components/context/ThemeProvider";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LuLoader } from "react-icons/lu";
import { EyeOpenIcon, EyeClosedIcon } from "@radix-ui/react-icons";

const FormDialog = ({
  title = "Form",
  triggerLabel = "Open",
  fields = [],
  onSubmit = () => { },
  submitLabel = "Submit",
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [open, setOpen] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});
  
  const Spinner = () => (
    <div className="animate-spin h-4 w-4">
      <LuLoader />
    </div>
  );

  const validationSchema = Yup.object(
    fields.reduce((schema, field) => {
      if (field.required) {
        switch (field.type) {
          case "email":
            schema[field.name] = Yup.string()
              .email("Invalid email format")
              .required(`${field.label} is required`);
            break;

          case "password":
            schema[field.name] = Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required(`${field.label} is required`);
            break;

          case "number":
            schema[field.name] = Yup.number()
              .typeError(`${field.label} must be a number`)
              .required(`${field.label} is required`);
            break;

          case "phone_number":
          case "mobile_number":
            schema[field.name] = Yup.string()
              .matches(/^[0-9]+$/, "Only digits allowed")
              .min(10, "Mobile number must be 10 digits")
              .max(10, "Mobile number must be 10 digits")
              .required(`${field.label} is required`);
            break;

          // case "file":
          //   schema[field.name] = Yup.mixed()
          //     .required(`${field.label} is required`)
          //     // .test("fileSize", "File size too large (max 2MB)", (value) =>
          //     //   value ? value.size <= 2 * 1024 * 1024 : false
          //     // )
          //     // .test("fileType", "Unsupported file type", (value) =>
          //     //   value
          //     //     ? ["image/jpeg", "image/png", "application/pdf"].includes(
          //     //       value.type
          //     //     )
          //     //     : false
          //     // );
          //     .test("fileSize", "File size too large (max 2MB)", (value) => {
          //       if (!value) return false; // Required field ke liye error show hoga
          //       if (field.multiple) {
          //         return Array.from(value).every((file) => file.size <= 2 * 1024 * 1024);
          //       }
          //       return value.size <= 2 * 1024 * 1024;
          //     })
          //     .test("fileType", "Unsupported file type", (value) => {
          //       if (!value) return false; // Required field ke liye error show hoga
          //       const acceptTypes = field.accept.split(",").map(type => type.trim().toLowerCase());
          //       if (field.multiple) {
          //         return Array.from(value).every((file) =>
          //           acceptTypes.some((type) => file.type.toLowerCase().includes(type))
          //         );
          //       }
          //       return acceptTypes.some((type) => value.type.toLowerCase().includes(type));
          //     });              
          //   break;
          case "file":
            let fileSchema = Yup.mixed().required(`${field.label} is required`);
          
          // Only check file type if 'accept' is provided
          if (field.accept) {
            fileSchema = fileSchema.test(
              "fileType",
              "Unsupported file type",
              (value) => {
                if (!value) return false;
                const acceptTypes = field.accept.split(",").map(type => type.trim().toLowerCase());
                if (field.multiple) {
                  return Array.from(value).every((file) =>
                    acceptTypes.some((type) => file.type.toLowerCase().includes(type))
                  );
                }
                return acceptTypes.some((type) => value.type.toLowerCase().includes(type));
              }
            );
          }
          
          // Always check file size
          fileSchema = fileSchema.test(
            "fileSize",
            "File size too large (max 2MB)",
            (value) => {
              if (!value) return false;
              if (field.multiple) {
                return Array.from(value).every((file) => file.size <= 2 * 1024 * 1024);
              }
              return value.size <= 2 * 1024 * 1024;
            }
          );
          
          schema[field.name] = fileSchema;
          break;
          
          default:
            schema[field.name] = Yup.string().required(
              `${field.label} is required`
            );
        }
      }

      // ✅ Add password confirmation validation
      if (field.name === "confirm_password") {
        schema[field.name] = Yup.string()
          .oneOf([Yup.ref("password"), null], "Password and Confirm Password do not match")
          .required("Confirm Password is required");
      }

      return schema;
    }, {})
  );

  const formik = useFormik({
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: fields.reduce((values, field) => {
      values[field.name] = "";
      return values;
    }, {}),
    validationSchema,
    onSubmit: async (values, helpers) => {
      try {
        // ✅ Don't set submitting here, let parent handle it
        const isSuccess = await onSubmit(values, helpers);
        console.log("Success status:", isSuccess);
        
        if (isSuccess) {
          setVisiblePasswords({}); // Clear password visibility
          setOpen(false); // ✅ Close modal only on success
        }
        // ✅ If isSuccess is false, modal stays open
        
      } catch (error) {
        console.error("Submit failed:", error);
        // ✅ On error, modal stays open
      }
    },
  });

  const renderField = (field) => {
    const commonClasses = `w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isDark
      ? "bg-gray-800 text-white border-gray-600"
      : "bg-white text-black border-gray-300"
      }`;

    // Password / Confirm Password toggle
    if (field.type === "password") {
      const isVisible = visiblePasswords[field.name];
      return (
        <div className="relative">
          <input
            type={isVisible ? "text" : "password"}
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={commonClasses}
          />
          <button
            type="button"
            onClick={() =>
              setVisiblePasswords((prev) => ({
                ...prev,
                [field.name]: !prev[field.name],
              }))
            }
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {isVisible ? <EyeOpenIcon width={20} height={20} /> : <EyeClosedIcon width={20} height={20} />}
          </button>
        </div>
      );
    }

    switch (field.type) {
      case "select":
        return (
          <select
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={commonClasses}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${commonClasses} h-24`}
          />
        );

      case "file":
        return (
          <input
            type="file"
            name={field.name}
            // onChange={(e) => {
            //   const file = e.currentTarget.files[0];
            //   formik.setFieldValue(field.name, file || null);
            // }}
            onChange={(e) => {
              const files = field.multiple ? e.currentTarget.files : e.currentTarget.files[0];
              formik.setFieldValue(field.name, files || null);
            }}
  
            onBlur={() => formik.setFieldTouched(field.name, true)}
            className={commonClasses}
            multiple={field.multiple}
            accept={field.accept}
          />
        );

      case "mobile_number":
      case "phone_number":
        return (
          <input
            type="text"
            name={field.name}
            maxLength="10"
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={commonClasses}
          />
        );

      default:
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={formik.values[field.name]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={commonClasses}
          />
        );
    }
  };

  // ✅ Reset form and passwords when modal closes
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      // Modal is closing
      formik.resetForm();
      setVisiblePasswords({});
    }
    setOpen(newOpen);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-1 px-4 py-2 text-sm rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
        >
          + {triggerLabel}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={`fixed inset-0 bg-black/50 z-40 ${isDark ? "bg-black/70" : "bg-black/50"
            }`}
        />
        
        <Dialog.Content
          className={`
            fixed z-50 top-1/2 left-1/2 
            w-[70%] sm:w-auto md:w-[80%] lg:w-[70%] max-w-3xl
            max-h-[90vh] overflow-y-auto
            -translate-x-1/2 -translate-y-1/2 
            p-4 sm:p-6 rounded-lg shadow-lg
            ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}
          `}
        >
          <Dialog.Title className="text-lg font-bold mb-4">{title}</Dialog.Title>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col gap-4 md:grid md:grid-cols-2"
          >
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label htmlFor={field.name} className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                {renderField(field)}
                {formik.errors[field.name] && formik.touched[field.name] && (
                  <span className="text-red-500 text-sm">
                    {formik.errors[field.name]}
                  </span>
                )}
              </div>
            ))}

            <div className="flex flex-col md:flex-row justify-end gap-2 mt-4 col-span-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  onClick={() => {
                    formik.resetForm();
                    setVisiblePasswords({});
                  }}
                  className={`w-full md:w-auto px-4 py-2 rounded cursor-pointer ${isDark
                    ? "bg-gray-600 text-white hover:bg-gray-500"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                >
                  Cancel
                </button>
              </Dialog.Close>
              
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className={`w-full md:w-auto px-4 py-2 rounded flex items-center justify-center gap-2
                  ${isDark
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                  }
                  ${formik.isSubmitting ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}
                `}
              >
                {formik.isSubmitting ? (
                  <>
                    <Spinner />
                    Adding...
                  </>
                ) : (
                  submitLabel
                )}
              </button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              aria-label="Close"
              onClick={() => {
                formik.resetForm();
                setVisiblePasswords({});
              }}
              className={`absolute top-4 right-4 hidden sm:block ${isDark ? "text-white" : "text-gray-500"
                } cursor-pointer`}
            >
              <Cross2Icon height={20} width={20}/>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FormDialog;