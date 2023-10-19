'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const menuItems = [
    { text: 'About', link: 'about' },
    { text: 'Works', link: 'works' },
    { text: 'Notes', link: 'notes' },
    { text: 'Contact', link: 'contact' },
];

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="bg-blue-custom p-8 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex items-center justify-center w-full"> {/* Utilisez w-full pour définir la largeur à 100% */}
                <div className="hidden md:flex space-x-8 items-center">
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link
                                href={item.link}
                                className="text-white transition duration-300 ease-in-out font-bold"
                            >
                                {item.text.toUpperCase()}
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
                
                <div className="md:hidden flex lg:justify-center justify-end w-full">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-10 h-10 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18 15a1 1 0 01-1 1H7a1 1 0 010-2h10a1 1 0 011 1zm0-5a1 1 0 01-1 1H7a1 1 0 010-2h10a1 1 0 011 1zm0-5a1 1 0 01-1 1H7a1 1 0 010-2h10a1 1 0 011 1z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden mt-4 h-screen flex flex-col justify-center space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="text-white block py-6 hover-bg-gray-800 transition duration-300 ease-in-out text-center font-bold text-2xl"
                            onClick={closeMenu}
                        >
                            {item.text.toUpperCase()}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
