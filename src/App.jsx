import { BrowserRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./Components/AboutUs/AboutUs";
import Complaintfile from "./Components/ComplaintSection/Complaintfile";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import Login from "./Components/LogIn/Login";
import Register from "./Components/LogIn/Register";
import Dashboard from "./Components/Dashboard/Dashboard";

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

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<AboutUs />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}
