import React from 'react'
const projects = [
  {
    name: "JAVA & J2EE",
    description: "User Authentication Web Site & Java  Projects...",
    url: "https://github.com/kesavanblack/login-form-for-student-java",
  },
  {
    name: "PYTHON ",
    description: "Attendance Register Using Open CV ...",
    url: "https://github.com/kesavanblack/attence-register-use-open-cv",
  },
  {
    name: "DATA SCIENCE / ANALYST",
    description: " Data Analysis Using Python & Mini Projects...",
    url: "#",
  },
  {
    name: "WEB TECHOLOGIES ",
    description: "Web site & Portfolio website using React.js ...",
    url: "https://github.com/kesavanblack/mysiteportfolio",
  },
  {
    name: "STREAMLIT ",
    description: " Open Tool Data Analysis Using Streamlit App...",
    url: "https://app-app-ds-6tx3seme4ebd2qdvc8krv9.streamlit.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:bg-cyan-900 hover:text-white">
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a href={project.url} className="text-blue-500 hover:underline">View Project</a>
            </div>  
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects