import React from "react";
import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "../components/context/ThemeProvider";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      <FiSun
        size={20}
        className={`transition-colors ${theme === "light" ? "text-yellow-500" : "text-gray-400"}`}
      />
      <Switch.Root
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="relative w-12 h-6 rounded-full bg-gray-300 data-[state=checked]:bg-blue-600 transition-colors"
      >
        <Switch.Thumb
          className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 translate-x-1 data-[state=checked]:translate-x-6"
        />
      </Switch.Root>
      <FiMoon
        size={20}
        className={`transition-colors ${theme === "dark" ? "text-blue-400" : "text-gray-400"}`}
      />
    </div>
  );
};

export default ThemeToggle;
