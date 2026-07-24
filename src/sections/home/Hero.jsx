import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative pt-22 pb-12 md:pt-18 md:pb-18 xl:pt-24 xl:pb-24 overflow-hidden zborder-b border-(--border-color)">
            {/* Background */}
            <div className="@container w-full h-full flex justify-center items-center pointer-events-none">
                <div className="font-inter text-[26cqw] leading-none tracking-wide text-(--text-color)">
                    SkyMart
                </div>
            </div>

            <div className="absolute inset-0 flex justify-evenly items-center gap-5 pt-12 pb-0 md:pt-12 md:pb-12 @container">
                {/* Card 1 */}
                <div className="h-full w-full flex justify-center items-start">
                    <div
                        onClick={() => navigate("/products?category=mens-shoes")}
                        className="group relative flex flex-col w-[20cqw] sm:w-[16cqw] md:w-[14cqw] -rotate-6 hover:rotate-6 transition-all duration-500 ease-in-out rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-(--bg-secondary-color) aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                alt="Sneakers"
                            />
                        </div>

                        <div className="absolute bottom-0 hidden md:flex flex-col p-2 bg-linear-to-b from-black/0 to-black/80 w-full">
                            <h3 className="font-inter text-xl font-semibold text-white tracking-tight">
                                Sneakers
                            </h3>
                            <p className="font-space text-sm text-white/55">
                                Everyday essentials.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex justify-center items-end">
                    <div
                        onClick={() => navigate("/products?category=smartphones")}
                        className="group relative flex flex-col w-[20cqw] sm:w-[16cqw] md:w-[14cqw] rotate-6 hover:-rotate-6 transition-all duration-500 ease-in-out rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-(--bg-secondary-color) aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1749716491521-af90e3b6feb6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                alt="Smartphone"
                            />
                        </div>

                        <div className="absolute bottom-0 hidden md:flex flex-col p-2 bg-linear-to-b from-black/0 to-black/80 w-full">
                            <h3 className="font-inter text-xl font-semibold text-white tracking-tight">
                                Smartphone
                            </h3>
                            <p className="font-space text-sm text-white/55">
                                Pro camera system.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-full w-full flex justify-center items-start">
                    <div
                        onClick={() => navigate("/products?category=mens-watches")}
                        className="group relative flex flex-col w-[20cqw] sm:w-[16cqw] md:w-[14cqw] -rotate-6 hover:rotate-6 transition-all duration-500 ease-in-out rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                    >
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl bg-(--bg-secondary-color) aspect-square">
                            <img
                                src="https://images.unsplash.com/photo-1637160151663-a410315e4e75?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                alt="Smartwatch"
                            />
                        </div>

                        <div className="absolute bottom-0 hidden md:flex flex-col p-2 bg-linear-to-b from-black/0 to-black/80 w-full">
                            <h3 className="font-inter text-xl font-semibold text-white tracking-tight">
                                Smartwatch
                            </h3>
                            <p className="font-space text-sm text-white/55">
                                Health on your wrist.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
