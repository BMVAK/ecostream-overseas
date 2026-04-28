import { Target, Globe, Users, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1098515/pexels-photo-1098515.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ecostream Overseas is a leading study abroad consultancy in India, dedicated to helping students achieve their dreams
            of studying internationally. With expertise in overseas education consulting, we provide comprehensive guidance for
            university admissions, visa applications, and scholarship opportunities in USA, UK, Canada, Australia, Germany, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Study abroad consultation - Professional counseling for international education"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision & Mission</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We are committed to guiding students and professionals through every step of their journey — from
              selecting the right university or job opportunity to completing documentation and visa procedures. Our
              goal is to make the entire process simple, transparent, and successful.
            </p>

            <div className="flex items-start space-x-4 pt-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="text-blue-600" size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Expert Guidance</h4>
                <p className="text-gray-600">
                  Professional counseling tailored to your academic goals and career aspirations
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Globe className="text-blue-600" size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">Global Reach</h4>
                <p className="text-gray-600">
                  Access to top universities in USA, UK, Australia, Cyprus, France, and Malta
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="text-blue-600" size={28} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">End-to-End Support</h4>
                <p className="text-gray-600">Complete assistance from application to visa approval</p>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                showMore ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pt-6 space-y-6 border-t border-gray-200 mt-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Target className="text-blue-600 mr-3" size={28} />
                    Our Vision
                  </h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To be the most trusted and preferred study abroad consultancy, empowering students worldwide to
                    access world-class education and achieve their full potential. We envision a future where every
                    aspiring student has the opportunity to study at their dream university, regardless of their
                    background or location.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We strive to create a global community of successful alumni who contribute meaningfully to society,
                    bridging cultures and fostering international understanding through education. Our vision extends
                    beyond admissions – we aim to shape future leaders who will make a positive impact on the world.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <Globe className="text-green-600 mr-3" size={28} />
                    Our Mission
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Personalized Guidance:</strong> Provide one-on-one counseling sessions to understand
                        each student's unique goals, strengths, and aspirations, ensuring the perfect fit between
                        student and institution.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Comprehensive Support:</strong> Offer end-to-end assistance including university
                        selection, application processing, essay writing, interview preparation, visa guidance,
                        scholarship assistance, and pre-departure orientation.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Transparent Process:</strong> Maintain complete transparency in our operations with
                        honest assessments, realistic expectations, and ethical practices. No hidden costs, no false
                        promises – just genuine commitment to your success.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Network of Excellence:</strong> Partner with top-ranked universities and educational
                        institutions globally to provide students with the widest range of quality options across
                        disciplines and countries.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Continuous Innovation:</strong> Stay updated with changing immigration policies,
                        admission requirements, and educational trends to provide the most current and relevant
                        guidance to our students.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-3 mt-1">•</span>
                      <span className="leading-relaxed">
                        <strong>Lifelong Partnership:</strong> Build lasting relationships with students and their
                        families, offering support not just during the admission process but throughout their
                        academic journey and beyond.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Integrity</h5>
                        <p className="text-gray-600 text-sm">Honest, ethical, and transparent in all interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Excellence</h5>
                        <p className="text-gray-600 text-sm">Committed to delivering the highest quality service</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Student-Centric</h5>
                        <p className="text-gray-600 text-sm">Your success and satisfaction are our top priorities</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="bg-yellow-500 w-2 h-2 rounded-full mt-2"></div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-1">Empowerment</h5>
                        <p className="text-gray-600 text-sm">Equipping students with knowledge and confidence</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-sm">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">What Sets Us Apart</h4>
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      <strong>Proven Track Record:</strong> Over 500+ successful student placements in top universities
                      worldwide with an impressive visa success rate of 98%.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Expert Team:</strong> Our counselors have extensive international education experience,
                      with many having studied or worked abroad themselves.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Comprehensive Resources:</strong> Access to exclusive scholarship opportunities, test
                      preparation materials, and a vast network of alumni who can guide and mentor you.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Post-Arrival Support:</strong> We don't stop at visa approval. We help with
                      accommodation, airport pickup coordination, and settling into your new country.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <span>{showMore ? 'Show Less' : 'Read More'}</span>
              {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
