import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/image-removebg-preview_(2).png"
                alt="Ecostream Overseas"
                className="h-12 w-auto max-w-full"
              />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for international education and career opportunities. Operating since 2025, making global dreams come true.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61571648933638"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/ecostream_overseas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@JSRMCONSULTANCY"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Study Destinations</h4>
            <ul className="space-y-3 text-gray-400">
              <li>🇺🇸 United States</li>
              <li>🇬🇧 United Kingdom</li>
              <li>🇦🇺 Australia</li>
              <li>🇨🇾 Cyprus</li>
              <li>🇫🇷 France</li>
              <li>🇲🇹 Malta</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">Guntur & Hyderabad, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <div className="text-gray-400 text-sm">
                  <div>+91 93925 51473</div>
                  <div>+91 8019891808</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">support@ecostreamoverseas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              Copyright {new Date().getFullYear()} Ecostream Overseas. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
