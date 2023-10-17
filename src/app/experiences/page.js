'use client'
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Experiences() {
    const [selectedExperience, setSelectedExperience] = useState(null);
    const experienceDetailsRef = useRef(null);
    const [isExperienceVisible, setExperienceVisible] = useState(false);

    const experiences = [
        {
            id: 1,
            year: "September 2023 - Now",
            title: "DevOps Engineer",
            description: "at ResMed (apprenticeship)",
            companyLogo: "resmed.png",
            technologies: ["AWS", "Terraform", "Python"],
            responsabilities: "Specialized in the deployment, maintenance, performance optimization, and capacity management of secure cloud infrastructure and systems on AWS."
        },
        {
            id: 2,
            year: "January - March 2023",
            title: "Web Developer",
            description: "at Riddle (internship)",
            companyLogo: "riddle.jpeg",
            technologies: ["React", "Symfony", "API Platform", "Postman", "Docker"],
            responsabilities: "Enhance a SaaS software with responsibilities including adding new features, bug fixing, and conducting quality tests"
        },
        {
            id: 3,
            year: "April - June 2022",
            title: "Web Developer",
            description: "at Axians VINCI Energies (internship)",
            companyLogo: "axians.jpeg",
            technologies: ["NextJS", "CMS Contentful"],
            responsabilities: "Built an e-commerce website from scratch using Next.js, integrated a CMS, and designed the layout using Adobe XD"
        },
    ];

    useEffect(() => {
        if (selectedExperience) {
            gsap.to(experienceDetailsRef.current, {
                width: "100%",
                duration: 0.5,
            });
            gsap.to(".about-me", {
                width: "0%",
                duration: 0.5,
            });

            gsap.to(experienceDetailsRef.current, {
                top: 0,
                duration: 0.5,
            });

            setTimeout(() => {
                setExperienceVisible(true);
            }, 500);
        } else {
            gsap.to(experienceDetailsRef.current, {
                width: 0,
                duration: 0.5,
            });
            gsap.to(".about-me", {
                width: "50%",
                duration: 0.5,
            });

            gsap.to(experienceDetailsRef.current, {
                top: "50%",
                duration: 0.5,
            });

            setExperienceVisible(false);
        }
    }, [selectedExperience]);

    const openExperience = (experience) => {
        setSelectedExperience(experience);
    };

    const closeExperience = () => {
        setSelectedExperience(null);
    };

    return (
        <main className="flex flex-col lg:flex-row">
<div className="lg:w-1/2 w-full h-auto about-me flex items-center justify-center bg-gradient-to-b from-black to-blue-500 lg:h-screen lg:bg-black">
                <h1 className={`text-4xl lg:text-6xl font-bold lg:mt-0 ml-20 mt-28 ${selectedExperience ? 'text-black' : 'text-white'} `}>What is my <br /> Experiences</h1>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-b from-black to-gray-800 p-4 lg:h-screen w-full mt-16">
                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <div
                            key={experience.id}
                            className={`flex cursor-pointer items-center justify-start space-x-4 rounded-md p-4 ${selectedExperience && selectedExperience.id === experience.id ? 'bg-blue-500' : 'bg-gray-700'}`}
                            onClick={() => openExperience(experience)}
                        >
                            <div className="text-left">
                                <img
                                    src={experience.companyLogo}
                                    alt={`${experience.title} Logo`}
                                    className="h-10 w-10 object-contain rounded-full"
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                                <div>
                                    <span className="text-white text-xs">{experience.year}</span>
                                    <h2 className={`text-lg font-semibold ${selectedExperience && selectedExperience.id === experience.id ? 'text-white' : 'text-blue-500'}`}>
                                        {experience.title}
                                    </h2>
                                    <p className="text-gray-300">{experience.description}</p>
                                </div>
                                <div className="text-white text-2xl">
                                    <img
                                        src={selectedExperience && selectedExperience.id === experience.id ? 'right-arrow.svg' : 'down-arrow.svg'}
                                        alt={`${experience.title} Logo`}
                                        className="h-10 w-10 object-contain rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`experience-details w-full mt-16 bg-gradient-to-b from-black to-blue-500 ${isExperienceVisible ? 'block' : 'hidden'}`} ref={experienceDetailsRef}>
                {selectedExperience && (
                    <div className="text-white p-4">
                        <div className="flex justify-end">
                            <button onClick={closeExperience} className="text-3xl cursor-pointer">✖</button>
                        </div>
                        <h2 className="text-4xl text-white font-semibold">
                            {selectedExperience.title}
                        </h2>
                        <p className="text-gray-300">
                            {selectedExperience.description}
                        </p>
                        {isExperienceVisible && (
                            <div>
                                <h3 className="text-xl font-semibold mt-2 mb-2">Technologies</h3>
                                <ul className="text-gray-300 pl-4 flex flex-wrap">
                                    {selectedExperience.technologies.map((tech, index) => (
                                        <li key={index} className="mb-2 m-1">
                                            <span className="px-2 py-1 bg-white text-blue-500 font-semibold rounded-full">{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div>
                                    <p className="mt-4">
                                        {selectedExperience.responsabilities}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </main>
    );
}
