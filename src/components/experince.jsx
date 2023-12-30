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
        <div className=" md:ml-28 lg:w-[60vw] w-[70vw] max-md:w-[80vw] shadow-lg shadow-green-300 border-2 rounded-3xl p-4 flex flex-row ">
          <img
            className="md:h-[10vw] h-[15vw] rounded-3xl"
            src={MicrodetailsImg}
          ></img>
          <div className="md:ml-10 ml-5 lg:mt-2 mt-1">
            <div className="  flex justify-between ">
              <div className="lg:mt-2 lg:text-[1.8vw] text-[2vw] ">
                Micro Details | مايكرو ديتيلز
              </div>
              <div className="md:text-[1vw] text-[1.5vw] absolute md:top-4 top-2 md:right-[1vw] ">
                2022/6 - 2022/8
              </div>
            </div>
            <h1 className="lg:text-[1.6vw] text-[2vw] mt-2">Trinne</h1>
            <h1 className="lg:text-[1.6vw] text-[2vw] mt-2">
              Information Techonlogy sector
            </h1>
          </div>
        </div>
      </div>
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
        className=" md:ml-[6vw] mb-14 md:text-[3vw] text-[5vw] border-t-2 border-purple-300 pt-4 xl:mr-28 lg:mr-10 mr-8 w-fit font-bold"
      >
        Experince
      </motion.h2>
    </div>
  );
}

export default Experince;
