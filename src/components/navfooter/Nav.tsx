
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FaUserNinja } from "react-icons/fa";
import { Link } from "react-router";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";

const Nav = () => {
    return (
        <>
            <nav className="md:h-[100vh] md:bg-red-400 md:text-white md:w-20 w-[100vw] flex justify-center fixed bottom-0 bg-red-400 h-20 items-center text-white" >
                <ul className="w-full flex justify-between md:justify-between md:flex-col md:items-center md:h-full md:gap-12 md:pt-22 md:pb-22 pl-5 pr-5 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden">
                    <li>
                        <Link to="/">
                            <FaUserNinja size={40} title="About" />
                            <p>About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            <GiSkills size={40} title="Skills" />
                            <p>Skills</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <GrProjects size={40} title="Project" />
                            <p>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="education">
                           <MdCastForEducation size={40} title="Education"/>
                           <p>Education</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <IoIosContact size={40} title="Contact Me" />
                            <p>Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav
