import React from "react";

import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Profile = ({ onLogout }) => {
  // Tabs
  const [activeTab, setActiveTab] = useState("profile")

  // Mock user data
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Travel Street, Adventure City, AC 12345",
    gstNumber: "",
    darkMode: false,
    emailNotifications: true,
    clearSearchHistory: false,
  })

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would update the user's profile
    alert("Profile updated successfully!")
  }

  // Mock trip data for insights
  const tripData = {
    totalTrips: 5,
    totalSpent: 7495,
    favoriteCategory: "Beach",
    moneySaved: 1250,
    tripsByCategory: [
      { category: "Beach", count: 2 },
      { category: "Mountain", count: 1 },
      { category: "City", count: 1 },
      { category: "Cultural", count: 1 },
    ],
    popularDestinations: [
      { destination: "Bali", percentage: 40 },
      { destination: "Switzerland", percentage: 25 },
      { destination: "Tokyo", percentage: 20 },
      { destination: "Egypt", percentage: 15 },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} onLogout={onLogout} />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ₹{
                    activeTab === "profile"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Profile & Settings
                </button>
                <button
                  onClick={() => setActiveTab("insights")}
                  className={`py-4 px-6 text-center border-b-2 font-medium text-sm ₹{
                    activeTab === "insights"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  Travel Insights
                </button>
              </nav>
            </div>

            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userData.name}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userData.email}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userData.phone}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Address
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userData.address}
                            onChange={handleInputChange}
                          ></textarea>
                        </div>

                        <div>
                          <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            GST Number (Optional)
                          </label>
                          <input
                            type="text"
                            id="gstNumber"
                            name="gstNumber"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={userData.gstNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-4">Preferences</h2>

                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Dark Mode</span>
                          <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                            <input
                              type="checkbox"
                              id="darkMode"
                              name="darkMode"
                              className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-blue-600 checked:bg-blue-600"
                              checked={userData.darkMode}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="darkMode"
                              className="block w-full h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-blue-300"
                            ></label>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                          <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full">
                            <input
                              type="checkbox"
                              id="emailNotifications"
                              name="emailNotifications"
                              className="absolute w-6 h-6 transition duration-200 ease-in-out transform bg-white border rounded-full appearance-none cursor-pointer peer border-gray-300 checked:right-0 checked:border-blue-600 checked:bg-blue-600"
                              checked={userData.emailNotifications}
                              onChange={handleInputChange}
                            />
                            <label
                              htmlFor="emailNotifications"
                              className="block w-full h-full overflow-hidden rounded-full cursor-pointer bg-gray-300 peer-checked:bg-blue-300"
                            ></label>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-red-600 bg-white border border-red-600 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to clear your search history?")) {
                                setUserData({ ...userData, clearSearchHistory: true })
                                alert("Search history cleared!")
                              }
                            }}
                          >
                            Clear Search History
                          </button>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <button
                            type="button"
                            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            onClick={() => {
                              if (window.confirm("Are you sure you want to log out?")) {
                                onLogout()
                              }
                            }}
                          >
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Insights Tab */}
            {activeTab === "insights" && (
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6">Your Travel Insights</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600 font-medium">Total Trips</p>
                    <p className="text-2xl font-bold text-blue-700">{tripData.totalTrips}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600 font-medium">Total Spent</p>
                    <p className="text-2xl font-bold text-green-700">₹{tripData.totalSpent}</p>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600 font-medium">Favorite Category</p>
                    <p className="text-2xl font-bold text-purple-700">{tripData.favoriteCategory}</p>
                  </div>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="text-sm text-pink-600 font-medium">Money Saved</p>
                    <p className="text-2xl font-bold text-pink-700">₹{tripData.moneySaved}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Bar Chart: Trips by Category */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Trips by Category</h3>
                    <div className="space-y-4">
                      {tripData.tripsByCategory.map((item, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium text-gray-700">{item.category}</span>
                            <span className="text-sm text-gray-600">{item.count}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `₹{(item.count / tripData.totalTrips) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pie Chart: Popular Destinations */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
                    <div className="flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        {/* Simple pie chart visualization */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                          <div
                            className="absolute bg-blue-500"
                            style={{
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              clipPath: `polygon(50% 50%, 50% 0%, ₹{50 + 50 * Math.cos((tripData.popularDestinations[0].percentage * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin((tripData.popularDestinations[0].percentage * 3.6 * Math.PI) / 180)}%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)`,
                            }}
                          ></div>
                          <div
                            className="absolute bg-green-500"
                            style={{
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              clipPath: `polygon(50% 50%, ₹{50 + 50 * Math.cos((tripData.popularDestinations[0].percentage * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin((tripData.popularDestinations[0].percentage * 3.6 * Math.PI) / 180)}%, ₹{50 + 50 * Math.cos(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage) * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage) * 3.6 * Math.PI) / 180)}%, 100% 100%, 0% 100%)`,
                            }}
                          ></div>
                          <div
                            className="absolute bg-purple-500"
                            style={{
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              clipPath: `polygon(50% 50%, ₹{50 + 50 * Math.cos(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage) * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage) * 3.6 * Math.PI) / 180)}%, ₹{50 + 50 * Math.cos(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage + tripData.popularDestinations[2].percentage) * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage + tripData.popularDestinations[2].percentage) * 3.6 * Math.PI) / 180)}%, 0% 100%)`,
                            }}
                          ></div>
                          <div
                            className="absolute bg-yellow-500"
                            style={{
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              clipPath: `polygon(50% 50%, ₹{50 + 50 * Math.cos(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage + tripData.popularDestinations[2].percentage) * 3.6 * Math.PI) / 180)}% ₹{50 - 50 * Math.sin(((tripData.popularDestinations[0].percentage + tripData.popularDestinations[1].percentage + tripData.popularDestinations[2].percentage) * 3.6 * Math.PI) / 180)}%, 0% 0%)`,
                            }}
                          ></div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-24 h-24 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {tripData.popularDestinations.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className={`w-3 h-3 rounded-full mr-2 ₹{
                              index === 0
                                ? "bg-blue-500"
                                : index === 1
                                  ? "bg-green-500"
                                  : index === 2
                                    ? "bg-purple-500"
                                    : "bg-yellow-500"
                            }`}
                          ></div>
                          <span className="text-sm text-gray-700">
                            {item.destination} ({item.percentage}%)
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Profile
