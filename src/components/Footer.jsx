import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterLine } from "@remixicon/react";
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate();


    return (
        <footer className="max-w-[1920px] w-full xbg-linear-to-t from-(--bg-secondary-color) to-transparent text-(--text-color) px-4 md:px-8">

            {/* Main Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-(--border-color) pt-12 pb-6">

                {/* Brand */}
                <div className="md:col-span-2 lg:col-span-1">
                    <a className="font-instrument italic text-5xl cursor-pointer">
                        SkyMart
                    </a>

                    <p className="font-space text-(--text-muted) mt-4 max-w-xs leading-relaxed">
                        Discover products you'll love. Quality, style, and convenience
                        — all in one place.
                    </p>
                </div>


                {/* Shop */}
                <div className="col-span-1">
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Shop
                    </h3>

                    <div className="flex flex-col items-start gap-3 text-(--text-muted)">
                        <button onClick={() => navigate("/products")} className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            All Products
                        </button>
                        <button onClick={() => navigate("/products")} className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            New Arrivals
                        </button>
                        <button onClick={() => navigate("/products")} className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            Popular
                        </button>
                    </div>
                </div>


                {/* Support */}
                <div className="col-span-1">
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Support
                    </h3>

                    <div className="flex flex-col items-start gap-3 text-(--text-muted)">
                        <a onClick={() => navigate("/about")} className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            About Us
                        </a>
                        <a className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            Contact
                        </a>
                        <a className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            FAQ
                        </a>
                    </div>
                </div>


                {/* Socials */}
                <div className="col-span-1">
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Follow Us
                    </h3>

                    <div className="flex items-center gap-2">

                        <a href="https://github.com/Bismay-exe/COHORT3.0-Assignment10" className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <RiGithubLine size={20} />
                        </a>

                        <a href="" className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <RiLinkedinLine size={20} />
                        </a>

                        <a href="" className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <RiTwitterLine size={20} />
                        </a>

                        <a href="https://www.instagram.com/bismay.exe" className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <RiInstagramLine size={20} />
                        </a>

                    </div>
                </div>

            </div>


            {/* Bottom Bar */}
            <div className="border-t border-(--border-color) mt-10 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">

                <p className="font-space text-sm text-(--text-muted)">
                    © {new Date().getFullYear()} SkyMart. All rights reserved.
                </p>

                <div className="flex items-center gap-6 text-sm text-(--text-muted)">
                    <a className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                        Privacy Policy
                    </a>

                    <a className="underline-effect hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                        Terms of Service
                    </a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;