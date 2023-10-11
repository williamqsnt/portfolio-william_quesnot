
'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    name: 'Projet 1',
    background: '/img-projects/test.png',
    description: 'Project 1 description',
    urlRepository: 'https://github.com/username/projet1',
    urlWebsite: 'https://www.example.com/projet1',
  },
  {
    name: 'Projet 2',
    background: '/img-projects/test.png',
    description: 'Project 2 description',
    urlRepository: 'https://github.com/username/projet2',
    urlWebsite: 'https://www.example.com/projet2',
  },
  {
    name: 'Projet 3',
    background: '/img-projects/test.png',
    description: 'Project 3 description',
    urlRepository: 'https://github.com/username/projet3',
    urlWebsite: 'https://www.example.com/projet3',
  },
  {
    name: 'Projet 4',
    background: '/img-projects/test.png',
    description: 'Project 4 description',
    urlRepository: 'https://github.com/username/projet4',
    urlWebsite: 'https://www.example.com/projet4',
  },
  {
    name: 'Projet 5',
    background: '/img-projects/test.png',
    description: 'Project 5 description',
    urlRepository: 'https://github.com/username/projet5',
    urlWebsite: 'https://www.example.com/projet5',
  },
  // Ajoutez d'autres projets ici
];

const Works = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 640); // Modifier la largeur selon vos besoins.
    };
    handleResize(); // Appel initial pour déterminer la vue mobile au chargement de la page.
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectInfo = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-center mt-48">
      <h1 className="text-6xl font-bold my-8">My works</h1>
      <input
        type="text"
        className="px-8 py-2 border border-gray-300 rounded my-10 text-black"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Carousel
        showArrows={false}
        showThumbs={false}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={mobileView ? 50 : 25} // Modifier les valeurs en fonction de vos besoins.
        showStatus={false}
        useKeyboardArrows={true}
        autoPlay
        infiniteLoop
      >
        {filteredProjects.map((project, index) => (
          <div key={index} onClick={() => handleProjectClick(project)}>
            <img src={project.background} alt={project.name} />
            <p className="legend cursor-pointer">{project.name}</p>
          </div>
        ))}
      </Carousel>
      {selectedProject && (
        <div className="project-info-overlay">
          <div className="bg-blue-500 p-16">
            <button className="close-button" onClick={closeProjectInfo}>
              <span className="float-right cursor-pointer">X</span>
            </button>
            <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
            <p className="text-gray-800 p-8">{selectedProject.description}</p>

            <a href={selectedProject.urlRepository} target="_blank" rel="noopener noreferrer">
              <button className="visit-button bg-black text-white hover:bg-blue-700 p-2">View Code</button>
            </a>

            <a href={selectedProject.urlWebsite} target="_blank" rel="noopener noreferrer">
              <button className="visit-button bg-white text-black hover:text-blue-500 p-2 rounded-ee-lg">View Website</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
