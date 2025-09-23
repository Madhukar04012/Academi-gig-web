import { Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">Jules</span>
            </a>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            <a href="#about" className="text-gray-500 hover:text-gray-900 font-medium">About</a>
            <a href="#projects" className="text-gray-500 hover:text-gray-900 font-medium">Projects</a>
            <a href="#contact" className="text-gray-500 hover:text-gray-900 font-medium">Contact</a>
          </nav>
          <div className="flex md:hidden">
            {/* Mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
