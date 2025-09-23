const Footer = () => {
  return (
    <footer id="contact" className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Get in Touch</h3>
          <p className="mt-2 text-lg text-gray-600">
            I'm currently available for freelance work.
          </p>
          <a
            href="mailto:hello@jules.dev"
            className="mt-6 inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Jules. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
