import React from "react";
import { motion } from "framer-motion";
import Mpo from "../assets/imgs/portoflioLogo.png";
function Nav() {
  return (
    <div className="flex justify-around flex-row absolute top-0 right-0 left-0 z-10 ">
      
      <nav className="mt-8 center ">
        <motion.ul
          initial={{ y: -300 }}
          animate={{ y: 0 }}
          transition={{ delay: 2, duration: 1, type: "spring", stiffness: 120 }}
          className="flex md:gap-24 gap-10" 
        >
          <a className=" NavBtn transtion1 transform1 " href="#Skills">
            Skills
          </a>
          <a className=" NavBtn transtion1 transform1" href="#Experince">
            Experince
          </a>
          <a className=" NavBtn transtion1 transform1" href="#Projects">
            Projects
          </a>
        </motion.ul>
      </nav>
      {/* <div className="md:hidden p-6"> burgerIcon</div> */}
    </div>
  );
}

export default Nav;
