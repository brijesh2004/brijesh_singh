import { Routes , Route } from "react-router"
import Skills from "../Skills"
import About from "../About"
import Projects from "../Projects"
import Contact from "../Contact"
import Education from "../Education"


const Router = () => {
    return (
        <Routes>
           <Route path="/" element = {<About/>}/>
           <Route path="/skills" element = {<Skills/>}/>
           <Route path="/projects" element = {<Projects/>}/>
           <Route path="/education" element = {<Education/>}/>
           <Route path="/contact" element = {<Contact/>}/>
           
        </Routes>
    )
}

export default Router
