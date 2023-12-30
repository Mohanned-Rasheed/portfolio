import React from "react";
import { motion } from "framer-motion";
function BadgeSkill(props) {
  return (
    <motion.div
      initial={{ x: 50, y: 0, opacity: 0 }}
      whileInView={{ x: 0, opacity: 100 }}
      transition={{ duration: 2, delay: props.delay }}
      viewport={{ once: true }}
      className="shadow-md shadow-green-300 lg:px-4  p-5 sm:h-[4vw] max-sm:h-[3vw] border border-white rounded-xl flex flex-col justify-center items-center"
    >
      <img className="h-[1.5vw] max-sm:h-[3vw] w-fit" src={props.img}></img>
      <div className="text-[0.8vw] max-sm:text-[1.5vw] opacity-60 pt-1">{props.text}</div>
    </motion.div>
  );
}

export default BadgeSkill;
