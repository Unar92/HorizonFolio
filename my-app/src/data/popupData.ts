export interface PopupData {
  title: string;
  bannerImage: string;
  mainContent: string;
  features: string[];
  cta: string;
}

export const popupData: Record<string, PopupData> = {
  'about': {
    title: 'About Us',
    bannerImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'We are a team of developers and designers who are passionate about creating exceptional digital experiences that drive business growth. ',
    features: [
      '5+ Years Experience',
      '100+ Projects Completed',
      'Expert Team',
      'Award Winning'
    ],
    cta: 'Learn More About Us'
  },
  'services': {
    title: 'Our Services',
    bannerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'We offer a comprehensive range of digital services designed to help your business thrive in the modern digital landscape. From custom web development to e-commerce solutions, mobile applications to digital marketing, we provide end-to-end solutions that drive results and deliver exceptional user experiences.',
    features: [
      'Web Development',
      'E-Commerce Solutions',
      'Mobile Applications',
      'Digital Marketing'
    ],
    cta: 'Explore Our Services'
  },
  'projects': {
    title: 'Our Portfolio',
    bannerImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'Explore our diverse portfolio of successful projects across various industries. Each project represents our commitment to innovation, quality, and client satisfaction. From startups to enterprise-level solutions, we\'ve helped businesses transform their digital presence and achieve their goals.',
    features: [
      'Web Applications',
      'E-Commerce Platforms',
      'Brand Identities',
      'Mobile Apps'
    ],
    cta: 'View All Projects'
  },
  'contact': {
    title: 'Get In Touch',
    bannerImage: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    mainContent: 'Ready to start your next project? We\'d love to hear from you! Our team is here to help bring your ideas to life. Whether you have a specific project in mind or need consultation on your digital strategy, we\'re ready to collaborate and create something exceptional together.',
    features: [
      'Free Consultation',
      'Project Planning',
      'Expert Guidance',
      'Ongoing Support'
    ],
    cta: 'Start Your Project'
  }
};
