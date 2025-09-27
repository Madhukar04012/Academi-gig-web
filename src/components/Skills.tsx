import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
}

const skills: Skill[] = [
  {
    name: 'Frontend Development',
    icon: <Code2 className="w-8 h-8" />,
    description: 'React, TypeScript, Next.js, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Backend Development',
    icon: <Database className="w-8 h-8" />,
    description: 'Node.js, Python, PostgreSQL, MongoDB',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Web Technologies',
    icon: <Globe className="w-8 h-8" />,
    description: 'RESTful APIs, GraphQL, WebSockets',
    color: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Mobile Development',
    icon: <Smartphone className="w-8 h-8" />,
    description: 'React Native, iOS, Android',
    color: 'from-orange-500 to-red-500'
  },
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-8 h-8" />,
    description: 'AWS, Docker, Kubernetes, CI/CD',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    name: 'Version Control',
    icon: <GitBranch className="w-8 h-8" />,
    description: 'Git, GitHub, GitLab, Collaborative Development',
    color: 'from-gray-500 to-slate-500'
  },
  {
    name: 'UI/UX Design',
    icon: <Palette className="w-8 h-8" />,
    description: 'Figma, Adobe XD, Design Systems',
    color: 'from-pink-500 to-rose-500'
  },
  {
    name: 'Performance',
    icon: <Zap className="w-8 h-8" />,
    description: 'Optimization, Caching, Core Web Vitals',
    color: 'from-yellow-500 to-amber-500'
  }
];

const Skills = () => {
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

  return (
    <section id="skills" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {skill.description}
                </p>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;