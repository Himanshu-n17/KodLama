import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, DollarSign, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface FlightSearchProps {}

const FlightSearch: React.FC<FlightSearchProps> = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    class: 'economy',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Flight Search:', formData);
    // Here you would typically make an API call to search for flights
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="From"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          name="to"
          value={formData.to}
          onChange={handleChange}
          placeholder="To"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          name="departDate"
          value={formData.departDate}
          onChange={handleChange}
          min={format(new Date(), 'yyyy-MM-dd')}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          name="returnDate"
          value={formData.returnDate}
          onChange={handleChange}
          min={formData.departDate || format(new Date(), 'yyyy-MM-dd')}
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
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} Passenger{num !== 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>

      <div className="relative">
        <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Budget</option>
          <option value="0-500">$0 - $500</option>
          <option value="501-1000">$501 - $1000</option>
          <option value="1001-2000">$1001 - $2000</option>
          <option value="2000+">$2000+</option>
        </select>
      </div>

      <button
        type="submit"
        className="md:col-span-3 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Search className="h-5 w-5" />
        <span>Search Flights</span>
      </button>
    </form>
  );
};

export default FlightSearch