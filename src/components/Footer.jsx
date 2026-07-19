import { Moon } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full bg-linear-to-t from-(--bg-secondary-color) to-transparent text-(--text-color) border-t border-(--border-color) px-4 md:px-8 pt-12 pb-6">

            {/* Main Footer */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <a className="font-instrument italic text-5xl cursor-pointer">
                        SkyMart
                    </a>

                    <p className="font-space text-(--text-muted) mt-4 max-w-xs leading-relaxed">
                        Discover products you'll love. Quality, style, and convenience
                        — all in one place.
                    </p>
                </div>


                {/* Shop */}
                <div>
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Shop
                    </h3>

                    <div className="flex flex-col items-start gap-3 text-(--text-muted)">
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            All Products
                        </a>
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            New Arrivals
                        </a>
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            Popular
                        </a>
                    </div>
                </div>


                {/* Support */}
                <div>
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Support
                    </h3>

                    <div className="flex flex-col items-start gap-3 text-(--text-muted)">
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            About Us
                        </a>
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            Contact
                        </a>
                        <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                            FAQ
                        </a>
                    </div>
                </div>


                {/* Socials */}
                <div>
                    <h3 className="font-space tracking-wider text-lg mb-4">
                        Follow Us
                    </h3>

                    <div className="flex items-center gap-2">

                        <a className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <Moon size={20} />
                        </a>

                        <a className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <Moon size={20} />
                        </a>

                        <a className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <Moon size={20} />
                        </a>

                        <a className="p-3 border border-(--border-color) rounded-xl hover:bg-(--hover-bg-color) transition-all duration-300 cursor-pointer">
                            <Moon size={20} />
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
                    <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                        Privacy Policy
                    </a>

                    <a className="hover:text-(--text-color) transition-all duration-500 ease-in-out font-space cursor-pointer">
                        Terms of Service
                    </a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;