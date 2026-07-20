import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ContextProvider } from "./contexts/MyContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <BrowserRouter>
            <ContextProvider>
                <App />
            </ContextProvider>
        </BrowserRouter>
    </ThemeProvider>,
);
