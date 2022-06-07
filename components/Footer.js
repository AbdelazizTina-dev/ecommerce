import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-12">
      <p className="text-md text-center text-text-blue font-bold mb-2">
        Abdelaziz Tina, 2022
      </p>
      <div className="flex flex-row justify-center items-center">
        <a href="https://www.linkedin.com/in/abdelaziz-tina-4998251b7/">
          <BsLinkedin size={24} className="cursor-pointer mr-2" />
        </a>
        <a href="https://github.com/AbdelazizTina-dev/">
          <FaGithubSquare size={27} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
