import {motion} from 'framer-motion';
import profilePic from '../assets/profile_image.jpg';

const About = () => {
  return (
    <div className="mb-28 md:ml-28 md:mb-0">
      <section id="about" className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-5xl w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8"
            >
               
                <motion.img
                    src={profilePic} 
                    alt="Profile"
                    className="w-100 h-100 rounded-full object-cover border-4 border-red-400 shadow-md"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                />
                
                <div className="flex-1">
                    <h2 className="text-4xl font-bold text-red-500 mb-6 border-b-4 border-red-300 inline-block">
                        About Me
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Hello! I'm a passionate and detail-oriented <span className="font-semibold text-red-500">Full-Stack Developer</span> with a strong foundation in building scalable, responsive, and user-friendly web applications.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        I specialize in technologies like <span className="font-medium text-red-500">React, Next.js, Node.js, Express, MongoDB</span>, and <span className="font-medium text-red-500">TypeScript</span>. I'm also experienced with tools like <span className="font-medium text-red-500">Docker, Redis, PostgreSQL</span>, and I enjoy building real-time applications using <span className="font-medium text-red-500">Socket.io and WebRTC</span>.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        I'm always open to learning and excited to take on new challenges.
                    </p>
                </div>
            </motion.div>
        </section>
    </div>
  )
}

export default About
