'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { PopupData } from '../data/popupData';
import styles from '../styles/AboutContent.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const AboutContent = ({ data, onCtaClick }: AboutContentProps) => {
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

  const team = [
   
    {
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Michael specializes in full-stack development and has expertise in React, Node.js, and cloud technologies.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      bio: 'Emily ensures seamless project delivery and maintains strong relationships with our clients.'
    },
    {
      name: 'David Kim',
      role: 'UX/UI Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'David creates intuitive user experiences and beautiful interfaces that drive engagement.'
    }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'We constantly explore new technologies and creative solutions to deliver cutting-edge results.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in building strong partnerships with our clients and working together towards success.'
    },
   
    {
      icon: '🚀',
      title: 'Growth',
      description: 'We help our clients grow their businesses through strategic digital solutions and ongoing support.'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
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
          <h2>Our Impact</h2>
          <div className={styles['stats-grid']}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles['stat-item']}>
                <div className={styles['stat-number']}>{achievement.number}</div>
                <div className={styles['stat-label']}>{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={styles['mission-section']}>
        <div className={styles.container}>
          <div className={styles['mission-content']}>
            <div className={styles['mission-text']}>
              <h2>Our Mission</h2>
              <p>To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value. We believe in the power of technology to transform ideas into reality and help our clients achieve their digital aspirations.</p>
              <p>Every project we undertake is an opportunity to push boundaries, solve complex challenges, and deliver exceptional results that make a real difference for our clients and their users.</p>
            </div>
            <div className={styles['mission-image']}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Our Mission"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles['values-section']}>
        <div className={styles.container}>
          <h2>Our Values</h2>
          <div className={styles['values-grid']}>
            {values.map((value, index) => (
              <div key={index} className={styles['value-card']}>
                <div className={styles['value-icon']}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section
      <section className={styles['team-section']}>
        <div className={styles.container}>
          <h2>Meet Our Team</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div className={styles['team-card']}>
                  <div className={styles['team-image']}>
                    <Image src={member.image} alt={member.name} width={300} height={300} />
                  </div>
                  <div className={styles['team-content']}>
                    <h3>{member.name}</h3>
                    <p className={styles['team-role']}>{member.role}</p>
                    <p className={styles['team-bio']}>{member.bio}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how we can help bring your vision to life</p>
          <button className={styles['cta-button']} onClick={onCtaClick}>
            {data.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;
