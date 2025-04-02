import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-600">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;