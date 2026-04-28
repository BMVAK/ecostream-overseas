import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Arjun Sharma',
      image: '/WhatsApp_Image_2026-03-30_at_12.47.31_PM.jpeg',
      text: 'Ecostream Overseas made my dream of studying in the UK a reality. Their professional guidance and support throughout the visa process was exceptional.',
      destination: 'United Kingdom',
      course: 'MBA',
      rating: 5,
    },
    {
      name: 'Rohit Patel',
      image: '/WhatsApp_Image_2026-03-30_at_12.47.32_PM_(1).jpeg',
      text: 'Thank you for helping me get admission to my dream university in Australia. The team was very supportive and made the entire process hassle-free.',
      destination: 'Australia',
      course: 'Computer Science',
      rating: 5,
    },
    {
      name: 'Karan Singh',
      image: '/WhatsApp_Image_2026-03-30_at_12.47.32_PM_(2).jpeg',
      text: 'Excellent service! They helped me secure a work permit in France. Highly recommended for anyone looking to study or work abroad.',
      destination: 'France',
      course: 'Business Management',
      rating: 5,
    },
    {
      name: 'Varun Kumar',
      image: '/WhatsApp_Image_2026-03-30_at_12.47.33_PM.jpeg',
      text: 'I am extremely grateful to Ecostream Overseas for helping me secure admission to a top university in the USA. Their expertise in visa documentation and interview preparation was invaluable.',
      destination: 'United States',
      course: 'Masters in Engineering',
      rating: 5,
    },
  ];


  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/97 to-gray-50/95"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real success stories from students who achieved their dreams of studying abroad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              itemScope
              itemType="https://schema.org/Review"
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative"
            >
              <div className="absolute -top-4 left-8 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>
              <div className="flex flex-col items-center mb-6 mt-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} - Study abroad student`}
                  itemProp="image"
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-blue-100"
                />
                <h4 className="text-xl font-bold text-gray-900" itemProp="author">{testimonial.name}</h4>
                <p className="text-blue-600 font-medium">{testimonial.destination}</p>
                <p className="text-gray-500 text-sm">{testimonial.course}</p>
                <div className="flex gap-1 mt-2" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-center italic" itemProp="reviewBody">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            Join <span className="font-bold text-blue-600">500+ successful students</span> who achieved their study abroad dreams with Ecostream Overseas
          </p>
        </div>
      </div>
    </section>
  );
}
