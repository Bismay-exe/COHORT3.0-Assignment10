import React from "react";
import { useNavigate } from "react-router";
import { 
    Package, 
    Users, 
    Star, 
    Truck, 
    ShieldCheck, 
    Zap, 
    Award,
    ChevronRight
} from "lucide-react";

const About = () => {
    const navigate = useNavigate();

    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color)">
            
            {/* Professional Hero Section */}
            <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-4 md:px-8 text-center max-w-5xl mx-auto">
                <h1 className="font-inter text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-[-0.04em] leading-[1.05] text-(--text-color) mb-8">
                    Redefining the standard <br className="hidden md:block" />
                    for modern commerce.
                </h1>
                <p className="font-inter text-lg md:text-2xl font-medium text-(--text-muted) leading-snug tracking-tight max-w-3xl mx-auto">
                    SkyMart is a technology-driven retail platform. We combine uncompromising engineering with streamlined logistics to deliver a seamless shopping experience.
                </p>
            </section>

            {/* Pure Typography Stats (Borderless) */}
            <section className="py-16 md:py-24 bg-(--bg-secondary-color)">
                <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-inter text-5xl md:text-7xl font-semibold tracking-tighter text-(--text-color) mb-2">20K+</p>
                        <span className="font-space text-xs md:text-sm text-(--text-muted) uppercase tracking-widest font-bold">Products</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-inter text-5xl md:text-7xl font-semibold tracking-tighter text-(--text-color) mb-2">50K+</p>
                        <span className="font-space text-xs md:text-sm text-(--text-muted) uppercase tracking-widest font-bold">Clients</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-inter text-5xl md:text-7xl font-semibold tracking-tighter text-(--text-color) mb-2">4.9</p>
                        <span className="font-space text-xs md:text-sm text-(--text-muted) uppercase tracking-widest font-bold">Avg Rating</span>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-inter text-5xl md:text-7xl font-semibold tracking-tighter text-(--text-color) mb-2">99%</p>
                        <span className="font-space text-xs md:text-sm text-(--text-muted) uppercase tracking-widest font-bold">Fulfillment</span>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="font-inter text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-(--text-color)">
                        Built on precision.
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20">
                    {/* Principle 1 */}
                    <div className="flex flex-col items-start">
                        <ShieldCheck size={32} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <h3 className="font-inter text-2xl font-semibold tracking-tight mb-4">Uncompromising Quality</h3>
                        <p className="font-inter text-(--text-muted) leading-relaxed">
                            Every product in our ecosystem undergoes rigorous verification. We maintain strict partnerships to ensure everything we list meets enterprise-grade standards.
                        </p>
                    </div>
                    
                    {/* Principle 2 */}
                    <div className="flex flex-col items-start">
                        <Zap size={32} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <h3 className="font-inter text-2xl font-semibold tracking-tight mb-4">Operational Velocity</h3>
                        <p className="font-inter text-(--text-muted) leading-relaxed">
                            Speed is a feature. Our proprietary logistics network is optimized to reduce friction, ensuring your orders are processed and delivered with industry-leading efficiency.
                        </p>
                    </div>
                    
                    {/* Principle 3 */}
                    <div className="flex flex-col items-start">
                        <Award size={32} className="text-(--text-color) mb-6" strokeWidth={1.5} />
                        <h3 className="font-inter text-2xl font-semibold tracking-tight mb-4">Client Centricity</h3>
                        <p className="font-inter text-(--text-muted) leading-relaxed">
                            We design our interfaces and policies around the end user. Transparent pricing, intuitive navigation, and a support infrastructure built to resolve issues instantly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Executive Leadership */}
            <section className="py-24 md:py-32 bg-(--bg-secondary-color)">
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 md:mb-24">
                        <h2 className="font-inter text-3xl md:text-5xl font-semibold tracking-[-0.04em] text-(--text-color)">
                            Leadership
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {/* Executive 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-(--bg-color) flex items-center justify-center mb-6 shadow-sm">
                                <img src="https://plus.unsplash.com/premium_vector-1727360201453-3c88c322a322?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-inter text-lg font-semibold tracking-tight text-(--text-color)">Bismay</h3>
                            <p className="font-space text-xs text-(--text-muted) uppercase tracking-widest mt-2">Founder & CEO</p>
                        </div>
                        {/* Executive 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-(--bg-color) flex items-center justify-center mb-6 shadow-sm">
                                <img src="https://images.unsplash.com/vector-1749532960819-52efc5526003?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-inter text-lg font-semibold tracking-tight text-(--text-color)">Priya Mehta</h3>
                            <p className="font-space text-xs text-(--text-muted) uppercase tracking-widest mt-2">Head of Product</p>
                        </div>
                        {/* Executive 3 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-(--bg-color) flex items-center justify-center mb-6 shadow-sm">
                                <img src="https://plus.unsplash.com/premium_vector-1741423989978-e35f01532dcf?q=80&w=722&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-inter text-lg font-semibold tracking-tight text-(--text-color)">Rohan Verma</h3>
                            <p className="font-space text-xs text-(--text-muted) uppercase tracking-widest mt-2">Lead Engineer</p>
                        </div>
                        {/* Executive 4 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-(--bg-color) flex items-center justify-center mb-6 shadow-sm">
                                <img src="https://plus.unsplash.com/premium_vector-1749377304804-d0bdbffa22ae?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="font-inter text-lg font-semibold tracking-tight text-(--text-color)">Sneha Kapoor</h3>
                            <p className="font-space text-xs text-(--text-muted) uppercase tracking-widest mt-2">Design Director</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Minimalist Call to Action */}
            <section className="py-32 md:py-48 px-4 md:px-8 text-center flex flex-col items-center justify-center">
                <h2 className="font-inter text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-(--text-color) mb-10">
                    Experience SkyMart.
                </h2>
                <button 
                    onClick={() => navigate('/products')}
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-(--text-color) text-(--bg-color) rounded-full font-inter font-medium text-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                    View Categories
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </section>
            
        </main>
    );
};

export default About;