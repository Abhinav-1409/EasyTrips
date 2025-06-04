import React from "react";
import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Saved = () => {
  // Mock data for saved items
  const [savedItems, setSavedItems] = useState([
    {
      id: 2,
      name: "Swiss Alps Adventure",
      image: "/placeholder.svg?height=200&width=300",
      price: 1899,
      duration: "8 days",
      rating: 4.9,
      bestTime: "Jun-Sep",
    },
    {
      id: 4,
      name: "Egyptian Wonders",
      image: "/placeholder.svg?height=200&width=300",
      price: 1499,
      duration: "9 days",
      rating: 4.6,
      bestTime: "Oct-Apr",
    },
    {
      id: 8,
      name: "Safari in Tanzania",
      image: "/placeholder.svg?height=200&width=300",
      price: 2499,
      duration: "10 days",
      rating: 4.9,
      bestTime: "Jun-Oct",
    },
  ])

  // Remove from saved
  const removeFromSaved = (id) => {
    setSavedItems(savedItems.filter((item) => item.id !== id))
  }

  // Move to wishlist
  const moveToWishlist = (id) => {
    // In a real app, this would call an API to update the user's wishlist
    // For now, we'll just remove it from saved
    removeFromSaved(id)
    // Show a success message (in a real app)
    alert("Package moved to Wishlist")
  }

  // Proceed to checkout
  const proceedToCheckout = (id) => {
    // Navigate to checkout page with the package id
    window.location.href = `/checkout?package=${id}`
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={true} />

      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Saved Packages</h1>

          {savedItems.length > 0 ? (
            <div className="space-y-6">
              {savedItems.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:w-48"
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                      />
                    </div>
                    <div className="p-6 w-full">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                          <div className="flex items-center mb-2">
                            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span>{item.rating}</span>
                          </div>
                          <p className="text-gray-600 mb-2">Duration: {item.duration}</p>
                          <p className="text-gray-600">Best time to visit: {item.bestTime}</p>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <p className="text-2xl font-bold text-blue-600 mb-4">${item.price}</p>
                          <div className="flex flex-col space-y-2">
                            <button
                              onClick={() => proceedToCheckout(item.id)}
                              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                            >
                              Book Now
                            </button>
                            <div className="flex justify-end space-x-2">
                              <button
                                onClick={() => moveToWishlist(item.id)}
                                className="px-3 py-1 text-sm border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition duration-300"
                              >
                                Move to Wishlist
                              </button>
                              <button
                                onClick={() => removeFromSaved(item.id)}
                                className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded-md hover:bg-red-50 transition duration-300"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-5xl mb-4">📋</div>
              <h2 className="text-2xl font-semibold mb-4">No saved packages</h2>
              <p className="text-gray-600 mb-6">
                Save your favorite packages for later to quickly find and book them when you're ready.
              </p>
              <Link
                to="/browse"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-300"
              >
                Browse Packages
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Saved
