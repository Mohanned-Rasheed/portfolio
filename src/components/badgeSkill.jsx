import React from "react";
import { motion } from "framer-motion";
function BadgeSkill(props) {
  return (
    <motion.div
      initial={{ x: 50, y: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 100 }}
      transition={{ duration: 2, delay: props.delay }}
      viewport={{ once: true }}
      className="shadow-md shadow-green-300 lg:px-4 px-2 lg:h-16 h-10 w-fit border border-white rounded-xl flex flex-col justify-center items-center"
    >
      <img className="lg:h-7 h-2 w-fit" src={props.img}></img>
      <div className="lg:text-xs text-[6px] opacity-60 pt-1">{props.text}</div>
    </motion.div>
  );
}

export default BadgeSkill;
