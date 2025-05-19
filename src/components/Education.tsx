import { motion } from "framer-motion";

const educationData = [
    {
        id: 1,
        level: "10th Standard",
        school: "Adarsh Inter College Hardi Chak Gorakhpur",
        year: "2018",
        score: "83.3%",
    },
    {
        id: 2,
        level: "12th Standard",
        school: "Govt. Jubilee Inter College Gorakhpur",
        year: "2020",
        score: "68.6%",
    },
    {
        id: 3,
        level: "Graduation (B.Tech in Computer Science)",
        school: "Madan Mohan Malaviya University of Technology Gorakhpur",
        year: "2025",
        score: "7.55 CGPA",
    },
];

const achievements = [
    "🏆 First Rank in Syntax Sieze Coding Contest",
    "🥇 First Rank in Algo Olympics 2024",
];

export default function Education() {
    return (
        <div className="px-4 py-12 md:px-10 lg:px-28 max-w-screen-xl mx-auto overflow-x-hidden pb-28 md:pb-0 md:pl-22 pl-5">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center text-red-700 mb-12"
            >
                🎓 My Educational Journey
            </motion.h1>

            <div className="space-y-10">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={edu.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="bg-white border-l-4 border-red-500 p-6 shadow-lg rounded-lg"
                    >
                        <h2 className="text-xl font-semibold text-gray-800">{edu.level}</h2>
                        <p className="text-gray-600">{edu.school}</p>
                        <p className="text-gray-500">{edu.year} | {edu.score}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-16"
            >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🏆 Achievements</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {achievements.map((achievement, i) => (
                        <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.2 }}
                        >
                            {achievement}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
}
