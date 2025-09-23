import { Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900">
            <span className="block">Jules</span>
            <span className="block text-indigo-600">Software Engineer</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-500">
            I specialize in building exceptional, high-quality websites and applications.
            I am a problem-solver at heart and I am passionate about creating amazing user experiences.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
