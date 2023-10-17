
'use client'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
    {
        name: 'Projet 1',
        background: '/img-projects/test.png',
        description: 'Project 1 description podzqk dzq dqz  qdzq pozq ',
        tags: ['Terraform', 'AWS', 'Python'],
        urlRepository: 'https://github.com/username/projet1',
        urlWebsite: 'https://www.example.com/projet1',
    },
    {
        name: 'Projet 2',
        background: '/img-projects/test.png',
        description: 'Project 2 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet2',
        urlWebsite: 'https://www.example.com/projet2',
    },
    {
        name: 'Projet 3',
        background: '/img-projects/test.png',
        description: 'Project 3 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet3',
        urlWebsite: 'https://www.example.com/projet3',
    },
    {
        name: 'Projet 3',
        background: '/img-projects/test.png',
        description: 'Project 3 description',
        tags: ['React', 'JavaScript'],
        urlRepository: 'https://github.com/username/projet3',
        urlWebsite: 'https://www.example.com/projet3',
    }
];
const Works = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [mobileView, setMobileView] = useState(false);
    const [carouselSelectedItem, setCarouselSelectedItem] = useState(0);
    const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

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
        setIsAutoplayPaused(true);
    };

    const closeProjectInfo = () => {
        setSelectedProject(null);
        setIsAutoplayPaused(false);
    };

    return (
        <div className="text-center mt-48 bg-[#ECE7DF]">
            <h1 className="text-6xl font-bold my-28 text-green-900">My works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-8 m-2 border rounded-lg relative group transition-all duration-300 hover:opacity-200">
                        <div className="bg-green-900 absolute inset-0 opacity-0 group-hover:opacity-40 transition-all duration-300 rounded-lg"></div>
                        <div className='flex justify-around text-left'>
                            <div className='flex flex-col items-start justify-center'>
                                <h2 className="text-2xl font-bold text-green-800">{project.name}</h2>
                                <p className="text-gray-black mt-4 text-green-900">{project.description}</p>
                            </div>
                            <div className="flex items-center ml-8 my-4">
                                <img src={project.background} alt={project.name} className="w-24 h-24" style={{ height: '100%' }} />
                            </div>
                        </div>

                        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:transition-opacity duration-300">
                            <a href={project.urlRepository} className=" inline-block relative bg-black p-2 rounded text-white hover:bg-black mr-2">Repository</a>
                            <a href={project.urlWebsite} className="inline-block relative bg-black p-2 rounded text-white hover:bg-black">Website</a>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;