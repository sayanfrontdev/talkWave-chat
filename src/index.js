import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"; // Add .js extension
import { AuthContextProvider } from "./context/AuthContext.js"; // Add .js extension
import { ChatContextProvider } from "./context/ChatContext.js"; // Add .js extension

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
