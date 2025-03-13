import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Router/App";
import "./Styles/Global.css";
import SidebarProvider from "./Components/Cart/Sidebar.jsx";
import CartProvider from "./Components/Cart/Cart.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <SidebarProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </SidebarProvider>
  </CartProvider>
);
