import { BrowserRouter, Route, Routes } from "react-router-dom";

import Complaintfile from "./Components/ComplaintSection/Complaintfile";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero/HeroSection";
import Login from "./Components/LogIn/Login";

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
      </Routes>
    </BrowserRouter>
  );
}
