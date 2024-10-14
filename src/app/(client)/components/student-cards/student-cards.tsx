import { FC } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGift, FaGitAlt, FaGithub } from "react-icons/fa";
import { FaGit, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

interface SocialIcons {
  linkedin: string;
  github: string;
}

interface StudentCardProps {
  name: string;
  role: string;
  program: string;
  image: string;
  SocialLinks: SocialIcons;

}

const StudentCard: FC<StudentCardProps> = ({name , role , program , image , SocialLinks}) => {

  return (
    
    <div className="flex  items-center justify-center w-full">
      <div className="flex  items-center md:flex-row w-11/12 md:w-3/5 lg:w-3/5 xl:w-1/3 h-auto md:h-[30vh] bg-white bg-opacity-10 rounded-lg shadow-lg backdrop-filter backdrop-blur-md">
        {/* Profile Image Section */}
        <div className=" pl-5 w-full md:w-1/3 h-[60%]  ">
          <img
            className="object-cover w-full h-full rounded-full   border-white  hover:scale-125 transition-all duration-500 hover:border-4"
            src={image}
            alt="Profile"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 flex items-end justify-center py-6 md:py-8">
          <div className="flex flex-col  px-4">
            <h2 className="text-xl font-bold text-gray-900">
              Name: {name}
              <br />
              <span className="text-base font-semibold">
                Roll: {role}
              </span>
              <br />
              <span className="text-base font-semibold">Progeram: {program} </span>
            </h2>

            {/* Social Icons */}
            <ul className="flex mt-4">
              <li className="mx-1">
                <a
                  href={SocialLinks.linkedin}
                  className="flex items-center justify-center w-10 h-10 text-2xl text-gray-900 bg-transparent rounded-full shadow-md transition duration-300 hover:bg-orange-400 hover:text-white"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="mx-1">
                <a
                  href={SocialLinks.github}
                  className="flex items-center justify-center w-10 h-10 text-2xl text-gray-900 bg-transparent rounded-full shadow-md transition duration-300 hover:bg-orange-400 hover:text-white"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
