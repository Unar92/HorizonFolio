import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PopupData } from '../data/popupData';
import styles from '../styles/PopupContent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PopupContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const PopupContent = ({ data, onCtaClick }: PopupContentProps) => {
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

  const testimonials = [
    { name: "John Doe", role: "CEO", text: "Amazing work and dedication!" },
    { name: "Jane Smith", role: "Marketing Director", text: "Exceeded our expectations!" },
    { name: "Mike Johnson", role: "Founder", text: "Best decision we made!" }
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
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
        </div>
        <div className={styles['scroll-indicator']}>
          <div className={styles['scroll-arrow']}></div>
          <span className={styles['scroll-text']}>Scroll Down</span>
        </div>
      </div>

      {/* About Section */}
      <section className={styles['about-section']}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <div className={styles['about-content']}>
            <p>{data.mainContent}</p>
            <div className={styles['features-grid']}>
              {data.features.map((feature, index) => (
                <div key={index} className={styles['feature-card']}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Slider */}
      <section className={styles['portfolio-section']}>
        <div className={styles.container}>
          <h2>Our Work</h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className={styles['portfolio-item']}>
                  <Image src={image} alt={`Portfolio ${index + 1}`} width={400} height={300} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Social Proof Marquee */}
      <section className={styles['testimonials-section']}>
        <div className={styles['marquee-wrapper']}>
          <div className={styles.marquee}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className={styles['testimonial-card']}>
                <p>"{testimonial.text}"</p>
                <div className={styles['testimonial-author']}>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
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
          <p>Let's create something amazing together</p>
          <button className={styles['cta-button']} onClick={onCtaClick}>
            {data.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopupContent;
