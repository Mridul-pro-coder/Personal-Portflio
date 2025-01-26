import { BiLogoTailwindCss } from "react-icons/bi";
import {DiJavascript1,DiReact,DiNodejsSmall,DiHtml5,DiCss3,DiBootstrap,DiMongodb,DiGithubBadge,DiPython} from "react-icons/di"

import showpic3 from "../assets/showpic3.jfif"
import showpic from "../assets/showpic.jfif"
import showpic2 from "../assets/showpic2.jfif"

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id='About'>
        <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
            
            
            
        </div>
       

        <div className="relative group">
            <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-orange-400 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={showpic2} alt="project 1 " className="rounded-lg md:max-w-[500px]" /> 
                </div>

            

        </div>

        

        <div className="p-6 ">
            <h2 className="text-gray-200 text-3xl font-bold mb-4">Skills</h2>
            <p className="text-gray-300 mb-4"></p>
            <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden ">
            <DiHtml5 className='text-orange-600' />
            <DiCss3 className='text-blue-600'/>
            <DiJavascript1 className='text-yellow-600'/>
            <DiReact className='text-blue-500'/>
            <DiNodejsSmall className='text-green-500'/>
            <DiBootstrap className='text-purple-600'/>
            <DiGithubBadge className='text-gray-600'/>
            <DiMongodb className='text-green-600'/>
            <DiPython className='text-blue-100'/>
            
            </div>

        </div>

        <div className="p-6 ">
            <h2 className="text-gray-200 text-3xl font-bold mb-4">Frontend Technologies</h2>
            <p className="text-gray-300 mb-4">Experienced in creating modern,responsive web application and Mobile Application using the latest Technologies</p>
            <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden  ">
               <DiHtml5 className='text-orange-600' />
               <DiCss3 className='text-blue-600'/>
               <DiJavascript1 className='text-yellow-600'/>
               <DiReact className='text-blue-500'/> 
               <DiBootstrap className='text-purple-600'/>
               <BiLogoTailwindCss className="text-blue-300" />
            
            </div>

        </div>

        <div className="relative group">
            <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-orange-400 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={showpic} alt="project 2 " className="rounded-lg md:max-w-[500px]" />
                </div>

            

        </div>

        <div className="relative group">
            <div className="w-full h-full absolute -inset-1 bg-gradient-to-r from-teal-100 to-orange-400 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative w-full p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg">
                    <img src={showpic3} alt="project 3" className="rounded-lg md:max-w-[500px]" />
                </div>

            

        </div>


        <div className="p-6 ">
            <h2 className="text-gray-200 text-3xl font-bold mb-4">FullStack Experience</h2>
            <p className="text-gray-300 mb-4">Skilled in developing end-to-end solutions using fullStack Technologies</p>
            <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
            <DiNodejsSmall className='text-green-500'/>
            <DiGithubBadge className='text-orange-600'/>
            <DiMongodb className='text-green-600'/>
            <DiPython className='text-blue-300'/>
            
            </div>

        </div>


    </div>
  )
}

export default About;