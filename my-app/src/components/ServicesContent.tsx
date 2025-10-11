'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PopupData } from '../data/popupData';
import styles from '../styles/ServicesContent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicesContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const ServicesContent = ({ data, onCtaClick }: ServicesContentProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = wrapperRef.current?.closest('.popup-container');
    if (!scroller) return;

    const parallaxEffect = gsap.to(parallaxRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        scroller: scroller,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      parallaxEffect.kill();
    };
  }, []);

  const services = [
    {
      icon: '💻',
      title: 'Custom Web Development',
      description: 'Bespoke websites built with modern frameworks and cutting-edge technologies. We create responsive, fast, and scalable web applications tailored to your business needs.',
      features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Integration']
    },
    {
      icon: '🛒',
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing, inventory management, and user-friendly interfaces that drive conversions and customer loyalty.',
      features: ['Payment Gateway', 'Inventory System', 'Admin Dashboard', 'Mobile Optimized']
    },
    {
      icon: '📱',
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences across iOS and Android devices with intuitive design and smooth performance.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'App Store Optimization']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '£999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Website',
        '5 Pages',
        'Basic SEO',
        'Contact Form',
        '3 Months Support'
      ]
    },
    {
      name: 'Professional',
      price: '£2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web Application',
        'Advanced Features',
        'E-commerce Integration',
        'CMS Integration',
        '6 Months Support'
      ]
    },
    {
      name: 'Enterprise',
      price: '£4,999',
      description: 'Complete digital transformation',
      features: [
        'Full-Stack Application',
        'Mobile App',
        'Advanced Analytics',
        '24/7 Support',
        '1 Year Maintenance'
      ]
    }
  ];

  return (
    <div className={styles['popup-content-wrapper']} ref={wrapperRef}>
      {/* Hero Section */}
      <div className={styles['hero-section']} ref={heroRef}>
        <div className={styles['parallax-wrapper']} ref={parallaxRef}>
          <Image
            src={data.bannerImage}
            alt={data.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        <div className={styles['hero-content']}>
          <h1>{data.title}</h1>
          <p className='is--width-short'>{data.mainContent}</p>
        </div>
        <div className={styles['scroll-indicator']}>
          <div className={styles['scroll-arrow']}></div>
          <span className={styles['scroll-text']}>Scroll Down</span>
        </div>
      </div>

      {/* Services Grid */}
      <section className={styles['services-grid-section']}>
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles['services-grid']}>
            {services.map((service, index) => (
              <div key={index} className={styles['service-card']}>
                <div className={styles['service-icon']}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className={styles['service-features']}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} className={styles['feature-tag']}>{feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles['process-section']}>
        <div className={styles.container}>
          <h2>Our Process</h2>
          <div className={styles['process-timeline']}>
            <div className={styles['timeline-item']}>
              <div className={styles['timeline-number']}>01</div>
              <div className={styles['timeline-content']}>
                <h3>Consultation</h3>
                <p>We discuss your requirements, goals, and vision for the project.</p>
              </div>
            </div>
            <div className={styles['timeline-item']}>
              <div className={styles['timeline-number']}>02</div>
              <div className={styles['timeline-content']}>
                <h3>Planning & Design</h3>
                <p>We create detailed project plans, wireframes, and design mockups.</p>
              </div>
            </div>
            <div className={styles['timeline-item']}>
              <div className={styles['timeline-number']}>03</div>
              <div className={styles['timeline-content']}>
                <h3>Development</h3>
                <p>We build your solution using agile methodologies and modern technologies.</p>
              </div>
            </div>
            <div className={styles['timeline-item']}>
              <div className={styles['timeline-number']}>04</div>
              <div className={styles['timeline-content']}>
                <h3>Testing & Launch</h3>
                <p>We thoroughly test and deploy your project with ongoing support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles['pricing-section']}>
        <div className={styles.container}>
          <h2>Pricing Plans</h2>
          <div className={styles['pricing-grid']}>
            {pricing.map((plan, index) => (
              <div key={index} className={styles['pricing-card']}>
                <div className={styles['pricing-header']}>
                  <h3>{plan.name}</h3>
                  <div className={styles['pricing-price']}>{plan.price}</div>
                  <p>{plan.description}</p>
                </div>
                <div className={styles['pricing-features']}>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className={styles['pricing-feature']}>
                      <span className={styles['pricing-check']}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <h2>Ready to Get Started?</h2>
          <p>Choose the perfect plan for your project or contact us for a custom quote</p>
          <button className={styles['cta-button']} onClick={onCtaClick}>
            {data.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesContent;
