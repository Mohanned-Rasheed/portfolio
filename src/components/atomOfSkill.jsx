import React from "react";
import { motion } from "framer-motion";
function AtomOfSkill(props) {
  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      initial={{ y: props.initial, opacity: 0 }}
      animate={{ y: props.animate }}
      whileInView={{
        opacity: 1,
        transition: { opacity: { dealy: Infinity, duration: 2 } },
      }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatDelay: props.delay,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="md:h-[15vw] h-[20vw] shadow-lg shadow-purple-400 hover:brightness-125 border-2 border-solid p-6 max-sm:rounded-xl rounded-3xl flex flex-col justify-center items-center"
    >
      <motion.img
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="lg:h-[8vw] sm:h-[6vw] h-[8vw] flex justify-center object-cover items-center"
        src={props.img}
      ></motion.img>

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <div className="flex justify-center lg:mt-4 mt-2 font-bold xl:text-[1.2vw]  text-[2.2vw]">
          {" "}
          {props.name}
        </div>
        <div className="flex justify-center mt-1 opacity-60 xl:text-[0.7vw]  text-[1.2vw]">
          {props.type}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AtomOfSkill;
