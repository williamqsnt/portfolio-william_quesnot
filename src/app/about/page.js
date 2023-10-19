'use client'
import React, { useState } from "react";
import BasicAccordion from "../components/MuiAccordion";
import RecipeReviewCard from "../components/MuiCard";

function About() {


  return (
    <main className="flex flex-col lg:flex-row w-full items-center justify-center mt-40">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-lightblue-custom mb-20">
          I'm William.
        </h1>
        <div className="flex items-center my-12 lg:flex-row flex-col">
        <div style={{ position: "relative", width: "200px", height: "300px" }}>
          <img
            src="/photo.jpg"
            alt="Votre photo"
            className="w-full h-full object-cover rounded-t-full"
          />
          <svg
            width="160"
            height="160"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: "0", left: "0" }}
          >
           
          </svg>
        </div>
        <div className="text-white ml-16 mr-8 mt-12 text-left">
          <h2 className="text-4xl font-bold text-lightblue-custom">I'm a Software and Cloud Engineer <br/> working in Lyon, France.</h2><br/>
          <p className="text-xl">Passionnate about technologies, I have almost 4 years <br/> experiences in web development. Specialized in React Framework <br/>I decided to learn the Cloud so that it could be my ultimate weapon.  </p>
        </div>
      </div>
        <div className="mt-48">
          <BasicAccordion />
        </div>
        <div className="mt-48">
          <p className="text-white font-bold text-6xl mb-12">My <b className="text-lightblue-custom underline">playground</b></p>
          <RecipeReviewCard />
        </div>
      </div>
    </main>
  );
}

export default About;