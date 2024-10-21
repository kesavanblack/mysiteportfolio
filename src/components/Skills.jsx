import React from 'react'

const skills = [
  { name: "Python", level: "Advanced" },
  { name: "React.js", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "Data Science ", level: "Advanced" },
  { name: "Java ", level: "Intermediate" },
  { name: "J2EE ", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "R Programming", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "HTML & CSS ", level: "Advanced" },
  { name: "Streamlit", level: "Intermediate" },
];

const Skills = () => {
  
  return (
    <section id="skills" className="py-20 bg-white px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md hover:scale-110 hover:bg-blue-600 hover:text-white transition-all">
              <h3 className="text-2xl font-semibold mb-4">{skill.name}</h3>
              
              <p className="text-lg">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  )
}

export default Skills