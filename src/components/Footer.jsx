import {FaGithubSquare} from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div  className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
        <div className="space-y-4">
            <h3 className="text-2xl text-gray-200 font-semibold">Mridul Gupta</h3>
            <div className="flex flex-row gap-6 text-gray-400 text-4xl" >
                <a href="https://github.com/Mridul-pro-coder"><FaGithubSquare /></a>
                <a href=""><FaLinkedinIn /></a>
            </div>

        </div>
        <p className="text-gray-400">
            @2025 Mridul.G
        </p>
    </div>
  )
}

export default Footer