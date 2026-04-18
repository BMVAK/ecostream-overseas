import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, FileText, Plane, CheckCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function Services() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Educational Consulting",
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Ecostream Overseas"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Study Abroad Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Study Abroad Consultation",
              "description": "Expert guidance for students aspiring to study at prestigious universities across the globe"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Work Permit Assistance",
              "description": "Comprehensive assistance for candidates seeking international work opportunities"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Visa Services",
              "description": "Complete visa processing support for student, tourist, business, and work visas"
            }
          }
        ]
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const studyDestinations = [
    { country: 'United States', flag: '🇺🇸', slug: 'usa' },
    { country: 'United Kingdom', flag: '🇬🇧', slug: 'uk' },
    { country: 'Australia', flag: '🇦🇺', slug: 'australia' },
    { country: 'Cyprus', flag: '🇨🇾', slug: 'cyprus' },
    { country: 'France', flag: '🇫🇷', slug: 'france' },
    { country: 'Malta', flag: '🇲🇹', slug: 'malta' },
  ];

  const workPermitCountries = [
    { country: 'France', flag: '🇫🇷' },
    { country: 'Malta', flag: '🇲🇹' },
    { country: 'Russia', flag: '🇷🇺' },
  ];

  const visaServices = [
    'Student Visa',
    'Tourist Visa',
    'Business Visa',
    'Work Permit',
    'Permanent Residency',
    'Internship Visa',
  ];

  const scrollToConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for your international education and career aspirations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            onClick={scrollToConsultation}
            className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 cursor-pointer"
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Abroad</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Expert guidance for students aspiring to study at prestigious universities across the globe. We help you
              navigate applications, documentation, and admissions.
            </p>
            <div className="space-y-3">
              {studyDestinations.map((dest, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/destination/${dest.slug}`);
                  }}
                  className="flex items-center space-x-3 w-full hover:bg-blue-100 p-2 rounded-lg transition-all duration-200 transform hover:translate-x-1"
                >
                  <span className="text-2xl">{dest.flag}</span>
                  <span className="text-gray-700 font-medium group-hover:text-blue-600">{dest.country}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            onClick={scrollToConsultation}
            className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100 cursor-pointer"
          >
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Briefcase className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Work Permit</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive assistance for candidates seeking international work opportunities. We guide you through
              work permit applications and job placement.
            </p>
            <div className="space-y-3">
              {workPermitCountries.map((dest, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-2xl">{dest.flag}</span>
                  <span className="text-gray-700 font-medium">{dest.country}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            onClick={scrollToConsultation}
            className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 cursor-pointer"
          >
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FileText className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visa Services</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Complete visa processing support for various purposes. Our experienced team ensures smooth documentation
              and timely application submission.
            </p>
            <div className="space-y-3">
              {visaServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-purple-600" size={20} />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
