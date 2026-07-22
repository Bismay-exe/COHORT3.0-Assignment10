import React from "react";
import { Code2, Paintbrush, Layers, Database, ShieldCheck, Zap, Server, Package } from "lucide-react";

const About = () => {
    return (
        <main className="flex-1 w-full bg-(--bg-color) text-(--text-color) pb-24">
            
            {/* Hero Section */}
            <section className="relative px-4 md:px-8 pt-16 md:pt-24 pb-16 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-(--text-color) opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
                
                <div className="max-w-[1920px] mx-auto text-center">
                    <p className="font-space text-sm uppercase tracking-[0.3em] text-(--text-muted) mb-4">
                        Documentation
                    </p>
                    <h1 className="font-inter text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
                        About <span className="font-instrument italic text-(--text-muted)">SkyMart</span>
                    </h1>
                    <p className="font-space text-base md:text-lg text-(--text-muted) max-w-2xl mx-auto mt-8 leading-relaxed">
                        SkyMart is a premium, modern e-commerce web application built as part of the COHORT 3.0 curriculum. It features cutting-edge design paradigms, robust data routing, and seamless global state management.
                    </p>
                </div>
            </section>

            {/* Content Wrapper */}
            <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-24">
                
                {/* Tech Stack */}
                <section>
                    <div className="flex items-center gap-4 mb-8 border-b border-(--border-color) pb-4">
                        <Code2 size={28} className="text-(--text-muted)" />
                        <h2 className="font-inter text-3xl font-semibold tracking-tight">Core Technologies</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 rounded-3xl border border-(--border-color) bg-linear-to-br from-(--bg-secondary-color) to-transparent hover:border-(--text-color) transition-colors">
                            <h3 className="font-inter text-xl font-medium mb-3">React 18</h3>
                            <p className="font-space text-sm leading-relaxed text-(--text-muted)">
                                Component-driven architecture utilizing functional components and hooks for reactive, modern UI development.
                            </p>
                        </div>
                        
                        <div className="p-6 rounded-3xl border border-(--border-color) bg-linear-to-br from-(--bg-secondary-color) to-transparent hover:border-(--text-color) transition-colors">
                            <Layers className="mb-4 text-(--text-muted)" size={24} />
                            <h3 className="font-inter text-xl font-medium mb-3">React Router v6</h3>
                            <p className="font-space text-sm leading-relaxed text-(--text-muted)">
                                Implements the new <code className="bg-(--bg-color) px-2 py-1 rounded-md text-xs">createBrowserRouter</code> data API for nested layouts, protected routes, and scroll restoration.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl border border-(--border-color) bg-linear-to-br from-(--bg-secondary-color) to-transparent hover:border-(--text-color) transition-colors">
                            <Paintbrush className="mb-4 text-(--text-muted)" size={24} />
                            <h3 className="font-inter text-xl font-medium mb-3">TailwindCSS</h3>
                            <p className="font-space text-sm leading-relaxed text-(--text-muted)">
                                Utility-first CSS framework styled with custom CSS variables to support dynamic themes and a premium glassmorphism aesthetic.
                            </p>
                        </div>
                        
                        <div className="p-6 rounded-3xl border border-(--border-color) bg-linear-to-br from-(--bg-secondary-color) to-transparent hover:border-(--text-color) transition-colors">
                            <Server className="mb-4 text-(--text-muted)" size={24} />
                            <h3 className="font-inter text-xl font-medium mb-3">DummyJSON API</h3>
                            <p className="font-space text-sm leading-relaxed text-(--text-muted)">
                                Fetches realistic product data, categories, ratings, and reviews dynamically via Axios.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Features */}
                <section>
                    <div className="flex items-center gap-4 mb-8 border-b border-(--border-color) pb-4">
                        <Zap size={28} className="text-(--text-muted)" />
                        <h2 className="font-inter text-3xl font-semibold tracking-tight">Key Features</h2>
                    </div>

                    <div className="space-y-6">
                        <div className="flex gap-6 items-start p-6 rounded-3xl border border-(--border-color) bg-(--bg-secondary-color)/30">
                            <ShieldCheck size={32} className="text-(--text-muted) shrink-0 mt-1" />
                            <div>
                                <h3 className="font-inter text-xl font-medium mb-2">Authentication & Route Protection</h3>
                                <p className="font-space text-sm text-(--text-muted) leading-relaxed">
                                    The application enforces authenticated sessions. Public routes (`/auth/*`) display the login and registration layouts, while the main store (`/*`) requires authorization via the <code className="bg-(--bg-color) border border-(--border-color) px-1 rounded">ProtectedRoute</code> wrapper.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-6 rounded-3xl border border-(--border-color) bg-(--bg-secondary-color)/30">
                            <Database size={32} className="text-(--text-muted) shrink-0 mt-1" />
                            <div>
                                <h3 className="font-inter text-xl font-medium mb-2">Per-User Data Persistence</h3>
                                <p className="font-space text-sm text-(--text-muted) leading-relaxed">
                                    State is globally managed using React Context (`AuthContext` and `MyContext`). Cart items and wishlist data are saved natively directly inside the active user's JSON object and synced to `localStorage`, meaning every registered account retains its own private data across sessions.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start p-6 rounded-3xl border border-(--border-color) bg-(--bg-secondary-color)/30">
                            <Package size={32} className="text-(--text-muted) shrink-0 mt-1" />
                            <div>
                                <h3 className="font-inter text-xl font-medium mb-2">Dynamic Filtering & Sorting</h3>
                                <p className="font-space text-sm text-(--text-muted) leading-relaxed">
                                    The Products page handles multiple states simultaneously: keyword searching across titles and descriptions, category-based filtering tied to URL parameters, and multi-factor sorting (price, alphabetical, rating).
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Directory Structure */}
                <section>
                    <div className="flex items-center gap-4 mb-8 border-b border-(--border-color) pb-4">
                        <Layers size={28} className="text-(--text-muted)" />
                        <h2 className="font-inter text-3xl font-semibold tracking-tight">Project Architecture</h2>
                    </div>

                    <div className="bg-(--bg-secondary-color)/50 rounded-3xl p-6 md:p-10 border border-(--border-color) font-space text-sm leading-8 overflow-x-auto text-(--text-muted)">
                        <pre className="text-(--text-color)">
{`src/
 ├── components/       # Reusable UI parts (Navbar, ProductCards, Footer)
 ├── contexts/         # Global State (AuthContext, MyContext, ThemeContext)
 ├── hooks/            # Custom Hooks (useAuth for login/registration)
 ├── layouts/          # Route Wrappers (MainLayout, AuthLayout)
 ├── pages/            # View Routes (Home, Products, Login, Register, About)
 ├── routes/           # Router Setup (AppRoutes, ProtectedRoute, PublicRoute)
 ├── sections/home/    # Homepage specific block components
 ├── main.jsx          # Application Entry Point & Provider Hierarchy
 └── index.css         # Global Styles & Custom CSS Variables`}
                        </pre>
                    </div>
                </section>

                <div className="pt-12 text-center">
                    <p className="font-space text-xs uppercase tracking-[0.2em] text-(--text-muted)">
                        Built with passion for COHORT 3.0
                    </p>
                </div>
                
            </div>
        </main>
    );
};

export default About;
