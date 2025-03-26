import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, DollarSign } from 'lucide-react';

const SearchBar = () => {
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('1 Guest');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      location,
      date,
      guests,
      budget
    });
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex-1 relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where are you going?"
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex-1 relative">
        <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex-1 relative">
        <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
          <option>4+ Guests</option>
        </select>
      </div>

      <div className="flex-1 relative">
        <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <select
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
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
        className="flex-none px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;