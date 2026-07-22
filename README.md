# SkyMart ☁️🛍️

SkyMart is a premium, modern e-commerce web application built as part of the **COHORT 3.0** curriculum. It features a stunning glassmorphism design, robust data routing, seamless global state management, and per-user data persistence.

## ✨ Key Features

- **Authentication System**: Secure Login and Registration forms with validation powered by `react-hook-form`.
- **Protected Routing**: Utilizes React Router v6's `createBrowserRouter` to separate public authentication routes from the private store routes.
- **Per-User Data Persistence**: Cart items and wishlists are bound to specific accounts. Data is saved natively to `localStorage` meaning every user retains their own private data across sessions.
- **Dynamic Filtering & Sorting**: Robust product page allowing users to search by keyword, filter by categories, and sort by price, rating, or name.
- **Beautiful UI**: Highly customized UI utilizing TailwindCSS to create a stunning glassmorphism aesthetic with custom typography (`Inter`, `Space Grotesk`, `Instrument Serif`).
- **Real-Time Data**: Integrates seamlessly with the `DummyJSON` API to fetch real products, categories, reviews, and stock information.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) (Vite)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Routing**: [React Router v6](https://reactrouter.com/en/main) (Data Router API)
- **State Management**: React Context API (`AuthContext`, `MyContext`)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **API**: [DummyJSON](https://dummyjson.com/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository** (if applicable) or download the source code:
   ```bash
   git clone https://github.com/Bismay-exe/COHORT3.0-Assignment10.git
   cd COHORT3.0-Assignment10
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📁 Project Architecture

The application is structured for scalability and maintainability:

```text
src/
 ├── components/       # Reusable UI parts (Navbar, ProductCards, Footer)
 ├── contexts/         # Global State (AuthContext, MyContext, ThemeContext)
 ├── hooks/            # Custom Hooks (useAuth for login/registration logic)
 ├── layouts/          # Route Wrappers (MainLayout for the store, AuthLayout for login/register)
 ├── pages/            # View Routes (Home, Products, Login, Register, About, ProductDetails)
 ├── routes/           # Router Setup (AppRoutes, ProtectedRoute, PublicRoute)
 ├── sections/home/    # Homepage specific block components (Hero, TopRated, Categories)
 ├── main.jsx          # Application Entry Point & Provider Hierarchy
 └── index.css         # Global Styles & Custom CSS Variables
```

## 🔐 Routing Structure

SkyMart utilizes a modern nested routing architecture:
- `/auth/login` and `/auth/register` are wrapped in a **PublicRoute** (redirects logged-in users to the store).
- `/`, `/products`, `/products/:id`, and `/wishlist` are wrapped in a **ProtectedRoute** (redirects logged-out users to the login screen).

## 💾 Local Storage Schema

User data is stored safely in the browser's `localStorage` to ensure persistence across sessions. 

- `registeredUsers`: An array of user objects containing credentials, carts, and wishlists.
- `loggedinUser`: The actively authenticated user object.

*When a user adds an item to their cart or wishlist, it directly updates the specific user object inside both keys.*

---
*Built with passion for COHORT 3.0*
