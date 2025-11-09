function Experience() {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "MELE (Remote)",
      date: "Sep 2024 – Dec 2024",
      description: `
        Developed REST APIs, Admin Panel, and Job Portal features. 
        Implemented pagination, infinite scroll & DB optimization, achieving 20% better performance.
        Built dashboard tools for managing content, posts & data visualization.
      `,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "Cloudinary"],
    },
    {
      role: "React Native Developer Intern",
      company: "FlexiEle (Remote)",
      date: "Mar 2025 – Jun 2025",
      description: `
        Designed and developed key mobile application flows using React Native. 
        Built creator-follower ecosystem with podcast uploads, liking, playlist management & monetization.
        Worked on recommendation engine, backend integrations & cloud data handling with AWS S3.
      `,
      skills: ["React Native", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    },
    {
      role: "Cyber & Software Engineer",
      company: "Bharat Electronics Limited (BEL), Ghaziabad",
      date: "Sep 2025 – Present",
      description: `
        Working as Cyber & Software Engineer focusing on geospatial intelligence systems.
        Developed desktop GIS tools using JavaFX & OpenGIS for real-time visualization. 
        Implemented interactive mapping features including zoom, pan, draw tools (polygon, circle, line), 
        and enhanced geospatial file rendering for improved performance.
      `,
      skills: ["Java", "JavaFX", "GIS", "OpenGIS"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-6 py-16 bg-gray-100 flex justify-center"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold text-red-500 mb-12 text-center border-b-4 border-red-300 inline-block">
          Experience
        </h2>

        <div className="relative border-l-4 border-red-300 pl-6 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Dot */}
              <div className="absolute -left-[1.05rem] top-6 w-5 h-5 bg-red-500 border-4 border-white rounded-full shadow-md" />

              <h3 className="text-2xl font-semibold text-gray-800">
                {exp.role}
              </h3>

              <p className="text-lg font-medium text-gray-600">
                {exp.company}
              </p>

              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Arrow to next */}
              {index !== experiences.length - 1 && (
                <div className="mt-4 mb-4 text-red-400 font-bold text-center text-2xl">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
