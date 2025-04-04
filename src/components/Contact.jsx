import { AiFillLinkedin,AiFillGithub } from "react-icons/ai"

const Contact = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center p-" id="Contact">
        
            <ul className="my-auto pr-6">
                <li className="flex ">
                    <AiFillLinkedin  className="w-[70px] pr-4 h-auto text-gray-300" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-200">Contact</h3>
                        <p className="text-gray-400">Mobile : +91 7898744976</p>
                        <p className="text-gray-400">Email:  mridulguptayt@gmail.com</p>

                    </div>
                </li>
                <li className="flex ">
                    <AiFillGithub className="w-[70px] h-auto pr-4  text-gray-300" />
                    <div>
                        <h3 className="text-lg font-bold text-gray-200 ">Learning EveryDay</h3>

                    </div>
                </li>
            </ul>
            <form action="https://getform.io/f/awnnjwxb" method="POST" className="max-w-6xl p-5 md:p-12" id="form">
                <input type="text" id="name" name="fullname" placeholder="Your Name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4  " />
                <input type="email" id="email" name="youremail" placeholder="Your Email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4  "  />
                <textarea type="textarea" id="message" name="yourmessage" cols="30" rows="4" placeholder="Your Message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4  " />
                <button type="submit" className="w-full py-3 rounded-md text-gray-200 font-semibold text-xl
                bg-gradient-to-r from-[#e78636] via-[#d17402]  to-[#e84900]">Send Message</button>
            </form>
    </div>
  )
}

export default Contact;
