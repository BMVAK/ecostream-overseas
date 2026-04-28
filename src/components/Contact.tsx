import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import ConsultationForm from './ConsultationForm';

export default function Contact() {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-white/95"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you start your journey
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://www.facebook.com/profile.php?id=61571648933638"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/ecostream_overseas"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@JSRMCONSULTANCY"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://wa.me/918019891808"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
            <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Branches</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-1">Guntur Office</p>
                <p className="text-gray-600 leading-relaxed">
                  Koritepadu 5th Line, Guntur, Andhra Pradesh, India
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Hyderabad Office</p>
                <p className="text-gray-600 leading-relaxed">KPHB Phase-2, Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100">
            <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Phone className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Phone Numbers</h3>
            <div className="space-y-3">
              <a
                href="tel:+919392551473"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200 text-lg"
              >
                +91 93925 51473
              </a>
              <a
                href="tel:+918019891808"
                className="block text-gray-600 hover:text-green-600 transition-colors duration-200 text-lg"
              >
                +91 8019891808
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">Available: Mon - Sat, 9:00 AM - 6:00 PM</p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
            <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Mail className="text-white" size={28} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
            <a
              href="mailto:support@ecostreamoverseas.com"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-200 text-lg break-words"
            >
              support@ecostreamoverseas.com
            </a>
            <p className="text-sm text-gray-500 mt-4">We typically respond within 24 hours</p>
          </div>
        </div>

        <div id="consultation" className="mt-16 max-w-4xl mx-auto">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
