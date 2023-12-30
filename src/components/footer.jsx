import React from "react";
import githubImg from "../assets/imgs/github.png";
import linkedInImg from "../assets/imgs/linkedIn.png";
function Footer() {
  return (
    <div className="h-[18vh] bg-black ">
      <div className="flex flex-col justify-center items-center pt-[3vh]">
        <div className="flex mb-2">
          <a
            className="cursor-pointer opacity-60 hover:opacity-90"
            href="https://github.com/Mohanned-Rasheed"
          >
            <img className="h-[5vh]" src={githubImg}></img>
          </a>
          <a
            className="cursor-pointer opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/mohanned-albidhani/"
          >
            <img className="h-[5vh] brightness-200 " src={linkedInImg}></img>
          </a>
        </div>
        <div className="text-[2.4vh]">Crated with Love 🤍</div>
        <div className="text-[2.4vh] opacity-60 "> Mohanned Albidani © </div>
      </div>
    </div>
  );
}

export default Footer;
