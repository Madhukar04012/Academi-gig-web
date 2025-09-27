import { Github, Linkedin, Twitter, Download, Mail, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: '#',
      color: 'hover:text-gray-900',
      bgColor: 'hover:bg-gray-100'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: '#',
      color: 'hover:text-blue-500',
      bgColor: 'hover:bg-blue-50'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: '#',
      color: 'hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Jules
                </span>
              </motion.span>
              <motion.span 
                className="block text-2xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Software Engineer
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Description */}
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            I specialize in building exceptional, high-quality websites and applications. 
            I am a problem-solver at heart and I am passionate about creating amazing user experiences 
            that make a difference.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            
            <motion.a
              href="mailto:hello@jules.dev"
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </motion.a>

            <motion.a
              href="#"
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 flex justify-center space-x-6"
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-full text-gray-500 ${social.color} ${social.bgColor} transition-all duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{social.name}</span>
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <motion.button
              onClick={() => scrollToSection('#skills')}
              className="flex flex-col items-center text-gray-400 hover:text-indigo-600 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
