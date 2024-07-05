import React from 'react';
import calcu from "../assets/calcu.png";
import psit1 from "../assets/psit1.jpg";
import thesis from "../assets/thesis.jpg";
import Reveal from './Reveal';

const projects = [
  {
    img: calcu,
    title: "Project #1",
    description: "UI for frontend development using React.",
  },
  {
    img: psit1,
    title: "Project #2",
    description: "A website using HTML and CSS.",
  },
  {
    img: thesis,
    title: "Project #3", 
    description: "A website using PHP and Xampp.",
  }
];

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal key={index}>
          <div className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4 flex justify-center'>
              <img
                src={project.img}
                alt={project.title}
                className={`${index < 2 ? 'w-3/4 h-3/4' : 'w-full h-full'} object-cover rounded-lg shadow-lg`}
              />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default Portfolio