import React, { useState } from 'react';
import { Search, Calendar, Clock, MapPin, DollarSign, Car, Users } from 'lucide-react';
import { format } from 'date-fns';

interface CabSearchProps {}

const CabSearch: React.FC<CabSearchProps> = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: format(new Date(), 'yyyy-MM-dd'),
    time: format(new Date(), 'HH:mm'),
    passengers: '1',
    carType: 'standard',
    budget: ''
  });

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock results
      setSearchResults([
        {
          id: 1,
          type: 'Standard Sedan',
          price: 45,
          rating: 4.5,
          estimatedTime: '15 mins',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=300'
        },
        {
          id: 2,
          type: 'Premium SUV',
          price: 75,
          rating: 4.8,
          estimatedTime: '12 mins',
          image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=300'
        },
        {
          id: 3,
          type: 'Luxury Sedan',
          price: 95,
          rating: 4.9,
          estimatedTime: '10 mins',
          image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=300'
        }
      ]);
    } catch (error) {
      console.error('Error searching for cabs:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="pickup"
            value={formData.pickup}
            onChange={handleChange}
            placeholder="Pickup Location"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="dropoff"
            value={formData.dropoff}
            onChange={handleChange}
            placeholder="Drop-off Location"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={format(new Date(), 'yyyy-MM-dd')}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            name="passengers"
            value={formData.passengers}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} Passenger{num !== 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <Car className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="suv">SUV</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isSearching}
          className="md:col-span-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? (
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span>{isSearching ? 'Searching...' : 'Search Cabs'}</span>
        </button>
      </form>

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Available Cabs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {searchResults.map((cab) => (
              <div key={cab.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={cab.image} alt={cab.type} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{cab.type}</h4>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Price:</span>
                      <span className="font-semibold">${cab.price}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Rating:</span>
                      <span className="font-semibold">{cab.rating} ⭐</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Estimated arrival:</span>
                      <span className="font-semibold">{cab.estimatedTime}</span>
                    </div>
                  </div>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CabSearch;