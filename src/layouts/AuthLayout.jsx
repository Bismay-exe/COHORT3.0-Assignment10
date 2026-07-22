import React from "react";
import { Outlet, ScrollRestoration } from "react-router";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";

const AuthLayout = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-(--bg-color) flex flex-col items-center justify-center relative">
      <ScrollRestoration />
      <div className="hidden xl:block fixed top-8 left-4 lg:left-8">
        <div className="bg-(--blur-bg-color) text-(--text-color) backdrop-blur-sm px-4 py-2 rounded-2xl font-instrument italic hover:scale-105 transform-3d hover:rotate-3d hover:rotate-y-360 transition-all duration-1000 ease-in-out cursor-pointer text-4xl lg:text-5xl">
          SkyMart
        </div>
      </div>
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-4 lg:right-8 backdrop-blur-sm theme-toggle p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-600 ease-in-out cursor-pointer text-(--text-color) hover:text-(--text-color) group"
      >
        {theme === "dark" ? (
          <Moon className="group-hover:rotate-360 transition-all duration-600 ease-in-out" />
        ) : (
          <Sun className="group-hover:rotate-180 transition-all duration-600 ease-in-out" />
        )}
      </button>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
