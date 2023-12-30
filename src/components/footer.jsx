import React from "react";
import githubImg from "../assets/imgs/github.png";
import linkedInImg from "../assets/imgs/linkedIn.png";
function Footer() {
  return (
    <div className="h-32 bg-black ">
      <div className="flex flex-col justify-center items-center pt-5">
        <div className="flex mb-2">
          <a
            className="cursor-pointer opacity-60 hover:opacity-90"
            href="https://github.com/Mohanned-Rasheed"
          >
            <img className="h-8" src={githubImg}></img>
          </a>
          <a
            className="cursor-pointer opacity-80 hover:opacity-100"
            href="https://www.linkedin.com/in/mohanned-albidhani/"
          >
            <img className="h-8 brightness-200 " src={linkedInImg}></img>
          </a>
        </div>
        <div>Crated with Love 🤍</div>
        <div className="opacity-60 "> Mohanned Albidani © </div>
      </div>
    </div>
  );
}

export default Footer;
