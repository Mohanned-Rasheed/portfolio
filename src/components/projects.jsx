import React from "react";
import AtomOfProject from "./atomOfProject";
import HealthyReminderImg from "../assets/imgs/Healthyreminder.png";
import FlutterImg from "../assets/imgs/flutter.png";
import ArduinoImg from "../assets/imgs/arduino.png";
import FirebaseImg from "../assets/imgs/firebasepng.png";
import ReactImg from "../assets/imgs/React-icon.svg.png";
import TailwindImg from "../assets/imgs/tailwind.png";
import HtmlImg from "../assets/imgs/Html.png";
import CssImg from "../assets/imgs/css.png";
import JavascriptImg from "../assets/imgs/javascript.png";
import FramerMotion from "../assets/imgs/framer motion.png";
import Mpo from "../assets/imgs/portoflioLogo.png";
import { motion } from "framer-motion";
function Projects() {
  let Projects = [
    {
      title: "My Portfolio",
      img: Mpo,
      date: "12/2023",
      badge: [
        { badge: ReactImg, text: "React", delay: 0 },
        { badge: TailwindImg, text: "Tailwind", delay: 0.5 },
        { badge: FramerMotion, text: "Framer Motion", delay: 1 },
        { badge: HtmlImg, text: "HTML", delay: 1.5 },
        { badge: CssImg, text: "CSS", delay: 2 },
        { badge: JavascriptImg, text: "Javascript", delay: 2.5 },
      ],
    },
    {
      title: "Healthy Reminder",
      img: HealthyReminderImg,
      date: "12/2022 - 2/2023",
      badge: [
        { badge: FlutterImg, text: "Flutter", delay: 0 },
        { badge: ArduinoImg, text: "Arduino", delay: 1 },
        { badge: FirebaseImg, text: "Firebase", delay: 2 },
      ],
    },
  ];

  return (
    <div
      id="Projects"
      className="my-14 pt-40 md:flex border-t border-gray-500 "
    >
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="mt-14 xl:text-5xl lg:text-4xl text-2xl border-t-2 border-purple-300 pt-4 xl:ml-28 lg:ml-10 ml-8 w-fit font-bold "
      >
        Projects
      </motion.h2>
      <div className="">
        {Projects.map((project) => {
          return <AtomOfProject content={project}></AtomOfProject>;
        })}
      </div>
    </div>
  );
}

export default Projects;
