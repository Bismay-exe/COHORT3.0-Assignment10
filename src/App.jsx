import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";

const App = () => {

  return (
    <main className="min-h-screen w-full bg-(--bg-color) flex flex-col items-center">
      <Navbar />
      <AppRoutes />
      <Footer />
    </main>
  );
};

export default App;
