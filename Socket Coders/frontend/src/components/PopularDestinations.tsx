import React from 'react';

const destinations = [
  {
    id: 1,
    name: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80&w=1200',
    price: '$899',
  },
  {
    id: 2,
    name: 'Santorini',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1200',
    price: '$799',
  },
  {
    id: 3,
    name: 'Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1200',
    price: '$699',
  },
];

const PopularDestinations = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Popular Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                <p className="text-white/90">Starting from {destination.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;