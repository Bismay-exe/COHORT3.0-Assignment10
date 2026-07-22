import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import { ContextProvider } from "./contexts/MyContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
    <ThemeProvider>
        <AuthProvider>
            <ContextProvider>
                <AppRoutes />
                <Toaster position="top-right" />
            </ContextProvider>
        </AuthProvider>
    </ThemeProvider>,
);
