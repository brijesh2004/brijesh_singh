import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FaUserNinja } from "react-icons/fa";
import { Link } from "react-router";
import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";

const Nav = () => {
    return (
        <>
            <nav className="md:h-[100vh] md:bg-red-400 md:text-white md:w-20 w-[100vw] flex justify-center fixed bottom-0 bg-red-400 h-20 items-center text-white z-50">
                <ul className="
                    w-full flex justify-between 
                    md:flex-col md:items-center md:h-full 
                    md:gap-12 md:pt-22 md:pb-22 
                    pl-5 pr-5
                    overflow-x-auto md:overflow-y-auto md:overflow-x-hidden
                    hide-scrollbar
                ">
                    <li>
                        <Link to="/">
                            <FaUserNinja size={30} title="About" />
                            <p className="text-[10px]">About</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/experience">
                            <GiHumanTarget size={30} title="Experience" />
                            <p className="text-[8px]">Experience</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/skills">
                            <GiSkills size={30} title="Skills" />
                            <p className="text-[10px]">Skills</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <GrProjects size={30} title="Project" />
                            <p className="text-[10px]">Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/education">
                            <MdCastForEducation size={30} title="Education" />
                            <p className="text-[10px]">Education</p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <IoIosContact size={30} title="Contact Me" />
                            <p className="text-[10px]">Contact</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
