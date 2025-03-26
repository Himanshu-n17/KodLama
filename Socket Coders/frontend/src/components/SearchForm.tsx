import React, { useState } from 'react';
import { Calendar, MapPin, Users, Plane, Car, Building, DollarSign, Filter } from 'lucide-react';
import { format } from 'date-fns';

type SearchType = 'hotels' | 'flights' | 'cabs';

type BudgetRange = {
  min: number;
  max: number;
};

const budgetRanges = {
  hotels: [
    { min: 0, max: 100, label: 'Under $100' },
    { min: 100, max: 200, label: '$100 - $200' },
    { min: 200, max: 500, label: '$200 - $500' },
    { min: 500, max: 99999, label: '$500+' }
  ],
  flights: [
    { min: 0, max: 300, label: 'Under $300' },
    { min: 300, max: 600, label: '$300 - $600' },
    { min: 600, max: 1000, label: '$600 - $1000' },
    { min: 1000, max: 99999, label: '$1000+' }
  ],
  cabs: [
    { min: 0, max: 20, label: 'Under $20' },
    { min: 20, max: 50, label: '$20 - $50' },
    { min: 50, max: 100, label: '$50 - $100' },
    { min: 100, max: 99999, label: '$100+' }
  ]
};

export default function SearchForm() {
  const [searchType, setSearchType] = useState<SearchType>('hotels');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<BudgetRange | null>(null);
  const [amenities, setAmenities] = useState<string[]>([]);
  
  const handleAmenityToggle = (amenity: string) => {
    setAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
      <div className="flex gap-4 mb-6">
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            searchType === 'hotels' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('hotels')}
        >
          <Building size={20} />
          Hotels
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            searchType === 'flights' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('flights')}
        >
          <Plane size={20} />
          Flights
        </button>
        <button
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            searchType === 'cabs' ? 'bg-blue-500 text-white' : 'bg-gray-100'
          }`}
          onClick={() => setSearchType('cabs')}
        >
          <Car size={20} />
          Cabs
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Where are you going?"
              className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue={format(new Date(), 'yyyy-MM-dd')}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="date"
              className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              defaultValue={format(new Date().setDate(new Date().getDate() + 1), 'yyyy-MM-dd')}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 text-gray-400" size={20} />
            <select className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      {/* Budget and Filters Section */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {budgetRanges[searchType].map((range) => (
              <button
                key={range.label}
                onClick={() => setSelectedBudget(range)}
                className={`p-2 text-sm rounded-lg border transition-colors ${
                  selectedBudget === range
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'border-gray-200 hover:border-blue-500'
                }`}
              >
                {range.label}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:border-blue-500"
        >
          <Filter size={20} />
          Filters
        </button>
      </div>

      {/* Additional Filters */}
      {showFilters && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <h3 className="font-medium mb-3">Additional Filters</h3>
          {searchType === 'hotels' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['WiFi', 'Pool', 'Parking', 'Restaurant', 'Gym', 'Spa', 'Pet Friendly', 'Beach Access'].map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                    amenities.includes(amenity)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={amenities.includes(amenity)}
                    onChange={() => handleAmenityToggle(amenity)}
                  />
                  {amenity}
                </label>
              ))}
            </div>
          )}
          {searchType === 'flights' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Direct Only', 'Morning', 'Afternoon', 'Evening', 'Refundable', 'Business Class', 'First Class'].map((filter) => (
                <label
                  key={filter}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                    amenities.includes(filter)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={amenities.includes(filter)}
                    onChange={() => handleAmenityToggle(filter)}
                  />
                  {filter}
                </label>
              ))}
            </div>
          )}
          {searchType === 'cabs' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['SUV', 'Sedan', 'Luxury', 'Electric', 'Child Seat', 'Pet Friendly', 'Wheelchair Access'].map((filter) => (
                <label
                  key={filter}
                  className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                    amenities.includes(filter)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                >
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={amenities.includes(filter)}
                    onChange={() => handleAmenityToggle(filter)}
                  />
                  {filter}
                </label>
              ))}
            </div>
          )}
        </div>
      )}

      <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors">
        Search {searchType.charAt(0).toUpperCase() + searchType.slice(1)}
      </button>
    </div>
  );
}