import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { LogOut, Moon, ShoppingCart, Sun, UserRound, Menu, X } from 'lucide-react';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="max-w-[1920px] sticky top-0 z-999 w-full h-auto flex items-center justify-between px-4 lg:px-8 py-2 lg:py-4 text-(--text-color)">

            <div className='absolute bg-linear-to-b from-(--bg-secondary-color) via-(--bg-color)/60 via-50% to-transparent w-full h-full top-0 left-0 z-[-1]'></div>

            <div className="lg:flex-1 w-full lg:w-auto flex items-center justify-between">
                <a className='bg-(--blur-bg-color) backdrop-blur-sm px-4 py-2 rounded-2xl font-instrument italic hover:scale-105 transform-3d hover:rotate-3d hover:rotate-y-360 transition-all duration-1000 ease-in-out cursor-pointer text-4xl lg:text-5xl'>
                    SkyMart
                </a>
            </div>

            <div className='hidden lg:flex items-center gap-8'>
                <a className='underline-effect font-space tracking-wider text-xl cursor-pointer'>Home</a>
                <a className='underline-effect font-space tracking-wider text-xl cursor-pointer'>Shop</a>
                <a className='underline-effect font-space tracking-wider text-xl cursor-pointer'>About</a>
            </div>

            <div className='flex flex-1 items-center justify-end gap-2'>
                <div className='hidden lg:flex items-center gap-4 bg-(--blur-bg-color) backdrop-blur-sm px-4 py-2 rounded-2xl group'>
                    <div className='w-10 h-10 rounded-full bg-(--bg-color) flex items-center justify-center'>
                        <UserRound className="text-(--text-color)" />
                    </div>
                    <p className='text-(--text-color) group-hover:text-(--text-color) font-space tracking-wider transition-all duration-300 ease-in-out'>User Name</p>
                </div>
                <button
                    onClick={toggleTheme}
                    className="hidden lg:block backdrop-blur-sm theme-toggle p-4 hover:bg-(--hover-bg-color) rounded-full hover:rotate-360 transition-all duration-600 ease-in-out cursor-pointer hover:text-(--text-color)" >
                    {theme === "dark" ? <Moon /> : <Sun />}
                </button>
                <button
                    className="backdrop-blur-sm p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer" >
                    <ShoppingCart className="group-hover:text-(--text-color)" />
                </button>
                <button
                    className="hidden lg:block backdrop-blur-sm p-4 hover:bg-(--red-bg) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer" >
                    <LogOut className="group-hover:text-(--red)" />
                </button>

                <button
                    onClick={toggleMenu}
                    className="lg:hidden backdrop-blur-sm p-4 hover:bg-(--hover-bg-color) rounded-xl transition-all duration-300 ease-in-out group cursor-pointer"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-(--bg-secondary-color) backdrop-blur-xl flex flex-col items-center py-8 gap-8 shadow-2xl transition-all duration-300">

                    <div className="flex flex-col items-center gap-6">
                        <a className='font-space tracking-wider text-2xl cursor-pointer'>Home</a>
                        <a className='font-space tracking-wider text-2xl cursor-pointer'>Shop</a>
                        <a className='font-space tracking-wider text-2xl cursor-pointer'>About</a>
                    </div>

                    <div className='flex flex-col items-center gap-4 w-full px-6 mt-4'>
                        <div className='flex w-full justify-between items-center bg-(--bg-color) px-6 py-4 rounded-2xl'>
                            <div className='flex items-center gap-4'>
                                <UserRound className="text-(--text-color)" />
                                <p className='font-space tracking-wider'>User Name</p>
                            </div>
                            <button onClick={toggleTheme} className="p-2 hover:bg-(--hover-bg-color) rounded-full transition-all">
                                {theme === "dark" ? <Moon /> : <Sun />}
                            </button>
                        </div>

                        <div className="flex w-full gap-4">
                            <button className="flex-1 flex justify-center items-center gap-3 bg-(--bg-color) py-4 rounded-2xl hover:bg-(--hover-bg-color) transition-all">
                                <ShoppingCart size={20} />
                                <span className="font-space">Cart</span>
                            </button>
                            <button className="flex-1 flex justify-center items-center gap-3 bg-(--red-bg) text-(--red) py-4 rounded-2xl transition-all">
                                <LogOut size={20} />
                                <span className="font-space">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;