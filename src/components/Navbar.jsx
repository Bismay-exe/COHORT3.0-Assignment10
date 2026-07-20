import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import {
    LogOut,
    Moon,
    ShoppingCart,
    Sun,
    UserRound,
    Menu,
    X,
} from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="max-w-[1920px] sticky top-0 z-999 w-full h-auto flex items-center justify-between px-4 lg:px-8 py-2 lg:py-4 text-(--text-color)">
            <div className="absolute bg-linear-to-b from-(--bg-secondary-color) via-(--bg-color)/60 via-50% to-transparent w-full h-full top-0 left-0 z-[-1]" />
            <div className="lg:flex-1 w-full lg:w-auto flex items-center justify-between z-10">
                <a className="bg-(--blur-bg-color) backdrop-blur-sm px-4 py-2 rounded-2xl font-instrument italic hover:scale-105 transform-3d hover:rotate-3d hover:rotate-y-360 transition-all duration-1000 ease-in-out cursor-pointer text-4xl lg:text-5xl">
                    SkyMart
                </a>
            </div>

            <div className="hidden lg:flex items-center gap-8">
                <NavLink
                    to="/"
                    className="underline-effect font-space tracking-wider text-xl cursor-pointer"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/products"
                    className="underline-effect font-space tracking-wider text-xl cursor-pointer"
                >
                    Shop
                </NavLink>
                <NavLink
                    to="/about"
                    className="underline-effect font-space tracking-wider text-xl cursor-pointer"
                >
                    About
                </NavLink>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2 z-10">
                <div className="hidden lg:flex items-center gap-4 bg-(--blur-bg-color) backdrop-blur-sm px-4 py-2 rounded-2xl group hover:bg-(--hover-bg-color) transition-all duration-300 ease-in-out group cursor-pointer">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <UserRound className="text-(--text-color)" />
                    </div>
                    <p className="text-(--text-color) group-hover:text-(--text-color) font-space tracking-wider transition-all duration-300 ease-in-out">
                        User Name
                    </p>
                </div>
                <button
                    onClick={toggleTheme}
                    className="block backdrop-blur-sm theme-toggle p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-600 ease-in-out cursor-pointer hover:text-(--text-color) group"
                >
                    {theme === "dark" ? <Moon className="group-hover:rotate-360 fill-none group-hover:fill-current/30 transition-all duration-600 ease-in-out" /> : <Sun className="group-hover:rotate-360 fill-none group-hover:fill-current/30 transition-all duration-600 ease-in-out" />}
                </button>
                <button className="backdrop-blur-sm p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer">
                    <ShoppingCart className="group-hover:text-(--text-color) fill-none group-hover:fill-current/30 transition-all duration-600 ease-in-out" />
                </button>
                <button className="hidden lg:block backdrop-blur-sm p-4 hover:bg-(--red-bg) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer">
                    <LogOut className="group-hover:text-(--red) transition-all duration-600 ease-in-out" />
                </button>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden backdrop-blur-sm p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-0 right-0 w-auto h-screen">
                    <div className="h-full bg-(--bg-secondary-color)/90 backdrop-blur-2xl flex flex-col justify-between px-4 pt-24 pb-4 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300">

                        <div className="flex flex-col items-start gap-6 w-full py-4 px-4">
                            <NavLink
                                to="/"
                                className="font-instrument italic text-4xl text-(--text-color) cursor-pointer flex justify-center items-center gap-2"
                            >
                                <div className="hidden h-0.5 w-10 bg-black"></div>Home
                            </NavLink>
                            <NavLink
                                to="/products"
                                className="font-instrument italic text-4xl text-(--text-color) cursor-pointer flex justify-center items-center gap-2"
                            >
                                <div className="h-0.5 w-10 bg-black"></div>Shop
                            </NavLink>
                            <NavLink
                                to="/about"
                                className="font-instrument italic text-4xl text-(--text-color) cursor-pointer flex justify-center items-center gap-2"
                            >
                                <div className="hidden h-0.5 w-10 bg-black"></div>About
                            </NavLink>
                        </div>

                        <div className="flex flex-col gap-3 w-full mt-8">
                            <div className="flex w-full justify-between items-center rounded-2xl">
                                <div className="flex-1 flex items-center gap-4 bg-(--blur-bg)  px-4 py-2 rounded-2xl group hover:bg-(--hover-bg-color) transition-all duration-300 ease-in-out group cursor-pointer">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                        <UserRound className="text-(--text-color)" />
                                    </div>
                                    <p className="text-(--text-color) group-hover:text-(--text-color) font-space tracking-wider transition-all duration-300 ease-in-out">
                                        User Name
                                    </p>
                                    <button className="flex justify-center items-center gap-3 bg-(--red-bg)/10 text-(--red) py-4 rounded-2xl hover:bg-(--red-bg)/20 transition-colors duration-300">
                                        <LogOut size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
