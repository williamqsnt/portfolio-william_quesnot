'use client'
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function About() {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const eventDetailsRef = useRef(null);

    const events = [
        {
            id: 1,
            year: 2020,
            title: "Titre de l'événement 2020",
            description: "Description de l'événement 2020...",
        },
        {
            id: 2,
            year: 2018,
            title: "Titre de l'événement 2018",
            description: "Description de l'événement 2018...",
        },
        // Ajoutez d'autres événements ici
    ];

    useEffect(() => {
        // Animation pour ouvrir l'événement sélectionné
        if (selectedEvent) {
            gsap.to(eventDetailsRef.current, {
                width: "50%",
                duration: 0.5,
            });
            gsap.to(".about-me", {
                width: "0%",
                duration: 0.5,
            });
        } else {
            // Animation pour fermer l'événement sélectionné
            gsap.to(eventDetailsRef.current, {
                width: 0,
                duration: 0.5,
            });
            gsap.to(".about-me", {
                width: "50%",
                duration: 0.5,
            });
        }
    }, [selectedEvent]);

    const openEvent = (event) => {
        setSelectedEvent(event);
    };

    const closeEvent = () => {
        setSelectedEvent(null);
    };

    return (
        <main className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 w-full lg:h-screen h-auto about-me flex items-center justify-center">
                <h1 className="text-4xl lg:text-6xl font-bold">About Me</h1>
            </div>
            <div className="lg:w-1/2 bg-gray-800 p-4 lg:h-screen w-full mt-20">
                <div className="space-y-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex cursor-pointer"
                            onClick={() => openEvent(event)}
                        >
                            <div className="bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center">
                                <span className="text-white">{event.year}</span>
                            </div>
                            <div className="ml-4">
                                <h2 className="text-lg font-semibold">{event.title}</h2>
                                <p className="text-gray-300">Description de l'événement.</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="event-details" ref={eventDetailsRef}>
                {selectedEvent && (
                    <div className="text-white p-4">
                        <h2 className="text-lg font-semibold">
                            {selectedEvent.title}
                        </h2>
                        <p className="text-gray-300">
                            {selectedEvent.description}
                        </p>
                        <button onClick={closeEvent}>Fermer</button>
                    </div>
                )}
            </div>
        </main>
    );
}
