import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

export default function Destinations() {
  const navigate = useNavigate();

  const destinations = [
    {
      country: 'USA',
      image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'World-class universities and diverse opportunities',
      highlights: ['Top Rankings', 'Research Focus', 'Global Recognition'],
    },
    {
      country: 'UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Historic institutions with academic excellence',
      highlights: ['Rich Heritage', 'Quality Education', 'Career Growth'],
    },
    {
      country: 'Canada',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Safe, welcoming environment with quality education',
      highlights: ['Immigration Path', 'Affordable Fees', 'Multicultural'],
    },
    {
      country: 'Australia',
      image: 'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Innovative programs with work opportunities',
      highlights: ['Work Rights', 'High Quality', 'Great Lifestyle'],
    },
    {
      country: 'Germany',
      image: 'https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Low tuition fees with strong industrial connections',
      highlights: ['Low Cost', 'Engineering Hub', 'EU Access'],
    },
    {
      country: 'New Zealand',
      image: 'https://images.pexels.com/photos/1006965/pexels-photo-1006965.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Quality education in stunning natural surroundings',
      highlights: ['Beautiful Nature', 'Safe Country', 'Work Options'],
    },
    {
      country: 'Ireland',
      image: 'https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tech hub with friendly culture and opportunities',
      highlights: ['Tech Industry', 'English Speaking', 'EU Member'],
    },
    {
      country: 'Singapore',
      image: 'https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Asian gateway with world-class institutions',
      highlights: ['Asian Hub', 'Safe City', 'Career Focus'],
    },
  ];

  return (
    <section id="destinations" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Study Destinations
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore top study destinations around the world and find the perfect country for your educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.country}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.country}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-2xl font-bold leading-none">{destination.country}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 min-h-[3rem]">
                  {destination.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {destination.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => navigate(`/destination/${destination.country.toLowerCase()}`)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center group"
                >
                  Get More Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
