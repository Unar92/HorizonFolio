export interface PopupData {
  title: string;
  bannerImage: string;
  mainContent: string;
  features: string[];
  cta: string;
}

export const popupData: Record<string, PopupData> = {
  'section-1': {
    title: 'Custom Web Development',
    bannerImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'We build bespoke websites that are fast, responsive, and tailored to your brand\'s unique needs. Our team of expert developers uses the latest technologies to create stunning digital experiences that captivate your audience and drive results. From corporate sites to creative portfolios, we deliver excellence.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Custom CMS',
      'High-Performance'
    ],
    cta: 'Get a Free Consultation'
  },
  'section-2': {
    title: 'E-Commerce Solutions',
    bannerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'From Shopify to custom-built platforms, we create powerful e-commerce websites that drive sales and provide a seamless user experience. We focus on creating intuitive navigation, secure payment gateways, and effective product showcases that convert visitors into loyal customers.',
    features: [
      'Secure Payments',
      'Inventory Management',
      'Customer Accounts',
      'Analytics Integration'
    ],
    cta: 'Start Selling Online'
  },
  'section-3': {
    title: 'Our Recent Projects',
    bannerImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'We are proud of the work we do. Take a look at some of our latest projects and see how we\'ve helped our clients succeed online. Each project showcases our commitment to quality, innovation, and client satisfaction. Our portfolio speaks for itself.',
    features: [
      'Diverse Industries',
      'Proven Results',
      'Client Testimonials',
      'Case Studies'
    ],
    cta: 'View Our Portfolio'
  },
  'section-4': {
    title: 'Let\'s Build Something Great',
    bannerImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'Have a project in mind? We\'d love to hear from you. Contact us today to discuss your ideas and get a free quote. Our team is ready to collaborate with you to bring your vision to life and create something truly exceptional. Let\'s start the conversation.',
    features: [
      'Free Quote',
      'Collaborative Process',
      'Expert Advice',
      'Dedicated Support'
    ],
    cta: 'Contact Us Today'
  },
  'section-5': {
    title: 'Get in Touch',
    bannerImage: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'Ready to start your next project? We\'re here to help! Reach out to us at info@innovativecode.co.uk and let\'s discuss how we can bring your ideas to life. Our team is ready to provide expert guidance and create innovative solutions tailored to your needs.',
    features: [
      'Email: info@innovativecode.co.uk',
      'Quick Response Time',
      'Professional Support',
      'Custom Solutions'
    ],
    cta: 'Send us an Email'
  }
};
