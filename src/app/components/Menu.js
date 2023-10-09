'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const menuItems = [
    { text: 'About', link: 'about' },
    { text: 'Works', link: 'works' },
    { text: 'Experiences', link: 'experiences' },
    { text: 'Blogs', link: 'blogs' },
];

export default function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-black text-white p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="hidden md:flex space-x-2 items-center">
                    <div className="text-xl font-bold">
                        <Link href="/" className='text-blue-500 mr-5'>PORTFOLIO</Link>
                    </div>
                    <div className="text-white">|</div>
                    {menuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link
                                href={item.link}
                                className="text-white hover:text-blue-500 transition duration-300 ease-in-out font-bold"
                            >
                                {item.text.toUpperCase()}
                            </Link>

                        </React.Fragment>
                    ))}
                </div>
                <div className='flex'>
                    <a href="https://github.com/williamqsnt" target='_blank'><Image src="/github.svg" width={30} height={30} className="mr-4" /></a>
                    <a href="https://www.linkedin.com/in/william-quesnot/" target='_blank'><Image src="/linkedin.svg" width={30} height={30} /></a>
                </div>


                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <svg
                            className="w-6 h-6 fill-current"
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
                <div className="md:hidden mt-4">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="block py-2 hover:bg-gray-800 transition duration-300 ease-in-out text-center"
                        >
                            {item.text.toUpperCase()}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
