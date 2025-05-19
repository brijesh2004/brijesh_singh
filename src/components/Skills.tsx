const skills = {
  Frontend: ['HTML', 'CSS', 'Tailwind CSS','BootStrap', 'JavaScript', 'TypeScript', 'React.js', 'Next.js'],
  Backend: ['Node.js', 'Express.js', 'Django', 'Django Rest Framework'],
  Database: ['MongoDB', 'PostgreSQL', 'MySQL'],
  'Mobile Applications':['React Native' , 'Expo'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Postman', 'Netlify', 'Vercel', 'Docker' , 'Redis'],
  Others: ['C/C++', 'Java', 'Python', 'Data Structures & Algorithms' , 'Blockchain', 'Solidity', 'Hardhat', 'Ether.js'],
};

const Skills = () => {
  return (
    <div className="px-4 py-12 md:px-10 lg:px-28 max-w-screen-xl mx-auto pb-28 md:pb-0 md:pl-22 pl-5">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-red-700 mb-10">
        Skills & Technologies
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, techs]) => (
          <div key={category}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h2>
            <ul className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <li
                  key={tech}
                  className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-200 transition"
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
