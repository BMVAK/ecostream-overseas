import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Award, BookOpen, Briefcase, Globe } from 'lucide-react';

export default function DestinationDetail() {
  const { country } = useParams();
  const navigate = useNavigate();

  const destinations: Record<
    string,
    {
      flag: string;
      name: string;
      description: string;
      highlights: string[];
      requirements: string[];
      processSteps: Array<{
        number: number;
        title: string;
        description: string;
        icon: React.ReactNode;
      }>;
    }
  > = {
    usa: {
      flag: '🇺🇸',
      name: 'Study in the USA',
      description:
        'The United States is one of the most popular destinations for international students. It offers world-class universities, modern education, and excellent career opportunities.',
      highlights: [
        'Top-ranked universities',
        'Wide range of courses',
        'Part-time work opportunities',
        'Global career prospects',
        'Multicultural student environment',
      ],
      requirements: [
        'Academic transcripts',
        'English test like IELTS or TOEFL',
        'Exams like GRE / GMAT (depending on course)',
        'Valid passport and visa documents',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Assessment & Planning',
          description: 'Initial counseling to evaluate your profile, goals, and university preferences',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Selection',
          description: 'Identify universities matching your academic profile and career aspirations',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Preparation',
          description: 'Prepare documents, essays, and submit university applications',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Admission & Financial Aid',
          description: 'Receive admission offers and explore funding/scholarship options',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Visa Application',
          description: 'Complete F-1 visa process including document verification and interview',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Pre-Departure',
          description: 'Final preparations, accommodation, and travel arrangements',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    uk: {
      flag: '🇬🇧',
      name: 'Study in the United Kingdom',
      description:
        'The UK is home to some of the world\'s oldest and most prestigious universities. It offers exceptional academic programs, rich cultural heritage, and excellent employment opportunities.',
      highlights: [
        'World-renowned universities',
        'Shorter course duration',
        'International recognition',
        'Work after study opportunities',
        'Historic and vibrant culture',
      ],
      requirements: [
        'Academic transcripts',
        'IELTS or equivalent English proficiency',
        'Standardized tests (if required)',
        'Valid passport and visa documentation',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Profile Assessment',
          description: 'Evaluate your qualifications and match with suitable UK universities',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Shortlisting',
          description: 'Select universities through UCAS or direct application',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Submission',
          description: 'Submit applications with all required documents and essays',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Offer & Acceptance',
          description: 'Receive conditional/unconditional offers and confirm enrollment',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa (Tier 4)',
          description: 'Apply for student visa through UK Visas and Immigration',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Arrival & Settlement',
          description: 'Travel to UK and complete university registration',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    australia: {
      flag: '🇦🇺',
      name: 'Study in Australia',
      description:
        'Australia is a top destination for international students with world-class universities, beautiful campuses, and a welcoming multicultural society.',
      highlights: [
        'High-quality education',
        'Work while studying',
        'Post-study work visa options',
        'Excellent lifestyle',
        'Pathway to permanent residency',
      ],
      requirements: [
        'Academic transcripts',
        'IELTS/TOEFL scores',
        'Proof of financial capacity',
        'Valid passport',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Consultation & Guidance',
          description: 'Initial assessment and discussion of study options in Australia',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'Course Selection',
          description: 'Choose universities and programs that match your goals',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Process',
          description: 'Submit applications directly to universities',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Offer & Enrollment',
          description: 'Receive offers and complete enrollment requirements',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa Application',
          description: 'Apply for Australian student visa (subclass 500)',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Departure & Commencement',
          description: 'Travel arrangements and begin your studies',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    canada: {
      flag: '🇨🇦',
      name: 'Study in Canada',
      description:
        'Canada offers high-quality education at affordable costs with welcoming immigration policies. Known for its multicultural society and excellent quality of life.',
      highlights: [
        'Affordable tuition fees',
        'Work opportunities during and after studies',
        'Pathway to permanent residency',
        'Safe and welcoming environment',
        'Globally recognized degrees',
      ],
      requirements: [
        'Academic transcripts',
        'IELTS/TOEFL scores',
        'Statement of Purpose',
        'Valid passport and study permit',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Initial Assessment',
          description: 'Evaluate your profile and identify suitable Canadian universities',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'Program Selection',
          description: 'Choose programs aligned with your career goals',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Submission',
          description: 'Prepare and submit university applications',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Letter of Acceptance',
          description: 'Receive offer letters and confirm enrollment',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Study Permit Application',
          description: 'Apply for Canadian study permit and visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Pre-Departure Support',
          description: 'Prepare for your journey to Canada',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    germany: {
      flag: '🇩🇪',
      name: 'Study in Germany',
      description:
        'Germany is renowned for its engineering and technical programs with low or no tuition fees at public universities. Experience world-class education in the heart of Europe.',
      highlights: [
        'Low or no tuition fees',
        'Strong focus on research and innovation',
        'Excellent job opportunities',
        'Central European location',
        'English-taught programs available',
      ],
      requirements: [
        'Academic transcripts',
        'English proficiency (IELTS/TOEFL) or German (TestDaF)',
        'Standardized tests if required',
        'Valid passport and visa',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Profile Evaluation',
          description: 'Assess academic background and career objectives',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Matching',
          description: 'Find suitable German universities and programs',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Process',
          description: 'Submit applications through Uni-Assist or directly',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Admission & Enrollment',
          description: 'Receive admission and complete enrollment formalities',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa Process',
          description: 'Apply for German student visa and residence permit',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Relocation Support',
          description: 'Arrange accommodation and settle in Germany',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    'new zealand': {
      flag: '🇳🇿',
      name: 'Study in New Zealand',
      description:
        'New Zealand offers world-class education in a safe, welcoming environment with stunning natural beauty. Known for its innovative teaching methods and excellent student support.',
      highlights: [
        'Beautiful natural surroundings',
        'Safe and peaceful country',
        'Quality education system',
        'Work opportunities for students',
        'Pathway to residency',
      ],
      requirements: [
        'Academic transcripts',
        'IELTS/TOEFL scores',
        'Proof of funds',
        'Valid passport',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Initial Consultation',
          description: 'Assess your profile and discuss study options in New Zealand',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Selection',
          description: 'Choose from 8 leading New Zealand universities',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Process',
          description: 'Submit applications with required documents',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Offer & Acceptance',
          description: 'Receive offers and confirm enrollment',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa',
          description: 'Apply for New Zealand student visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Pre-Departure',
          description: 'Prepare for your journey to New Zealand',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    ireland: {
      flag: '🇮🇪',
      name: 'Study in Ireland',
      description:
        'Ireland is a leading destination for international students with strong tech industry connections, friendly culture, and excellent educational institutions in the heart of Europe.',
      highlights: [
        'Tech industry hub',
        'English-speaking country',
        'EU member state',
        'Welcoming culture',
        'Post-study work opportunities',
      ],
      requirements: [
        'Academic transcripts',
        'IELTS/TOEFL scores',
        'Statement of Purpose',
        'Valid passport',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Profile Assessment',
          description: 'Evaluate your qualifications for Irish universities',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Selection',
          description: 'Choose from top Irish institutions',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application Submission',
          description: 'Submit applications with required documentation',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Offer Letters',
          description: 'Receive and accept university offers',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa',
          description: 'Apply for Irish student visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Arrival Support',
          description: 'Travel and settle in Ireland',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    singapore: {
      flag: '🇸🇬',
      name: 'Study in Singapore',
      description:
        'Singapore is Asia\'s education hub with world-class universities, excellent infrastructure, and strong career opportunities in a safe, multicultural environment.',
      highlights: [
        'Top Asian universities',
        'Safe and clean city',
        'Strong economy and job market',
        'Multicultural society',
        'Gateway to Asia',
      ],
      requirements: [
        'Academic transcripts',
        'English proficiency test',
        'Entrance exams if required',
        'Valid passport',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Consultation',
          description: 'Initial assessment and university guidance',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'Course Selection',
          description: 'Select programs at top Singaporean universities',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application',
          description: 'Submit complete applications with documents',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Admission',
          description: 'Receive offers and confirm enrollment',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Pass',
          description: 'Apply for Singapore student pass',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Arrival',
          description: 'Travel and begin your studies',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    cyprus: {
      flag: '🇨🇾',
      name: 'Study in Cyprus',
      description:
        'Cyprus offers affordable European education with English-taught programs, beautiful Mediterranean climate, and a growing international student community.',
      highlights: [
        'Affordable tuition fees',
        'EU member country',
        'English-taught programs',
        'Mediterranean lifestyle',
        'Safe and welcoming',
      ],
      requirements: [
        'Academic transcripts',
        'English proficiency certificate',
        'Passport copy',
        'Financial documents',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Initial Guidance',
          description: 'Assess your profile for Cyprus universities',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Selection',
          description: 'Choose suitable programs and universities',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application',
          description: 'Submit applications and required documents',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Acceptance',
          description: 'Receive admission letters',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Visa Process',
          description: 'Apply for student visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Departure',
          description: 'Travel and begin your education',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    france: {
      flag: '🇫🇷',
      name: 'Study in France',
      description:
        'France offers world-renowned education, rich cultural heritage, and affordable tuition at public universities. Experience European lifestyle while pursuing your academic goals.',
      highlights: [
        'Low tuition at public universities',
        'Rich cultural experience',
        'Central European location',
        'English-taught programs available',
        'Work opportunities',
      ],
      requirements: [
        'Academic transcripts',
        'Language proficiency (English/French)',
        'Campus France registration',
        'Valid passport',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Profile Evaluation',
          description: 'Assess your eligibility for French institutions',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'University Selection',
          description: 'Choose from top French universities',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Campus France Process',
          description: 'Register and complete Campus France procedure',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Admission',
          description: 'Receive acceptance from universities',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa',
          description: 'Apply for French student visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Pre-Departure',
          description: 'Prepare for your journey to France',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
    malta: {
      flag: '🇲🇹',
      name: 'Study in Malta',
      description:
        'Malta offers affordable European education in an English-speaking island nation. Enjoy Mediterranean lifestyle while studying at recognized EU institutions.',
      highlights: [
        'English-speaking EU country',
        'Affordable living costs',
        'Mediterranean climate',
        'Safe island nation',
        'Growing education hub',
      ],
      requirements: [
        'Academic certificates',
        'English proficiency',
        'Valid passport',
        'Financial proof',
      ],
      processSteps: [
        {
          number: 1,
          title: 'Consultation',
          description: 'Discuss study options in Malta',
          icon: <BookOpen className="text-white" size={32} />,
        },
        {
          number: 2,
          title: 'Course Selection',
          description: 'Choose programs at Maltese institutions',
          icon: <Award className="text-white" size={32} />,
        },
        {
          number: 3,
          title: 'Application',
          description: 'Submit applications with documents',
          icon: <CheckCircle className="text-white" size={32} />,
        },
        {
          number: 4,
          title: 'Offer Letter',
          description: 'Receive and accept admission offer',
          icon: <Globe className="text-white" size={32} />,
        },
        {
          number: 5,
          title: 'Student Visa',
          description: 'Apply for Malta student visa',
          icon: <Briefcase className="text-white" size={32} />,
        },
        {
          number: 6,
          title: 'Arrival',
          description: 'Travel to Malta and start your studies',
          icon: <CheckCircle className="text-white" size={32} />,
        },
      ],
    },
  };

  const destination = destinations[country || ''];

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Services</span>
        </button>

        <div className="mb-12 text-center">
          <h1 className="text-6xl font-bold mb-4">
            <span className="text-5xl mr-4">{destination.flag}</span>
            {destination.name}
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {destination.description}
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Students in {destination.name.split(' ')[3]} benefit from a flexible education system, advanced research
            facilities, and a multicultural environment. Degrees from universities are globally recognized and valued by
            employers around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <div className="bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Award className="text-white" size={24} />
              </div>
              <span>Why Study Here?</span>
            </h3>
            <ul className="space-y-4">
              {destination.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-blue-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                <BookOpen className="text-white" size={24} />
              </div>
              <span>Basic Requirements</span>
            </h3>
            <ul className="space-y-4">
              {destination.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="bg-green-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700 text-lg">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Your Journey to Success</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Follow our comprehensive process to achieve your study abroad dreams
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {destination.processSteps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">{step.icon}</div>
                    <div>
                      <div className="text-white/90 font-semibold mb-2">Step {step.number}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{step.title}</h4>
                      <p className="text-white/80 leading-relaxed text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < destination.processSteps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white shadow-2xl mb-16">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 text-white/90">Get expert guidance from our experienced counselors</p>
          <button
            onClick={() => {
              navigate('/#contact');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
