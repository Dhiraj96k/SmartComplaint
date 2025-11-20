import { BrowserRouter, Route, Routes } from "react-router-dom";

import Complaintfile from "./Components/ComplaintSection/Complaintfile";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import Login from "./Components/LogIn/Login";
import Register from "./Components/LogIn/Register";
import AboutUs from "./Components/AboutUs/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <HeroSection />
              <Complaintfile />
              <Footer />
            </>
          }
        />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<AboutUs />} />

      </Routes>
    </BrowserRouter>
  );
}
