import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80;
      const elementPosition = projectsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleDownloadResume = () => {
    // Create a sample PDF resume URL (replace with your actual resume URL)
    const resumeUrl = 'https://example.com/your-resume.pdf';
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'john-dev-resume.pdf';
    
    // Simulate click to open in new tab (since we don't have actual file)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Full-Stack Developer
              <span className="text-indigo-600 block mt-2">Building Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              4+ years of experience crafting robust solutions at Barclays, Publicis Sapient, and New Relic.
              Specialized in React, Node.js, and Java development.
            </p>
            <div className="flex items-center space-x-6 mb-8">
              <a 
                href="https://github.com/mohit32886/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mohit32886/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="mailto:mohit32886@gmail.com" 
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleViewProjects}
                className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 flex items-center justify-center transform hover:scale-105 transition-all"
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={handleDownloadResume}
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full hover:bg-indigo-50 transform hover:scale-105 transition-all"
              >
                Download Resume
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" 
              alt="Developer workspace" 
              className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;