export default function Gallery() {
  const images = [
    {
      url: '/1.jpg.jpeg',
      alt: 'Students abroad',
    },
    {
      url: '/2.jpg.jpeg',
      alt: 'Consultation',
    },
    {
      url: '/3.jpg.jpeg',
      alt: 'University campus',
    },
    {
      url: '/4.jpg.jpeg',
      alt: 'City skyline',
    },
    {
      url: '/WhatsApp_Image_2026-03-30_at_12.47.31_PM.jpeg',
      alt: 'Travel moments',
    },
    {
      url: '/WhatsApp_Image_2026-03-30_at_12.47.32_PM_(1).jpeg',
      alt: 'City exploration',
    },
    {
      url: '/WhatsApp_Image_2026-03-30_at_12.47.32_PM_(2).jpeg',
      alt: 'Beach destination',
    },
    {
      url: '/WhatsApp_Image_2026-03-30_at_12.47.33_PM.jpeg',
      alt: 'Student experience',
    },
  ];

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gray-50/95"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of our success stories and memorable moments
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
