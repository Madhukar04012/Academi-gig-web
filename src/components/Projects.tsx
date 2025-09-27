import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Star, Calendar } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
  githubLink?: string;
  liveDemo?: string;
  image: string;
  tags: string[];
  category: string;
  status: 'completed' | 'in-progress' | 'concept';
  year: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern, responsive design. Built with React, Node.js, and a PostgreSQL database. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    link: '#',
    githubLink: '#',
    liveDemo: '#',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    category: 'Full Stack',
    status: 'completed',
    year: '2024',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application that helps teams stay organized and productive. Featuring real-time updates with websockets, drag-and-drop functionality, and team collaboration tools.',
    link: '#',
    githubLink: '#',
    liveDemo: '#',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Express'],
    category: 'Full Stack',
    status: 'completed',
    year: '2024',
    featured: true
  },
  {
    title: 'Personal Blog',
    description: 'A personal blog platform with a custom CMS, allowing for easy content creation and management. Optimized for performance and SEO with features like markdown support, syntax highlighting, and analytics.',
    link: '#',
    githubLink: '#',
    liveDemo: '#',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Next.js', 'MDX', 'Prisma', 'Vercel', 'SEO'],
    category: 'Frontend',
    status: 'completed',
    year: '2023'
  },
  {
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by OpenAI GPT models. Features include conversation history, customizable personas, and real-time streaming responses.',
    link: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React', 'OpenAI API', 'WebSockets', 'Redis', 'Docker'],
    category: 'AI/ML',
    status: 'in-progress',
    year: '2024'
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'A React Native mobile app for tracking workouts, nutrition, and fitness goals. Includes wearable device integration and social features.',
    link: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['React Native', 'Firebase', 'HealthKit', 'Charts', 'Push Notifications'],
    category: 'Mobile',
    status: 'completed',
    year: '2023'
  },
  {
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard for business intelligence. Features interactive charts, real-time data visualization, and custom report generation.',
    link: '#',
    githubLink: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Chart.js'],
    category: 'Data Visualization',
    status: 'concept',
    year: '2024'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'AI/ML', 'Data Visualization'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'concept':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            A diverse portfolio showcasing my expertise across different technologies and domains
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group relative"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>

              <div className="relative overflow-hidden">
                <img 
                  className="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.year}
                  </div>
                </div>

                <p className="text-base text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.link} 
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 font-medium text-sm group-hover:shadow-lg"
                  >
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-300"
                      title="View Source"
                    >
                      <Github className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                  
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo}
                      className="p-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-medium shadow-sm"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
