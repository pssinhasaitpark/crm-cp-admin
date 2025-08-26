import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";
import { ThemeProvider } from "./components/context/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <ThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
     </ThemeProvider>
  </StrictMode>
);
