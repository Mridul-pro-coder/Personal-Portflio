import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import ShinyEffect from "./ShinyEffect";
import soon from "../assets/soon.png"
import project1 from "../assets/project 1.png"


const projects=[
    {
        img: project1,
        title:"project #1",
        description:"",
        links:{
            site:"",
            github:"https://github.com/Mridul-pro-coder/Aether-chat-app-MERN-",

        }

    },
    
    {
        img: soon,
        title:"project #3",
        description:"",
        links:{
            site:"#",
            github:"",
            
        }

    },
]

const Portfolio = () => {
    const [currentProject,setCurrentProject]=useState(0)


  return (
    <div className=" relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row" id="Portfolio">
        <div className="z-10 glass p-6 w-full border-2 max-w-[600px]">
            <div>
                <img src={projects[currentProject].img} alt={projects[currentProject].title} className="w-full h-full object-cover rounded-lg mb-4" />
            </div>
            <p className="text-gray-200 my-4">
            {projects[currentProject].description}
            </p>
            <div className="flex space-x-4">
                <a  href={projects[currentProject].links.site} className="px-4 py-2 bg-orange-600 text-gray-200 rounded-lg hover:bg-orange-700 transition duration-300 ">view site</a>
                <a href={projects[currentProject].links.github} className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"><AiFillGithub/></a>
            </div>

        </div>

        <div className='absolute inset-0'>
            <div className='hidden md:block'>
               <ShinyEffect left={100} top={0} size={900} />
            </div>
        </div>




        <ul className="z-10 ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1">
            {projects.map((projects,index)=>(
                <li key={index} onClick={()=>setCurrentProject(index)} className={`cursor-pointer text-gray-300 bg-orange-700 rounded-lg p-2 max-w-[100px] hover:bg-orange-900 transition duration-300 ${currentProject === index ? "bg-slate-900": ""}`}>{projects.title}</li>
                ))}
           
        </ul>

    </div>
  )
}

export default Portfolio