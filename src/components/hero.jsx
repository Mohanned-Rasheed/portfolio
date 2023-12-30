import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Spline from "@splinetool/react-spline";
import Nav from "./nav";
import { motion } from "framer-motion";
function Hero() {
  const [dev] = useTypewriter({
    words: ["Website", "Mobile Application"],
    loop: {},
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  const [soft] = useTypewriter({
    words: ["Software Engineer", "developer"],
    loop: {},
  });

  const [buttonFlag, setButtonFlag] = useState(true); //this to stop the dealy in the contact me button

  const FlagFunction = () => {
    //this to stop the dealy in the contact me button
    setTimeout(() => {
      setButtonFlag(false);
    }, 6000);
  };

  useEffect(() => {
    //this to stop the dealy in the contact me button
    FlagFunction();
  }, []);

  return (
    <div className="shadow-2xl border-b border-gray-500 relative md:h-[105vh]  h-[50vh] w-[100%]">
      <div className="absolute h-[105vh] w-[100%] z-10" />

      <Nav></Nav>
      {/* <Spline
        className="absolute hidden z-0 "
        scene="https://prod.spline.design/r9ISq204R8493YpB/scene.splinecode"
      /> */}

      <div className="font-bold absolute md:mt-[30vh] mt-[20vh] max-md:text-center sm:ml-20 mx-5 z-20">
        <motion.div
          animate={{
            y: [-100, -100, -50, -50, 0],
            x: [50, 50, 50, 50, 0],
            transition: {
              y: { duration: 5 },
              x: { duration: 6, delay: 1 },
            },
          }}
          className="md:text-[2.5vw] text-[3vw] mb-[-4vw]"
        >
          Hello,
        </motion.div>
        <motion.div
          animate={{
            x: [-800, 50, 50, 50, 0],
            transition: { x: { duration: 6, delay: 1 } },
          }}
          transition={{}}
          className="md:text-[3vw] mb-[-1.5vw]"
        >
          <br /> I'm <span className="text-green-300 font-bold ">Mohanned</span>{" "}
          <br className="max-sm:hidden" />
          {dev}
          <Cursor />
          <span className="text-purple-400 font-bold"> developer</span>
        </motion.div>
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ delay: 6, duration: 0.5 }}
          className=" md:text-[1vw] text-[1.8vw] max-sm:text-center lg:mt-6 mt-2 text-purple-200"
        >
          I am an information techonolgy Faculty of Computing and Information
          Technology at King AbdulAziz University
          <br /> my currenlty focues is Developing application expexially
          websites or mobile appilcation
          <br /> i can say i am a {soft} <Cursor />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: buttonFlag && 7,
          }}
          whileHover={{ scale: 1.05 }}
          className=" transform1 duration-300 mt-4 max-sm:flex justify-center w-full"
        >
          <a href="#contactMe" className="ContactMe">
            {" "}
            Contact me
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
