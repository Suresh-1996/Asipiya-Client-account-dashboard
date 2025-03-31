import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Overview from "./pages/Overview"
import Register from "./pages/Register"
import PaymentMethods from "./pages/PaymentMethods"
import ProductsNBilling from "./pages/ProductsNBilling"
import Documents from "./pages/Documents"
import ProfileModal from "./components/ProfileModal"
import SignInSecurity from "./pages/SignNSecurity"
import DataPrivacySection from "./pages/DataNPrivacy"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import AuthCallback from "./pages/AuthCallback"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth-callback" element={<AuthCallback />} />

          {/* Protected routes */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <DashboardLayout
                  isProfileModalOpen={isProfileModalOpen}
                  setIsProfileModalOpen={setIsProfileModalOpen}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

// Dashboard layout component
const DashboardLayout = ({ isProfileModalOpen, setIsProfileModalOpen }) => {
  const username = "Hashara"

  return (
    <div className="flex h-screen flex-col">
      {/* Navbar */}
      <Navbar
        username={username}
        setIsProfileModalOpen={setIsProfileModalOpen}
        isProfileModalOpen={isProfileModalOpen}
      />
      <div className="flex flex-1 overflow-hidden pt-14">
        {/* Sidebar */}
        <Sidebar />

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/signin-security" element={<SignInSecurity />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/data-privacy" element={<DataPrivacySection />} />
            <Route path="/products-billing" element={<ProductsNBilling />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
      {/* Profile Modal */}
      {isProfileModalOpen && (
        <ProfileModal onClose={() => setIsProfileModalOpen(false)} />
      )}
    </div>
  )
}

export default App
