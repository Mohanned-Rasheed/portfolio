import React from "react";
import AtomOfSkill from "./atomOfSkill";
import ReactImg from "../assets/imgs/React-icon.svg.png";
import FirebaseImg from "../assets/imgs/firebasepng.png";
import HtmlImg from "../assets/imgs/Html.png";
import NodeImg from "../assets/imgs/node.png";
import ExpressImg from "../assets/imgs/express.png";
import TailwindImg from "../assets/imgs/tailwind.png";
import JavascriptImg from "../assets/imgs/javascript.png";
import JavaImg from "../assets/imgs/java.png";
import CssImg from "../assets/imgs/css.png";
import PostgreSQL from "../assets/imgs/PostgreSQL.png";
import BootstrapImg from "../assets/imgs/bootstrap.png";
import ArduinoImg from "../assets/imgs/arduino.png";
import FlutterImg from "../assets/imgs/flutter.png";
import GithubImg from "../assets/imgs/github.png";
import GitImg from "../assets/imgs/git.png";
import MongodbImg from "../assets/imgs/mongodb.png";
import FramerMotion from "../assets/imgs/framer motion.png";
import { motion } from "framer-motion";
function Skills() {
  return (
    <div id="Skills" className="my-14 sm:flex">
      <motion.h2
        initial={{ y: -70, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="my-14 md:text-[3vw] text-[5vw] w-fit border-t-2 border-green-200 pt-4 xl:ml-28 md:ml-10 ml-8 w font-bold"
      >
        Skills
      </motion.h2>

      <div className="mt-10 xl:mx-28 md:mx-10 mx-8 grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 grid-cols-4 gap-5">
        <AtomOfSkill
          img={ReactImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="React"
          type="JavaScript library"
        ></AtomOfSkill>
        <AtomOfSkill
          img={FirebaseImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="Firebase"
          type="Cloud Services"
        ></AtomOfSkill>
        <AtomOfSkill
          img={HtmlImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="HTML"
          type="Markup Language"
        ></AtomOfSkill>
        <AtomOfSkill
          img={NodeImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="Node Js"
          type="Runtime Environment"
        ></AtomOfSkill>
        <AtomOfSkill
          img={ExpressImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="Express"
          type="Node js Framework"
        ></AtomOfSkill>
        <AtomOfSkill
          img={TailwindImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="Tailwind"
          type="CSS Framework"
        ></AtomOfSkill>
        <AtomOfSkill
          img={JavascriptImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="JavaScript"
          type="Programming Language"
        ></AtomOfSkill>
        <AtomOfSkill
          img={JavaImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="Java"
          type="Programming Language"
        ></AtomOfSkill>
        <AtomOfSkill
          img={CssImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="CSS"
          type="Web Desgin"
        ></AtomOfSkill>
        <AtomOfSkill
          img={PostgreSQL}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="PostgreSQL"
          type="Database(DBSM)"
        ></AtomOfSkill>
        <AtomOfSkill
          img={BootstrapImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="Bootstrap"
          type="CSS Framework"
        ></AtomOfSkill>
        <AtomOfSkill
          img={ArduinoImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="Arduino"
          type="Electronics Platform"
        ></AtomOfSkill>
        <AtomOfSkill
          img={FlutterImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="Flutter"
          type="Mobile Application"
        ></AtomOfSkill>
        <AtomOfSkill
          img={GitImg}
          initial={10}
          animate={0}
          delay={Math.random() * 6}
          name="Git"
          type="Version Control"
        ></AtomOfSkill>
        <AtomOfSkill
          img={GithubImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="GitHub"
          type="Version Control"
        ></AtomOfSkill>
        <AtomOfSkill
          img={MongodbImg}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="MongoDB"
          type="NoSQL Database"
        ></AtomOfSkill>
        <AtomOfSkill
          img={FramerMotion}
          initial={0}
          animate={10}
          delay={Math.random() * 6}
          name="Framer Motion"
          type="JavaScript library"
        ></AtomOfSkill>
      </div>
    </div>
  );
}

export default Skills;
