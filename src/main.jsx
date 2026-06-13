import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ClickSpark from "./components/reactbits/ClickSpark";
import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ClickSpark sparkColor="#ff2eea" sparkCount={10} sparkRadius={22} sparkSize={12}>
          <App />
        </ClickSpark>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
