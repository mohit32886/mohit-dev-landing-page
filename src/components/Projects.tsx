import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.netlify.app'
    },
    {
      title: 'Task Management System',
      description: 'Enterprise task management application with real-time updates, team collaboration features, and detailed analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tech: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com/yourusername/task-management',
      demo: 'https://task-management-demo.netlify.app'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial data visualization platform with interactive charts, portfolio management, and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      tech: ['React', 'D3.js', 'Java Spring', 'MySQL', 'Redis'],
      github: 'https://github.com/yourusername/financial-dashboard',
      demo: 'https://financial-dashboard-demo.netlify.app'
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center transform hover:scale-105 transition-all"
                  >
                    <Github className="h-5 w-5 mr-2" /> Code
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center transform hover:scale-105 transition-all"
                  >
                    Live Demo <ExternalLink className="h-5 w-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;