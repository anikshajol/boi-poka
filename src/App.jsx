import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="w-[90%] mx-auto px-2 min-h-[calc(100vh-72px-52px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
