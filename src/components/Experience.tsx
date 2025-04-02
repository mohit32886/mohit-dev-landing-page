import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'New Relic',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      description: 'Led development of monitoring solutions using React and Node.js. Improved application performance by 40%.',
    },
    {
      company: 'Publicis Sapient',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed enterprise solutions using React, Java Spring Boot, and microservices architecture.',
    },
    {
      company: 'Barclays',
      position: 'Software Developer',
      period: '2019 - 2020',
      description: 'Built and maintained banking applications using React and Java. Implemented secure payment processing systems.',
    },
  ];

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              <div className="absolute left-0 top-0 h-full w-px bg-indigo-200">
                <div className="absolute top-0 left-0 -ml-2 h-4 w-4 rounded-full bg-indigo-600"></div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                </div>
                <div className="flex items-center text-indigo-600 mb-4">
                  <Briefcase className="h-4 w-4 mr-2" />
                  {exp.position}
                </div>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;