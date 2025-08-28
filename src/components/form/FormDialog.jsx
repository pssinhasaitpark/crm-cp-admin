import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useTheme } from "../../components/context/ThemeProvider";

const FormDialog = ({
  title = "Form",
  triggerLabel = "Open",
  fields = [],
  onSubmit = () => {},
  submitLabel = "Submit",
}) => {
  
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const buttonBase = `inline-flex items-center gap-1 px-4 py-2 text-sm rounded cursor-pointer`;
  const addBtn = `${buttonBase} text-white bg-green-500 hover:bg-green-600`;

  useEffect(() => {
    if (!open) setFormData({});
  }, [open]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({});
    setOpen(false);
  };

  const renderField = (field) => {
    const commonProps = {
      name: field.name,
      value: formData[field.name] || "",
      onChange: handleChange,
      required: field.required,
      placeholder: field.placeholder || "",
      className: `w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isDark
          ? "bg-gray-800 text-white border-gray-600"
          : "bg-white text-black border-gray-300"
      }`,
    };

    switch (field.type) {
      case "select":
        return (
          <select
            {...commonProps}
            value={formData[field.name] || field.options?.[0]}
          >
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
            {...commonProps}
            className={`${commonProps.className} h-24`}
          />
        );

      case "file":
        return (
          <input
            type="file"
            name={field.name}
            accept={field.accept || "*"}
            onChange={handleChange}
            required={field.required}
            className={`${commonProps.className}`}
          />
        );

      default:
        return <input type={field.type} {...commonProps} />;
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className={addBtn}>
          + {triggerLabel}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-black/50 fixed inset-0 z-40 ${
            isDark ? "bg-black/70" : "bg-black/50"
          }`}
        />
        <Dialog.Content
          className={`fixed z-50 top-1/2 left-1/2 w-[95%] max-w-2xl -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg shadow-lg 
          ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
        >
          <Dialog.Title className="text-lg font-bold mb-4">
            {title}
          </Dialog.Title>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto"
          >
            {fields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="block text-sm font-medium mb-1">
                  {field.label}
                </label>
                {renderField(field)}
              </div>
            ))}

            <div className="flex justify-end gap-2 mt-4 col-span-2">
              <Dialog.Close asChild>
                <button
                  type="button"
                  className={`px-4 py-2 rounded ${
                    isDark
                      ? "bg-gray-600 text-white hover:bg-gray-500"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                >
                  Cancel
                </button>
              </Dialog.Close>
              <button
                type="submit"
                className={`px-4 py-2 rounded ${
                  isDark
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-500"
                }`}
              >
                {submitLabel}
              </button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className={`absolute top-4 right-4 text-gray-500 hover:text-black ${
                isDark ? "text-white" : ""
              }`}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FormDialog;
