import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import ImageUploader from "@/components/ImageUploader";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Pricing from "@/pages/Pricing";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Account from "@/pages/Account";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imageuploader" element={<ImageUploader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
