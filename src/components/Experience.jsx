import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    { title: 'Elementary', years: '(2008-2014)', place: 'Dahile Elementary School' },
    { title: 'Junior High School', years: '(2014-2018)', place: 'Dahile Provincial Community High School' },
    { title: 'Senior High School', years: '(2014-2020)', place: 'Dahile Provincial Community High School' },
    { title: 'Work Immersion', years: '(2019-2020)', place: 'Tourism Office Mabinay' },
    { title: 'College', years: '(2020-2024)', place: 'Central Philippines State University' },
    { title: 'On-the-Job Training', years: '(2023-2024)', place: 'Mabinay National High School' },
  ];

  return (
    <div className="p-8 bg-[#190b1f]" id="experience">
      <h2 className="mb-12 text-4xl text-gray-200 font-bold text-center">
        My <span>Experiences</span>
      </h2>

      {experiences.map((exp, index) => (
        <React.Fragment key={index}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="mb-[20px] text-white border border-purple-600 bg-purple-700/10 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto relative"
          >
            <p>{exp.title}</p>
            <p className="text-gray-400">{exp.years}</p>
            <p className="text-gray-500">{exp.place}</p>
          </motion.div>

          {index < experiences.length - 1 && (
            <div className="h-[50px] w-[2px] bg-white absolute top-1/2 transform -translate-y-1/2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Experience