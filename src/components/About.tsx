import { motion } from 'framer-motion';
import profilePic from '../assets/profile_image1.png';

const About = () => {
    return (
        <div className="mb-28 md:ml-28 md:mb-0">
            <section
                id="about"
                className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16"
            >
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
                >
                    {/* Profile Image */}
                    <motion.img
                        src={profilePic}
                        alt="Profile"
                        className="w-64 h-64 rounded-full object-cover border-4 border-red-400 shadow-md"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    />

                    {/* Text */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold text-red-500 mb-6 border-b-4 border-red-300 inline-block">
                            About Me
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Hello! I'm a dedicated and detail-oriented
                            <span className="font-semibold text-red-500"> Full-Stack Developer</span>
                            experienced in building scalable, high-performance, and user-friendly
                            web and mobile applications.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Currently, I’m working as a
                            <span className="font-medium text-red-500"> Deputy Engineer</span> at
                            <span className="font-medium text-red-500"> Bharat Electronics Limited (BEL), Ghaziabad</span>,
                            focusing on <span className="font-medium text-red-500">Cyber & Software Engineering</span>.
                            I have hands-on experience with JavaFX, GIS, and OpenGIS, building geospatial desktop applications
                            for visualization and interaction with real-time map data.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Previously, I worked as a
                            <span className="font-medium text-red-500"> React Native Developer Intern</span> at FlexiEle,
                            where I built core mobile UI, implemented podcast-based features, creator monetization,
                            and integrated <span className="font-medium text-red-500">AWS S3</span> with backend APIs.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Before that, I served as a
                            <span className="font-medium text-red-500"> Full-Stack Developer Intern</span> at MELE,
                            where I developed RESTful APIs, built an Admin Panel, implemented
                            pagination & infinite scroll, and optimized backend performance.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            My technical expertise spans
                            <span className="font-medium text-red-500">
                                {" "}
                                React, Next.js, React Native, Node.js, Express, MongoDB, PostgreSQL,
                                TypeScript, Docker, Redis, JavaFX, and GIS
                            </span>.
                            I enjoy solving real-world problems, writing clean code, and delivering quality software.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            I'm continuously learning new technologies and love building applications
                            that create meaningful impact.
                        </p>

                        {/* Download Resume */}
                        <a
                            href="/src/assets/Brijesh_singh_resume.pdf"
                            download
                            className="mt-9 inline-block"
                        >
                            <button className="bg-blue-700 text-white p-3.5 rounded-2xl cursor-pointer">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default About;
