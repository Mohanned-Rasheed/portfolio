import React from "react";
import MicrodetailsImg from "../assets/imgs/microdetails.png";
import { motion } from "framer-motion";
function Experince() {
  return (
    <div
      id="Experince"
      className="my-20 pt-40 flex justify-end max-md:flex-col-reverse max-md:ml-8 border-t border-gray-500"
    >
      <div className="relative">
        <div className=" lg:mx-28 mr-16 xl:w-[93%] w-[90%] shadow-2xl shadow-green-300 border-2 rounded-3xl p-4 flex flex-row ">
          <img className="md:h-40 h-20 rounded-3xl" src={MicrodetailsImg}></img>
          <div className="md:ml-10 ml-5 lg:mt-2 mt-1">
            <div className="  flex justify-between 2xl:w-[750px] lg:w-[550px] md:w-[350px] sm:w-[350px] w-[300px]">
              <div className="lg:mt-2 lg:text-3xl md:text-xl sm:text-base text-[14px] ">
                Micro Details | مايكرو ديتيلز
              </div>
              <div className="md:text-xs sm:text-[10px] text-[10px] absolute top-4 xl:right-0 lg:right-10 sm:right-24 xs:right-20 right-10">
                2022/6 - 2022/8
              </div>
            </div>
            <h1 className="lg:text-2xl md:text-xl sm:text-base text-[7px] mt-2">
              Trinne
            </h1>
            <h1 className="lg:text-xl md:text-lg text-[10px] mt-2">
              Information Techonlogy sector
            </h1>
          </div>
        </div>
      </div>
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mt-14 lg:ml-[12%] mb-14 xl:text-5xl lg:text-4xl text-2xl border-t-2 border-purple-300 pt-4 xl:mr-28 lg:mr-10 mr-8 w-fit font-bold"
      >
        Experince
      </motion.h2>
    </div>
  );
}

export default Experince;
