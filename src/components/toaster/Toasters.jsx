import toast from "react-hot-toast";

const baseStyle = {
  fontSize: "16px",
  fontWeight: "500",
  padding: "14px 18px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  color: "#fff",
  display: "flex",
  alignItems: "center",
};

export const showSuccess = (message) => {
  toast.success(message, {
    position: "top-right",
    style: {
      ...baseStyle,
      background: "#16a34a", 
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#16a34a",
    },
  });
};

export const showError = (message) => {
  toast.error(message, {
    position: "top-right",
    style: {
      ...baseStyle,
      background: "#dc2626", 
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#dc2626",
    },
  });
};

export const showInfo = (message) => {
  toast(message, {
    position: "top-right",
    style: {
      ...baseStyle,
      background: "#2563eb", 
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#2563eb",
    },
  });
};
