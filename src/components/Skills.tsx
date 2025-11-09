const skills = {
  Frontend: [
    "HTML", "CSS", "Tailwind CSS", "Bootstrap", "JavaScript", "TypeScript",
    "React.js", "Next.js", "Redux Toolkit"
  ],

  Backend: [
    "Node.js", "Express.js", "Django", "Django Rest Framework", "Socket.io",
    "REST API"
  ],

  Database: [
    "MongoDB", "PostgreSQL", "MySQL"
  ],

  "Mobile Applications": [
    "React Native", "Expo"
  ],

  "Tools & Platforms": [
    "Git", "GitHub", "VS Code", "Postman", "Netlify", "Vercel",
    "Docker", "Redis", "Cloudinary", "AWS S3"
  ],

  Others: [
    "C/C++", "Java", "Python", "GIS", "OpenGIS", "JavaFX",
    "Data Structures & Algorithms", "Blockchain", "Solidity", "Hardhat", "Ethers.js"
  ],
};

const Skills = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-28 max-w-screen-xl mx-auto pb-28 md:pb-0">
      <h1 className="text-center text-4xl font-extrabold text-red-600 mb-14 tracking-wide">
        Skills & Technologies
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, techs]) => (
          <div
            key={category}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-red-600 mb-5 border-b-2 border-red-200 pb-2">
              {category}
            </h2>

            <ul className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-red-100 to-red-200 text-red-800 shadow-sm 
                  hover:from-red-200 hover:to-red-300 hover:shadow-md cursor-pointer transition"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
