'use client'
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Chrono } from "react-chrono";

export default function About() {


    const timelineData = [
        {
            title: 'Événement 1',
            cardTitle: 'Card 1',
            cardSubtitle: 'Subtitle 1',
            cardDetailedText: 'Description de l\'événement 1',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 0, 1),
        },
        {
            title: 'Événement 2',
            cardTitle: 'Card 2',
            cardSubtitle: 'Subtitle 2',
            cardDetailedText: 'Description de l\'événement 2',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 2, 15),
        },
        {
            title: 'Événement 2',
            cardTitle: 'Card 2',
            cardSubtitle: 'Subtitle 2',
            cardDetailedText: 'Description de l\'événement 2',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 2, 15),
        },
        {
            title: 'Événement 2',
            cardTitle: 'Card 2',
            cardSubtitle: 'Subtitle 2',
            cardDetailedText: 'Description de l\'événement 2',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 2, 15),
        },
        {
            title: 'Événement 2',
            cardTitle: 'Card 2',
            cardSubtitle: 'Subtitle 2',
            cardDetailedText: 'Description de l\'événement 2',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 2, 15),
        },
        {
            title: 'Événement 2',
            cardTitle: 'Card 2',
            cardSubtitle: 'Subtitle 2',
            cardDetailedText: 'Description de l\'événement 2',
            media: {
                type: 'IMAGE',
                source: {
                    url: 'https://via.placeholder.com/150',
                },
            },
            date: new Date(2023, 2, 15),
        },
        
        // Ajoutez d'autres événements ici
    ];

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('timeline');

            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementTop < windowHeight) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <main className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:h-screen h-auto about-me flex items-center justify-center">
                <h1 className="text-4xl lg:text-6xl font-bold">About Me</h1>
            </div>

            <Chrono
                items={timelineData}
                mode="VERTICAL"
                style={{ visibility: isVisible ? 'visible' : 'hidden' }}
            />
        </main>
    );
}
