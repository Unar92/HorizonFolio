'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PopupData } from '../data/popupData';
import styles from '../styles/ContactContent.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ContactContentProps {
  data: PopupData;
  onCtaClick?: () => void;
}

const ContactContent = ({ data, onCtaClick }: ContactContentProps) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with your preferred form handling service
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@innovativecode.co.uk',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+44 (0) 20 1234 5678',
      description: 'Mon-Fri from 9am to 6pm'
    },
    // {
    //   icon: '📍',
    //   title: 'Office',
    //   content: 'London, United Kingdom',
    //   description: 'Come say hello at our office'
    // }
  ];

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. Simple websites take 2-4 weeks, while complex web applications can take 8-12 weeks. We provide detailed timelines during the consultation phase.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer various support packages including maintenance, updates, and technical support. We believe in building long-term relationships with our clients.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, Node.js, Python, and various databases. We choose the best technology stack for each project\'s specific needs.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely! We frequently integrate with existing systems, databases, and third-party services. We\'ll assess your current setup and develop the best integration strategy.'
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

      {/* Contact Info Cards */}
      <section className={styles['contact-info-section']}>
        <div className={styles.container}>
          <h2>Get In Touch</h2>
          <div className={styles['contact-cards']}>
            {contactInfo.map((info, index) => (
              <div key={index} className={styles['contact-card']}>
                <div className={styles['contact-icon']}>{info.icon}</div>
                <h3>{info.title}</h3>
                <p className={styles['contact-content']}>{info.content}</p>
                <p className={styles['contact-description']}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles['contact-form-section']}>
        <div className={styles.container}>
          <div className={styles['contact-content-wrapper']}>
            <div className={styles['contact-form-container']}>
              <h2>Send Us a Message</h2>
              <form className={styles['contact-form']} onSubmit={handleSubmit}>
                <div className={styles['form-group']}>
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
                <div className={styles['form-group']}>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className={styles['form-submit']}>
                  Send Message
                </button>
              </form>
            </div>
            <div className={styles['contact-info-sidebar']}>
              <h3>Why Choose Us?</h3>
              <div className={styles['features-list']}>
                {data.features.map((feature, index) => (
                  <div key={index} className={styles['feature-item']}>
                    <span className={styles['feature-check']}>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className={styles['office-hours']}>
                <h4>Office Hours</h4>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles['faq-section']}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>
          <div className={styles['faq-list']}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles['faq-item']}>
                <h3 className={styles['faq-question']}>{faq.question}</h3>
                <p className={styles['faq-answer']}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles['cta-section']}>
        <div className={styles.container}>
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your ideas and create something amazing together</p>
          <button className={styles['cta-button']} onClick={onCtaClick}>
            {data.cta}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
