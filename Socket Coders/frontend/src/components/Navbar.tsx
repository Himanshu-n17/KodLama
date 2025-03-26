import React, { useState } from "react";
import { Plane, Menu, X, User } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">TripMate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#hotels"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Hotels
            </a>
            <a
              href="#flights"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Flights
            </a>
            <a
              href="#cabs"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Cabs
            </a>
            <a
              href="#map"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Map
            </a>
          </div>

          {/* Desktop Profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Account</span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a
                    href="#profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="#bookings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    My Bookings
                  </a>
                  <a
                    href="#settings"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </a>
                  <hr className="my-2" />
                  <a
                    href="#logout"
                    className="block px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#hotels"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Hotels
              </a>
              <a
                href="#flights"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Flights
              </a>
              <a
                href="#cabs"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cabs
              </a>
              <a
                href="#map"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Map
              </a>
              <hr className="my-2" />
              <a
                href="#profile"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Profile
              </a>
              <a
                href="#bookings"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                My Bookings
              </a>
              <a
                href="#settings"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Settings
              </a>
              <a
                href="#logout"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                Logout
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
