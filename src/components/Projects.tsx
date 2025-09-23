import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a modern, responsive design. Built with React, Node.js, and a PostgreSQL database.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application that helps teams stay organized and productive. Featuring real-time updates with websockets.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    title: 'Personal Blog',
    description: 'A personal blog platform with a custom CMS, allowing for easy content creation and management. Optimized for performance and SEO.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            A selection of projects that I'm proud of.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
              <img className="h-56 w-full object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-3 text-base text-gray-600">{project.description}</p>
                <a href={project.link} className="mt-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:text-indigo-500 transition-colors duration-300">
                  View Project <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
