import React from "react";
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const LandingPage = () => {
  // Mock data for featured packages
  const featuredPackages = [
    {
      id: 1,
      name: "Bali Paradise Escape",
      image: "/placeholder.svg?height=200&width=300",
      price: 1299,
      duration: "7 days",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Swiss Alps Adventure",
      image: "/placeholder.svg?height=200&width=300",
      price: 1899,
      duration: "8 days",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Tokyo City Explorer",
      image: "/placeholder.svg?height=200&width=300",
      price: 1599,
      duration: "6 days",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Egyptian Wonders",
      image: "/placeholder.svg?height=200&width=300",
      price: 1499,
      duration: "9 days",
      rating: 4.6,
    },
  ]

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=60&width=60",
      text: "The trip to Bali was absolutely amazing! Everything was well organized and the tour guide was knowledgeable and friendly.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "/placeholder.svg?height=60&width=60",
      text: "Our family trip to Europe was the best vacation we've ever had. The accommodations were excellent and the itinerary was perfect.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      image: "/placeholder.svg?height=60&width=60",
      text: "I was hesitant to book a solo trip, but TourEase made it so easy and safe. I had an incredible time in Japan!",
      rating: 4,
    },
  ]

  // Mock data for top destinations
  const topDestinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 4,
      name: "New York, USA",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 5,
      name: "Machu Picchu, Peru",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: 6,
      name: "Sydney, Australia",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isAuthenticated={false} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Discover the World with TourEase</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Book your dream vacation with our expertly curated tour packages. Adventure awaits!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/browse"
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition duration-300"
              >
                Browse Packages
              </Link>
              <Link
                to="/signup"
                className="px-8 py-3 bg-transparent border-2 border-white font-bold rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
              >
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tour Packages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gray-600">{pkg.duration}</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span>{pkg.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${pkg.price}</span>
                    <Link
                      to={`/package/${pkg.id}`}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/browse"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose TourEase?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-blue-600 flex justify-center">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">100% Secure Booking</h3>
              <p className="text-gray-600">
                Your payments are secure and your personal information is protected with our advanced security measures.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-blue-600 flex justify-center">💰</div>
              <h3 className="text-xl font-semibold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-600">
                We promise the best rates and will match any lower price you find elsewhere for the same package.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-blue-600 flex justify-center">🌟</div>
              <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
              <p className="text-gray-600">
                Our dedicated support team is available 24/7 to assist you before, during, and after your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Packages</h3>
              <p className="text-gray-600">Explore our wide range of tour packages to find your perfect vacation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Customize Your Trip</h3>
              <p className="text-gray-600">Select your preferred dates, group size, and any additional services.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">Complete your booking with our secure payment system.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Trip</h3>
              <p className="text-gray-600">Receive your itinerary and travel documents, then enjoy your adventure!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Top Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topDestinations.map((destination) => (
              <div key={destination.id} className="relative group overflow-hidden rounded-lg shadow-md">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-medium p-3">{destination.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get the latest travel deals, tips, and inspiration delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
