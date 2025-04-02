import React from 'react';
import { Menu, X, Code2, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleHireMe = () => {
    scrollToSection('contact');
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <Code2 className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Mohit Dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-indigo-600">Home</button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-indigo-600">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-indigo-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-indigo-600">Contact</button>
            <button 
              onClick={handleHireMe}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 flex items-center"
            >
              Hire Me <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600">Home</button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-gray-600 hover:text-indigo-600">Contact</button>
            <button 
              onClick={handleHireMe}
              className="mt-4 w-full bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 flex items-center justify-center"
            >
              Hire Me <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;