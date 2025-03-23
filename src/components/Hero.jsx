import profile  from "../assets/profile.png"
import { TypeAnimation } from 'react-type-animation';
import ShinyEffect from './ShinyEffect';
import resume from "../assets/Resume.pdf"

const Hero = () => {
    const handleDownload = () => {
        const resumeUrl = resume; // Make sure the file is inside the 'public' folder
        const a = document.createElement("a");
        a.href = resumeUrl;
        a.download = "My_Resume.pdf"; // Name of the downloaded file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    


  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
        <div className='max-w-[800px]'>
            <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
                HEY, I AM <br/>
                <span className='text-orange-600' >Mridul Gupta</span> <br/>
                <TypeAnimation sequence={[
                    "Web Developer",
                    1000,
                    "App Developer",
                    1000,
                    "Data Analyst",
                    1000,
                    "Machine Learning Engineer",
                    1000

                ]} speed={50} 
                repeat={Infinity}
                className="font-bold italic" />
            </p>
            <h2 className='text-gray-300'>with 6 months of Experience</h2>

            <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                <button onClick={handleDownload} className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 rounded-xl
                bg-gradient-to-r from-[#e78636] via-[#d17402]  to-[#e84900]'>Download Resume</button>
                <button className='transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border 
                border-gray-400 rounded-xl'>view Work</button>
            </div>

        </div >

        <div className='absolute inset-0 overflow-hidden md:overflow-visible'>
            <div className='hidden md:block'>
            <ShinyEffect left={100} top={200} size={1400} />
            </div>
        <ShinyEffect left={-100} top={0} size={1200} />
        </div>
       


        <img src={profile} className='w-[300px] md:w-[500px]' />
   
    </div>
  )
}

export default Hero