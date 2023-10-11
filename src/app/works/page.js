
'use client'
import React, { useState } from 'react';

const projects = [
  {
    name: 'Projet 1',
    background: 'url("/img-projects/test.png")',
  },
  {
    name: 'Mrojet 2',
    background: 'url("/img-projects/test2.png")',
  },
  {
    name: 'Projet 3',
    background: 'url("/img-projects/test.png")',
  },
  {
    name: 'Projet 4',
    background: 'url("/test.png")',
  },
  {
    name: 'Projet 5',
    background: 'url("/test.png")',
  },
  {
    name: 'Projet 6',
    background: 'url("/test.png")',
  },
  {
    name: 'Projet 7',
    background: 'url("/test.png")',
  },
  // Ajoutez d'autres projets ici
];

const Works = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-200 p-16 rounded-lg shadow-md flex flex-col items-center justify-center square"
            style={{
              backgroundImage: project.background,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
