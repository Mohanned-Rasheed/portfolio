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
      viewport={{ once: true }}
      transition={{
        repeat: Infinity,
        duration: 1,
        repeatDelay: props.delay,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="md:h-64 h-32 max-md:w-30 shadow-2xl shadow-indigo-400 hover:brightness-125 border-2 border-solid  p-6 rounded-3xl flex flex-col justify-center items-center"
    >
      <motion.img
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        className="md:h-32 h-12 flex justify-center items-center "
        src={props.img}
      ></motion.img>

      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      >
        <div className="flex justify-center mt-4 font-bold md:text-base  text-[10px]"> {props.name}</div>
        <div className="flex justify-center mt-1 opacity-60  md:text-xs text-[6px]">
          {props.type}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AtomOfSkill;
