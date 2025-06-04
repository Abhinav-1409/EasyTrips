import React from "react"
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import BrowsePackages from "./pages/BrowsePackages"
import Wishlist from "./pages/Wishlist"
import Saved from "./pages/Saved"
import Checkout from "./pages/Checkout"
import MyOrders from "./pages/MyOrders"
import Profile from "./pages/Profile"
import Feedback from "./pages/Feedback"
import Notifications from "./pages/Notifications"
import PackageDetails from "./pages/PackageDetails"
import ProtectedRoute from './components/ProtectedRoutes'
import "./App.css"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => {
    setIsAuthenticated(true)
  }

  const logout = () => {
    setIsAuthenticated(false)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/signup" element={<Signup onSignup={login} />} />
        <Route path="/package/:id" element={<PackageDetails />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/browse"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <BrowsePackages />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/saved"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Saved />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile onLogout={logout} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback/:orderId"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Feedback />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Notifications />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
