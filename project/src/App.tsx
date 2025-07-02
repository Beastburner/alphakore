import React, { useState, useEffect } from 'react';
import { Menu, X, Brain, Cloud, Shield, BarChart3, Notebook as Robot, Code, Lightbulb, Mail, MessageCircle, Headphones, Heart, CheckCircle, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import hitarthImage from './assets/images/hitarth.jpg';
import parthImage from './assets/images/parth.jpg';
import rajImage from './assets/images/raj.jpg';
import shlokImage from './assets/images/shlok.jpg';
import suhaniImage from './assets/images/suhani.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [enlargedPhoto, setEnlargedPhoto] = useState<string | null>(null);

  const openPhoto = (image: string) => {
    setEnlargedPhoto(image);
  };

  const closePhoto = () => {
    setEnlargedPhoto(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'recent-works', 'community', 'features', 'services', 'docs'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const teamMembers = [
    {
      name: 'Hitarth',
      image: hitarthImage,
      linkedin: 'https://linkedin.com/in/hitarth',
      instagram: 'https://instagram.com/hitarth',
      portfolio: 'https://hitarth-portfolio.com'
    },
    {
      name: 'Parth',
      image: parthImage,
      linkedin: 'https://linkedin.com/in/parth',
      instagram: 'https://www.instagram.com/parth_soni3010',
      portfolio: 'https://parth-portfolio.com'
    },
    {
      name: 'Shlok',
      image: shlokImage,
      linkedin: 'https://www.linkedin.com/in/shlok-patel-051b162b2',
      instagram: 'https://www.instagram.com/shlok_1125',
      portfolio: 'https://shlok-portfolio.com'
    },
    {
      name: 'Suhani',
      image: suhaniImage,
      linkedin: 'https://linkedin.com/in/suhani',
      instagram: 'https://www.instagram.com/suhanipatel__16',
      portfolio: 'https://suhani-portfolio.com'
    },
    {
      name: 'Raj',
      image: rajImage,
      linkedin: 'https://www.linkedin.com/in/raj-shah-a73926265/',
      instagram: 'https://www.instagram.com/rajshah103',
      portfolio: 'https://raj-portfolio.com'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-full blur-2xl animate-float-reverse"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid-pattern"></div>
          </div>
          
          {/* Animated lines */}
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            
            {/* Animated connecting lines */}
            <path 
              d="M 0,100 Q 400,50 800,100 T 1600,100" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none"
              className="animate-draw-line"
            />
            <path 
              d="M 0,300 Q 600,250 1200,300 T 2400,300" 
              stroke="url(#lineGradient)" 
              strokeWidth="1" 
              fill="none"
              className="animate-draw-line-delayed"
            />
            <path 
              d="M 0,500 Q 300,450 600,500 T 1200,500" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5" 
              fill="none"
              className="animate-draw-line-slow"
            />
          </svg>
          
          {/* Floating particles */}
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 10}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white tracking-wider">
              AlphaKore
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['home', 'recent-works', 'community', 'features', 'services', 'docs'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 relative ${
                    activeSection === section ? 'text-pink-500' : 'text-white hover:text-pink-500'
                  }`}
                >
                  {section === 'recent-works' ? 'Recent Works' : section}
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-cyan-400"></div>
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-purple-500/20">
            <div className="px-4 py-4 space-y-4">
              {['home', 'recent-works', 'community', 'features', 'services', 'docs'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left capitalize text-white hover:text-pink-500 transition-colors duration-300"
                >
                  {section === 'recent-works' ? 'Recent Works' : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Content with relative positioning to appear above background */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="pt-20 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-sm font-medium">
                  Innovate & Create
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Welcome to{' '}
                  <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    AUTOMATE
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Explore awesome projects crafted with passion and precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    
                  <button
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-[500px] relative">
                  <spline-viewer 
                    url="https://prod.spline.design/Gys5OUTieBbG1QEW/scene.splinecode"
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      borderRadius: '24px',
                      overflow: 'hidden'
                    }}
                  ></spline-viewer>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Works Section */}
        <section id="recent-works" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">Recent Works</h2>
              <p className="text-xl text-gray-300">Discover our latest automation projects</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Synth.Ai',
                  description: 'An Automated Music Playlist maker',
                  tags: ['Spotify', 'YT MUSIC', 'MOOD'],
                  image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
                },
                {
                  title: 'Pet.Ai',
                  description: 'A cutting-edge mobile app that simplifies daily tasks.',
                  tags: ['Flutter', 'Firebase'],
                  image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
                },
                {
                  title: 'Quant.Ai',
                  description: 'A developer tool enhancing productivity and collaboration.',
                  tags: ['TypeScript', 'Docker', 'Kubernetes'],
                  image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
                }
              ].map((project, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-pink-500 mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="w-full py-2 border border-pink-500 text-white rounded-full hover:bg-pink-500 hover:text-black transition-all duration-300">
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { number: '10+', label: 'Active Users' },
                { number: '5+', label: 'Projects Created' },
                { number: '5+', label: 'Tasks Automated' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10">
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Forums */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Popular Discussions
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Getting Started', description: 'New to AutoMate? Start here!', badge: 'Hot' },
                  { title: 'Show & Tell', description: 'Share your automation projects', badge: 'Active' },
                  { title: 'Help & Support', description: 'Get help from the community', badge: '24/7' }
                ].map((forum, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
                    <h3 className="text-xl font-bold mb-2">{forum.title}</h3>
                    <p className="text-gray-300 mb-4">{forum.description}</p>
                    <span className="inline-block px-3 py-1 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm">
                      {forum.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Section */}
            <div>
              <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Founder Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-pink-500/50 shadow-lg cursor-pointer"
                      onClick={() => openPhoto(member.image)}
                    />
                    <h3 className="text-xl font-bold mb-4">{member.name}</h3>
                    <div className="flex justify-center space-x-4 mb-4">
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 transition-colors">
                        <Instagram size={20} />
                      </a>
                    </div>
                    <a 
                      href={member.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
                    >
                      Portfolio <ExternalLink size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover what makes AutoMate the perfect choice for your automation needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: 'AI-Powered Automation',
                  description: 'Our cutting-edge AI algorithms revolutionize your workflow with smart automation.',
                  features: ['Smart Pattern Recognition', 'Predictive Task Automation', 'Self-Learning Systems', 'Custom AI Models', '24/7 Automated Operations']
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: 'Seamless Cloud Integration',
                  description: 'Connect and synchronize with popular cloud services and tools.',
                  features: ['100+ Service Integrations', 'Real-time Data Sync', 'Custom API Support', 'Cross-platform Compatibility', 'Secure Data Transfer']
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: 'Enterprise-Grade Security',
                  description: 'Industry-leading security measures to protect your sensitive data.',
                  features: ['End-to-end Encryption', 'SOC 2 Type II Certified', 'Regular Security Audits', 'Multi-factor Authentication', 'GDPR Compliant']
                },
                {
                  icon: <BarChart3 className="w-8 h-8" />,
                  title: 'Advanced Analytics',
                  description: 'Comprehensive analytics and reporting tools to optimize performance.',
                  features: ['Real-time Monitoring', 'Custom Dashboards', 'Performance Metrics', 'ROI Tracking', 'Automated Reports']
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full flex items-center justify-center mb-6 text-pink-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-white">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 bg-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-300">
                Discover how AutoMate can transform your workflow
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Robot className="w-8 h-8" />,
                  title: 'AI Automation',
                  description: 'Leverage advanced AI algorithms to automate complex tasks and workflows',
                  features: ['Machine Learning Integration', 'Smart Process Automation', 'Predictive Analysis']
                },
                {
                  icon: <Cloud className="w-8 h-8" />,
                  title: 'Cloud Solutions',
                  description: 'Scalable cloud infrastructure for seamless automation deployment',
                  features: ['Cloud Integration', 'Secure Storage', 'Auto-scaling']
                },
                {
                  icon: <Code className="w-8 h-8" />,
                  title: 'Custom Development',
                  description: 'Tailored automation solutions for your specific needs',
                  features: ['Custom Workflows', 'API Integration', 'Scalable Solutions']
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: 'Consulting',
                  description: 'Expert guidance for your automation journey',
                  features: ['Strategy Planning', 'Process Optimization', 'Technical Support']
                }
              ].map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-8 text-center border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 flex flex-col justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-cyan-400 hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-6 text-left">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    className="w-full py-3 bg-transparent border border-pink-500 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-400 hover:border-transparent transition-all duration-300"
                  >
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Documentation Section */}
        <section id="docs" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-500/30 sticky top-24">
                  <nav className="space-y-6">
                    {[
                      {
                        title: 'Getting Started',
                        items: ['Quick Start Guide', 'Installation', 'Basic Usage']
                      },
                      {
                        title: 'Legal Documents',
                        items: ['Terms of Service', 'Privacy Policy', 'Security Policy', 'Compliance']
                      },
                      {
                        title: 'User Guides',
                        items: ['Automation Guide', 'AI Features', 'Integration Guide', 'API Documentation']
                      },
                      {
                        title: 'Support',
                        items: ['FAQ', 'Troubleshooting', 'Contact Support']
                      }
                    ].map((section, index) => (
                      <div key={index}>
                        <h3 className="text-pink-500 font-semibold mb-3">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <button className="text-white hover:text-pink-500 transition-colors duration-300 text-left">
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-3">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                  <h2 className="text-3xl font-bold text-pink-500 mb-6">Quick Start Guide</h2>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Get started with AutoMate in minutes. Follow these simple steps to begin your automation journey.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      {
                        step: '1',
                        title: 'Create Account',
                        description: 'Sign up for an AutoMate account using your email or social login.'
                      },
                      {
                        step: '2',
                        title: 'Configure Workspace',
                        description: 'Set up your workspace and customize your automation preferences.'
                      },
                      {
                        step: '3',
                        title: 'Start Automating',
                        description: 'Create your first automation workflow and watch the magic happen.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="bg-white/5 rounded-xl p-6 relative">
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 bg-white/5 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-2">How secure is AutoMate?</h4>
                        <p className="text-gray-300">We implement industry-standard security measures including end-to-end encryption...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Contact Us
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="grid gap-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, title: 'Email', content: 'support@automate.com' },
                  { icon: <MessageCircle className="w-6 h-6" />, title: 'Live Chat', content: 'Available 24/7' },
                  { icon: <Headphones className="w-6 h-6" />, title: 'Support', content: 'Get instant help' }
                ].map((contact, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:transform hover:-translate-y-2">
                    <div className="text-pink-500 mb-4">{contact.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{contact.title}</h3>
                    <p className="text-cyan-400">{contact.content}</p>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <div className="flex items-center justify-center">
                <a
                  href="https://cal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-300">
              Designed with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> by PARTH SONI
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;