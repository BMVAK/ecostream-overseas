import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
}

export default function SEO({
  title = 'Ecostream Overseas - Study Abroad Consultancy | USA, UK, Canada, Australia',
  description = 'Leading study abroad consultancy in India helping students achieve their dreams. Expert guidance for universities in USA, UK, Canada, Australia, Germany & more.',
  keywords = 'study abroad, overseas education, study abroad consultancy, study in USA, study in UK, study in Canada, study in Australia, study in Germany, student visa',
  canonical = 'https://www.ecostreamoverseas.com',
  ogImage = 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1200',
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:url', content: canonical + location.pathname },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement('meta');
        if (name) {
          element.setAttribute('name', name);
        } else if (property) {
          element.setAttribute('property', property);
        }
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });

    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonical + location.pathname);
  }, [title, description, keywords, canonical, ogImage, location.pathname]);

  return null;
}
