'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PopupData } from '../data/popupData';
import styles from '../styles/PortfolioContent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PortfolioContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const PortfolioContent = ({ data, onCtaClick }: PortfolioContentProps) => {
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

  const portfolioProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      description: 'Modern e-commerce platform with advanced features and seamless user experience.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 2,
      title: 'Healthcare Dashboard',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive dashboard for healthcare management with real-time analytics.',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'D3.js'],
      link: '#'
    },
    {
      id: 3,
      title: 'Restaurant Booking App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
      description: 'Mobile app for restaurant reservations with integrated payment system.',
      technologies: ['React Native', 'Firebase', 'Stripe'],
      link: '#'
    },
    {
      id: 4,
      title: 'Finance Analytics Tool',
      category: 'Data Visualization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      description: 'Advanced analytics platform for financial data visualization and reporting.',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Chart.js'],
      link: '#'
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'Web Platform',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      description: 'Full-featured real estate platform with virtual tours and CRM integration.',
      technologies: ['Next.js', 'PostgreSQL', 'AWS', 'Three.js'],
      link: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'Mobile Application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive fitness tracking application with social features and gamification.',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      link: '#'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
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

      {/* Stats Section */}
      <section className={styles['stats-section']}>
        <div className={styles.container}>
          <div className={styles['stats-grid']}>
            {stats.map((stat, index) => (
              <div key={index} className={styles['stat-item']}>
                <div className={styles['stat-number']}>{stat.number}</div>
                <div className={styles['stat-label']}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles['featured-projects-section']}>
        <div className={styles.container}>
          <h2>Featured Projects</h2>
          <div className={styles['projects-grid']}>
            {portfolioProjects.slice(0, 3).map((project) => (
              <div key={project.id} className={styles['project-card']}>
                <div className={styles['project-image']}>
                  <Image src={project.image} alt={project.title} width={400} height={250} />
                  <div className={styles['project-overlay']}>
                    <div className={styles['project-category']}>{project.category}</div>
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className={styles['project-content']}>
                  <p>{project.description}</p>
                  <div className={styles['project-tech']}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles['tech-tag']}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className={styles['portfolio-gallery-section']}>
        <div className={styles.container}>
          <h2>All Projects</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {portfolioProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className={styles['gallery-item']}>
                  <Image src={project.image} alt={project.title} width={400} height={300} />
                  <div className={styles['gallery-overlay']}>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles['process-section']}>
        <div className={styles.container}>
          <h2>Our Process</h2>
          <div className={styles['process-steps']}>
            <div className={styles['process-step']}>
              <div className={styles['step-number']}>01</div>
              <h3>Discovery</h3>
              <p>We start by understanding your business goals, target audience, and project requirements.</p>
            </div>
            <div className={styles['process-step']}>
              <div className={styles['step-number']}>02</div>
              <h3>Design</h3>
              <p>Our creative team develops wireframes and designs that align with your vision and brand.</p>
            </div>
            <div className={styles['process-step']}>
              <div className={styles['step-number']}>03</div>
              <h3>Development</h3>
              <p>We build your project using cutting-edge technologies and best practices.</p>
            </div>
            <div className={styles['process-step']}>
              <div className={styles['step-number']}>04</div>
              <h3>Launch</h3>
              <p>We ensure a smooth launch and provide ongoing support for your project's success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can bring your ideas to life</p>
          <button className={styles['cta-button']} onClick={onCtaClick}>
            {data.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PortfolioContent;
