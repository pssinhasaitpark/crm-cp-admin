import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon, CheckIcon } from "@radix-ui/react-icons";
import { useTheme } from "../../components/context/ThemeProvider"; // ✅ import your theme hook

export default function SearchableSelect({
  label,
  options,
  value,
  onChange,
  otherValue,
  onOtherChange,
}) {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Add "Other" at the end always
  const extendedOptions = [...options, { label: "Other", value: "__other__" }];

  // Agar search se kuch nahi milta toh fallback "Other"
  const filteredOptions =
    extendedOptions.filter((opt) =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    ).length > 0
      ? extendedOptions.filter((opt) =>
          opt.label.toLowerCase().includes(search.toLowerCase())
        )
      : [{ label: "Other", value: "__other__" }];

  const selectedLabel =
    extendedOptions.find((o) => o.value === value)?.label ||
    (value && value !== "__other__" ? value : "");

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const baseInput =
    "w-full border px-3 py-2 text-sm rounded-md focus:outline-none";

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${baseInput} flex items-center justify-between ${
          isDark
            ? "bg-gray-800 text-white border-gray-600"
            : "bg-white text-black border-gray-300"
        }`}
      >
        {selectedLabel || `Select ${label}`}
        <ChevronDownIcon className="ml-2 h-4 w-4 opacity-50" />
      </button>

      {open && (
        <div
          className={`absolute z-10 mt-1 w-full rounded-md border shadow-lg ${
            isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          {/* Search box */}
          <input
            type="text"
            autoFocus
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`${baseInput} border-b ${
              isDark
                ? "bg-gray-800 text-white border-gray-700"
                : "bg-white text-black border-gray-200"
            }`}
          />

          {/* Options */}
          <ul className="max-h-40 overflow-y-auto">
            {filteredOptions.map((opt) => (
              <li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  setSearch("");
                }}
                className={`flex cursor-pointer items-center justify-between px-3 py-2 text-sm 
                  ${
                    isDark
                      ? "hover:bg-gray-700 text-white"
                      : "hover:bg-gray-100 text-black"
                  }
                  ${value === opt.value ? "font-medium" : ""}
                `}
              >
                {opt.label}
                {value === opt.value && <CheckIcon className="h-4 w-4" />}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show text field if "Other" selected */}
      {value === "__other__" && (
        <input
          type="text"
          placeholder={`Enter custom ${label}`}
          value={otherValue}
          onChange={(e) => onOtherChange(e.target.value)}
          className={`${baseInput} mt-2 ${
            isDark
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
      )}
    </div>
  );
}
