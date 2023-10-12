
'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
    {
        name: 'Projet 1',
        background: '/img-projects/test.png',
        description: 'Project 1 description',
        tags: ['Terraform', 'AWS', 'Python'],
        urlRepository: 'https://github.com/username/projet1',
        urlWebsite: 'https://www.example.com/projet1',
    },
    {
        name: 'Projet 2',
        background: '/img-projects/test.png',
        description: 'Project 2 descriptio dqzd qzd qzd zq ',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet2',
        urlWebsite: 'https://www.example.com/projet2',
    },
    {
        name: 'Projet 3',
        background: '/img-projects/test.png',
        description: 'Project 2 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet2',
        urlWebsite: 'https://www.example.com/projet2',
    },
    {
        name: 'Projet 4',
        background: '/img-projects/test.png',
        description: 'Project 2 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet2',
        urlWebsite: 'https://www.example.com/projet2',
    },
    {
        name: 'Projet 5',
        background: '/img-projects/test.png',
        description: 'Project 2 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet2',
        urlWebsite: 'https://www.example.com/projet2',
    },
    {
        name: 'Projet 6',
        background: '/img-projects/test.png',
        description: 'Project 3 description',
        tags: ['Docker', 'Kubernetes'],
        urlRepository: 'https://github.com/username/projet3',
        urlWebsite: 'https://www.example.com/projet3',
    },
    {
        name: 'Projet 7',
        background: '/img-projects/test.png',
        description: 'Project 4 description',
        tags: ['Node.js', 'MongoDB'],
        urlRepository: 'https://github.com/username/projet4',
        urlWebsite: 'https://www.example.com/projet4',
    },
    {
        name: 'Projet 8',
        background: '/img-projects/test.png',
        description: 'Project 5 description',
        tags: ['Java', 'Spring'],
        urlRepository: 'https://github.com/username/projet5',
        urlWebsite: 'https://www.example.com/projet5',
    },
    // Ajoutez d'autres projets ici
];
const Works = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mobileView, setMobileView] = useState(false);
    const [carouselSelectedItem, setCarouselSelectedItem] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setMobileView(window.innerWidth <= 640);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleProjectClick = (project, index) => {
        setSelectedProject(project);
        setCarouselSelectedItem(index);
    };

    const closeProjectInfo = () => {
        setSelectedProject(null);
    };

    return (
        <div className="text-center mt-48">
            <h1 className="text-6xl font-bold my-16">My works</h1>
            <Carousel
                selectedItem={carouselSelectedItem}
                onChange={(index) => setCarouselSelectedItem(index)}
                showArrows={false}
                showThumbs={false}
                emulateTouch={true}
                centerMode={true}
                centerSlidePercentage={mobileView ? 50 : 25}
                showStatus={false}
                useKeyboardArrows={true}
                autoPlay
                infiniteLoop
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        onClick={() => handleProjectClick(project, index)}
                        className="cursor-pointer"
                    >
                        <div className="group">
                            <img
                                src={project.background}
                                alt={project.name}
                                className="brightness-75 group-hover:brightness-100"
                            />
                            <p className="legend cursor-pointer">{project.name}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
            {selectedProject && (
                <div className="project-info-overlay">
                    <div className="bg-blue-800 p-16 flex flex-col items-center justify-center">
                        <button className="close-button" onClick={closeProjectInfo}>
                            <span className="float-right cursor-pointer font-bold text-4xl mb-4">
                                &times;
                            </span>
                        </button>
                        <h2 className="text-4xl font-semibold">{selectedProject.name}</h2>
                        <div className="text-white font-medium p-8">
                            {selectedProject.tags && (
                                <div className="flex">
                                    {selectedProject.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-black text-white rounded-full px-4 py-2 text-sm mr-2"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <p
                            className={`text-white font-medium p-8 ${mobileView ? 'w-full' : 'w-1/2' // Utilisez les classes de tailwindcss appropriées
                                }`}
                            style={{ wordWrap: 'break-word' }}
                        >    {selectedProject.description}
                        </p>

                        <div className="flex items-center justify-center my-8">
                            <img
                                src={selectedProject.background}
                                alt={selectedProject.name}
                            />
                        </div>
                        <div className="flex">
                            <a
                                href={selectedProject.urlRepository}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="visit-button bg-black text-white hover-bg-blue-700 p-2">
                                    View Code
                                </button>
                            </a>
                            <a
                                href={selectedProject.urlWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="visit-button bg-white text-black hover-text-blue-500 p-2 rounded-ee-lg">
                                    View Website
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};


export default Works;
